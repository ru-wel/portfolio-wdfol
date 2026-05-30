# Issues and Progress Tracker

This file tracks portfolio issues found during the quick codebase scan and the progress made while fixing them.

## Status Key

- `[ ]` - not started
- `[~]` - in progress
- `[!]` - blocked
- `[x]` - fixed and verified

## Issues

| ID | Priority | Status | Area | Issue | Suggested Fix | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| ISSUE-001 | High | [x] | Routing | Invalid project routes such as `/project/3`, `/project/foo`, or stale links can crash `ProjectPage` because `project` can be `undefined`. | Added a not-found guard before reading `project.logo`, `project.image`, or other project fields, then polished the fallback into a compact not-found card. | `npm run build` passes; invalid routes now render a styled fallback panel. |
| ISSUE-002 | High | [x] | Linting | `npm run lint` failed because `src/pages/dump.jsx` was included in linting, then continued failing on lint configuration/code-style errors after the scratch file was removed. | Removed the scratch-file blocker, disabled `react/prop-types` for this plain React app, removed unused React imports, and escaped the quote in `Home`. | `npm run lint` passes with one warning tracked under ISSUE-006. |
| ISSUE-003 | Medium | [x] | Fonts | Build warns that `Px-Grotesk-Bolf.ttf` cannot be resolved; the actual file appears to be `Px-Grotesk-Bold.ttf`. | Correct the font filename in `src/index.css`. | Run `npm run build` and confirm the warning is gone. |
| ISSUE-004 | Medium | [x] | HTML Semantics | `ProfileCard` nested `<a>`/`<Link>` elements inside `<button>` elements. | Replaced the nested interactive elements with styled `<a>` and `<Link>` elements that keep the existing button visual treatment. | `npm run lint` and `npm run build` pass; one carousel warning remains tracked under ISSUE-006. |
| ISSUE-005 | Medium | [x] | Security | External profile links use `target="_blank"` without `rel="noopener noreferrer"`. | Add `rel="noopener noreferrer"` to external links opened in a new tab. | Check rendered anchors or code review. |
| ISSUE-006 | Medium | [x] | Carousel | `FeatureCarousel` had a hook dependency warning and recreated its autoplay interval on every slide change. | Refactored autoplay with stable callbacks, a ref-backed transition lock, and a slide-count based interval effect. | `npm run lint` passes with no warnings; `npm run build` passes. |
| ISSUE-007 | Low | [ ] | Environment | Vite EmailJS values are exposed to the browser by design, so they should not be treated as secrets. | Confirm EmailJS account has domain restrictions/rate limits and consider captcha/spam protection. | Verify settings in EmailJS dashboard. |
| ISSUE-008 | Low | [ ] | Cleanup | `dotenv` is listed as a runtime dependency but does not appear to be used by the Vite client app. | Remove it if no Node-side script needs it. | Run `npm install` after removal, then `npm run build`. |

## Verification Log

| Date | Command | Result | Notes |
| --- | --- | --- | --- |
| 2026-05-30 | `npm run lint` | Pass | ISSUE-006 fixed; lint now passes with no warnings. |
| 2026-05-30 | `npm run build` | Pass | ISSUE-006 compiles successfully. |
| 2026-05-30 | `npm run lint` | Pass | ISSUE-004 fixed; one remaining `FeatureCarousel` hook dependency warning is tracked under ISSUE-006. |
| 2026-05-30 | `npm run build` | Pass | ISSUE-004 compiles successfully; ISSUE-003 font warning is no longer present. |
| 2026-05-30 | `npm run lint` | Pass | ISSUE-002 fixed; one remaining `FeatureCarousel` hook dependency warning is tracked under ISSUE-006. |
| 2026-05-30 | `npm run build` | Pass | Build still has the existing unresolved `Px-Grotesk-Bolf.ttf` warning tracked under ISSUE-003. |
| 2026-05-30 | `npm run build` | Pass | ISSUE-001 design polish compiles successfully; existing unresolved `Px-Grotesk-Bolf.ttf` warning remains under ISSUE-003. |
| 2026-05-30 | `npm run lint` | Fail | No new lint errors from ISSUE-001 design polish; remaining failures are existing tracked cleanup items. |
| 2026-05-30 | `npm run build` | Pass | ISSUE-001 guard compiles successfully; existing unresolved `Px-Grotesk-Bolf.ttf` warning remains under ISSUE-003. |
| 2026-05-30 | `npm run lint` | Fail | No new `ProjectPage` lint error from ISSUE-001; remaining failures are tracked under ISSUE-002, ISSUE-006, and other lint cleanup items. |
| 2026-05-30 | `npm run build` | Pass | Build completed, but warned about unresolved `Px-Grotesk-Bolf.ttf`. |
| 2026-05-30 | `npm run lint` | Fail | 18 errors and 1 warning, including `src/pages/dump.jsx`, prop-types warnings, unused React imports, unescaped quotes, and carousel hook dependency warning. |

## Notes

- Worktree had many modified files before this tracker was created.
- `.npm-cache/` exists locally and is currently untracked.
- `.env` is ignored by git, but `VITE_*` values are still public in browser bundles.
