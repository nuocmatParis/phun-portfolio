# AboutProfileSections Specification

## Overview
- Target: `src/components/AboutProfileSections.tsx`
- Reference: `docs/design-references/about-desktop-full.png`, `about-mobile-full.png`
- Interaction model: static content with hover-only links and skill pills

## Shared card
- All sections use `flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-10`.
- Heading: `mb-8 text-xl font-semibold tracking-tight text-foreground sm:text-2xl`.
- The Skills card spans the full route grid width. Education and Awards are one column each at mobile, two equal columns from `sm`.
- Desktop: Skills 994×513.31; Education and Awards each 489×277.73. Mobile: Skills 344.67×922.5; Education 344.67×285.33; Awards 344.67×289.33.

## Skills
- Inner grid: one column mobile, two columns at `sm`, horizontal gap 32px, vertical gap 40px.
- Group: flex column gap 16px. Label 14px/15.4px, weight 600, tracking -0.35px.
- Pills: flex wrap gap 8px; each `rounded-md bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground`; hover foreground background with background-colored text.
- Groups in row-major order: Programming Languages — Go, Python, Shell/Bash, Nix, SQL. Cloud Platforms — AWS (EKS, EC2), Google Cloud (GKE), Tencent Cloud (TKE), On-Premise. Containers & Orchestration — Kubernetes, Docker. Infrastructure as Code — Terraform, NixOS, Ansible. CI/CD & GitOps — GitHub Actions, GitOps. Operating Systems — Linux, NixOS. Monitoring & Alerting — Prometheus, Grafana, Gatus, Incident.io. Testing — k6.

## Education
- List row flex gap 12px. Graduation icon 20px, muted, hidden below `md`.
- Content flex column gap 4px. Header stacks at mobile, row from `sm`, gap 8px.
- Institution link: “Bina Nusantara University”, 16px/22px weight 500, foreground to muted on hover, with `ArrowUpRightIcon` 16px. URL `https://binus.ac.id`, new tab with noopener noreferrer.
- Date: “2022 - Present”, 12px weight 500 muted; field “Computer Science”, 14px muted.
- Summary: margin-top 8px, 14px muted: “Currently in Final Year (Semester 8). Specializing in Systems Engineering and Cloud Architecture. Researching multi-tenant web generator architectures for MSMEs.”

## Awards
- List vertical space 24px. Each row flex gap 12px. Award icon 20px, muted, hidden below `md`.
- Item one: “Finalist of Chain Fusion Hacker House”; “August 2024”; “ICP Protocol”.
- Item two: “Finalist of ICPC Asia Jakarta National Contest”; “November 2023”; “ICPC Foundation”.
- Titles use 16px/22px weight 500 foreground; dates 12px weight 500 muted; awarder 14px muted.

## Assets
- `GraduationCapIcon`, `AwardIcon`, `ArrowUpRightIcon` from `src/components/icons.tsx`.
- No images, video, or backgrounds.
