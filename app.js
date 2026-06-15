const STORAGE_KEY = "lowerThirdStudio.v1";
const THEME_KEY = "lowerThirdStudio.interfaceTheme";
const CONFIG_FILE_NAME = "lower-thirds-config.json";
const CONFIG_IDENTIFIER = "cfg";
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
      styleMotionEnabled: true,
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
      webhookEnabled: true,
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
      styleMotionEnabled: true,
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
      webhookEnabled: true,
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
      styleMotionEnabled: true,
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
      webhookEnabled: true,
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
    styleMotionEnabled: true,
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
    webhookEnabled: true,
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

const canvasStyles = new Set(["prism", "neonbar", "editorial", "aurora", "circuit", "livecard"]);
const motionLayerStyles = new Set(["solid", "glass", "stripe", "compact", "sports", "scoreboard", "ticker", "broadcast", "slab", "chrome", "holo", "ribbon", "esports", "studio", "kinetic", "glassline", "neonbar", "livecard"]);

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
  loadConfig: document.querySelector("#loadConfigButton"),
  loadConfigInput: document.querySelector("#loadConfigInput"),
  resetConfig: document.querySelector("#resetConfigButton"),
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
  previewSize: document.querySelector("#previewSizeOutput"),
  borderControls: document.querySelectorAll("[data-border-control]"),
  webhookControls: document.querySelectorAll("[data-webhook-control]"),
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
    styleMotionEnabled: document.querySelector("#styleMotionEnabledInput"),
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
    webhookEnabled: document.querySelector("#webhookEnabledInput"),
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

function hasLocalStorageConfig() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Boolean(stored && Array.isArray(stored.thirds) && stored.thirds.length);
  } catch (error) {
    return false;
  }
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
    styleMotionEnabled: third.styleMotionEnabled !== false,
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
    handleLetterSpacing: Number.isFinite(Number(third.handleLetterSpacing)) ? Number(third.handleLetterSpacing) : 0,
    webhookEnabled: third.webhookEnabled !== false
  }));
  next.selectedId = next.selectedId || next.thirds[0].id;
  return next;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
}

function validateConfig(value, options = {}) {
  if (options.requireIdentifier && value?.identifier !== CONFIG_IDENTIFIER) {
    throw new Error("Die JSON-Datei ist keine erkannte Lower-Third-Konfiguration.");
  }
  const payload = value?.state && Array.isArray(value.state.thirds) ? value.state : value;
  if (!payload || !Array.isArray(payload.thirds) || !payload.thirds.length) {
    throw new Error("Die Datei enthält keine gültige Lower-Third-Konfiguration.");
  }
  return normalizeState(payload);
}

async function loadBackupFromAppFolder() {
  if (hasLocalStorageConfig()) return false;

  try {
    const response = await fetch(CONFIG_FILE_NAME, { cache: "no-store" });
    if (!response.ok) return false;
    const loaded = validateConfig(await response.json(), { requireIdentifier: true });
    state = loaded;
    saveState();
    return true;
  } catch (error) {
    console.info("No readable JSON backup found next to the app", error);
    return false;
  }
}

function backupJson() {
  return JSON.stringify({
    identifier: CONFIG_IDENTIFIER,
    app: "lower-thirds-studio",
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  }, null, 2);
}

async function writeBackupFile() {
  const json = backupJson();
  const blob = new Blob([json], { type: "application/json" });

  if ("showSaveFilePicker" in window) {
    const handle = await window.showSaveFilePicker({
      suggestedName: CONFIG_FILE_NAME,
      types: [
        {
          description: "Lower Third Studio Konfiguration",
          accept: { "application/json": [".json"] }
        }
      ]
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    return "saved";
  }

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = CONFIG_FILE_NAME;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  return "downloaded";
}

async function saveConfiguration() {
  saveState();
  try {
    const mode = await writeBackupFile();
    alert(mode === "saved"
      ? "Konfiguration gespeichert.\n\nDie Live-Konfiguration liegt weiterhin im Browser-Speicher. Die JSON-Datei ist dein Backup."
      : `Konfiguration wurde als ${CONFIG_FILE_NAME} heruntergeladen.\n\nLege diese Datei in den App-Ordner, wenn sie beim ersten Start ohne Browser-Speicher automatisch geladen werden soll. Die Datei enthält den Identifier "${CONFIG_IDENTIFIER}", damit die App sie sicher als Backup erkennt.`);
  } catch (error) {
    if (error?.name === "AbortError") return;
    console.error("Could not write JSON backup", error);
    alert("Die JSON-Datei konnte nicht gespeichert werden. Die Live-Konfiguration im Browser-Speicher bleibt erhalten.");
  }
}

function loadConfigurationFile() {
  els.loadConfigInput.value = "";
  els.loadConfigInput.click();
}

function importConfigurationFile() {
  const file = els.loadConfigInput.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state = validateConfig(JSON.parse(String(reader.result || "{}")));
      saveState();
      render();
      alert("Konfiguration geladen.\n\nDiese Datei ist jetzt die Live-Konfiguration im Browser-Speicher. Drücke Speichern, wenn du sie auch wieder als JSON-Backup sichern möchtest.");
    } catch (error) {
      alert(error.message || "Die Konfiguration konnte nicht geladen werden.");
    }
  });
  reader.readAsText(file);
}

function resetConfiguration() {
  const confirmed = confirm(
    "Konfiguration wirklich zurücksetzen?\n\n" +
    "Das löscht die aktuelle Live-Konfiguration aus dem Browser-Speicher und setzt die Anwendung auf die Standard-Beispiele zurück.\n\n" +
    "Deine JSON-Backup-Datei im App-Ordner wird dadurch nicht gelöscht. Wenn du danach auf Speichern drückst, wird das Backup mit den Standardwerten überschrieben."
  );
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  state = normalizeState(structuredClone(defaultState));
  saveState();
  render();
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
    const autoOff = third.autoEnabled === false || Number(third.weight || 0) === 0;
    const mode = autoOff ? (third.webhookEnabled === false ? "deaktiviert" : "nur Webhook") : "automatisch";
    node.querySelector(".third-item-meta").textContent = `${third.platform || "Ohne Plattform"} · ${third.animation} · ${third.duration}s · ${mode}`;
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
    const copyTriggerButton = node.querySelector(".third-copy-trigger");
    copyTriggerButton.hidden = third.webhookEnabled === false;
    copyTriggerButton.addEventListener("click", async () => {
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
  node.className = `lower-third style-${third.style} anim-${third.animation} border-${third.borderStyle || "none"} frame-${third.borderAnimation || "none"} ${third.styleMotionEnabled === false ? "style-motion-off" : "style-motion-on"} ${third.textColorMode === "gradient" ? "text-gradient" : ""} ${third.handleColorMode === "gradient" ? "handle-gradient" : ""} ${third.shadowEnabled !== false ? "shadow-after-in" : ""}`;
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
  const canvas = third.styleMotionEnabled === false ? null : createDynamicCanvas(third);
  if (canvas) node.append(canvas);
  if (third.styleMotionEnabled !== false && motionLayerStyles.has(third.style)) node.append(createStyleMotionLayer());
  if (third.style === "cyberneon" && third.styleMotionEnabled !== false) node.append(createNeonRunner(third));
  node.append(createIcon(third), createCopy(third));
  return node;
}

function createStyleMotionLayer() {
  const layer = document.createElement("div");
  layer.className = "lt-style-motion-layer";
  layer.setAttribute("aria-hidden", "true");
  return layer;
}

function createNeonRunner(third) {
  const runner = document.createElement("div");
  runner.className = "lt-neon-runner";
  runner.setAttribute("aria-hidden", "true");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("lt-neon-svg");
  svg.setAttribute("viewBox", "0 0 1000 180");
  svg.setAttribute("preserveAspectRatio", "none");
  const pathData = "M50 32 L170 7 L830 7 L950 32 L1000 158 L985 180 L15 180 L0 158 Z";
  ["lt-neon-glow", "lt-neon-trace"].forEach((className) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add(className);
    path.setAttribute("d", pathData);
    path.setAttribute("pathLength", "1000");
    svg.append(path);
  });
  runner.append(svg);
  return runner;
}

function createDynamicCanvas(third) {
  if (!canvasStyles.has(third.style)) return null;
  const canvas = document.createElement("canvas");
  canvas.className = "lt-canvas";
  canvas.setAttribute("aria-hidden", "true");
  const accent = hexToRgb(third.accent || "#35c6a6");
  const gold = hexToRgb("#f5bf54");
  let start = null;

  function fit() {
    const parent = canvas.parentElement;
    if (!parent) return { width: 0, height: 0, dpr: 1 };
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }
    return { width, height, dpr };
  }

  function draw(timestamp) {
    if (!canvas.isConnected) return;
    if (start === null) start = timestamp;
    const t = (timestamp - start) / 1000;
    const { width, height, dpr } = fit();
    const ctx = canvas.getContext("2d");
    if (!ctx || !width || !height) {
      requestAnimationFrame(draw);
      return;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawCanvasStyle(ctx, third.style, width, height, t, accent, gold);
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
  return canvas;
}

function drawCanvasStyle(ctx, style, width, height, t, accent, gold) {
  ctx.clearRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "rgba(5, 7, 11, .92)");
  bg.addColorStop(1, "rgba(18, 22, 30, .88)");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  if (style === "prism") drawPrism(ctx, width, height, t, accent, gold);
  if (style === "neonbar") drawNeonBar(ctx, width, height, t, accent);
  if (style === "editorial") drawEditorial(ctx, width, height, t, accent);
  if (style === "aurora") drawAurora(ctx, width, height, t, accent, gold);
  if (style === "circuit") drawCircuit(ctx, width, height, t, accent);
  if (style === "livecard") drawLiveCard(ctx, width, height, t, accent);
}

function rgba(rgb, alpha) {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function drawPrism(ctx, width, height, t, accent, gold) {
  for (let i = -2; i < 6; i += 1) {
    const x = ((t * 80 + i * 150) % (width + 260)) - 180;
    const grad = ctx.createLinearGradient(x, 0, x + 180, height);
    grad.addColorStop(0, "rgba(255,255,255,0)");
    grad.addColorStop(.45, rgba(i % 2 ? accent : gold, .22));
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 96, 0);
    ctx.lineTo(x + 210, height);
    ctx.lineTo(x + 88, height);
    ctx.closePath();
    ctx.fill();
  }
}

function drawNeonBar(ctx, width, height, t, accent) {
  ctx.fillStyle = rgba(accent, .16);
  for (let i = 0; i < 18; i += 1) {
    const x = (i / 17) * width;
    const amp = (Math.sin(t * 3 + i * .7) + 1) * .5;
    ctx.fillRect(x, height - 8 - amp * height * .46, 4, amp * height * .46 + 8);
  }
  const sweep = (t * 130) % (width + 160) - 80;
  const grad = ctx.createLinearGradient(sweep - 70, 0, sweep + 70, 0);
  grad.addColorStop(0, "rgba(255,255,255,0)");
  grad.addColorStop(.5, rgba(accent, .42));
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(sweep - 70, 0, 140, height);
}

function drawEditorial(ctx, width, height, t, accent) {
  ctx.fillStyle = "rgba(245,247,250,.92)";
  ctx.fillRect(84, 0, width - 84, height);
  ctx.fillStyle = rgba(accent, .96);
  ctx.fillRect(0, 0, 96, height);
  ctx.fillStyle = "rgba(0,0,0,.10)";
  for (let i = 0; i < 5; i += 1) {
    const x = 96 + ((t * 42 + i * 140) % Math.max(width, 1));
    ctx.fillRect(x, 0, 28, height);
  }
}

function drawAurora(ctx, width, height, t, accent, gold) {
  for (let i = 0; i < 4; i += 1) {
    const x = width * (.2 + .22 * i + Math.sin(t * .8 + i) * .08);
    const y = height * (.35 + Math.cos(t * .7 + i * 1.4) * .22);
    const r = Math.max(width, height) * (.42 - i * .04);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, rgba(i % 2 ? gold : accent, .22));
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawCircuit(ctx, width, height, t, accent) {
  ctx.strokeStyle = rgba(accent, .32);
  ctx.lineWidth = 1;
  const offset = (t * 32) % 42;
  for (let x = -42 + offset; x < width + 42; x += 42) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 18, height * .34);
    ctx.lineTo(x + 4, height);
    ctx.stroke();
  }
  ctx.fillStyle = rgba(accent, .58);
  for (let i = 0; i < 8; i += 1) {
    const x = (i * 97 + t * 54) % width;
    const y = 18 + (i % 3) * (height / 3);
    ctx.beginPath();
    ctx.arc(x, y, 2 + Math.sin(t * 4 + i) * 1.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawLiveCard(ctx, width, height, t, accent) {
  ctx.fillStyle = rgba(accent, .92);
  ctx.fillRect(0, 0, 86, height);
  ctx.strokeStyle = rgba(accent, .58);
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 104; x < width - 16; x += 8) {
    const y = height * .5 + Math.sin(t * 5 + x * .045) * height * .20;
    if (x === 104) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,.18)";
  ctx.fillRect(86 + ((t * 90) % Math.max(width - 86, 1)), 0, 2, height);
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

  const hideWebhook = third.webhookEnabled === false;
  els.webhookControls.forEach((node) => {
    node.hidden = hideWebhook;
  });
}

function setFieldHidden(fieldKey, hidden) {
  const field = els.fields[fieldKey];
  if (field) field.closest("label").hidden = hidden;
}

function renderPreview() {
  clearTimeout(previewTimer);
  els.stage.querySelectorAll(".preview-scale, .lower-third").forEach((node) => node.remove());
  const node = createLowerThird(selectedThird());
  const frame = document.createElement("div");
  frame.className = "preview-scale";
  node.classList.add("in");
  frame.append(node);
  els.stage.append(frame);
  updatePreviewSize(node);
  updatePlayerLink();
}

function playPreview() {
  clearTimeout(previewTimer);
  els.stage.querySelectorAll(".preview-scale, .lower-third").forEach((node) => node.remove());
  const node = createLowerThird(selectedThird());
  const frame = document.createElement("div");
  frame.className = "preview-scale";
  node.classList.add("in");
  frame.append(node);
  els.stage.append(frame);
  updatePreviewSize(node);
  previewTimer = setTimeout(() => {
    node.classList.remove("in");
    node.classList.add("out");
  }, 1800);
}

function updatePreviewSize(node) {
  if (!els.previewSize || !node) return;
  requestAnimationFrame(() => {
    const frame = node.closest(".preview-scale");
    const stageRect = els.stage.getBoundingClientRect();
    const horizontalFit = (stageRect.width - 56) / Math.max(node.offsetWidth, 1);
    const verticalFit = (stageRect.height - 56) / Math.max(node.offsetHeight, 1);
    const scale = Math.min(1, horizontalFit, verticalFit);
    if (frame) frame.style.setProperty("--preview-scale", `${Math.max(.35, scale)}`);
    els.previewSize.textContent = `Lower Third: ${Math.round(node.offsetWidth)} x ${Math.round(node.offsetHeight)} px`;
  });
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
  const third = selectedThird();
  els.triggerLink.value = third.webhookEnabled === false ? "" : buildTriggerLink(third.id);
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
  if (selectedThird().webhookEnabled === false) return;
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
    third.webhookEnabled = defaults.webhookEnabled;
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
els.save.addEventListener("click", saveConfiguration);
els.loadConfig.addEventListener("click", loadConfigurationFile);
els.loadConfigInput.addEventListener("change", importConfigurationFile);
els.resetConfig.addEventListener("click", resetConfiguration);
els.preview.addEventListener("click", playPreview);
els.copyLink.addEventListener("click", copyPlayerLink);
els.topCopyLink.addEventListener("click", copyPlayerLink);
els.copyTriggerLink.addEventListener("click", copyTriggerLink);
els.customIcon.addEventListener("change", uploadCustomIcon);
window.addEventListener("resize", () => {
  const node = els.stage.querySelector(".lower-third");
  if (node) updatePreviewSize(node);
});
els.sectionResetButtons.forEach((button) => {
  button.addEventListener("click", () => resetSection(button.dataset.resetSection));
});

async function initializeApp() {
  applyInterfaceTheme(loadInterfaceTheme());
  const loadedBackup = await loadBackupFromAppFolder();
  if (!loadedBackup && !hasLocalStorageConfig()) saveState();
  render();
}

initializeApp();
