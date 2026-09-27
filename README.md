# James Qin — portfolio

A plain HTML, CSS, and JavaScript website. No framework, dependency installation,
build command, or account is needed to edit it. The supplied Mars rover GIF is included.

## Open the website

Unzip the project, open the `james-portfolio` folder, and double-click `index.html`.
Keep the files together: `index.html` needs the styles, scripts, and assets beside it.
If your browser blocks an embedded local PDF, view through a local web server or
GitHub Pages; the rest of the site works directly from the file.

## Where everything lives

| File | What to change |
| --- | --- |
| `index.html` | Section order, welcome greeting, headings, navigation |
| `config.js` | Projects, Notion links, experience, icon images, contact links, bio, media paths |
| `styles.css` | Colors, spacing, sizing, layout, animation, mobile behavior |
| `script.js` | Rendering, active navigation, reveal animation, motion control |
| `assets/` | Photos, video, résumé PDF, rover animation, favicon |

The code has numbered sections and comments explaining the main adjustments.
Use your editor's search to jump to `PROJECTS`, `TIMELINE`, or `MOBILE`.
Edit a file, save it, then refresh the browser. You can use any text editor.

## Add your content

### Project cards and Notion pages

Put a project photo in `assets/`. In `config.js`, change the matching project:

```js
{
  title: "HONG MK2",
  category: "ROBOTICS / PERSONAL PROJECT",
  description: "A robotic arm, built from the joints up.",
  image: "assets/robotic-arm.jpg",
  imageAlt: "My robotic arm on a workbench",
  url: "https://your-notion-page-url",
  accent: "coral"
},
```

Copy an entire object to add a card. Reorder objects to reorder cards.
Valid accent names are `coral`, `blue`, and `amber`.
The entire card becomes a link once its URL is filled in. Empty URLs intentionally
stay noninteractive with a “case study coming soon” label. Images are real-photo
placeholders, not fabricated depictions of your projects. Replace or rename the
three starter projects freely.

### Résumé

Add `assets/resume.pdf`, then set `resumeSrc: "assets/resume.pdf"` in `config.js`.
An embedded PDF and a separate Open PDF link will appear. Leave the path empty to
keep the reserved blank space. The layout-reference PDF is not used as your résumé.

### About video, portrait, and text

In `config.js`:

```js
videoSrc: "assets/about-video.mp4",
videoPoster: "assets/about-poster.jpg",
portraitSrc: "assets/james.jpg",
aboutText: "Write your introduction here.\n\nThis starts a second paragraph.",
```

The video uses native playback controls and does not autoplay. The About me title
overlays it. Use an MP4 supported by your browsers; a short compressed video will
load faster. Add captions with a `<track>` element in `script.js` if it contains speech.
The portrait is below left on desktop; your text is below right. Mobile stacks them.

### Timeline, including shared dates

Each object in `timeline` is one dot on the vertical line. Each object inside its
`cards` array is a card beside that dot. Northeastern and NUROVER share one row.
The row's 2025–2029 is the university chapter, not a claim of completed club service.
Replace dates and details with the dates you want to show.

Copy this to add a new point (keep a comma between points):

```js
{
  date: "2027",
  gap: "4rem",
  cards: [
    {
      title: "Your next experience",
      subtitle: "Your role",
      detail: "Your dates or short description",
      icon: "assets/my-icon.png",
      initials: "ME",
      accent: "blue",
      width: "1fr",
      offset: "0rem"
    }
  ]
},
```

- `gap` changes the space after a date group.
- `width` sets a card's grid share: `2fr` is twice the share of `1fr`.
- `offset` moves an individual card down; use `"2rem"` for a 32px offset.
- `icon` uses your own image; leaving it blank shows `initials` instead.
- Moving a whole date object changes its position along the timeline.
- On mobile, cards stack and offsets reset so content remains readable.

### Contact

Replace the blank values in `contact` with your actual links. Email uses
`mailto:you@example.com`; LinkedIn and GitHub use full `https://...` addresses.
Your supplied email, LinkedIn, and GitHub are connected as buttons. Email me opens
the visitor's configured email app with `qin.ja@northeastern.edu` as the recipient;
it does not send an email automatically. Empty links say “Coming soon.”

## Change the design

The top of `styles.css` contains the five exact reference colors:
graphite `#2F2D2E`, off-white `#FBFBFF`, coral `#FA7E61`, blue `#3E7CB1`,
and amber `#F9AB55`.

| Setting / selector | Effect |
| --- | --- |
| `--rail-width` | Width of the desktop navigation rail |
| `--content-width` | Maximum section content width |
| `--section-padding` | Space at the sides of sections |
| `--card-size` | Approximate project card maximum width, currently 400px |
| `.project-media` | Project image height |
| `.welcome h1` | Greeting size and typography |
| `.hero-art img` | Rover size, placement, and edge fade |
| `.about-video` | Height of the About video panel |
| `11 / MOBILE` | Phone navigation and stacked layout |

The site uses installed system fonts, so it needs no external font service.
Scroll snapping uses `proximity`: the browser settles near section boundaries but
still lets visitors scroll through tall sections. Change it to `none` to turn it off.
Each section can grow with its content. There is no locked-height scroll trap.

The mobile navigation appears for widths at or below 760px, or a portrait aspect
ratio at or below 3:4. It stays above the iPhone home indicator.

Animations include entrance transitions, scroll reveals, hover lifts, image zoom,
sliding nav labels, and the original GIF. “Pause animation” swaps the GIF for a
still extracted from the same animation and pauses decorative CSS motion.
System reduced-motion preferences are respected automatically.

## Publish on GitHub Pages

1. Create or choose a repository. For an account homepage, use `USERNAME.github.io`;
   for a project page, use a repository name such as `portfolio`.
2. Put the **contents** of this folder in the repository root, so `index.html` sits
   directly at the top level. Keep `assets/`, `.nojekyll`, and the other files together.
3. Commit and push the files to `main` with GitHub Desktop or Git.
4. In the repository, open **Settings → Pages**. Under **Build and deployment**,
   choose **Deploy from a branch**, then **main** and **/(root)**. Save.
5. Wait for the Pages deployment to finish; GitHub will show the website URL.

If replacing an existing portfolio, save the current version in a branch first.
This package does not automatically overwrite your current repository.
All asset references are relative, so both account and project Pages URLs work.

Official instructions, checked September 27, 2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before sharing the link

Fill the blank links and media paths when you're ready. Check your actual dates
and project descriptions. Try phone and desktop sizes, keyboard navigation,
project links, the animation pause button, and a hard refresh after publishing.

Validation performed on this package: JavaScript syntax, HTML section links and
local asset references, CSS delimiter balance, configuration structure, and ZIP contents.
Live browser layout/interaction testing was not available in this build environment;
review the opened site on your own device before publishing.
