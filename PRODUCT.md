# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: hiring managers, recruiters, and engineering leads** evaluating Reuel Christian Sundiam for full-stack, automation, and AI-integration roles. They usually arrive from a résumé, LinkedIn, or a job application, scan quickly, and decide whether to open a project, download the résumé, or make contact.
- **Secondary: prospective freelance clients** (small businesses, organizations, student groups) looking for someone to build or maintain a website or automate a process, similar to past client work (The Angelite, Baumann Fit Box, MNHS LMS).

## Product Purpose

A personal portfolio that serves as Reuel's current professional record: who he is, what he has built, what his part was, and how to reach him. Success means a visitor can judge his range and depth fast, then take a next step: open a live project or repo, download the résumé, or send a message.

## Positioning

A full-stack developer who builds AI and automation systems: a generalist across frontend and backend, whose edge is turning manual processes into reliable automated systems (n8n, third-party integrations, LLM/RAG tooling). The distinguishing evidence is professional work at The Back Room Offshoring Inc. plus shipped, live systems built for real organizations (a construction company HRIS, a university publication, a local high school LMS, a gym), each with a per-feature account of what Reuel personally built.

## Operating Context

- Visitors often open the site mid-evaluation, next to a résumé or job posting, and may be on mobile.
- Each project has a detail page (`/projects/:slug`) with a tech stack, a longer description, live and GitHub links, role tags (e.g. Backend, Client, School / Capstone), and per-feature screenshots with descriptions of his contribution.
- Next steps currently available: résumé PDF download, contact form (EmailJS), and email, LinkedIn, GitHub, and Facebook links.
- Deployed on Netlify at https://rcgs-portfolio.netlify.app/ (SPA redirects in `public/_redirects`).

## Capabilities and Constraints

- React 18 + Vite + SCSS, react-router-dom, Motion for animation, react-photo-view for screenshot viewing, EmailJS for the contact form.
- Content is data-driven: `src/assets/projects.js`, `skills.js`, `certificates.js`.
- Routes: Home, About (bio, skills, certifications), Projects, Project detail, Contact, Not Found.
- EmailJS `VITE_*` keys are public by design, so treat them as non-secret (see ISSUE-007 in `ISSUES_TRACKER.md`).
- Work history lives in `src/assets/experience.js` and renders on Home above the featured project.
- **Confidentiality:** internal Back Room work is public only in generic form. Don't name the proprietary AI accounting assistant or other internal tools, and don't show screenshots of them.
- Keep the phone number off the site; contact goes through the form and email.
- Source of truth for career facts: Reuel's CV (`ai-job-search/cv/main_sourceu_web_developer_ai_automation.txt`, outside this repo). `public/RCGS-RESUME.pdf` is out of date until Reuel replaces it.

## Brand Commitments

- Name: Reuel Christian Sundiam. The name itself is the brand mark: a "Reuel Sundiam" wordmark in PX Sans Nouveaux, with a pixel "RS" favicon (`public/favicon.svg`, `public/images/favicon/`). The former RCGS monogram (`public/images/wel-logo-final.png`) was retired on 2026-09-30 and is no longer referenced.
- Handle "ru-wel" (GitHub, freeCodeCamp).
- Former tagline "Good things come one line at a time." was retired from the site on 2026-09-30: it read as a yearbook quote next to the positioning headline. Don't reintroduce it without asking.
- Voice: first-person, earnest, plain-spoken.

## Evidence on Hand

- 8 projects with screenshots in `public/images/`: ARISE HRIS (capstone, live + repo), The Angelite (client, live), InternStreet (live + repo), Baumann Fit Box (client, live), MNHS LMS (client, live + repo), Caution Coffee, AREA, PRGM Cheatsheets.
- 9 certifications (CompTIA ITF, Cisco ITN and Cybersecurity Essentials, Coursera Figma, freeCodeCamp ×2, HubSpot SEO, and others), with PDFs in `public/`.
- Experience: AI-Integrated Web Developer at The Back Room Offshoring Inc. (2025 to present); AI / Web Developer Intern at the same company (Jun to Sep 2025). Confirmed figure: 100+ automations migrated from Zapier to n8n, done as a team.
- Education: BS Information Technology, Web Development specialization, Holy Angel University, 2022 to 2026, Summa Cum Laude (conferred April 2026).
- Résumé: `public/RCGS-RESUME.pdf` (pending update). Portrait: `public/images/rcgs.jpg`.
- Not yet on the site: LinkedIn Learning certificates (React Testing and Debugging, Learning Docker), which need links or files.
- **Absent, never fabricate:** testimonials, client quotes, metrics beyond those in the CV, pricing or freelance rates.

## Product Principles

1. **Proof over claims.** Lead with shipped, live work and his specific contribution, not adjectives.
2. **Fast judgment for evaluators.** A recruiter should grasp range, depth, and the next step within one scan.
3. **Show both halves.** As a generalist, frontend craft and backend substance should both be visible, not one subordinated to the other.
4. **Current and truthful.** The site reflects where Reuel actually is professionally. Stale or inflated framing hurts it.
5. **One clear next step.** Résumé, project, or contact is always within reach.

## Accessibility & Inclusion

Keep the existing accessibility baseline: semantic landmarks and headings, visible form labels, reduced-motion support for reveal animations, descriptive link and button labels. Aim for WCAG 2.1 AA.
