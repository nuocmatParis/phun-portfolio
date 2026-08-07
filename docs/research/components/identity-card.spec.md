# IdentityCard Specification

## Overview
- **Target file:** `src/components/IdentityCard.tsx`
- **Screenshot:** `docs/design-references/home-grid-desktop.png`
- **Interaction model:** time-driven status ping plus hover transition

## DOM Structure
- Full-row surface card containing status pill, `h1`, and wrapping metadata row with title, slash, and handle.

## Computed Styles
- Card: flex column, justify center, radius 16px, 1px border, card background.
- Desktop: 1024 x 277.86px, padding 48px.
- Tablet 768: 722.67 x 264.67px, padding 48px.
- Mobile 390: 344.67 x 285.85px, padding 32px.
- Status: width fit-content, 6px 12px padding, 8px gap, rounded full, 12px/16px, 500, muted text, 50% muted background.
- Status dot: 8px circle, green `oklch(0.723 0.219 149.579)`.
- Heading desktop: 72px/79.2px, 700, -1.8px; tablet: 60px/66px, -1.5px; mobile: 36px/39.6px, -0.9px.
- Status-to-heading gap: 24px; heading-to-metadata: 16px.
- Metadata row: flex-wrap, align center, 12px gap.
- Title desktop/tablet: 24px/26.4px, 500, -0.6px; mobile: 20px/22px, -0.5px.
- Handle desktop/tablet: monospace 20px/28px, 500; mobile 18px/28px.

## States & Behaviors
- Ping animation: scale to 2 and opacity to 0 by 75%, duration 1s, cubic-bezier(0,0,0.2,1), infinite.
- Card hover: border to 80% border and background to 10% muted over 150ms.

## Assets
- N/A.

## Text Content
- `DevSecOps Engineer @ Verihubs`
- `Rayhan Kafi Pratama`
- `DevSecOps Engineer`
- `/`
- `@raexera`

## Responsive Behavior
- Full three-column span from 768px; one column below.
- 640px switches padding 32px to 48px and heading 36px to 60px.
- 960px switches heading 60px to 72px.
