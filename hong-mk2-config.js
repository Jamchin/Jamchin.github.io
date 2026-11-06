/* HONG MK2 MEDIA CONFIG
   1. Put your files in assets/hongmk2/.
   2. Fill in the matching src below, then save and refresh hong-mk2.html.
   Example: src: "assets/hongmk2/elbow-roll.png"

   Paths are relative to hong-mk2.html. Names are case-sensitive on GitHub Pages.
   Leave src: "" to keep the placeholder. Missing files also show a placeholder.
   Images: PNG, JPG, WebP, SVG, GIF. Videos: MP4, WebM (native playback controls).
   Videos do not autoplay. Optional poster is an image path shown before playback.
   fit: "contain" shows the whole image; "cover" fills the frame and crops edges.
   3D CAD / GLB files need a separate viewer; these slots are for images and videos.
   This file only controls the arm page. Main-site links stay in config.js.
*/
// window.HONG_MK2 gives the page script a named place to find these settings.
// Curly braces { } group settings together. Keep commas between entries.
// Each media entry uses:
//   src    = path to the image/video; empty quotes mean “keep the placeholder”.
//   alt    = a description for screen readers and other assistive technology.
//   fit    = how the file fits inside its frame (contain or cover).
//   poster = optional preview image for videos only.
// Keep text and paths inside quotes. Keep the slot names (hero, bevel, etc.) unchanged.
window.HONG_MK2 = {
  // Paste the full GitHub repository URL here when ready.
  // Example: "https://github.com/your-username/your-repository"
  // Empty quotes keep the button visible but unavailable.
  githubUrl: "",

  // SOFTWARE CONTROL PIPELINE: edit these sentences to update each hover/tap card.
  // Keep the stage names (computer, arduino, arm) so the page can find the right text.
  softwarePipeline: {
    computer: "MATLAB runs locally on my computer. Each slider or button change fires a callback that updates a struct containing all target angles. That data is encoded as JSON text and sent to the Arduino.",
    arduino: "The Arduino receives the data into a buffer and reads it one character at a time. This lets other functions keep running while the incoming message is being decoded.",
    arm: "The Arduino sends the target position to each motor. The motors then move the arm to their assigned positions."
  },

  media: {
    // Large image at the top of the page.
    hero: {
      src: "", // e.g. "assets/hongmk2/full-arm.png"
      alt: "HONG MK2 robotic arm, complete assembly",
      fit: "contain"
    },

    // Turret section: full assembly, close-up, or a short mechanism video.
    turret: {
      src: "", // e.g. "assets/hongmk2/turret.png"
      alt: "HONG MK2 turret assembly",
      fit: "contain"
    },

    // SHOULDER / ELBOW SCROLL SEQUENCE — four slots, shown in this order.
    // 1. Components separated so their arrangement is visible.
    shoulderExploded: {
      src: "", // e.g. "assets/hongmk2/shoulder-exploded.png"
      alt: "Exploded shoulder and elbow assembly",
      fit: "contain"
    },

    // 2. The same mechanism assembled; motors share the same axis.
    shoulderAssembled: {
      src: "", // e.g. "assets/hongmk2/shoulder-elbow.png"
      alt: "Shoulder and elbow motors on their shared axis",
      fit: "contain"
    },

    // 3. A sliced/sectioned CAD view showing the internal components.
    shoulderCutaway: {
      src: "", // e.g. "assets/hongmk2/shoulder-cutaway.png"
      alt: "Cutaway of the shoulder and elbow mechanism",
      fit: "contain"
    },

    // 4. Record the real arm or export a CAD animation as MP4/WebM.
    // A GIF also works. A live GLB model will need a separate 3D viewer later.
    shoulderMotion: {
      src: "", // e.g. "assets/hongmk2/shoulder-motion.mp4"
      poster: "", // optional: "assets/hongmk2/shoulder-motion-poster.jpg"
      alt: "Shoulder and elbow mechanism operating",
      fit: "contain"
    },

    // These two sections are labeled Coming soon on the page.
    // Add files here when ready; edit their status/text in the HTML at that time.
    endEffector: {
      src: "", // e.g. "assets/hongmk2/end-effector.png"
      alt: "HONG MK2 end-effector design",
      fit: "contain"
    },
    pcb: {
      src: "", // e.g. "assets/hongmk2/custom-pcb.png"
      alt: "HONG MK2 custom printed circuit board",
      fit: "contain"
    },

    // Four views in the elbow-roll scroll sequence, in order.
    assembly: {
      src: "", // e.g. "assets/hongmk2/elbow-assembly.png"
      alt: "Complete elbow-roll assembly",
      fit: "contain"
    },
    bevel: {
      src: "", // e.g. "assets/hongmk2/bevel-drive.mp4"
      poster: "", // optional: "assets/hongmk2/bevel-drive-poster.jpg"
      alt: "Two DC motors and the bevel-gear system",
      fit: "contain"
    },
    planetary: {
      src: "", // e.g. "assets/hongmk2/planetary-gearbox.mp4"
      poster: "",
      alt: "Planetary gearbox with its stationary ring gear and tube connections",
      fit: "contain"
    },
    tubes: {
      src: "", // e.g. "assets/hongmk2/carbon-fiber-tubes.png"
      alt: "Carbon-fiber tubes connecting the elbow assembly to wrist pitch",
      fit: "contain"
    },

    // WRIST PITCH: two views selected as the visitor scrolls.
    // First, separate the components in an exploded assembly image.
    wristExploded: {
      src: "", // e.g. "assets/hongmk2/wrist-exploded.png"
      alt: "Exploded wrist-pitch assembly and tube connections",
      fit: "contain"
    },

    // Then show the collapsed (fully assembled) mechanism.
    // Any path previously entered in the wrist slot is preserved here.
    wristCollapsed: {
      src: "", // e.g. "assets/hongmk2/wrist-pitch.png"
      alt: "Wrist-pitch mechanism and carbon-fiber tube connections",
      fit: "contain"
    },
    // Build-note images below the subsystem walkthroughs.
    sketch: {
      src: "", // e.g. "assets/hongmk2/sketch.jpg"
      alt: "Original HONG MK2 mechanism sketch",
      fit: "contain"
    },
    build: {
      src: "", // e.g. "assets/hongmk2/prototype.jpg"
      alt: "HONG MK2 prototype on the workbench",
      fit: "contain"
    }
  }
};
