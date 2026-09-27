/* ============================================================================
   YOUR CONTENT CONTROL PANEL
   Save this file, then refresh the browser. No npm / React / build required.
   All paths are relative (no leading /), so GitHub project Pages works too.
   Strings go in quotes. Keep commas BETWEEN objects/properties.
   To add a project or timeline card, copy an entire { ... } block.
   ============================================================================ */
const SITE = {
  // MEDIA: place your files inside assets/, then enter their path below.
  resumeSrc: "assets/Resume(1.1).pdf",                  // Example: "assets/resume.pdf"
  videoSrc: "assets/ABOUTME.mp4",                   // Example: "assets/about-video.mp4"
  videoPoster: "",                // Optional: "assets/video-poster.jpg"
  portraitSrc: "assets/WebsitePic.jpg",                // Example: "assets/james.jpg"
  aboutText: "More about me soon.", // Replace with your own bio. Plain text.

  // PROJECTS: reorder these blocks to reorder the cards.
  // image = real project photo; url = full https:// Notion page link.
  // Blank URL disables navigation. No fake links, popups, or page jumps.
  // accent may be "coral", "blue", or "amber" (defined in styles.css).
  projects: [
    { title: "HONG MK2", category: "ROBOTICS / PERSONAL PROJECT", description: "A robotic arm, built from the joints up.", image: "", imageAlt: "HONG MK2 robotic arm", url: " https://stirring-track-6b6.notion.site/Robotic-arm-39ae22ea196780c29c91f9834e21711a?pvs=143 ", accent: "coral" },
    { title: "Rube Goldberg Machine", category: "ROBOTICS / TEAM PROJECT", description: "Building a house with a little bit of chaos.", image: "assets/RGM.png", imageAlt: "RGM Machine", url: " https://sites.google.com/view/rgm-group-h/home?pli=1&authuser=0", accent: "blue" },
    { title: "Carnival Crane", category: "MECHATRONICS / TEAM PROJECT", description: "From an idea to an interactive game.", image: "assets/ClawMachine.png", imageAlt: "Carnival crane game", url: "https://sites.google.com/view/carnipals/overview ", accent: "amber" },
    { title: "Electric Screwdriver", category: "MECHATRONICS/ PERSONAL PROJECT", description: "To replace my normal screwdriver.", image: "assets/Screwdriver.png", imageAlt: "E-Screwdrvier", url: "https://stirring-track-6b6.notion.site/Electric-Screwdriver-2cee22ea196780238b17d3f0722a6db2?pvs=143", accent: "coral" },
    // COPY A BLOCK ABOVE HERE to add another card.
  ],

  // TIMELINE: chronological order is the order of these blocks.
  // gap = space AFTER this row, in CSS units (e.g. "3rem", "80px").
  // cards in one row share the SAME date marker; move a card to change grouping.
  // icon = image path; initials = fallback when no image has been supplied.
  // width = CSS grid column width; "1fr" means equal share of available space.
  // offset = vertical position within the row, desktop only ("0rem" by default).
  timeline: [
    { date: "2021 — 2025", gap: "4rem", cards: [
      { title: "VEX Robotics", subtitle: "High school", detail: "2021–2025", icon: "", initials: "VX", accent: "coral", width: "1fr", offset: "0rem" },
    ] },
    { date: "2025 — 2029", gap: "0rem", cards: [
      { title: "Northeastern University", subtitle: "Mechanical Engineering + Computer Science", detail: "Expected graduation · May 2029", icon: "", initials: "N", accent: "amber", width: "1fr", offset: "0rem" },
      { title: "NUROVER", subtitle: "Northeastern University Rover Team", detail: "University chapter", icon: "", initials: "NU", accent: "blue", width: "1fr", offset: "0rem" },
    ] },
  ],

  // CONTACT: enter mailto:you@example.com for email, https://... for websites.
  contact: [
    { label: "Email me", url: "mailto:qin.ja@northeastern.edu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/james-qin-77b70931a/" },
    { label: "GitHub", url: "https://github.com/Jamchin" },
  ],
};
