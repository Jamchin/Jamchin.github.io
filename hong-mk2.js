// This function runs once when the browser reaches this script.
// Its variables stay private, avoiding conflicts with other page scripts.
(() => {
  // Read the settings you entered in hong-mk2-config.js.
  // If the config is unavailable, use an empty object so placeholders still work.
  const media = window.HONG_MK2?.media || {};

  // Replace the default pipeline copy with the editable text from the config file.
  // The fallback text in the HTML still appears if a setting is blank or missing.
  const pipelineCopy = window.HONG_MK2?.softwarePipeline || {};
  document.querySelectorAll("[data-pipeline]").forEach((node) => {
    const stage = node.dataset.pipeline;
    const configuredCopy = pipelineCopy[stage];
    const description = node.querySelector("[data-pipeline-description]");

    if (typeof configuredCopy === "string" && configuredCopy.trim() && description) {
      description.textContent = configuredCopy.trim();
    }
  });

  // Activate the repository button only when a valid web URL is supplied.
  // Invalid or blank values leave its honest “coming soon” state intact.
  const githubButtons = document.querySelectorAll(".github-button");
  const githubUrl = window.HONG_MK2?.githubUrl;

  if (typeof githubUrl === "string" && githubUrl.trim()) {
    try {
      const destination = new URL(githubUrl.trim());

      if (destination.protocol === "https:" || destination.protocol === "http:") {
        githubButtons.forEach((button) => {
          button.href = destination.href;
          button.target = "_blank";
          button.rel = "noopener noreferrer";
          button.removeAttribute("aria-disabled");
          button.setAttribute("aria-label", "View project on GitHub (opens in a new tab)");
          button.title = "View project on GitHub";
        });
      }
    } catch {
      // A mistyped URL should not break the rest of the page.
    }
  }

  // 2. FILL ONE MEDIA FRAME.
  // container is the HTML frame; key is its config name, such as 'hero' or 'bevel'.
  function showMedia(container, key) {
    // Stop and remove the old media before changing views.
    const previous = container.querySelector(".configured-media");

    if (previous?.tagName === "VIDEO") {
      previous.pause();
    }

    previous?.remove();
    container.classList.remove("has-media");
    container.setAttribute("role", "img");

    // Remember the frame's original accessibility description for fallback use.
    if (!container.dataset.placeholderLabel) {
      container.dataset.placeholderLabel = container.getAttribute("aria-label") || "Media placeholder";
    }

    container.setAttribute("aria-label", container.dataset.placeholderLabel);

    const entry = media[key];

    // An empty or invalid path means “leave the placeholder visible”.
    if (!entry || typeof entry.src !== "string" || !entry.src.trim()) {
      return;
    }

    const src = entry.src.trim();

    // Detect videos by the filename extension. Other paths are loaded as images.
    // This pattern also permits a URL query or fragment after .mp4 or .webm.
    const video = /\.(mp4|webm)(?:[?#].*)?$/i.test(src);
    const element = document.createElement(video ? "video" : "img");

    element.className = "configured-media";
    element.style.objectFit = entry.fit === "cover" ? "cover" : "contain";

    if (video) {
      // Use the browser's familiar play/pause/volume controls, with no autoplay.
      element.controls = true;
      element.playsInline = true;
      element.preload = "metadata";
      element.setAttribute("aria-label", entry.alt || key);

      if (entry.poster) {
        element.poster = entry.poster;
      }
    } else {
      // alt describes the picture for screen readers.
      // Asynchronous decoding lets the browser prepare it without blocking text.
      element.alt = entry.alt || key;
      element.decoding = "async";
    }

    // Loading happens in the background. Only hide the placeholder on success.
    function ready() {
      // Ignore an old load event if scrolling already selected another view.
      if (!container.contains(element)) {
        return;
      }

      container.classList.add("has-media");

      // Let the actual image or video provide its own accessibility information.
      container.removeAttribute("role");
      container.removeAttribute("aria-label");
    }

    element.addEventListener(video ? "loadedmetadata" : "load", ready, { once: true });

    // A misspelled path or missing file restores the placeholder.
    element.addEventListener(
      "error",
      () => {
        if (!container.contains(element)) {
          return;
        }

        element.remove();
        container.classList.remove("has-media");
        container.setAttribute("role", "img");
        container.setAttribute("aria-label", container.dataset.placeholderLabel);
      },
      { once: true },
    );

    // Add the element, then assign its path to start loading the file.
    container.append(element);
    element.src = src;
  }

  // Each static frame names its slot in hong-mk2-config.js.
  document.querySelectorAll("[data-media]").forEach((frame) => {
    showMedia(frame, frame.dataset.media);
  });

  // 4. SET UP EACH WALKTHROUGH INDEPENDENTLY.
  // Searching inside story (rather than document) prevents one section
  // from changing the other section's image or navigation links.
  function setupStory(story) {
    const steps = [...story.querySelectorAll(".story-step")];
    const links = [...story.querySelectorAll(".scene-dots a")];
    const title = story.querySelector('[data-story="title"]');
    const detail = story.querySelector('[data-story="detail"]');
    const index = story.querySelector('[data-story="index"]');
    const label = story.querySelector('[data-story="label"]');
    const view = story.querySelector(".scene-media");

    // -1 means no view has been selected yet.
    // queued prevents many scroll events from scheduling duplicate screen updates.
    let current = -1;
    let queued = false;

    // 4. SELECT A WALKTHROUGH VIEW AND UPDATE ITS LABELS.
    // JavaScript counts from zero: i = 0 selects the first explanation.
    function activate(i) {
      // Avoid reloading a file while the visitor remains in the same section.
      if (i === current) {
        return;
      }

      current = i;

      const step = steps[i];
      const number = String(i + 1).padStart(2, "0"); // Display a two-digit view number, such as 01 or 02.

      // dataset reads the data-title, data-detail, etc. attributes on the article.
      // textContent updates plain text without interpreting it as HTML.
      title.textContent = step.dataset.title;
      detail.textContent = "Image placeholder · " + step.dataset.detail;
      index.textContent = "VIEW " + number + " / " + String(steps.length).padStart(2, "0");
      label.textContent = number + " — " + step.dataset.label;

      view.setAttribute("aria-label", "Placeholder: " + step.dataset.title);
      view.dataset.view = step.dataset.view;
      view.dataset.placeholderLabel = "Placeholder: " + step.dataset.title;

      // The data-view value is the corresponding key in your media config.
      showMedia(view, step.dataset.view);

      // Mark the active navigation link for both CSS and assistive technology.
      links.forEach((link, n) => {
        if (n === i) {
          link.setAttribute("aria-current", "step");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    // 5. FIND THE EXPLANATION CLOSEST TO THE MIDDLE OF THE SCREEN.
    function update() {
      queued = false;

      const target = innerHeight * 0.5;
      let nearest = 0;
      let distance = Infinity;

      steps.forEach((step, i) => {
        // The rectangle describes this article's current on-screen position.
        const rect = step.getBoundingClientRect();
        const d = Math.abs(rect.top + rect.height / 2 - target);

        if (d < distance) {
          distance = d;
          nearest = i;
        }
      });

      activate(nearest);
    }

    // Schedule at most one update per browser drawing frame, keeping scrolling light.
    function schedule() {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    }

    // Reconsider the active section after scrolling or resizing the browser window.
    // passive tells the browser this listener will not prevent normal scrolling.
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);

    // Clicking a view link selects its media and follows its normal section anchor.
    links.forEach((link, i) => {
      link.addEventListener("click", () => activate(i));
    });

    // Set the initial view, including when the browser restores a scrolled position.
    update();
  }

  // Each .story gets its own current view and scroll-update state.
  document.querySelectorAll(".story").forEach(setupStory);
})();
