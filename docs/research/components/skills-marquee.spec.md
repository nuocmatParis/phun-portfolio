# SkillsMarquee Specification

## Overview
- **Target file:** `src/components/SkillsMarquee.tsx`
- **Screenshot:** `docs/design-references/home-grid-desktop.png`
- **Interaction model:** time-driven with hover pause

## DOM Structure
- Full-row surface card contains a masked overflow viewport and one max-content track.
- Track contains two identical, shrink-free skill groups for a seamless loop.

## Computed Styles
- Card: height 110.67px at all captures, padding 32px 0, radius 16px, overflow hidden.
- Mask: width 100%, height 45.33px, overflow hidden; linear mask transparent to black 15%, black through 85%, then transparent.
- Track: flex, max-content width measured 4953.6px, transform translateZ(0), will-change transform.
- Group: flex, shrink 0, align center, 24px gap and 24px right padding.
- Pill: flex center, shrink 0, 12px 20px padding, radius 8px, 1px border, 14px/20px, 500, muted text, 20% muted background.

## States & Behaviors
- Track animation: `marquee`, 25s, linear, infinite, translate X 0 to -50%.
- Hovering the track pauses the animation.
- Pill hover: foreground text, full muted background, 80% border over 150ms.
- Outer card uses shared surface hover.

## Assets
- N/A.

## Text Content
- `Go`, `Python`, `Shell/Bash`, `Nix`, `SQL`, `AWS (EKS, EC2)`, `Google Cloud (GKE)`, `Tencent Cloud (TKE)`, `On-Premise`, `Kubernetes`, `Docker`, `Terraform`, `NixOS`, `Ansible`, `GitHub Actions`, `GitOps`, `Linux`, `Prometheus`, `Grafana`, `Gatus`, `Incident.io`, `k6`.

## Responsive Behavior
- Full three-column span from 768px; one column below.
- Size and motion timing remain identical at desktop, tablet, and mobile.
