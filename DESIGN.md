---
name: Reuel Sundiam Portfolio
description: A retro-desktop zine on warm paper, where a full-stack developer's shipped work is filed in ink-ruled windows.
colors:
  paper: "#f3edea"
  paper-sunk: "#e0d5cd"
  ink: "#14100f"
  ink-soft: "#4a4340"
  ink-faint: "#8a807b"
  deep: "#2e1a4f"
  accent: "#2bbd6f"
  danger: "#9c2b2b"
typography:
  display:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 1.7vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  wordmark:
    fontFamily: "PX Sans Nouveaux, Px Grotesk, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
  headline:
    fontFamily: "PX Sans Nouveaux, Px Grotesk, sans-serif"
    fontSize: "1.75rem"
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label-window:
    fontFamily: "PX Sans Nouveaux, Px Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.04em"
  label-section:
    fontFamily: "PX Sans Nouveaux, Px Grotesk, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
  label-control:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.01em"
  label-caps:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  label-nav:
    fontFamily: "Px Grotesk, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  surface: "0"
  control: "5px"
  media: "10px"
  round: "50%"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "24px"
  space-6: "32px"
  space-7: "40px"
  space-8: "48px"
  space-9: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label-control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label-control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-secondary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  button-icon-round:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep}"
    rounded: "{rounded.round}"
    size: "44px"
  button-icon-round-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px"
  nav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label-nav}"
    rounded: "{rounded.surface}"
    padding: "16px 8px"
  nav-link-hover:
    textColor: "{colors.deep}"
  nav-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  skill-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.surface}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
  project-panel:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "16px"
  role-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.surface}"
    padding: "8px"
---

# Design System: Reuel Sundiam Portfolio

## Overview

**Creative North Star: "The Desktop Zine"**

The site is a small retro desktop printed on warm paper. Every block is a flat, ink-ruled rectangle; the few objects you can press sit on a hard black offset like a sticker lifted off the page, and a faint grain keeps the cream field from reading as a screen colour. The world borrows two things from an old operating system (a window with a title bar and three dots, and a pixel typeface) and uses each sparingly, so the page reads as a zine about the work rather than a costume.

Density is moderate and documentary. Content is filed, not showcased: ruled lists, bordered cards, small-caps context lines, and one purple panel that stands in for the project on its own page. Hierarchy comes from border weight, a single filled button, and a body-face headline at display size, not from colour or size jumps. Colour is spent in one place at a time: purple is structure, green is the thing your cursor is on.

Motion is short and physical: 220ms on a gentle ease-out curve for state changes, cards that fade up once as they enter, and a slide carousel that pauses on request. Under reduced motion everything is simply there.

**Key Characteristics:**
- Warm paper ground with a 3.5% fractal grain overlay above everything.
- Ink borders in three weights that encode emphasis, never nesting depth.
- Hard offset shadows only; no blur, no ambient glow.
- One window-chrome hero panel per page, labelled in lowercase italic pixel type.
- The name, in the pixel face, is the only brand mark.

## Colors

One warm neutral family, one dark structural purple, and one green accent that is never used as text on paper.

### Primary
- **Deep Plum** (deep): structure and emphasis. The project cover band's ground, hover text for links and nav, the focus ring, list markers, the scrollbar thumb, the carousel arrow glyphs and the favicon field. Paper on plum measures 13.2:1.

### Secondary
- **Terminal Green** (accent): the pressable state. Fills behind ink text on hover (buttons, arrows), the active-tab marker bar, the active carousel dot, the offset colour under a hovered button or focused field, and the underline that draws in under a project title. Ink on green measures 7.75:1; green on paper is 2.1:1.

### Tertiary
- **Brick** (danger): form errors only. Error text, and the field border and offset on an invalid input (6.5:1 on paper).

### Neutral
- **Warm Paper** (paper): the page ground and every card, nav cell and control at rest.
- **Sunk Paper** (paper-sunk): the recessed fill of form fields and the hover fill of the quiet Pause/Play control. It steps 1.24:1 from paper, the point where the recess becomes visible.
- **Warm Ink** (ink): all text, every border, the hard offset shadows, the active nav cell and the one filled button.
- **Soft Ink** (ink-soft): secondary lines (client name, role meta, pager direction, carousel descriptions, placeholders). 8.35:1 on paper.
- **Faint Ink** (ink-faint): the scrollbar track hairline only. At 3.3:1 it is not a text colour.

### Named Rules
**The Green Is Not Ink Rule.** Terminal Green never sets text on paper (2.1:1). It fills behind ink text, marks the active tab, and colours decorative offsets. Hover text uses Deep Plum.

**The One Warm Family Rule.** Surfaces, text and shadows share one warm hue; shadows are ink at 90%, not neutral black, and no cool grey enters the page.

## Typography

**Display Font:** PX Sans Nouveaux (with Px Grotesk, sans-serif)
**Body Font:** Px Grotesk (with Helvetica Neue, Helvetica, Arial, sans-serif)

**Character:** A bitmap-flavoured display face carries identity (the name, window and section labels, the project title) while a plain grotesk does all the reading and all the headlining. The pixel face is spoken quietly: lowercase, italic, lightly tracked.

### Hierarchy
- **Display** (Px Grotesk 700, viewport-tracked clamp from 28px to 40px, line-height 1.1, max 22ch): the hero sentence, which is the h1 on Home, About, Projects and Contact. The only size allowed to track the viewport.
- **Wordmark** (PX Sans Nouveaux 400, 18px): "Reuel Sundiam", sentence case, linking home. On desktop it runs up a 1px-ruled tile at the top of the nav rail, set vertically and rotated to read bottom to top like a book spine; at 1024px and below it sits at the left of the fixed top bar.
- **Headline** (PX Sans Nouveaux, 28px): the project title on a project page, on the purple panel.
- **Title** (Px Grotesk 700, 21.6px): the featured project's name; the carousel's feature title uses the same size at 600.
- **Title Small** (Px Grotesk 700, 18px): role titles in Experience and the pager's project names. Project-card titles use the same size at 500.
- **Body** (Px Grotesk 400, 16px, line-height 1.65, max 65ch): window copy and carousel descriptions. On the purple panel body gets 1.7 leading and 0.01em tracking.
- **Body Small** (Px Grotesk 400, 14px, line-height 1.6): card descriptions, experience points, featured summaries.
- **Window Label** (PX Sans Nouveaux 400 italic, 16px, lowercase, 0.04em): the page name in the hero window's title bar.
- **Section Label** (PX Sans Nouveaux 400 italic, 14px, lowercase, 0.04em): each section's h2, set over a 2px ink rule.
- **Control Label** (Px Grotesk 600, 14px, 0.01em): button and link-button text.
- **Small Caps** (Px Grotesk 600, 12.5px, uppercase, 0.08em): context lines (school, client, capstone) and the pager's Previous/Next.
- **Nav Label** (Px Grotesk 500, 12.5px, uppercase, 0.05em): tab labels under their icons.

Weights are 400, 600 and 700 in practice. The stylesheet also declares 500 and 600 as synthesised faces pointing at the Regular and Bold files, so 500 renders as Regular and 600 renders as Bold. There is no 300.

### Named Rules
**The Pixel Is Display Only Rule.** PX Sans Nouveaux sets the name, window and section labels, and the project title. Never body copy, buttons or small caps: below about 14px it stops being legible.

**The Sentence Is The Headline Rule.** Page names are labels. The h1 on Home, About, Projects and Contact is the hero sentence in the body face; the page name sits above it as a lowercase window label.

## Layout

Desktop (above 1024px) is a two-track grid inside a 1180px shell with 48px top padding and 32px sides: a 76px sticky nav rail and one content frame set 40px off it, on every route. The content frame is a long document with a 3px ink border and 24px padding that grows to its content, so the document scrolls, not a panel. The rail pins at 48px from the top and carries the name (wordmark tile), the four tabs and the résumé on every route.

There is no side column. A block the height of its own content (the old profile card, or the old purple project panel) beside a page-long frame either left a blank gap under it or, stretched to match, an empty box. Each page heads its own frame instead. Home introduces Reuel once, in its hero window: a 4:5 portrait (2px ink edge, cropped from the landscape source) beside the headline and intro, then the résumé and contact buttons and the social icons. Contact repeats the social icons under its intro as the direct channels.

At 1024px and below the grid becomes one 680px column under a fixed top bar (wordmark left, tabs and the résumé button right, 2px ink rule beneath), with 104px of top clearance and 24px between blocks. At 480px and below the tabs collapse behind a bars/xmark button into a dropdown revealed by a clip from the top, and the content frame's padding drops to 12px. At 640px and below the Home portrait moves above the headline as a 3:2 band.

Spacing is a 4px-based scale (space-1 to space-9); every padding, gap and margin comes from it. Prose is capped at 65ch. Card grids use auto-fit tracks of at least 200px, fixed at two columns from 1220px; the certificate grid is always two columns (one below 560px), because the column count must not depend on how many items are showing.

**The Shared Tracks Rule.** Every route uses the same two tracks, rail and frame, so the nav never moves sideways between pages. Nothing sits beside the frame.

## Elevation & Depth

Depth has one language: the hard offset block. There is no blur, ambient shadow or tonal layering. Surfaces at rest are flat and separated by ink borders; texture is the grain overlay's job. Nothing rests on an offset except form fields; everything else earns its offset by being pressable.

### Shadow Vocabulary
- **Hard** (`box-shadow: 4px 4px 0 rgba(20, 16, 15, 0.9)`): resting shadow of form fields; the hover lift of cards, pager steps and the 404 link.
- **Hard Small** (`box-shadow: 3px 3px 0 rgba(20, 16, 15, 0.9)`): resting shadow of free-standing buttons and the carousel arrows.
- **Hard Accent** (`box-shadow: 3px 3px 0 #2bbd6f`): replaces Hard Small on a hovered button and Hard on a focused field.
- **Hard Danger** (`box-shadow: 3px 3px 0 #9c2b2b`): an invalid field.

### Named Rules
**The Lift Means Click Rule.** The hover lift (hard offset plus a 2px translate up-left) is only for things that are themselves click targets: cards that link, pager steps, buttons. Press collapses the shadow and nudges the element 1 to 3px down. Hero windows and certificate cards do not lift; nothing in them is a single target.

## Shapes

Corners follow four rules and nothing uses a fifth. Surfaces are square (0): panels, windows, cards, nav cells, tags, anything that tiles or shares an edge. Free-standing interactive controls are gently rounded (5px): buttons, inputs, link-buttons, the focus ring. Images and image frames get 10px. Circular ornaments and icon buttons are fully round (50%): window dots, the zoom badge, carousel arrows and dots.

Borders come in three widths that encode emphasis, not nesting: strong (3px) frames a whole block of the page (the content column and the 404 card); default (2px) is an ordinary surface or control edge (windows, cards, inputs, buttons); divider (1px) rules inside a surface (header underlines, cell edges, tag outlines). Screenshots are cropped from the top at a locked ratio (279:173 on cards, 16:10 in the carousel) so titles below them stay level.

## Components

### Buttons
Tactile, square-shouldered stickers.
- **Shape:** gently rounded (5px), 2px ink border, Hard Small offset at rest.
- **Primary:** Warm Ink fill with paper text, one per context, reserved for the résumé ("the thing a recruiter came for"). It appears in the Home hero, the project footer, and as the résumé tile in the nav rail. The rail is its own context, so a page may show the rail tile and one content-column résumé button. All free-standing buttons share one global `.button` / `.button--primary` class.
- **Secondary:** paper fill, ink text, same border and offset.
- **Hover / Focus:** fill turns Terminal Green with ink text and the offset turns green; press collapses the offset and moves 2 to 3px down. Focus is the global 2px Deep Plum ring at 2px offset.
- **Disabled:** 60% opacity (45% on certificate cards), no offset, progress or not-allowed cursor.
- **Quiet link:** underlined text at a 4px offset that turns Deep Plum on hover, for secondary routes ("See all 8 projects").

### Chips
- **Skill tag:** square paper tag with a 1px ink outline, 14px body at 500, 4px by 8px padding. Static; no hover.
- **Role pill (purple panel):** a 1px paper-outlined pair: role on a paper fill in Deep Plum, client on the plum ground.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** paper; the project cover band is Deep Plum.
- **Shadow Strategy:** flat at rest; linked cards lift on hover (see Elevation).
- **Border:** 2px ink, with 1px or 2px internal rules between image, title and description.
- **Internal Padding:** 8px to 12px inside cells; 24px inside the content frame.
- **Experience list:** one bordered block with roles ruled apart by 1px lines, read as a record rather than cards; Deep Plum list markers.
- **Featured project:** a single block (not a grid cell) with image, name, client in Soft Ink directly under it, summary, then small-caps context and stack over a 1px rule, and a secondary button.

### Inputs / Fields
- **Style:** Sunk Paper fill, 2px ink border, 5px radius, Hard offset, 12px padding, 16px text on every viewport (below that iOS zooms on focus). Visible labels above each field in 14px at 500.
- **Focus:** border turns Deep Plum and the offset turns green; the border carries the indicator, since green alone is under 3:1.
- **Error:** Brick border and offset, Brick 14px message below.

### Navigation
- **Desktop rail:** the wordmark tile, then a column of square cells with 1px ink edges, icon over uppercase label, then the résumé tile: an ink-filled pressable block (2px edge, 5px radius, small hard offset, green on hover) set 12px below the tabs, because it downloads a file rather than opening a page. Hover turns text Deep Plum and nudges the icon up 1px. The current page is an ink cell with paper text and a 3px green bar on its right edge, announced to screen readers.
- **Top bar (1024px and below):** the wordmark on the left, tabs in a row on the right followed by the résumé tile, with the green bar moving to the bottom edge of the active cell. In the 480px dropdown the résumé wraps to its own centred row.
- **Phone (480px and below):** tabs drop from a bars/xmark button, revealed by a clip and short slide; hidden links leave the tab order.

### Window Hero Panel (signature)
The one place per page that keeps desktop chrome: a 2px-bordered window with a title bar (1px rule beneath) holding a lowercase italic pixel page label and three 12px round dots, the last one filled ink. It holds the hero sentence and intro copy. It does not lift. A page gets exactly one; on project pages the purple panel is the hero and the features section is a plain labelled section.

### Project Cover Band (signature)
The first block in a project page's content frame, in the slot the hero window takes elsewhere: a Deep Plum band with the window's 2px ink edge and square corners, flat. A paper-outlined "All projects" back link runs across the top; below it, the project text on the left (role pills, live and GitHub icon links in green on hover, the pixel title at display size over a 1px paper rule, a small-caps context line, paper body text) and the zoomable main screenshot on the right, 1px paper edge, cropped from the top at 279:173. At 1024px and below it stacks as back link, screenshot, text. It sets the focus ring to paper, since plum on plum is invisible. The features carousel below it is capped at 760px and centred.

### Feature Carousel
16:10 top-cropped screenshots in a 10px-radius, 1px-bordered frame, a 21.6px title over a rule and a Soft Ink description. Controls: 44px round arrow buttons (paper, plum glyph, Hard Small, green on hover), 10px dots in 28px hit areas (green and enlarged when active), and a visible labelled Pause/Play control with a 1px border that fills Sunk Paper on hover. Off-screen slides are inert. Slides move in 450ms.

### Zoomable Screenshot
Every screenshot is a bare button: zoom-in cursor, a 32px round paper badge with a magnifier in the bottom-right corner (the affordance on touch), which scales to 1.1 on hover, and a full-size WebP viewer on click.

### Project Pager
Two bordered cells (Previous, Next) with a small-caps direction over an 18px project name, lifting on hover, followed by a CTA row with the one filled résumé button.

## Do's and Don'ts

### Do:
- **Do** take every padding, gap and margin from the 4px spacing scale, and every border from the three widths (3px, 2px, 1px) by emphasis.
- **Do** keep radii to the four rules: 0 for surfaces, 5px for controls, 10px for media, 50% for round things.
- **Do** use the hard offset shadow family for depth, and give the hover lift only to elements that are themselves click targets.
- **Do** use Deep Plum for hover text and the focus ring, and set the ring to paper on a plum surface.
- **Do** keep one window-chrome hero panel per page, labelled with the lowercase italic page name, and make the h1 the hero sentence in the body face.
- **Do** lead project content with who it was for (the client), with school or role context as small-caps small print.
- **Do** let the name in the pixel face carry the brand.
- **Do** keep form fields at 16px text on phones, with labels visible above them.
- **Do** serve screenshots as 800px WebP with a full-size WebP for the viewer, with width and height set to reserve the box.

### Don't:
- **Don't** set Terminal Green text on paper; it measures 2.1:1.
- **Don't** use PX Sans Nouveaux for body copy, buttons or small caps.
- **Don't** add a logo, monogram or crest; the name is the brand mark.
- **Don't** use blurred, ambient or coloured-glow shadows, or a fourth border width.
- **Don't** add a second filled button in the same context; the filled button is the résumé.
- **Don't** put window chrome on more than one panel per page.
- **Don't** use weight 300.
