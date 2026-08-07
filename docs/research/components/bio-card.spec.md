# BioCard Specification

## Overview
- **Target file:** `src/components/BioCard.tsx`
- **Screenshot:** `docs/design-references/home-grid-desktop.png`
- **Interaction model:** static with hover transition

## DOM Structure
- Surface card containing a label span and one paragraph.

## Computed Styles
- Flex column, justify center, radius 16px, 1px border, card background.
- Desktop 1440: 677.33 x 330.67px, padding 40px.
- Tablet 768: 476.44 x 380.58px, padding 40px.
- Mobile 390: 344.67 x 413.33px, padding 32px.
- Label: margin-bottom 16px, 14px/20px, 500, foreground.
- Paragraph desktop/tablet: 18px/29.25px, 400, muted foreground.
- Paragraph mobile: 16px/26px, 400, muted foreground.

## States & Behaviors
- Hover: border to 80% border and background to 10% muted over 150ms.

## Assets
- N/A.

## Text Content
- Label: `Who I Am?`
- Paragraph: `DevSecOps Engineer specializing in hybrid multi-cloud and on-premise infrastructure, alongside distributed systems. Experienced in low-level Linux debugging and building custom internal developer platforms (IDP) using Go and Python. Linux enthusiast and advocate for Immutable Infrastructure (NixOS) and Reproducible Builds, with a strong commitment to open-source contributions.`

## Responsive Behavior
- Spans two of three columns from 768px; one column below.
- Padding changes from 32px to 40px at 640px.
