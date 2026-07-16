(function () {
  const siteScriptSrc = document.currentScript ? document.currentScript.src : document.baseURI;

  function bindDropdownBehavior(menu, toggle) {
    const closeDelay = 260;
    let closeTimer = 0;

    const setOpen = (isOpen) => {
      if (isOpen) {
        document.querySelectorAll(".product-menu.is-open").forEach((otherMenu) => {
          if (otherMenu === menu) return;
          otherMenu.classList.remove("is-open");
          const otherToggle = otherMenu.querySelector(".product-menu-toggle");
          if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
        });

        const languageSwitcher = document.querySelector(".language-switcher.is-open");
        if (languageSwitcher) {
          languageSwitcher.classList.remove("is-open");
          const languageToggle = languageSwitcher.querySelector(".language-switcher-toggle");
          if (languageToggle) languageToggle.setAttribute("aria-expanded", "false");
        }
      }

      menu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    const cancelClose = () => {
      if (!closeTimer) return;
      window.clearTimeout(closeTimer);
      closeTimer = 0;
    };

    const scheduleClose = () => {
      cancelClose();
      closeTimer = window.setTimeout(() => {
        setOpen(false);
        closeTimer = 0;
      }, closeDelay);
    };

    menu.addEventListener("pointerenter", () => {
      cancelClose();
      setOpen(true);
    });
    menu.addEventListener("pointerleave", () => {
      setOpen(true);
      scheduleClose();
    });
    menu.addEventListener("focusin", () => {
      cancelClose();
      setOpen(true);
    });
    menu.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!menu.contains(document.activeElement)) scheduleClose();
      }, 0);
    });
    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      cancelClose();
      setOpen(false);
      toggle.focus();
    });

    toggle.addEventListener("click", () => {
      cancelClose();
      setOpen(!menu.classList.contains("is-open"));
    });
    document.addEventListener("click", (event) => {
      if (menu.contains(event.target)) return;
      cancelClose();
      setOpen(false);
    });
  }

  function initProductMenus() {
    const categoryLinks = [
      ["High-Purity Metals", "high-purity-metals"],
      ["PVD Coating Materials", "pvd-coating-materials"],
      ["CVD Coating Materials", "cvd-coating-materials"],
      ["Functional powders", "metal-powders"],
    ];

    document.querySelectorAll(".nav").forEach((nav, index) => {
      const productLink = Array.from(nav.children).find(
        (element) => element.tagName === "A" && element.textContent.trim() === "Products"
      );
      if (!productLink || nav.querySelector(".product-menu")) return;

      const menu = document.createElement("div");
      const toggle = document.createElement("button");
      const panel = document.createElement("div");
      const panelId = `product-menu-panel-${index}`;
      const productUrl = productLink.href.split("#")[0];

      menu.className = "product-menu";
      toggle.className = "product-menu-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", panelId);
      toggle.setAttribute("aria-label", "Open product categories");

      panel.className = "product-menu-panel";
      panel.id = panelId;
      panel.setAttribute("aria-label", "Product categories");

      categoryLinks.forEach(([label, anchor]) => {
        const link = document.createElement("a");
        link.href = `${productUrl}#${anchor}`;
        link.textContent = label;
        panel.append(link);
      });

      nav.insertBefore(menu, productLink);
      menu.append(productLink, toggle, panel);

      bindDropdownBehavior(menu, toggle);
    });
  }

  initProductMenus();

  function initAboutMenus() {
    document.querySelectorAll(".nav").forEach((nav, index) => {
      const links = Array.from(nav.querySelectorAll("a"));
      const productLink = links.find((link) => link.textContent.trim() === "Products");
      const marketsLink = Array.from(nav.children).find(
        (element) => element.tagName === "A" && element.textContent.trim() === "Markets"
      );
      const aboutLink = Array.from(nav.children).find(
        (element) =>
          element.tagName === "A" &&
          ["Expertise", "About Us"].includes(element.textContent.trim())
      );

      if (!productLink || !aboutLink || nav.querySelector(".about-menu")) return;

      const ourBusinessUrl = new URL("our-business.html", productLink.href).href;
      const technologyUrl = new URL("technology-quality.html", productLink.href).href;
      const menu = document.createElement("div");
      const toggle = document.createElement("button");
      const panel = document.createElement("div");
      const panelId = `about-menu-panel-${index}`;

      aboutLink.textContent = "About Us";
      aboutLink.href = ourBusinessUrl;
      if (window.location.pathname.endsWith("/our-business.html")) {
        aboutLink.classList.add("is-active");
      }
      if (window.location.pathname.endsWith("/technology-quality.html")) {
        aboutLink.classList.add("is-active");
      }

      menu.className = "product-menu about-menu";
      toggle.className = "product-menu-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", panelId);
      toggle.setAttribute("aria-label", "Open About Us menu");

      panel.className = "product-menu-panel";
      panel.id = panelId;
      panel.setAttribute("aria-label", "About Us");

      [
        ["Our Business · 我们的事业", ourBusinessUrl],
        ["Technology & Quality", technologyUrl],
      ].forEach(([label, href]) => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = label;
        panel.append(link);
      });

      nav.insertBefore(menu, aboutLink);
      menu.append(aboutLink, toggle, panel);
      if (marketsLink) nav.insertBefore(menu, marketsLink);

      bindDropdownBehavior(menu, toggle);
    });
  }

  initAboutMenus();

  function initLanguageSystem() {
    if (document.querySelector('script[data-viilaa-i18n]')) return;

    const script = document.createElement("script");
    script.src = new URL("i18n.js", siteScriptSrc).href;
    script.dataset.viilaaI18n = "true";
    document.head.append(script);
  }

  function initCatalogSearch() {
    const input = document.querySelector("#catalog-search-input");
    const clearButton = document.querySelector(".catalog-search-clear");
    const status = document.querySelector("#catalog-search-status");
    const emptyState = document.querySelector(".catalog-empty");
    const cards = Array.from(document.querySelectorAll(".catalog-card"));
    const anchors = Array.from(document.querySelectorAll(".catalog-anchor"));
    if (!input || !clearButton || !status || !emptyState || !cards.length) return;

    const copy = {
      en: {
        placeholder: "Search by product name, formula, category, purity, or specification",
        clear: "Clear",
        results: (count, total, active) => active ? `${count} of ${total} products` : `${total} products`,
        emptyTitle: "No matching products",
        emptyText: "Try another product name, chemical formula, category, or specification.",
        emptyLink: "Request a custom product",
      },
      zh: {
        placeholder: "搜索产品名称、化学式、类别、纯度或规格",
        clear: "清除",
        results: (count, total, active) => active ? `找到 ${count} / ${total} 个产品` : `共 ${total} 个产品`,
        emptyTitle: "未找到匹配产品",
        emptyText: "请尝试其他产品名称、化学式、类别或规格。",
        emptyLink: "咨询定制产品",
      },
      ko: {
        placeholder: "제품명, 화학식, 카테고리, 순도 또는 사양 검색",
        clear: "지우기",
        results: (count, total, active) => active ? `${total}개 중 ${count}개 제품` : `총 ${total}개 제품`,
        emptyTitle: "일치하는 제품이 없습니다",
        emptyText: "다른 제품명, 화학식, 카테고리 또는 사양을 검색해 보세요.",
        emptyLink: "맞춤형 제품 문의",
      },
    };

    const normalizeSearch = (value) => String(value || "")
      .normalize("NFKC")
      .toLocaleLowerCase()
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (digit) => String("₀₁₂₃₄₅₆₇₈₉".indexOf(digit)))
      .replace(/[^\p{L}\p{N}%]+/gu, " ")
      .trim();

    const language = () => document.documentElement.dataset.language || "en";
    const updateCopy = () => {
      const labels = copy[language()] || copy.en;
      input.placeholder = labels.placeholder;
      clearButton.textContent = labels.clear;
      clearButton.setAttribute("aria-label", labels.clear);
      emptyState.querySelector("h2").textContent = labels.emptyTitle;
      emptyState.querySelector("p").textContent = labels.emptyText;
      emptyState.querySelector("a").textContent = labels.emptyLink;
    };

    const cardSearchText = (card) => normalizeSearch([
      card.dataset.searchEn,
      card.dataset.searchZh,
      card.dataset.searchKo,
      card.dataset.line,
      card.textContent,
      card.querySelector("img")?.alt,
      card.querySelector("a[href]")?.getAttribute("href")?.replace(/[\/_-]+/g, " "),
    ].filter(Boolean).join(" "));

    const updateAnchors = () => {
      anchors.forEach((anchor) => {
        let sibling = anchor.nextElementSibling;
        let hasVisibleCard = false;
        while (sibling && !sibling.classList.contains("catalog-anchor")) {
          if (sibling.classList.contains("catalog-card") && !sibling.hidden) hasVisibleCard = true;
          sibling = sibling.nextElementSibling;
        }
        anchor.hidden = !hasVisibleCard;
      });
    };

    const applySearch = () => {
      updateCopy();
      const query = normalizeSearch(input.value);
      const words = query.split(/\s+/).filter(Boolean);
      let count = 0;
      cards.forEach((card) => {
        const haystack = cardSearchText(card);
        const matches = !words.length || words.every((word) => haystack.includes(word));
        card.hidden = !matches;
        if (matches) count += 1;
      });
      updateAnchors();
      emptyState.hidden = count !== 0;
      clearButton.hidden = !query;
      status.textContent = (copy[language()] || copy.en).results(count, cards.length, Boolean(query));

      const url = new URL(window.location.href);
      if (input.value.trim()) url.searchParams.set("q", input.value.trim());
      else url.searchParams.delete("q");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    };

    input.value = new URLSearchParams(window.location.search).get("q") || "";
    input.addEventListener("input", applySearch);
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      input.value = "";
      applySearch();
    });
    clearButton.addEventListener("click", () => {
      input.value = "";
      applySearch();
      input.focus();
    });
    document.addEventListener("site:language-ready", applySearch);
    applySearch();
  }

  initCatalogSearch();

  initLanguageSystem();

  function initBackToTop() {
    if (document.querySelector(".back-to-top")) return;

    const button = document.createElement("button");
    button.className = "back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Back to top");
    button.setAttribute("title", "Back to top");
    button.innerHTML = '<span aria-hidden="true"></span>';
    document.body.append(button);

    const updateVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > 420);
    };

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
  }

  initBackToTop();

  document.querySelectorAll(".catalog-card").forEach((card) => {
    const link = card.querySelector(".catalog-image");
    if (!link) return;

    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      window.location.href = link.href;
    });
  });

  const hero = document.querySelector(".hero");
  const canvas = document.querySelector(".deposition-canvas");
  if (!hero || !canvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d", { alpha: true });
  const particles = [];
  const flowLines = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let lastTime = 0;

  const sceneNames = ["pvd", "cvd", "ai", "aerospace", "robotics"];

  function resize() {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function seed() {
    particles.length = 0;
    flowLines.length = 0;

    const count = width < 700 ? 42 : 96;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: random(width * 0.56, width * 1.08),
        y: random(height * 0.08, height * 0.76),
        vx: random(-16, -62),
        vy: random(8, 38),
        r: random(0.7, 2.2),
        phase: random(0, Math.PI * 2),
        speed: random(0.52, 1.55),
        alpha: random(0.1, 0.56),
      });
    }

    for (let i = 0; i < 8; i += 1) {
      flowLines.push({
        x: random(width * 0.47, width * 0.88),
        y: random(height * 0.18, height * 0.68),
        length: random(width * 0.22, width * 0.48),
        angle: random(-0.5, -0.08),
        phase: random(0, Math.PI * 2),
        speed: random(0.62, 1.25),
      });
    }
  }

  function lineGradient(x1, y1, x2, y2, color, alpha) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, "rgba(57,213,199,0)");
    gradient.addColorStop(0.48, `${color}${alpha})`);
    gradient.addColorStop(1, "rgba(47,127,232,0)");
    return gradient;
  }

  function drawDepositionSystem(time) {
    const cx = width * 0.77;
    const cy = height * 0.68;
    const radius = Math.min(width, height) * 0.17;
    const pulse = Math.sin(time * 0.0011) * 0.04;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1.48, 0.4);
    ctx.rotate(-0.08);

    const ring = ctx.createRadialGradient(0, 0, radius * 0.18, 0, 0, radius * (1 + pulse));
    ring.addColorStop(0, "rgba(57,213,199,0.035)");
    ring.addColorStop(0.62, "rgba(47,127,232,0.085)");
    ring.addColorStop(1, "rgba(57,213,199,0.28)");

    ctx.strokeStyle = ring;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, radius * (1 + pulse), 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(185,217,255,0.11)";
    for (let i = 0.42; i <= 0.78; i += 0.18) {
      ctx.beginPath();
      ctx.arc(0, 0, radius * i, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    const targetX = width * 0.66;
    const targetY = height * 0.34;
    ctx.strokeStyle = "rgba(185,217,255,0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(targetX, targetY, radius * 0.62, radius * 0.17, -0.1, 0, Math.PI * 2);
    ctx.stroke();
  }

  function drawPvdCvdFlow(time) {
    flowLines.forEach((beam) => {
      const sweep = (Math.sin(time * 0.001 * beam.speed + beam.phase) + 1) / 2;
      const alpha = (0.06 + sweep * 0.32).toFixed(3);
      const x2 = beam.x + Math.cos(beam.angle) * beam.length;
      const y2 = beam.y + Math.sin(beam.angle) * beam.length;
      ctx.strokeStyle = lineGradient(beam.x, beam.y, x2, y2, "rgba(57,213,199,", alpha);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(beam.x, beam.y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    const chamberX = width * 0.69;
    const chamberY = height * 0.43;
    ctx.strokeStyle = "rgba(57,213,199,0.16)";
    ctx.lineWidth = 1;
    ctx.strokeRect(chamberX, chamberY, width * 0.16, height * 0.16);
  }

  function drawParticles(dt, time) {
    particles.forEach((particle) => {
      particle.x += particle.vx * dt * particle.speed;
      particle.y += particle.vy * dt * particle.speed;

      if (particle.x < width * 0.38 || particle.y > height * 0.88) {
        particle.x = random(width * 0.67, width * 1.1);
        particle.y = random(height * 0.08, height * 0.48);
      }

      const shimmer = (Math.sin(time * 0.003 + particle.phase) + 1) / 2;
      const alpha = particle.alpha * (0.42 + shimmer * 0.78);
      ctx.fillStyle = `rgba(200,255,248,${alpha})`;
      ctx.shadowColor = "rgba(57,213,199,0.85)";
      ctx.shadowBlur = 11;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  function drawChip(x, y, size, time) {
    const glow = 0.18 + Math.sin(time * 0.0018) * 0.06;
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `rgba(57,213,199,${glow})`;
    ctx.lineWidth = 1.2;
    ctx.strokeRect(-size / 2, -size / 2, size, size);
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-size / 2 - 12, (i * size) / 6);
      ctx.lineTo(-size / 2, (i * size) / 6);
      ctx.moveTo(size / 2, (i * size) / 6);
      ctx.lineTo(size / 2 + 12, (i * size) / 6);
      ctx.moveTo((i * size) / 6, -size / 2 - 12);
      ctx.lineTo((i * size) / 6, -size / 2);
      ctx.moveTo((i * size) / 6, size / 2);
      ctx.lineTo((i * size) / 6, size / 2 + 12);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawAerospace(x, y, scale, time) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.strokeStyle = `rgba(185,217,255,${0.14 + Math.sin(time * 0.0013) * 0.04})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(-55, 18);
    ctx.quadraticCurveTo(12, -24, 82, 0);
    ctx.quadraticCurveTo(18, 26, -55, 18);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(18, 4, 18, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawRobot(x, y, scale, time) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.strokeStyle = `rgba(57,213,199,${0.15 + Math.sin(time * 0.0016) * 0.04})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2);
    ctx.moveTo(12, 8);
    ctx.lineTo(52, 30);
    ctx.arc(58, 33, 10, 0, Math.PI * 2);
    ctx.moveTo(66, 36);
    ctx.lineTo(96, 18);
    ctx.moveTo(96, 18);
    ctx.lineTo(108, 28);
    ctx.moveTo(96, 18);
    ctx.lineTo(110, 10);
    ctx.stroke();
    ctx.restore();
  }

  function drawApplicationNetwork(time) {
    const nodes = [
      { x: width * 0.78, y: height * 0.2, label: "AI", draw: drawChip },
      { x: width * 0.88, y: height * 0.36, label: "AERO", draw: drawAerospace },
      { x: width * 0.72, y: height * 0.53, label: "ROBOT", draw: drawRobot },
    ];
    const hub = { x: width * 0.67, y: height * 0.42 };

    ctx.strokeStyle = "rgba(57,213,199,0.12)";
    ctx.lineWidth = 1;
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.moveTo(hub.x, hub.y);
      ctx.lineTo(node.x, node.y);
      ctx.stroke();
    });

    nodes[0].draw(nodes[0].x, nodes[0].y, Math.min(width, height) * 0.055, time);
    nodes[1].draw(nodes[1].x, nodes[1].y, Math.min(width, height) * 0.001, time);
    nodes[2].draw(nodes[2].x, nodes[2].y, Math.min(width, height) * 0.0012, time);

    ctx.font = "700 11px Inter, Arial, sans-serif";
    ctx.fillStyle = "rgba(226,249,246,0.44)";
    nodes.forEach((node) => ctx.fillText(node.label, node.x + 22, node.y - 18));
  }

  function drawScan(time) {
    const y = height * (0.24 + ((time * 0.00005) % 0.48));
    const gradient = ctx.createLinearGradient(width * 0.46, y, width * 0.98, y);
    gradient.addColorStop(0, "rgba(57,213,199,0)");
    gradient.addColorStop(0.55, "rgba(57,213,199,0.2)");
    gradient.addColorStop(1, "rgba(57,213,199,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.48, y);
    ctx.lineTo(width * 0.98, y - height * 0.12);
    ctx.stroke();
  }

  function drawSceneTitle(time) {
    const index = Math.floor((time / 4200) % sceneNames.length);
    const name = sceneNames[index].toUpperCase();
    ctx.save();
    ctx.font = "800 12px Inter, Arial, sans-serif";
    ctx.fillStyle = "rgba(200,255,248,0.36)";
    ctx.fillText(name, width * 0.62, height * 0.82);
    ctx.restore();
  }

  function draw(time) {
    const dt = Math.min((time - lastTime) / 1000 || 0.016, 0.04);
    lastTime = time;
    ctx.clearRect(0, 0, width, height);
    drawDepositionSystem(time);
    drawPvdCvdFlow(time);
    drawApplicationNetwork(time);
    drawParticles(dt, time);
    drawScan(time);
    drawSceneTitle(time);
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);

  if (reducedMotion) {
    drawDepositionSystem(0);
    drawPvdCvdFlow(0);
    drawApplicationNetwork(0);
    return;
  }

  requestAnimationFrame(draw);
})();
