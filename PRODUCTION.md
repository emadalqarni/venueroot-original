# Production notes — VenueRoot

## Direction and scope

Arabic-first, RTL, warm limestone, deep green, restrained copper, IBM Plex Sans Arabic. Theme: an entrepreneur's idea becomes a hospitality destination. A single cafe illustrates a platform for cafes, restaurants and bakeries across Saudi Arabia. The supplied business facts are preserved. No customer counts, testimonials, awards, pricing, addresses or partnerships were invented.

The main journey follows the approved four beats: empty possibility, equipment/furniture assembly, a close architectural occlusion with no website copy, and the completed cafe. Generation inspection confirmed that the pillar fills the view around 7.2–8.0 seconds and the finished interior returns around 9 seconds. One continuous generated clip avoids clip-to-clip seam mismatches.

## Files and provenance

- `brand/opening-master.png`: Higgsfield `gpt_image_2_5`, job `e5a6016b-6389-4dd4-931b-9c7a59a2ca3b`, 2688 × 1520 source image.
- `brand/logo-master.png`: Higgsfield `gpt_image_2_5`, job `365f0ec1-0285-49eb-94e6-a60fab3933e1`, 1024 × 1024 raster. Selected for the doorway/root connection and small-scale legibility. The web mark is a cropped derivative, not an editable vector master.
- `brand/story-original.mp4`: Higgsfield `seedance_2_5`, job `15e9f29e-8ec8-4947-ba49-e3dd99495a20`, 12-second requested clip, 1280 × 720, no generated audio. Starting reference is the exact opening-image job.
- `dist/assets/frames`: 241 consecutive WebP files at 20 fps, 1280 × 720; 6,907,246 bytes total. Original video kept outside public assets.
- `dist/assets/opening.webp`: immediate still fallback, identical to sequence frame zero, 1280 × 720.
- IBM Plex Sans Arabic is served locally. See `FONT-LICENSE.txt`.
- Site icons and sector line illustrations are original HTML/SVG interface artwork, not substituted generated footage.

## Scroll timing

Active pinned travel is 6 viewport heights, in addition to the visible stage height. The header remains visible. Desktop and phone use native scrolling, without wheel interception.

| Active scroll | Video time | Treatment |
|---|---|---|
| 0–1.5 vh | 0–2 s | Opening / reading space |
| 1.5–3.5 vh | 2–6 s | Equipment and furniture assembly |
| 3.5–4.5 vh | 6–9 s | Text-free architectural transition |
| 4.5–5.5 vh | 9–11.8 s | Completed cafe reveal |
| 5.5–6 vh | 11.8 s | Deliberate still-frame hold for final copy |

Canvas rendering caps device pixel ratio at 1.5 desktop / 1.25 mobile. Decoded frames are capped at 20 desktop (about 70.3 MiB) / 12 mobile (about 42.2 MiB), excluding the canvas/browser's own allocations. There are at most 4 desktop / 3 mobile concurrent fetches. Requests prioritize the current and nearby frames. Obsolete requests are aborted and decoded images closed; failures get at most two attempts. Rapid jumps retain the last useful image until the requested frame arrives. Reduced-motion preference, Save-Data, and reported device memory of 2 GB or less use the responsive poster and normal flow without requesting either manifest or sequence.

## Dedicated mobile revision

Same codebase and URL, breakpoint 700 CSS pixels. Persistent fixed navigation is mounted outside the story; brand is on the left and a 48 px hamburger on the right. The native modal menu adds explicit Tab/Shift-Tab wrapping, Escape closing, return focus, link-close behavior, anchor offsets and safe-area insets. Form controls have larger touch targets and 16 px input text.

Mobile opening contains one short headline, one CTA and a scroll cue/skip link. Assembly and pillar passage contain no copy. The final heading and CTA return only after the pillar has cleared. Images fill the entire stage without panels or stretched footage.

Portrait image: `brand/mobile-opening-master.png`, Higgsfield GPT Image 2.5 job `f77d5e37-9956-4a03-b664-83b3d964d8cc`, referenced the original landscape still. Portrait original video: `brand/mobile-story-original.mp4`, Seedance 2.5 job `90f71a46-cbfe-4561-bfa8-8e837256f17a`, starting from the exact portrait still. A single continuous 10-second clip means no inter-clip seam. A 12-frame contact sheet confirms assembly, full-frame textured pillar passage, and the completed cafe; no rotation or exposed corners. Generated furniture placement differs between compositions, while the arch, materials, palette and cafe narrative remain consistent.

Portrait delivery: 181 WebP frames, 720 × 1280, 18 fps, **8,098,706 bytes (8.10 MB)** for the entire sequence. Landscape remains 6,907,246 bytes (6.91 MB). These are measured asset sizes, not measured cellular download speeds. Frames load progressively; the entire sequence is never a loading gate.

Mobile active scroll travel is **3.65 viewport heights**, independently mapped: 0–0.25 opening still; 0.25–0.65 video 0–1 s; 0.65–1.75 video 1–4.5 s; 1.75–2.8 video 4.5–8.25 s; 2.8–3.3 video 8.25–9.8 s; 3.3–3.65 final still. Desktop remains 6 viewport heights. The frame sampling rate is independent of scroll distance.

Mobile QA in Chromium: 320 × 568, 360 × 800, 390 × 844, 430 × 932; no horizontal overflow. Checked brand/menu position, menu keyboard wrapping and Escape, anchor clearance, navigation after story, opening/final composition, and responsive network requests. Fresh mobile pages requested only portrait frames and poster; desktop requested only landscape assets. Breakpoint switching, zero animation requests under reduced motion, and blocked-frame fallback were verified. See `mobile-qa-report.json`. Safe-area CSS is present; actual notched hardware, Safari and real mobile-network timings remain untested. Review page `mobile-preview.html` embeds the same `index.html` at selectable sizes.

## Validation

JavaScript syntax checked. Automated browser checks run against the local production assets in Edge Chromium at 1440 × 960 and 390 × 844. Ordinary wheel scrolling exercised forward and reverse chapters. Checked keyboard step tabs, sector-to-planner selection, local draft save/restore/delete, text download, FAQ, reduced motion, and horizontal overflow. Captured and visually reviewed representative desktop, phone, and transition views. Actual phone hardware and slow mobile networks were not tested. A 720p video can look softer on large or high-density displays.

All frame paths and numbering are checked by `check.mjs`; first, middle and last frames were inspected, along with a 16-frame contact sheet. Detailed browser results are in `qa-report.json`.

## Limits / next integration

This is a marketing site with an explicit local planning demo, not the platform's supplier database, quotation engine, authentication or contract backend. Connect a real signup destination by setting `signupUrl`. Arabic copy is a first editorial draft. The brand mark is a proposed identity because no official logo was supplied. The Site is registered owner-private but is not deployed: automatic approval review rejected the stdin handoff to the source-publishing workflow, with no detailed reason. No live URL is claimed. Resume using the persisted project ID, renewing its short-lived source credential first; do not create another Site. No credentials are stored in this package.
