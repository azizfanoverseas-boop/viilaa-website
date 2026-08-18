import { cp, mkdir, readFile, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist-site");

const rootFiles = [
  ".nojekyll",
  "404.html",
  "CNAME",
  "company-profile.html",
  "concept-d.css",
  "concept-d.js",
  "contact.html",
  "i18n.js",
  "index.html",
  "language-integrity.js",
  "map-switcher.js",
  "news-luh2-pressure-optical-reflectivity.html",
  "news.html",
  "our-business.html",
  "periodic-explorer.css",
  "products.html",
  "robots.txt",
  "site.js",
  "sitemap.xml",
  "styles.css",
  "technology-quality.html",
  "technology-translations.js",
];

async function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  const destination = path.join(output, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(source, destination);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const relativePath of rootFiles) await copyFile(relativePath);

const productFiles = [];
for (const entry of await readdir(path.join(root, "products"), { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".html")) {
    const relativePath = path.join("products", entry.name);
    productFiles.push(relativePath);
    await copyFile(relativePath);
  }
}

// Copy only assets referenced by release HTML, CSS, and JavaScript. This keeps
// dated backups, source renders, and unused high-resolution material private.
const assetReferences = new Set();
for (const relativePath of [...rootFiles, ...productFiles]) {
  if (!/\.(?:html|css|js)$/i.test(relativePath)) continue;
  const source = await readFile(path.join(root, relativePath), "utf8");
  for (const match of source.matchAll(/(?:\.\.\/)*assets\/[^\s"'?#)]+/g)) {
    assetReferences.add(match[0].replace(/^(?:\.\.\/)+/, ""));
  }
}

for (const relativePath of [...assetReferences].sort()) {
  await copyFile(relativePath);
}

const outputStats = await stat(output);
if (!outputStats.isDirectory()) throw new Error("Release directory was not created");
console.log(`Clean release created at ${output} with ${assetReferences.size} referenced assets`);
