# ProjectGrid Specification

## Overview
- Target: `src/components/ProjectGrid.tsx`
- Reference: `docs/design-references/projects-desktop-full.png`, `projects-mobile-full.png`
- Interaction model: external-link click and parent-card hover

## Grid and cards
- Grid: width full, one column mobile, two equal columns from `sm`, gap 16px.
- Desktop measured grid 994×658.83 with 489px columns; tablet 722.67×854.92; mobile 344.67×1441.75.
- Card: `group flex h-full items-center rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border/80 hover:bg-muted/10 sm:p-8`.
- Card link fills height and width, flex column gap 16px; target `_blank`, rel `noopener noreferrer`.
- Title 18px/25px weight 600 tracking -0.45px. Description and bullet list: 14px relaxed muted. List is inside discs with 4px row spacing and flexes to equalize row cards.
- Tags row margin-top 16px, wrap, gap 8px. Tag: rounded-lg border, muted/20 background, 10px horizontal and 4px vertical padding, 12px weight 500 muted.
- Diagonal arrow 16px, starts translated (-4px,+4px), rotated -45deg and transparent. Group hover returns translate to zero, foreground, opacity 1 over 300ms.
- Card hover uses 150ms color transition; tags move to border/80, muted background, foreground text.

## Content (verbatim)
- MyLinx — “Multi-Tenant Web Generator for MSMEs”; `https://mylinx.tech/`; highlights: “Architected a scalable multi-tenant platform enabling MSMEs to deploy customized e-commerce storefronts and portfolios via dynamic subdomain routing.”, “Engineered real-time storefront customization features and a secure checkout flow integrated seamlessly with WhatsApp.”, “Containerized the application and deployed the production environment using Docker and Nginx.”; PHP, Laravel, Docker, Nginx.
- Shusseki — “Biometric Attendance System”; `https://github.com/raexera/shusseki`; highlights: “Built a Python-based facial recognition pipeline achieving 95% accuracy.”, “Optimized image processing latency for real-time logging.”; Python, OpenCV, Dlib, SQL.
- Yoru — “Event-Driven Linux Workspace Automation”; `https://github.com/raexera/yoru`; highlights: “Engineered a highly optimized, low-overhead Linux environment utilizing Arch Linux and AwesomeWM.”, “Developed custom Lua modules for system resource monitoring, process management, and workflow automation.”; Linux, Lua, Shell, AwesomeWM.
- Yuki — “Declarative Infrastructure & Immutable Workspace”; `https://github.com/raexera/yuki`; highlights: “Architected a fully reproducible, declarative system configuration utilizing Nix Flakes and Home Manager.”, “Managed immutable developer workspace provisioning, ensuring zero configuration drift across physical workstations.”; Nix, NixOS, Infrastructure as Code, Shell.

## Responsive measurements
- Desktop card sizes: MyLinx/Shusseki 489×353.42, Yoru/Yuki 489×289.42; padding 32px.
- Tablet card widths 353.33; first row height 433.42, second row 405.5; padding 32px.
- Mobile widths 344.67; heights 417.42, 273.42, 313.42, 389.5; padding 24px.

## Assets
- `DiagonalArrowIcon` from `src/components/icons.tsx`.
- No images, video, or backgrounds.
