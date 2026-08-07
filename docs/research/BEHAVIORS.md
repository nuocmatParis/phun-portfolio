# Behavior Sweep

## Interaction models

- Desktop header: scroll-driven state plus click-driven theme toggle.
- Mobile navigation: fixed static placement plus click-driven theme toggle.
- Identity card: time-driven availability ping.
- Biography card: static with hover color transition.
- Social card: link clicks and hover color transitions.
- Skills card: time-driven marquee plus hover-to-pause and pill hovers.
- Footer: static with text hover transition.

## Scroll sweep

- At `scrollY = 0`, the desktop header is `#000` in dark mode with a transparent bottom border and no backdrop filter.
- At the first nonzero measured offset (`scrollY = 1.3333px`), class `scrolled` is added. Dark background becomes 60% background over transparency, the border becomes `#262626`, and backdrop blur becomes 12px.
- The same state remains at 32px, 100px, and the bottom of the page.
- Transition: color/background/border properties over 300ms cubic-bezier(0.4, 0, 0.2, 1).
- No section changes state during scrolling. No scroll snap or smooth-scroll library is present.

## Click sweep

- The only in-page stateful control is the theme toggle. It toggles `.dark`, stores the choice in `localStorage.theme`, and briefly applies `theme-transition-lock`.
- Home, About, and Projects are navigation links. The clone keeps their exact destinations.
- Email opens `mailto:raexera@gmail.com`; LinkedIn, GitHub, and Telegram open external destinations in a new tab.

## Hover sweep

- Inactive nav: text `#a3a3a3` and transparent background to foreground and `#171717`; 150ms.
- Cards: `#0a0a0a`/`#262626` to 10% muted background/80% border; 150ms.
- Social control: `#000`/`#262626` to 50% muted background/80% border; 150ms.
- Social icon: muted foreground to foreground; 150ms.
- Skill pill: 20% muted background/muted foreground to `#171717`/foreground; 150ms.
- The marquee track pauses while hovered.

## Responsive sweep

- 390px: one-column grid, 96px section padding, 32px card padding, 36px heading, four social columns, fixed bottom nav, no footer.
- 640px: section padding changes to 128px, identity padding to 48px, heading to 60px.
- 768px: desktop header/footer appear, mobile nav disappears, grid becomes three columns, social grid becomes two columns.
- 960px: heading changes to 72px and container max-width becomes 960px.
- 1200px: outer container max-width becomes 1200px while grid remains capped at 1024px.
