# HONG MK2 media

Drop images or videos into this folder, then edit `hong-mk2-config.js` in the repository root.

For example, after adding `elbow-assembly.png`, set the `assembly` entry to:

```js
src: "assets/hongmk2/elbow-assembly.png",
```

Slots: hero, assembly, bevel, planetary, tubes, wrist, sketch, build.
Blank paths preserve the placeholders. Use exact capitalization in filenames.
Images (PNG/JPG/WebP/SVG/GIF) and videos (MP4/WebM) are supported.
Videos have playback controls and do not autoplay. Set `poster` for a video preview image.
Use `fit: "contain"` for uncropped CAD images; `fit: "cover"` crops to fill the frame.

Open `hong-mk2.html` to preview. The main portfolio link is still controlled by `config.js`.
A future GLB/CAD viewer will be added separately; GLB files do not work in these media slots yet.
