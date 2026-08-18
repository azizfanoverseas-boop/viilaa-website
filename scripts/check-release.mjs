import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist-site");
const failures = [];

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const item = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(item));
    else files.push(item);
  }
  return files;
}

for (const file of (await walk(root)).filter((item) => item.endsWith(".html"))) {
  const html = await readFile(file, "utf8");
  const relative = path.relative(root, file);
  if (path.basename(file) !== "404.html") {
    for (const [label, expression] of [
      ["title", /<title>.+?<\/title>/is],
      ["description", /<meta\s+name=["']description["']/i],
      ["canonical", /<link\s+rel=["']canonical["']/i],
      ["h1", /<h1\b/i],
    ]) {
      if (!expression.test(html)) failures.push(`${relative}: missing ${label}`);
    }
  }

  for (const match of html.matchAll(/(?:src|href)=["']([^"'#?]+)/gi)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(target)) continue;
    const resolved = target.startsWith("/")
      ? path.join(root, target.slice(1))
      : path.resolve(path.dirname(file), target);
    try { await access(resolved); }
    catch { failures.push(`${relative}: missing ${target}`); }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gis)) {
    const tag = match[0];
    if (!/\bwidth=["']\d+/i.test(tag) || !/\bheight=["']\d+/i.test(tag) || !/\balt=["']/i.test(tag)) {
      failures.push(`${relative}: incomplete image attributes`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Release validation passed");
