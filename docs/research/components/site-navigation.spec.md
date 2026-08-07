# SiteNavigation Specification

## Overview
- **Target file:** `src/components/SiteNavigation.tsx`
- **Screenshots:** `docs/design-references/desktop-header.png`, `docs/design-references/mobile-navigation.png`
- **Interaction model:** scroll-driven header state and click-driven theme toggle

## DOM Structure
- Desktop `header#site-header` contains `.site-container`, logo link, three-link nav, and theme button.
- Mobile fixed shell contains a rounded top bar, three-link nav, and the same theme button.

## Computed Styles
- Desktop header: fixed top 0, z-index 50, height 64px, width 100%; shown from 768px.
- Desktop inner at 1440 capture: x 127.33, width 1170px, height 63.33px; flex, centered, space-between.
- Logo: Yuji Mai, 20px/28px, synthesized 700, -0.5px tracking, width 97.5px.
- Desktop nav: flex, 8px gap; links 36px high, 16px horizontal padding, 14px/20px, 500, radius 6px.
- Active link: `#171717` background and `#fafafa` text in dark mode.
- Theme button: 36px square, radius 6px, 1px border; icon 19.2px.
- Mobile shell: fixed bottom 0, left 50%, translated -50%, z-index 50, height 64px, width `calc(100% - 32px)`, max-width 1024px.
- Mobile bar: 12px 16px padding, radius 16px 16px 0 0, border top/sides, 80% background, 12px backdrop blur.
- At 390 capture: shell x 16, width 342.67; nav width 212.48; theme x 306.

## States & Behaviors
- Trigger `window.scrollY > 0`: transparent header border to `var(--border)`; background to 60% background; backdrop blur to 12px. Transition 300ms cubic-bezier(0.4,0,0.2,1).
- Inactive link hover: transparent/muted text to muted background/foreground text in 150ms.
- Theme button toggles `.dark`, saves `localStorage.theme`, and uses `theme-transition-lock` for 10ms.
- Dark is the initial theme. Light values are background `#fff`, foreground `#0a0a0a`, muted `#f5f5f5`, muted text `#737373`, border `#e5e5e5`.

## Assets
- `SunIcon` and `MoonIcon` from `src/components/icons.tsx`.
- No raster assets.

## Text Content
- Logo: `ラエクセラ`
- Links: `Home`, `About`, `Projects`
- Destinations: `/`, `/about`, `/projects`

## Responsive Behavior
- 768px and wider: desktop header visible, mobile bar hidden.
- Below 768px: desktop header hidden, mobile bottom bar visible.
