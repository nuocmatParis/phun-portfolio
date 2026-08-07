# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/raexera-desktop-full.png`
- **Interaction model:** static with text hover

## DOM Structure
- Footer contains a max-width 1024px site container, top-bordered section, centered row, and copyright paragraph.

## Computed Styles
- Footer is normal flow, full width, desktop/tablet only.
- Container: max-width 1024px with 15px inline padding.
- Section: 32px vertical padding and 1px top border.
- Captured height: 84.67px.
- Text: 14px/20px, 400, -0.35px tracking, muted foreground, centered.

## States & Behaviors
- Text hover changes from muted foreground to foreground over 300ms.

## Assets
- N/A.

## Text Content
- `© 2026 Rayhan Kafi Pratama. All rights reserved.`

## Responsive Behavior
- Visible from 768px upward.
- Hidden below 768px.
