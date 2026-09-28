/* ============================================================================
   SITE BEHAVIOR — edit content in config.js first; most changes need no JS here.
   01 Helpers · 02 Project cards · 03 Timeline · 04 Media · 05 Contact
   06 Motion · 07 Scroll reveals and active navigation
   ============================================================================ */
"use strict";

// 01 / HELPERS — textContent treats your text as text (not executable HTML).
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function photo(src, alt) {
  const img = element("img");
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";
  return img;
}
// Missing image files fall back to their placeholder instead of a broken icon.
function insertImage(container, src, alt) {
  if (!src) return;
  const img = photo(src, alt);
  img.addEventListener("load", () => container.replaceChildren(img));
}

// 02 / PROJECTS — blank URLs intentionally render as non-link cards.
SITE.projects.forEach((project, index) => {
  const card = element("article", "project-card reveal");
  card.dataset.accent = project.accent;
  const link = element(project.url ? "a" : "div");
  if (project.url) {
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${project.title} — view project (opens a new tab)`);
  }
  const media = element("div", "project-media");
  const placeholder = element("div", "project-placeholder");
  placeholder.append(element("strong", "", String(index + 1).padStart(2, "0")), element("span", "", "PROJECT PHOTO / COMING SOON"));
  media.append(placeholder);
  insertImage(media, project.image, project.imageAlt || project.title);
  const info = element("div", "project-info");
  const titleRow = element("div", "project-title");
  titleRow.append(element("h3", "", project.title), element("span", "card-status", project.url ? "↗" : "CASE STUDY\nCOMING SOON"));
  info.append(element("p", "category", project.category), titleRow, element("p", "", project.description));
  link.append(media, info);
  card.append(link);
  document.querySelector("#project-grid").append(card);
});

// 03 / TIMELINE — config entry = one date marker; cards share that marker.
SITE.timeline.forEach((entry) => {
  const row = element("div", "timeline-row reveal");
  row.style.setProperty("--gap", entry.gap || "4rem");
  const cards = element("div", "timeline-cards");
  cards.style.gridTemplateColumns = entry.cards.map(card => card.width || "1fr").join(" ");
  entry.cards.forEach((item) => {
    const card = element("article", "timeline-card");
    card.dataset.accent = item.accent;
    card.style.setProperty("--offset", item.offset || "0rem");
    const icon = element("div", "timeline-icon", item.initials);
    icon.setAttribute("aria-hidden", "true");
    insertImage(icon, item.icon, "");
    card.append(icon, element("h3", "", item.title), element("p", "", item.subtitle), element("small", "", item.detail));
    cards.append(card);
  });
  row.append(element("p", "timeline-date", entry.date), cards);
  document.querySelector("#timeline").append(row);
});

// 04 / MEDIA — these activate only after you fill in paths in config.js.
if (SITE.resumeSrc) {
  const frame = element("iframe");
  frame.src = SITE.resumeSrc;
  frame.title = "James Qin résumé";
  frame.loading = "lazy";
  document.querySelector("#resume-content").replaceChildren(frame);
  const openLink = document.querySelector("#resume-open");
  openLink.href = SITE.resumeSrc;
  openLink.hidden = false; // Also allows mobile users to open PDFs directly.
}
if (SITE.videoSrc) {
  const video = element("video");
  video.src = SITE.videoSrc;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;       // Muting allows autoplay in most browsers.
  video.playsInline = true; // Keeps playback inside the page on iPhones.
  video.controls = false;
  video.preload = "auto";
  if (SITE.videoPoster) video.poster = SITE.videoPoster;
  video.setAttribute("aria-label", "About James");
  const panel = document.querySelector("#about-video");
  panel.querySelector(".video-placeholder").remove();
  panel.prepend(video);
  // Move heading above native playback controls; video never autoplays audio.
  // panel.querySelector(".video-heading").style.bottom = "48px";
}
insertImage(document.querySelector("#portrait"), SITE.portraitSrc, "James Qin");
//document.querySelector("#about-text").textContent = SITE.aboutText;

// 05 / CONTACT — fill blank links in config.js to turn them into live links.
// Inline SVG icons inherit the button's text color and stay sharp at any size.
// These are fixed icon shapes, not user content. Labels remain readable by
// screen readers; the decorative SVG itself is hidden from assistive technology.
const contactIcons = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.182c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.869 0 1.216.663 1.216 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.25c.03.678 0 7.225 0 7.225h2.401z"/></svg>',
  github: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
};
SITE.contact.forEach((item) => {
  const node = element(item.url ? "a" : "div", "contact-item");
  const label = element("span", "contact-label");
  // Detect from the destination; optional item.icon can override this with
  // "email", "linkedin", or "github" if you customize your configuration later.
  const iconName = item.icon || (item.url.startsWith("mailto:") ? "email"
    : item.url.includes("linkedin.com/") ? "linkedin"
    : item.url.includes("github.com/") ? "github" : "");
  if (contactIcons[iconName]) {
    const icon = element("span", "contact-icon");
    icon.innerHTML = contactIcons[iconName];
    label.append(icon);
  }
  label.append(element("span", "", item.label));
  node.append(label);
  if (item.url) {
    node.href = item.url;
    if (!item.url.startsWith("mailto:")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    node.append(element("span", "", "↗"));
  } else node.append(element("small", "", "Coming soon"));
  document.querySelector("#contact-links").append(node);
});
document.querySelector("#year").textContent = new Date().getFullYear();

// 06 / MOTION — GIFs cannot be paused natively, so use a still from YOUR GIF.
// This pauses decorative motion, including CSS animations. Videos are user-controlled.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let motionPaused = reducedMotion.matches;
const toggle = document.querySelector("#motion-toggle");
function setMotion(paused) {
  motionPaused = paused;
  document.body.classList.toggle("motion-paused", paused);
  document.querySelector("#rover").src = paused ? "assets/mars-rover-still.jpg" : "assets/mars-rover.gif";
  toggle.textContent = paused ? "Play animation ▷" : "Pause animation Ⅱ";
  toggle.setAttribute("aria-pressed", String(paused));
  document.documentElement.style.scrollBehavior = paused ? "auto" : "";
}
setMotion(motionPaused);
toggle.addEventListener("click", () => setMotion(!motionPaused));
reducedMotion.addEventListener("change", event => setMotion(event.matches));

// 07 / SCROLL — reveal once; keep active nav in sync with actual section position.
if ("IntersectionObserver" in window) {
  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    document.querySelectorAll(".reveal").forEach(node => {
      node.classList.add("pending");
      revealObserver.observe(node);
    });
  }
}
const sections = [...document.querySelectorAll("main > section")];
const navLinks = [...document.querySelectorAll(".nav-link")];
let scrollQueued = false;
function updateNavigation() {
  // A section becomes active when its top crosses the upper third of the viewport.
  const marker = window.innerHeight * .35;
  let current = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= marker) current = section; });
  navLinks.forEach(link => {
    const active = link.hash === `#${current.id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollQueued = false;
}
window.addEventListener("scroll", () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
