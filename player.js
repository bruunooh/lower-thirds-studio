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

const canvasStyles = new Set(["prism", "neonbar", "editorial", "aurora", "circuit", "livecard"]);
const motionLayerStyles = new Set(["solid", "glass", "stripe", "compact", "sports", "scoreboard", "ticker", "broadcast", "slab", "chrome", "holo", "ribbon", "esports", "studio", "kinetic", "glassline", "neonbar", "livecard"]);

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
  return state.thirds.find((third) => third.id === id && third.webhookEnabled !== false);
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
