# ExperienceTimeline Specification

## Overview
- Target: `src/components/ExperienceTimeline.tsx`
- Reference: `docs/design-references/about-desktop-full.png`, `about-mobile-full.png`
- Interaction model: click-driven independent disclosure controls plus link hover

## Container and typography
- Section: `flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-10`.
- Desktop measured 994×766.73 at x=215.33, y=286; mobile 344.67×935.33 at x=15, y=315.59.
- Heading: margin-bottom 32px, 20px/22px at mobile and 24px/26.4px at `sm`, weight 600, tracking -0.5/-0.6px.
- Timeline desktop: one-column below 640; at `sm` use `grid-cols-[auto_auto_1fr]`, column gap 32px.
- Body text: 14px, muted foreground, relaxed 22.75px line height.

## Entries (verbatim)
1. Aug 2025 – Present; 10 mos; current. DevSecOps Engineer · PT. Verihubs Inteligensia Nusantara; `https://verihubs.com`; Jakarta, Indonesia • Hybrid. Summary: “Managing hybrid multi-cloud and on-premise infrastructure, focusing on robust DevSecOps solutions and platform reliability.” Responsibilities: “Orchestrated hybrid Kubernetes clusters across Tencent Cloud, AWS, GCP, and on-premise environments.”; “Engineered an automated P0 incident alerting pipeline using Gatus, Incident.io, and Macrodroid.”; “Executed production root cause analysis (RCA) utilizing advanced Linux systems analysis, including syscall tracing and kernel auditing.”; “Developed custom CLI tooling in Go and Python for infrastructure automation.”; “Conducted cluster capacity planning and production load testing for high-throughput AI services using k6.”; “Hardened cluster security via network policies, container scanning, and least-privilege IAM roles.”; “Managed Wibu CodeMeter infrastructure to enforce cryptographic licensing, DRM, and intellectual property protection for proprietary AI models.”
2. Feb 2025 – Aug 2025; 6 mos. Back-End Engineer Intern · PT. Verihubs Inteligensia Nusantara; `https://verihubs.com`; Jakarta, Indonesia • Hybrid. Summary: “Developed high-performance Go services and laid the groundwork for automated MLOps pipelines.” Responsibilities: “Architected foundational MLOps pipelines for automated AI model training and deployment.”; “Developed high-concurrency RESTful Go APIs for internal multi-face recognition auto-tagging systems.”; “Optimized SQL schemas and queries for large-scale biometric data processing.”; “Containerized legacy applications, bridging application code and infrastructure deployment.”
3. Oct 2024 – Oct 2025; 1 yr. Back-End Core Team · GDGoC BINUS Bandung; `https://gdg.community.dev/gdg-on-campus-binus-university-bandung-bandung-indonesia`; Bandung, Indonesia • Hybrid. Summary: “Core contributor for community event backend systems.” Responsibilities: “Designed backend architectures for event registration systems.”; “Mentored junior members on Go best practices and cloud-native concepts.”

## Timeline detail
- Date column: 12px, weight 500, muted; date line uses gap 6px. Current end date is semibold foreground.
- Duration: 12px, muted at 70% opacity. On mobile put duration at right with an 8px green current dot or a muted bullet.
- Desktop marker column is 10px wide. Current marker: green 8px dot with one-second ping. Past: 10px bordered circle. Connectors are 1px border-color vertical rules.
- Position: 16px/22px, weight 600. Company link: 14px, weight 500, muted to foreground on hover, external `DiagonalArrowIcon` appears with translate/opacity transition.
- Location: margin-top 4px, 12px muted.
- Summary/responsibilities block: margin-top 16px, flex column gap 16px.
- “Key Responsibilities:” is medium foreground; list margin-left 16px, outside discs, 6px row spacing, muted markers at 50%.

## Disclosure states
- Each entry owns independent state. Default content wrapper: `height:40px`, `opacity:0.6`, `overflow:hidden`; button says “Show more”.
- Expanded: height auto, opacity 1, button says “Show less”, chevron rotates 180deg.
- Button: width fit-content, gap 4px, 12px weight 500, muted to foreground on hover; chevron 14px and moves down 2px on hover.
- Use a Client Component. Preserve all responsibility content in the DOM.

## Responsive behavior
- At mobile, dates/durations are a full-width row above content; desktop timeline markers are hidden.
- At `sm`, date, marker, and content form three columns; first two content rows have 40px bottom margin.
- No page entrance animation or scroll-driven switching.

## Assets
- `ChevronDownIcon`, `DiagonalArrowIcon` from `src/components/icons.tsx`.
- No images, video, or backgrounds.
