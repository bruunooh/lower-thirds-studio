const STORAGE_KEY = "lowerThirdStudio.v1";
const THEME_KEY = "lowerThirdStudio.interfaceTheme";
const interfaceThemes = new Set(["default", "midnight", "ember"]);

const defaultState = {
  settings: {
    minDelay: 8,
    maxDelay: 22
  },
  selectedId: "ig",
  thirds: [
    {
      id: "ig",
      title: "Folge uns live",
      subtitle: "Behind the scenes, Clips und Updates",
      platform: "Instagram",
      handle: "@deinname",
      style: "glass",
      animation: "slide",
      position: "left",
      icon: "platform",
      customIcon: "",
      showPlatform: true,
      showTitle: true,
      showSubtitle: true,
      showHandle: true,
      borderWidth: 2,
      borderStyle: "solid",
      borderAnimation: "none",
      accent: "#35c6a6",
      accentAlpha: 100,
      accentColorMode: "solid",
      accentGradientPreset: "custom",
      accentGradientFrom: "#35c6a6",
      accentGradientTo: "#f5bf54",
      textColor: "#ffffff",
      textColorMode: "solid",
      textGradientPreset: "custom",
      textGradientFrom: "#ffffff",
      textGradientTo: "#d7fff6",
      surfaceAlpha: 92,
      shadowEnabled: true,
      shadowAlpha: 45,
      shadowBlur: 30,
      iconBgEnabled: true,
      iconBgColor: "#35c6a6",
      iconBgColorMode: "solid",
      iconBgGradientPreset: "custom",
      iconBgGradientFrom: "#35c6a6",
      iconBgGradientTo: "#f5bf54",
      iconBgAlpha: 100,
      iconScale: 76,
      fontFamily: "Inter",
      fontSize: 38,
      fontWeight: 900,
      letterSpacing: 0,
      textTransform: "none",
      handleColor: "#35c6a6",
      handleColorMode: "solid",
      handleGradientPreset: "custom",
      handleGradientFrom: "#35c6a6",
      handleGradientTo: "#f5bf54",
      handleFontSize: 22,
      handleFontWeight: 800,
      handleLetterSpacing: 0,
      duration: 7,
      weight: 3
    },
    {
      id: "yt",
      title: "Neues Video online",
      subtitle: "Highlights nach dem Stream",
      platform: "YouTube",
      handle: "youtube.com/@deinname",
      style: "solid",
      animation: "wipe",
      position: "left",
      icon: "platform",
      customIcon: "",
      showPlatform: true,
      showTitle: true,
      showSubtitle: true,
      showHandle: true,
      borderWidth: 2,
      borderStyle: "glow",
      borderAnimation: "pulse",
      accent: "#f05d5e",
      accentAlpha: 100,
      accentColorMode: "solid",
      accentGradientPreset: "custom",
      accentGradientFrom: "#f05d5e",
      accentGradientTo: "#f5bf54",
      textColor: "#ffffff",
      textColorMode: "solid",
      textGradientPreset: "custom",
      textGradientFrom: "#ffffff",
      textGradientTo: "#ffe8e8",
      surfaceAlpha: 94,
      shadowEnabled: true,
      shadowAlpha: 45,
      shadowBlur: 30,
      iconBgEnabled: true,
      iconBgColor: "#f05d5e",
      iconBgColorMode: "solid",
      iconBgGradientPreset: "custom",
      iconBgGradientFrom: "#f05d5e",
      iconBgGradientTo: "#f5bf54",
      iconBgAlpha: 100,
      iconScale: 76,
      fontFamily: "Montserrat",
      fontSize: 38,
      fontWeight: 900,
      letterSpacing: 0,
      textTransform: "none",
      handleColor: "#f05d5e",
      handleColorMode: "solid",
      handleGradientPreset: "custom",
      handleGradientFrom: "#f05d5e",
      handleGradientTo: "#f5bf54",
      handleFontSize: 22,
      handleFontWeight: 800,
      handleLetterSpacing: 0,
      duration: 8,
      weight: 2
    },
    {
      id: "tw",
      title: "Sag Hallo im Chat",
      subtitle: "Community, Fragen und Live-Updates",
      platform: "Twitch",
      handle: "twitch.tv/deinname",
      style: "stripe",
      animation: "pop",
      position: "right",
      icon: "platform",
      customIcon: "",
      showPlatform: true,
      showTitle: true,
      showSubtitle: true,
      showHandle: true,
      borderWidth: 2,
      borderStyle: "dashed",
      borderAnimation: "march",
      accent: "#b68cff",
      accentAlpha: 100,
      accentColorMode: "solid",
      accentGradientPreset: "custom",
      accentGradientFrom: "#b68cff",
      accentGradientTo: "#35c6a6",
      textColor: "#ffffff",
      textColorMode: "solid",
      textGradientPreset: "custom",
      textGradientFrom: "#ffffff",
      textGradientTo: "#eee7ff",
      surfaceAlpha: 94,
      shadowEnabled: true,
      shadowAlpha: 45,
      shadowBlur: 30,
      iconBgEnabled: true,
      iconBgColor: "#b68cff",
      iconBgColorMode: "solid",
      iconBgGradientPreset: "custom",
      iconBgGradientFrom: "#b68cff",
      iconBgGradientTo: "#35c6a6",
      iconBgAlpha: 100,
      iconScale: 76,
      fontFamily: "Poppins",
      fontSize: 38,
      fontWeight: 900,
      letterSpacing: 0,
      textTransform: "none",
      handleColor: "#b68cff",
      handleColorMode: "solid",
      handleGradientPreset: "custom",
      handleGradientFrom: "#b68cff",
      handleGradientTo: "#35c6a6",
      handleFontSize: 22,
      handleFontWeight: 800,
      handleLetterSpacing: 0,
      duration: 6,
      weight: 2
    }
  ]
};

const iconMap = {
  camera: "◉",
  play: "▶",
  chat: "#",
  music: "♪",
  link: "↗",
  star: "★",
  heart: "♥",
  bell: "!",
  at: "@",
  hash: "#",
  bolt: "⚡"
};

const platformLogoSources = {
  Instagram: [
    "https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png",
    "https://www.instagram.com/favicon.ico"
  ],
  YouTube: [
    "https://www.youtube.com/s/desktop/f506bd45/img/favicon_144x144.png",
    "https://www.youtube.com/favicon.ico"
  ],
  Twitch: [
    "https://www.twitch.tv/favicon-32-e29e246c157142c94346.png",
    "https://www.twitch.tv/favicon.ico"
  ],
  TikTok: [
    "https://www.tiktok.com/favicon.ico"
  ],
  Web: [
    "https://www.google.com/favicon.ico"
  ],
  Podcast: [
    "https://www.apple.com/favicon.ico"
  ]
};

const platformThemes = {
  Instagram: ["#f58529", "#dd2a7b"],
  YouTube: ["#ff0033", "#ff5f57"],
  Twitch: ["#9146ff", "#b68cff"],
  TikTok: ["#00f2ea", "#ff0050"],
  Web: ["#3b82f6", "#35c6a6"],
  Podcast: ["#a855f7", "#f97316"]
};

const sectionDefaults = {
  content: {
    title: "Folge uns live",
    subtitle: "Behind the scenes, Clips und Updates",
    platform: "Instagram",
    handle: "@deinname",
    showPlatform: true,
    showTitle: true,
    showSubtitle: true,
    showHandle: true
  },
  appearance: {
    style: "glass",
    animation: "slide",
    position: "left",
    icon: "platform",
    customIcon: "",
    accent: "#35c6a6",
    accentAlpha: 100,
    accentColorMode: "solid",
    accentGradientPreset: "custom",
    accentGradientFrom: "#35c6a6",
    accentGradientTo: "#f5bf54",
    textColor: "#ffffff",
    textColorMode: "solid",
    textGradientPreset: "custom",
    textGradientFrom: "#ffffff",
    textGradientTo: "#d7fff6",
    iconBgEnabled: true,
    iconBgColor: "#35c6a6",
    iconBgColorMode: "solid",
    iconBgGradientPreset: "custom",
    iconBgGradientFrom: "#35c6a6",
    iconBgGradientTo: "#f5bf54",
    iconBgAlpha: 100,
    iconScale: 76,
    surfaceAlpha: 92,
    shadowEnabled: true,
    shadowAlpha: 45,
    shadowBlur: 30
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 38,
    fontWeight: 900,
    letterSpacing: 0,
    textTransform: "none",
    handleColor: "#35c6a6",
    handleColorMode: "solid",
    handleGradientPreset: "custom",
    handleGradientFrom: "#35c6a6",
    handleGradientTo: "#f5bf54",
    handleFontSize: 22,
    handleFontWeight: 800,
    handleLetterSpacing: 0
  },
  border: {
    borderWidth: 2,
    borderStyle: "solid",
    borderAnimation: "none"
  },
  timing: {
    duration: 7,
    weight: 3,
    minDelay: 8,
    maxDelay: 22
  }
};

const gradientPresets = {
  sunset: ["#ff7a18", "#d62976"],
  ocean: ["#00c6ff", "#0072ff"],
  neon: ["#39ff14", "#ff00f5"],
  sports: ["#f5bf54", "#101114"],
  gold: ["#f8e08e", "#b7791f"],
  ice: ["#e0f7ff", "#69d2ff"]
};

let state = normalizeState(loadState());
let previewTimer = null;

const els = {
  list: document.querySelector("#thirdList"),
  template: document.querySelector("#thirdTemplate"),
  add: document.querySelector("#addThirdButton"),
  studioTab: document.querySelector("#studioTabButton"),
  licenseTab: document.querySelector("#licenseTabButton"),
  studioView: document.querySelector("#studioView"),
  licenseView: document.querySelector("#licenseView"),
  interfaceTheme: document.querySelector("#interfaceThemeInput"),
  save: document.querySelector("#saveButton"),
  topCopyLink: document.querySelector("#topCopyLinkButton"),
  del: document.querySelector("#deleteButton"),
  preview: document.querySelector("#previewButton"),
  stage: document.querySelector("#previewStage"),
  playerLink: document.querySelector("#playerLinkInput"),
  copyLink: document.querySelector("#copyLinkButton"),
  triggerId: document.querySelector("#triggerIdInput"),
  triggerLink: document.querySelector("#triggerLinkInput"),
  copyTriggerLink: document.querySelector("#copyTriggerLinkButton"),
  customIcon: document.querySelector("#customIconInput"),
  fontPreview: document.querySelector("#fontPreview"),
  borderControls: document.querySelectorAll("[data-border-control]"),
  sectionResetButtons: document.querySelectorAll("[data-reset-section]"),
  minDelayValue: document.querySelector("#minDelayValue"),
  maxDelayValue: document.querySelector("#maxDelayValue"),
  minDelay: document.querySelector("#minDelayInput"),
  maxDelay: document.querySelector("#maxDelayInput"),
  fields: {
    title: document.querySelector("#titleInput"),
    subtitle: document.querySelector("#subtitleInput"),
    platform: document.querySelector("#platformInput"),
    handle: document.querySelector("#handleInput"),
    style: document.querySelector("#styleInput"),
    animation: document.querySelector("#animationInput"),
    position: document.querySelector("#positionInput"),
    icon: document.querySelector("#iconInput"),
    iconBgEnabled: document.querySelector("#iconBgEnabledInput"),
    iconBgColor: document.querySelector("#iconBgColorInput"),
    iconBgColorMode: document.querySelector("#iconBgColorModeInput"),
    iconBgGradientPreset: document.querySelector("#iconBgGradientPresetInput"),
    iconBgGradientFrom: document.querySelector("#iconBgGradientFromInput"),
    iconBgGradientTo: document.querySelector("#iconBgGradientToInput"),
    iconBgAlpha: document.querySelector("#iconBgAlphaInput"),
    iconScale: document.querySelector("#iconScaleInput"),
    accent: document.querySelector("#accentInput"),
    accentAlpha: document.querySelector("#accentAlphaInput"),
    accentColorMode: document.querySelector("#accentColorModeInput"),
    accentGradientPreset: document.querySelector("#accentGradientPresetInput"),
    accentGradientFrom: document.querySelector("#accentGradientFromInput"),
    accentGradientTo: document.querySelector("#accentGradientToInput"),
    textColor: document.querySelector("#textColorInput"),
    textColorMode: document.querySelector("#textColorModeInput"),
    textGradientPreset: document.querySelector("#textGradientPresetInput"),
    textGradientFrom: document.querySelector("#textGradientFromInput"),
    textGradientTo: document.querySelector("#textGradientToInput"),
    surfaceAlpha: document.querySelector("#surfaceAlphaInput"),
    shadowEnabled: document.querySelector("#shadowEnabledInput"),
    shadowAlpha: document.querySelector("#shadowAlphaInput"),
    shadowBlur: document.querySelector("#shadowBlurInput"),
    fontFamily: document.querySelector("#fontFamilyInput"),
    fontSize: document.querySelector("#fontSizeInput"),
    fontWeight: document.querySelector("#fontWeightInput"),
    letterSpacing: document.querySelector("#letterSpacingInput"),
    textTransform: document.querySelector("#textTransformInput"),
    handleColor: document.querySelector("#handleColorInput"),
    handleColorMode: document.querySelector("#handleColorModeInput"),
    handleGradientPreset: document.querySelector("#handleGradientPresetInput"),
    handleGradientFrom: document.querySelector("#handleGradientFromInput"),
    handleGradientTo: document.querySelector("#handleGradientToInput"),
    handleFontSize: document.querySelector("#handleFontSizeInput"),
    handleFontWeight: document.querySelector("#handleFontWeightInput"),
    handleLetterSpacing: document.querySelector("#handleLetterSpacingInput"),
    borderWidth: document.querySelector("#borderWidthInput"),
    borderStyle: document.querySelector("#borderStyleInput"),
    borderAnimation: document.querySelector("#borderAnimationInput"),
    duration: document.querySelector("#durationInput"),
    weight: document.querySelector("#weightInput")
  },
  toggles: {
    showPlatform: document.querySelector("#showPlatformInput"),
    showTitle: document.querySelector("#showTitleInput"),
    showSubtitle: document.querySelector("#showSubtitleInput"),
    showHandle: document.querySelector("#showHandleInput")
  }
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.thirds) && stored.thirds.length) {
      return stored;
    }
  } catch (error) {
    console.warn("Could not load settings", error);
  }
  return structuredClone(defaultState);
}

function loadInterfaceTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return interfaceThemes.has(stored) ? stored : "default";
}

function applyInterfaceTheme(theme) {
  const nextTheme = interfaceThemes.has(theme) ? theme : "default";
  document.body.dataset.interfaceTheme = nextTheme;
  if (els.interfaceTheme) els.interfaceTheme.value = nextTheme;
  localStorage.setItem(THEME_KEY, nextTheme);
}

function normalizeState(value) {
  const next = structuredClone(value);
  next.settings = {
    ...defaultState.settings,
    ...(next.settings || {})
  };
  next.thirds = next.thirds.map((third, index) => ({
    ...defaultState.thirds[index % defaultState.thirds.length],
    ...third,
    autoEnabled: third.autoEnabled !== false,
    icon: third.icon || "platform",
    customIcon: third.customIcon || "",
    showPlatform: third.showPlatform !== false,
    showTitle: third.showTitle !== false,
    showSubtitle: third.showSubtitle !== false,
    showHandle: third.showHandle !== false,
    borderWidth: Number.isFinite(Number(third.borderWidth)) ? Number(third.borderWidth) : 0,
    borderStyle: third.borderStyle || "none",
    borderAnimation: third.borderAnimation || "none",
    accentAlpha: Number.isFinite(Number(third.accentAlpha)) ? Number(third.accentAlpha) : 100,
    accentColorMode: third.accentColorMode || "solid",
    accentGradientPreset: third.accentGradientPreset || "custom",
    accentGradientFrom: third.accentGradientFrom || third.accent || "#35c6a6",
    accentGradientTo: third.accentGradientTo || "#f5bf54",
    textColorMode: third.textColorMode || "solid",
    textGradientPreset: third.textGradientPreset || "custom",
    textGradientFrom: third.textGradientFrom || third.textColor || "#ffffff",
    textGradientTo: third.textGradientTo || "#d7fff6",
    surfaceAlpha: Number.isFinite(Number(third.surfaceAlpha)) ? Number(third.surfaceAlpha) : 92,
    shadowEnabled: third.shadowEnabled !== false,
    shadowAlpha: Number.isFinite(Number(third.shadowAlpha)) ? Number(third.shadowAlpha) : 45,
    shadowBlur: Number.isFinite(Number(third.shadowBlur)) ? Number(third.shadowBlur) : 30,
    iconBgEnabled: third.iconBgEnabled !== false,
    iconBgColor: third.iconBgColor || third.accent || "#35c6a6",
    iconBgColorMode: third.iconBgColorMode || "solid",
    iconBgGradientPreset: third.iconBgGradientPreset || "custom",
    iconBgGradientFrom: third.iconBgGradientFrom || third.iconBgColor || third.accent || "#35c6a6",
    iconBgGradientTo: third.iconBgGradientTo || "#f5bf54",
    iconBgAlpha: Number.isFinite(Number(third.iconBgAlpha)) ? Number(third.iconBgAlpha) : 100,
    iconScale: Number.isFinite(Number(third.iconScale)) ? Number(third.iconScale) : 76,
    fontFamily: third.fontFamily || "Inter",
    fontSize: Number.isFinite(Number(third.fontSize)) ? Number(third.fontSize) : 38,
    fontWeight: Number.isFinite(Number(third.fontWeight)) ? Number(third.fontWeight) : 900,
    letterSpacing: Number.isFinite(Number(third.letterSpacing)) ? Number(third.letterSpacing) : 0,
    textTransform: third.textTransform || "none",
    handleColor: third.handleColor || third.accent || "#35c6a6",
    handleColorMode: third.handleColorMode || "solid",
    handleGradientPreset: third.handleGradientPreset || "custom",
    handleGradientFrom: third.handleGradientFrom || third.accent || "#35c6a6",
    handleGradientTo: third.handleGradientTo || "#f5bf54",
    handleFontSize: Number.isFinite(Number(third.handleFontSize)) ? Number(third.handleFontSize) : 22,
    handleFontWeight: Number.isFinite(Number(third.handleFontWeight)) ? Number(third.handleFontWeight) : 800,
    handleLetterSpacing: Number.isFinite(Number(third.handleLetterSpacing)) ? Number(third.handleLetterSpacing) : 0
  }));
  next.selectedId = next.selectedId || next.thirds[0].id;
  return next;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
}

function selectedThird() {
  return state.thirds.find((third) => third.id === state.selectedId) || state.thirds[0];
}

function renderList() {
  els.list.innerHTML = "";
  state.thirds.forEach((third) => {
    const node = els.template.content.firstElementChild.cloneNode(true);
    const theme = platformTheme(third);
    node.style.setProperty("--third-platform-color", theme.from);
    node.style.setProperty("--third-platform-color-2", theme.to);
    node.style.setProperty("--third-platform-rgb", `${theme.rgb.r} ${theme.rgb.g} ${theme.rgb.b}`);
    node.style.setProperty("--third-platform-gradient", `linear-gradient(135deg, ${theme.from}, ${theme.to})`);
    node.classList.toggle("active", third.id === state.selectedId);
    node.classList.toggle("manual-only", third.autoEnabled === false || Number(third.weight || 0) === 0);
    node.querySelector(".third-item-title").textContent = third.title || third.handle || "Unbenannt";
    node.querySelector(".third-item-meta").textContent = `${third.platform || "Ohne Plattform"} · ${third.animation} · ${third.duration}s · ${third.autoEnabled === false || Number(third.weight || 0) === 0 ? "nur Webhook" : "automatisch"}`;
    node.querySelector(".third-item-id").textContent = `ID: ${third.id}`;
    node.querySelector(".third-auto-toggle").checked = third.autoEnabled !== false && Number(third.weight || 0) !== 0;
    node.querySelector(".third-select").addEventListener("click", () => {
      state.selectedId = third.id;
      render();
    });
    node.querySelector(".third-auto-toggle").addEventListener("change", (event) => {
      third.autoEnabled = event.currentTarget.checked;
      saveState();
      renderList();
      updatePlayerLink();
    });
    node.querySelector(".third-copy-trigger").addEventListener("click", async () => {
      await copyText(buildTriggerLink(third.id));
    });
    els.list.append(node);
  });
}

function platformTheme(third) {
  const preset = platformThemes[third.platform || ""] || [third.accent || "#35c6a6", third.handleColor || third.accent || "#f5bf54"];
  return {
    from: preset[0],
    to: preset[1] || preset[0],
    rgb: hexToRgb(preset[0])
  };
}

function renderForm() {
  const third = selectedThird();
  if (!third) return;
  Object.entries(els.fields).forEach(([key, input]) => {
    if (input.type === "checkbox") {
      input.checked = third[key] !== false;
    } else {
      input.value = third[key] ?? "";
    }
  });
  Object.entries(els.toggles).forEach(([key, input]) => {
    input.checked = third[key] !== false;
  });
  els.customIcon.value = "";
  els.minDelay.value = state.settings.minDelay;
  els.maxDelay.value = state.settings.maxDelay;
  els.triggerId.value = third.id;
  els.del.disabled = state.thirds.length <= 1;
  updateDelayLabels();
  updateFontPreview();
  updateBorderVisibility();
  updateConditionalOptions();
  updatePlayerLink();
}

function createLowerThird(third) {
  const node = document.createElement("article");
  node.className = `lower-third style-${third.style} anim-${third.animation} pos-${third.position} border-${third.borderStyle || "none"} frame-${third.borderAnimation || "none"} ${third.textColorMode === "gradient" ? "text-gradient" : ""} ${third.handleColorMode === "gradient" ? "handle-gradient" : ""} ${third.shadowEnabled !== false ? "shadow-after-in" : ""}`;
  const accentRgb = hexToRgb(third.accent || "#35c6a6");
  const accentAlpha = clamp(Number(third.accentAlpha ?? 100), 10, 100) / 100;
  node.style.setProperty("--accent", buildPaint(third, "accent", accentAlpha));
  node.style.setProperty("--accent-solid", third.accent || "#35c6a6");
  node.style.setProperty("--accent-rgb", `${accentRgb.r} ${accentRgb.g} ${accentRgb.b}`);
  node.style.setProperty("--copy", third.textColor || "#ffffff");
  node.style.setProperty("--copy-bg", buildPaint(third, "text", 1));
  node.style.setProperty("--handle-color", third.handleColor || third.accent || "#35c6a6");
  node.style.setProperty("--handle-bg", buildPaint(third, "handle", 1));
  node.style.setProperty("--frame-width", `${Math.max(0, Number(third.borderWidth || 0))}px`);
  node.style.setProperty("--surface-alpha", `${clamp(Number(third.surfaceAlpha ?? 92), 10, 100) / 100}`);
  node.style.setProperty("--shadow-alpha", `${clamp(Number(third.shadowAlpha ?? 45), 0, 90) / 100}`);
  node.style.setProperty("--shadow-blur", `${clamp(Number(third.shadowBlur ?? 30), 8, 80)}px`);
  node.style.setProperty("--lt-font", `"${third.fontFamily || "Inter"}", Inter, ui-sans-serif, system-ui, sans-serif`);
  node.style.setProperty("--title-size", `${clamp(Number(third.fontSize ?? 38), 22, 64)}px`);
  node.style.setProperty("--font-weight", `${clamp(Number(third.fontWeight ?? 900), 400, 900)}`);
  node.style.setProperty("--letter-spacing", `${clamp(Number(third.letterSpacing ?? 0), 0, 6)}px`);
  node.style.setProperty("--text-transform", third.textTransform || "none");
  node.style.setProperty("--handle-size", `${clamp(Number(third.handleFontSize ?? 22), 12, 42)}px`);
  node.style.setProperty("--handle-weight", `${clamp(Number(third.handleFontWeight ?? 800), 400, 900)}`);
  node.style.setProperty("--handle-letter-spacing", `${clamp(Number(third.handleLetterSpacing ?? 0), 0, 6)}px`);
  node.style.setProperty("--icon-bg", buildPaint(third, "iconBg", clamp(Number(third.iconBgAlpha ?? 100), 0, 100) / 100));
  node.style.setProperty("--icon-scale", `${clamp(Number(third.iconScale ?? 76), 40, 115)}%`);
  node.append(createIcon(third), createCopy(third));
  return node;
}

function createIcon(third) {
  const icon = document.createElement("div");
  icon.className = "lt-icon";
  if (third.iconBgEnabled === false) {
    icon.classList.add("no-bg");
  }

  if (third.icon === "custom" && third.customIcon) {
    icon.append(imageNode(third.customIcon, "Eigenes Symbol"));
    return icon;
  }

  if (third.icon === "platform") {
    const platform = third.platform || "Web";
    const key = platform.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const image = imageNode(`assets/logos/${key}.svg`, `${platform} Logo`);
    let fallbackIndex = 0;
    image.onerror = () => {
      const fallbacks = platformLogoSources[platform] || platformLogoSources.Web;
      const fallback = fallbacks[fallbackIndex];
      fallbackIndex += 1;
      if (fallback) {
        image.src = fallback;
      } else {
        icon.textContent = iconMap.link;
      }
    };
    icon.append(image);
    return icon;
  }

  icon.textContent = iconMap[third.icon] || "★";
  return icon;
}

function imageNode(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  return image;
}

function createCopy(third) {
  const copy = document.createElement("div");
  copy.className = "lt-copy";
  if (third.showPlatform !== false) addTextLine(copy, "lt-platform", third.platform);
  if (third.showTitle !== false) addTextLine(copy, "lt-title", third.title);
  if (third.showSubtitle !== false) addTextLine(copy, "lt-subtitle", third.subtitle);
  if (third.showHandle !== false) addTextLine(copy, "lt-handle", third.handle);
  return copy;
}

function addTextLine(parent, className, value) {
  const text = String(value ?? "").trim();
  if (!text) return;
  const line = document.createElement("div");
  line.className = className;
  line.textContent = text;
  parent.append(line);
}

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "");
  const value = clean.length === 3
    ? clean.split("").map((char) => char + char).join("")
    : clean.padEnd(6, "0").slice(0, 6);
  const number = Number.parseInt(value, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255
  };
}

function colorToRgba(hex, alpha) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function buildPaint(third, type, alpha = 1) {
  const mode = third[`${type}ColorMode`] || "solid";
  const base = type === "text" ? third.textColor : type === "handle" ? third.handleColor : type === "iconBg" ? third.iconBgColor : third.accent;
  if (mode !== "gradient") return type === "accent" ? colorToRgba(base || "#35c6a6", alpha) : (base || "#ffffff");

  const preset = third[`${type}GradientPreset`] || "custom";
  const presetColors = gradientPresets[preset];
  const from = presetColors?.[0] || third[`${type}GradientFrom`] || base || "#35c6a6";
  const to = presetColors?.[1] || third[`${type}GradientTo`] || "#f5bf54";
  return `linear-gradient(90deg, ${colorToRgba(from, alpha)}, ${colorToRgba(to, alpha)})`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateDelayLabels() {
  if (Number(els.minDelay.value) > Number(els.maxDelay.value)) {
    els.maxDelay.value = els.minDelay.value;
  }
  els.minDelayValue.textContent = `${els.minDelay.value}s`;
  els.maxDelayValue.textContent = `${els.maxDelay.value}s`;
}

function updateFontPreview() {
  const third = selectedThird();
  if (!third || !els.fontPreview) return;
  els.fontPreview.textContent = third.title?.trim() || "Schriftvorschau";
  els.fontPreview.style.fontFamily = `"${third.fontFamily || "Inter"}", Inter, ui-sans-serif, system-ui, sans-serif`;
  els.fontPreview.style.fontSize = `${clamp(Number(third.fontSize ?? 38), 22, 64)}px`;
  els.fontPreview.style.fontWeight = `${clamp(Number(third.fontWeight ?? 900), 400, 900)}`;
  els.fontPreview.style.letterSpacing = `${clamp(Number(third.letterSpacing ?? 0), 0, 6)}px`;
  els.fontPreview.style.textTransform = third.textTransform || "none";
}

function updateBorderVisibility() {
  const third = selectedThird();
  const hidden = !third || third.borderStyle === "none";
  els.borderControls.forEach((node) => {
    node.hidden = hidden;
  });
}

function updateConditionalOptions() {
  const third = selectedThird();
  if (!third) return;

  setFieldHidden("accentGradientPreset", third.accentColorMode !== "gradient");
  setFieldHidden("accentGradientFrom", third.accentColorMode !== "gradient" || third.accentGradientPreset !== "custom");
  setFieldHidden("accentGradientTo", third.accentColorMode !== "gradient" || third.accentGradientPreset !== "custom");

  setFieldHidden("textGradientPreset", third.textColorMode !== "gradient");
  setFieldHidden("textGradientFrom", third.textColorMode !== "gradient" || third.textGradientPreset !== "custom");
  setFieldHidden("textGradientTo", third.textColorMode !== "gradient" || third.textGradientPreset !== "custom");

  setFieldHidden("handleGradientPreset", third.handleColorMode !== "gradient");
  setFieldHidden("handleGradientFrom", third.handleColorMode !== "gradient" || third.handleGradientPreset !== "custom");
  setFieldHidden("handleGradientTo", third.handleColorMode !== "gradient" || third.handleGradientPreset !== "custom");

  const hideIconBg = third.iconBgEnabled === false;
  setFieldHidden("iconBgColor", hideIconBg);
  setFieldHidden("iconBgColorMode", hideIconBg);
  setFieldHidden("iconBgAlpha", hideIconBg);
  setFieldHidden("iconBgGradientPreset", hideIconBg || third.iconBgColorMode !== "gradient");
  setFieldHidden("iconBgGradientFrom", hideIconBg || third.iconBgColorMode !== "gradient" || third.iconBgGradientPreset !== "custom");
  setFieldHidden("iconBgGradientTo", hideIconBg || third.iconBgColorMode !== "gradient" || third.iconBgGradientPreset !== "custom");

  const hideShadow = third.shadowEnabled === false;
  setFieldHidden("shadowAlpha", hideShadow);
  setFieldHidden("shadowBlur", hideShadow);
}

function setFieldHidden(fieldKey, hidden) {
  const field = els.fields[fieldKey];
  if (field) field.closest("label").hidden = hidden;
}

function renderPreview() {
  clearTimeout(previewTimer);
  els.stage.querySelectorAll(".lower-third").forEach((node) => node.remove());
  const node = createLowerThird(selectedThird());
  node.classList.add("in");
  els.stage.append(node);
  updatePlayerLink();
}

function playPreview() {
  clearTimeout(previewTimer);
  els.stage.querySelectorAll(".lower-third").forEach((node) => node.remove());
  const node = createLowerThird(selectedThird());
  node.classList.add("in");
  els.stage.append(node);
  previewTimer = setTimeout(() => {
    node.classList.remove("in");
    node.classList.add("out");
  }, 1800);
}

function render() {
  renderList();
  renderForm();
  renderPreview();
}

function updatePlayerLink() {
  const url = new URL("player.html", window.location.href);
  url.hash = `data=${encodeState(state)}`;
  els.playerLink.value = url.href;
  els.triggerLink.value = buildTriggerLink(selectedThird().id);
}

function buildTriggerLink(id) {
  const triggerUrl = new URL("player.html", window.location.href);
  triggerUrl.hash = `data=${encodeState(state)}&trigger=${encodeURIComponent(id)}`;
  return triggerUrl.href;
}

function updateSelectedFromInputs() {
  const third = selectedThird();
  Object.entries(els.fields).forEach(([key, input]) => {
    const numeric = key === "duration" || key === "weight" || key === "borderWidth" || key === "accentAlpha" || key === "surfaceAlpha" || key === "shadowAlpha" || key === "shadowBlur" || key === "fontSize" || key === "fontWeight" || key === "letterSpacing" || key === "iconBgAlpha" || key === "iconScale" || key === "handleFontSize" || key === "handleFontWeight" || key === "handleLetterSpacing";
    if (input.type === "checkbox") {
      third[key] = input.checked;
    } else {
      third[key] = numeric ? Number(input.value) : input.value;
    }
  });
  Object.entries(els.toggles).forEach(([key, input]) => {
    third[key] = input.checked;
  });
  state.settings.minDelay = Number(els.minDelay.value);
  state.settings.maxDelay = Math.max(Number(els.maxDelay.value), state.settings.minDelay);
  els.maxDelay.value = state.settings.maxDelay;
  saveState();
  renderList();
  updateDelayLabels();
  updateFontPreview();
  updateBorderVisibility();
  updateConditionalOptions();
  renderPreview();
}

function addThird() {
  const id = `third-${Date.now()}`;
  state.thirds.push({
    ...structuredClone(defaultState.thirds[0]),
    id,
    title: "Neuer Banner",
    subtitle: "Kurze Beschreibung",
    handle: "@handle",
    accent: "#f5bf54",
    weight: 1
  });
  state.selectedId = id;
  saveState();
  render();
}

async function copyTriggerLink() {
  updatePlayerLink();
  els.triggerLink.select();
  await copyText(els.triggerLink.value);
}

function deleteThird() {
  if (state.thirds.length <= 1) return;
  state.thirds = state.thirds.filter((third) => third.id !== state.selectedId);
  state.selectedId = state.thirds[0].id;
  saveState();
  render();
}

function encodeState(value) {
  const json = JSON.stringify(value);
  return btoa(unescape(encodeURIComponent(json)));
}

async function copyPlayerLink() {
  updatePlayerLink();
  els.playerLink.select();
  await copyText(els.playerLink.value);
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    document.execCommand("copy");
  }
}

function resetSection(section) {
  const third = selectedThird();
  const defaults = sectionDefaults[section];
  if (!third || !defaults) return;

  if (section === "timing") {
    third.duration = defaults.duration;
    third.weight = defaults.weight;
    state.settings.minDelay = defaults.minDelay;
    state.settings.maxDelay = defaults.maxDelay;
  } else {
    Object.assign(third, structuredClone(defaults));
  }

  saveState();
  render();
}

function showAppView(view) {
  const license = view === "license";
  els.studioView.hidden = license;
  els.licenseView.hidden = !license;
  els.studioView.classList.toggle("active", !license);
  els.licenseView.classList.toggle("active", license);
  els.studioTab.classList.toggle("active", !license);
  els.licenseTab.classList.toggle("active", license);
  els.studioTab.setAttribute("aria-selected", String(!license));
  els.licenseTab.setAttribute("aria-selected", String(license));
}

function uploadCustomIcon() {
  const third = selectedThird();
  const file = els.customIcon.files?.[0];
  if (!third || !file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    third.customIcon = String(reader.result || "");
    third.icon = "custom";
    els.fields.icon.value = "custom";
    saveState();
    renderList();
    renderPreview();
  });
  reader.readAsDataURL(file);
}

Object.values(els.fields).forEach((input) => {
  input.addEventListener("input", updateSelectedFromInputs);
  input.addEventListener("change", updateSelectedFromInputs);
});
Object.values(els.toggles).forEach((input) => {
  input.addEventListener("change", updateSelectedFromInputs);
});
els.minDelay.addEventListener("input", updateSelectedFromInputs);
els.maxDelay.addEventListener("input", updateSelectedFromInputs);
els.studioTab.addEventListener("click", () => showAppView("studio"));
els.licenseTab.addEventListener("click", () => showAppView("license"));
els.interfaceTheme.addEventListener("change", (event) => applyInterfaceTheme(event.currentTarget.value));
els.add.addEventListener("click", addThird);
els.del.addEventListener("click", deleteThird);
els.save.addEventListener("click", saveState);
els.preview.addEventListener("click", playPreview);
els.copyLink.addEventListener("click", copyPlayerLink);
els.topCopyLink.addEventListener("click", copyPlayerLink);
els.copyTriggerLink.addEventListener("click", copyTriggerLink);
els.customIcon.addEventListener("change", uploadCustomIcon);
els.sectionResetButtons.forEach((button) => {
  button.addEventListener("click", () => resetSection(button.dataset.resetSection));
});

applyInterfaceTheme(loadInterfaceTheme());
saveState();
render();
