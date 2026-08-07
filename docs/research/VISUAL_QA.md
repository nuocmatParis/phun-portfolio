# Visual QA — raexera.is-a.dev

## Coverage

- Target: `https://raexera.is-a.dev/`
- Clone: `http://localhost:3000/`
- Viewports: 1440×900 desktop, 768×1024 tablet, 390×844 mobile
- Themes: dark and light
- Reference captures: `docs/design-references/raexera-*.png`
- Clone captures: `docs/design-references/clone-*.png`

## Results

### Desktop

- Header height, container width, navigation spacing, logo typeface, and theme control match.
- Main section, three-column grid, card sizes, gaps, padding, typography, and footer geometry match.
- The 960px large breakpoint reproduces the target's 72px identity heading.
- Footer placement and the page's total content height match the reference.

### Mobile

- The cards collapse to the target's single-column order and retain the measured padding and gaps.
- The desktop header and footer are hidden.
- The fixed 64px mobile shell and bottom navigation bar match the target's size, position, border, and blur.

### Theme and interactions

- Dark and light color tokens match the extracted target values.
- Theme selection persists through `localStorage`.
- The desktop header changes at `scrollY > 0` to a 60% background, 12px backdrop blur, and visible border with a 300ms transition.
- Navigation, card, social-link, and skill-pill hover states match the target.
- The status indicator uses the target's one-second ping animation.
- The skill marquee uses a duplicated track, a 25-second linear infinite animation, and pauses on hover.

## Comparison notes

- Geometry and computed styles match at the sampled viewports.
- A still image can show a different visible skill-pill phase because the marquee begins when each page loads; this is capture timing, not an implementation discrepancy.
- The requested URL is the home page. Linked `/about` and `/projects` pages were not cloned because they were outside the supplied URL scope.

## Verification artifacts

- `docs/research/qa-scroll-states.json`
- `docs/research/qa-theme-light.json`
- `docs/design-references/clone-desktop-full.png`
- `docs/design-references/clone-desktop-light-full.png`
- `docs/design-references/clone-mobile-full.png`
