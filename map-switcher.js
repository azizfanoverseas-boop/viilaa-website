(function () {
  "use strict";

  const frame = document.querySelector("[data-map-frame]");
  if (!frame) return;

  const buttons = Array.from(document.querySelectorAll("[data-map-provider]"));
  const openLink = document.querySelector("[data-map-open]");
  const status = document.querySelector("[data-map-status]");
  const preferenceKey = "viilaa-map-provider";
  const providers = {
    baidu: {
      open: "https://j.map.baidu.com/a5/JqvM",
      embed: "https://map.baidu.com/?shareurl=1&poiShareUid=a42acd0411e61717932ca34c",
    },
    google: {
      open: "https://maps.app.goo.gl/fskQtcS2LQGVzq196",
      embed: "https://www.google.com/maps?q=Longhua%20Industrial%20Park%2C%20Nankang%20District%2C%20Ganzhou%2C%20Jiangxi&output=embed",
    },
  };

  const copy = {
    en: {
      chooseMap: "Choose map",
      baidu: "Baidu Maps",
      google: "Google Maps",
      openBaidu: "Open Baidu Maps",
      openGoogle: "Open Google Maps",
      autoBaidu: "Baidu Maps was selected for your region. You can switch at any time.",
      autoGoogle: "Google Maps was selected for your region. You can switch at any time.",
      manualBaidu: "Baidu Maps selected. Your choice will be remembered.",
      manualGoogle: "Google Maps selected. Your choice will be remembered.",
      titleBaidu: "Jiangxi Viilaa Metal Materials location on Baidu Maps",
      titleGoogle: "Jiangxi Viilaa Metal Materials location on Google Maps",
    },
    zh: {
      chooseMap: "选择地图",
      baidu: "百度地图",
      google: "Google 地图",
      openBaidu: "打开百度地图",
      openGoogle: "打开 Google 地图",
      autoBaidu: "已根据您所在地区选择百度地图，您可以随时切换。",
      autoGoogle: "已根据您所在地区选择 Google 地图，您可以随时切换。",
      manualBaidu: "已选择百度地图，并会记住您的选择。",
      manualGoogle: "已选择 Google 地图，并会记住您的选择。",
      titleBaidu: "江西中锡金属材料有限公司百度地图位置",
      titleGoogle: "江西中锡金属材料有限公司 Google 地图位置",
    },
    ko: {
      chooseMap: "지도 선택",
      baidu: "바이두 지도",
      google: "Google 지도",
      openBaidu: "바이두 지도 열기",
      openGoogle: "Google 지도 열기",
      autoBaidu: "현재 지역에 맞춰 바이두 지도를 선택했습니다. 언제든 변경할 수 있습니다.",
      autoGoogle: "현재 지역에 맞춰 Google 지도를 선택했습니다. 언제든 변경할 수 있습니다.",
      manualBaidu: "바이두 지도를 선택했습니다. 선택 사항이 저장됩니다.",
      manualGoogle: "Google 지도를 선택했습니다. 선택 사항이 저장됩니다.",
      titleBaidu: "바이두 지도에서 Jiangxi Viilaa Metal Materials 위치",
      titleGoogle: "Google 지도에서 Jiangxi Viilaa Metal Materials 위치",
    },
  };

  let activeProvider = "google";
  let selectionMode = "auto";

  function language() {
    return document.documentElement.dataset.language || "en";
  }

  function labels() {
    return copy[language()] || copy.en;
  }

  function updateText() {
    const text = labels();
    document.querySelector(".map-provider-switch")?.setAttribute("aria-label", text.chooseMap);
    buttons.forEach((button) => {
      const provider = button.dataset.mapProvider;
      button.textContent = text[provider];
      button.setAttribute("aria-pressed", String(provider === activeProvider));
    });
    openLink.textContent = activeProvider === "baidu" ? text.openBaidu : text.openGoogle;
    const iframe = frame.querySelector("iframe");
    if (iframe) iframe.title = activeProvider === "baidu" ? text.titleBaidu : text.titleGoogle;
    status.textContent = selectionMode === "manual"
      ? text[activeProvider === "baidu" ? "manualBaidu" : "manualGoogle"]
      : text[activeProvider === "baidu" ? "autoBaidu" : "autoGoogle"];
  }

  function render(provider, mode) {
    if (!providers[provider]) return;
    activeProvider = provider;
    selectionMode = mode;
    const text = labels();
    const iframe = document.createElement("iframe");
    iframe.src = providers[provider].embed;
    iframe.title = provider === "baidu" ? text.titleBaidu : text.titleGoogle;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    frame.replaceChildren(iframe);
    openLink.href = providers[provider].open;
    buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.mapProvider === provider));
    updateText();
  }

  function fallbackProvider() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const languages = navigator.languages || [navigator.language || ""];
    return timeZone === "Asia/Shanghai" || languages.some((item) => /^zh-CN/i.test(item)) ? "baidu" : "google";
  }

  async function detectProvider() {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);
    try {
      const response = await fetch("https://api.country.is/", {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Country lookup failed");
      const result = await response.json();
      return result.country === "CN" ? "baidu" : "google";
    } catch (_) {
      return fallbackProvider();
    } finally {
      window.clearTimeout(timeout);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const provider = button.dataset.mapProvider;
      window.localStorage.setItem(preferenceKey, provider);
      render(provider, "manual");
    });
  });

  document.addEventListener("site:language-ready", updateText);

  const saved = window.localStorage.getItem(preferenceKey);
  if (providers[saved]) {
    render(saved, "manual");
  } else {
    const immediateProvider = fallbackProvider();
    render(immediateProvider, "auto");
    detectProvider().then((provider) => {
      if (!window.localStorage.getItem(preferenceKey) && provider !== activeProvider) {
        render(provider, "auto");
      }
    });
  }
})();
