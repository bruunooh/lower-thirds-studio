const STORAGE_KEY = "lowerThirdStudio.v1";

const fallbackState = {
  settings: { minDelay: 8, maxDelay: 22 },
  thirds: [
    {
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

const gradientPresets = {
  sunset: ["#ff7a18", "#d62976"],
  ocean: ["#00c6ff", "#0072ff"],
  neon: ["#39ff14", "#ff00f5"],
  sports: ["#f5bf54", "#101114"],
  gold: ["#f8e08e", "#b7791f"],
  ice: ["#e0f7ff", "#69d2ff"]
};

const stage = document.querySelector("#playerStage");
let state = readState();
let activeTimer = null;
let previousIndex = -1;
let initialTriggerId = readTriggerId();

function readState() {
  const hashed = readHashState();
  if (hashed) return hashed;

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.thirds) && stored.thirds.length) {
      return stored;
    }
  } catch (error) {
    console.warn("Could not read lower thirds", error);
  }
  return fallbackState;
}

function readHashState() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const data = params.get("data");
  if (!data) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(escape(atob(data))));
    if (parsed && Array.isArray(parsed.thirds) && parsed.thirds.length) {
      return parsed;
    }
  } catch (error) {
    console.warn("Could not read embedded lower thirds", error);
  }
  return null;
}

function readTriggerId() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  return params.get("trigger") || params.get("id") || "";
}

function randomDelay() {
  const min = Math.max(1, Number(state.settings?.minDelay ?? 8));
  const max = Math.max(min, Number(state.settings?.maxDelay ?? 22));
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

function pickThird() {
  const pool = state.thirds.flatMap((third, index) => {
    if (third.autoEnabled === false) return [];
    const weight = Math.max(0, Number(third.weight || 0));
    return Array(weight).fill(index);
  });
  if (!pool.length) return null;
  let index = pool[Math.floor(Math.random() * pool.length)] ?? 0;
  if (state.thirds.length > 1) {
    let guard = 0;
    while (index === previousIndex && guard < 8) {
      index = pool[Math.floor(Math.random() * pool.length)] ?? 0;
      guard += 1;
    }
  }
  previousIndex = index;
  return state.thirds[index];
}

function findThirdById(id) {
  return state.thirds.find((third) => third.id === id);
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

function showNext() {
  state = readState();
  stage.innerHTML = "";

  const third = pickThird();
  if (!third) return;
  const node = createLowerThird(third);
  node.classList.add("in");
  stage.append(node);

  const visibleMs = Math.max(2, Number(third.duration || 7)) * 1000;
  activeTimer = setTimeout(() => {
    node.classList.remove("in");
    node.classList.add("out");
    activeTimer = setTimeout(showNext, randomDelay());
  }, visibleMs);
}

function showTriggered(id) {
  state = readState();
  const third = findThirdById(id);
  if (!third) return false;

  clearTimeout(activeTimer);
  stage.innerHTML = "";
  const node = createLowerThird(third);
  node.classList.add("in");
  stage.append(node);

  const visibleMs = Math.max(2, Number(third.duration || 7)) * 1000;
  activeTimer = setTimeout(() => {
    node.classList.remove("in");
    node.classList.add("out");
    activeTimer = setTimeout(showNext, randomDelay());
  }, visibleMs);
  return true;
}

window.addEventListener("storage", () => {
  const trigger = localStorage.getItem(`${STORAGE_KEY}.trigger`);
  if (trigger && showTriggered(trigger)) return;
  restart();
});

window.addEventListener("hashchange", () => {
  restart();
});

activeTimer = setTimeout(() => {
  if (initialTriggerId && showTriggered(initialTriggerId)) return;
  showNext();
}, 600);

function restart() {
  clearTimeout(activeTimer);
  state = readState();
  initialTriggerId = readTriggerId();
  previousIndex = -1;
  stage.innerHTML = "";
  activeTimer = setTimeout(() => {
    if (initialTriggerId && showTriggered(initialTriggerId)) return;
    showNext();
  }, 120);
}
