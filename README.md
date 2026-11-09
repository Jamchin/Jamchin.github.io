# James Qin’s portfolio

Open `index.html` in a browser. To make a change, open the relevant file in a text editor, save it, and refresh the browser. The site runs directly from these files without a build step.

## Find the right file

| To change | Edit |
| --- | --- |
| Homepage greeting, headings, navigation, or About bio | `index.html` |
| Project cards, timeline entries, résumé, portrait, video, or contact links | `config.js` |
| Homepage layout and shared colors, buttons, and typography | `styles.css` |
| Homepage filtering, card generation, or animation | `script.js` |
| Robotics final text, MATLAB snippets, figures, links, or future CAD embed | `robotics-final.html` |
| Robotics final page layout | `robotics-final.css` |
| HONG MK2 headings and walkthrough text | `hong-mk2.html` |
| HONG MK2 images, videos, GitHub link, or software pipeline descriptions | `hong-mk2-config.js` |
| HONG MK2 layout or walkthrough behavior | `hong-mk2.css` or `hong-mk2.js` |

## Add a homepage project

1. Put the photo in `assets/`. Match its filename and capitalization exactly.
2. In `config.js`, find `projects`. Copy one complete card, including its braces and the comma between cards.
3. Change its title, description, image path, and image description (`imageAlt`). Set `url` to a local page such as `robotics-final.html` or a full external URL.
4. Set `group` to `personal`, `professional`, `school`, or `club`. This controls the filter. The separate `category` field is the text printed on the card.
5. Refresh the homepage, select the matching filter, and open the card. Cards appear in their order in the file.

## Update the robotics final

Open `robotics-final.html` and search for the section you want. The empty panel has the ID `cad-viewer`. Paste the CAD embed between its opening and closing tags. The overview, code snippets, and pose figures live in `overview`. The diagram lives in `simscape`. Add a heading and paragraphs inside `next-phase` when the third section is ready.

## Update the robotic arm walkthrough

Put arm images or videos in `assets/hongmk2/`. In `hong-mk2-config.js`, find the named slot and set its `src`. Empty paths show the existing placeholders. To change an explanation, search for its visible heading in `hong-mk2.html`. Preserve the section IDs so existing links keep working.

## Preview changes

Open the homepage and both project pages. Try the filters, return links, arm walkthrough, and motion toggle. Narrow the browser window to check the phone layout. To publish, commit and push the site files using your existing GitHub Pages workflow.
