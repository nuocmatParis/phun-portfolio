# SocialLinksCard Specification

## Overview
- **Target file:** `src/components/SocialLinksCard.tsx`
- **Screenshot:** `docs/design-references/home-grid-desktop.png`
- **Interaction model:** link clicks and hover transitions

## DOM Structure
- Surface card contains a full-width grid of four square anchor controls, each with one extracted SVG.

## Computed Styles
- Outer card: flex, center both axes, radius 16px, 1px border, card background.
- Desktop: 330.67px square, padding 32px.
- Tablet: 230.23 x 380.58px, padding 32px.
- Mobile: 344.67 x 111.17px, padding 24px.
- Grid: width 100%, 16px gap; two columns from 768px, four columns below.
- Desktop control: 124.67px square; tablet: 74.45px; mobile: 61.83px.
- Control: flex center, radius 16px, 1px border, background color `var(--background)`.
- Icons: 32px from 768px, 24px below; muted foreground; stroke 1.5 with round caps/joins.

## States & Behaviors
- Control hover: 50% muted background and 80% border over 150ms.
- Icon hover via group: muted foreground to foreground over 150ms.
- Links open in a new tab. Email uses `mailto:`.
- Outer card uses the shared 10% muted hover treatment.

## Assets
- `EmailIcon`, `LinkedinIcon`, `GithubIcon`, `TelegramIcon` from `src/components/icons.tsx`.

## Text Content
- Email: `mailto:raexera@gmail.com`
- LinkedIn: `https://linkedin.com/in/rayhankafipratama`
- GitHub: `https://github.com/raexera`
- Telegram: `https://t.me/raexera`

## Responsive Behavior
- One of three columns from 768px; one column below.
- Grid switches from four columns to two at 768px.
