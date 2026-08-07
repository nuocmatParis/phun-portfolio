# Design Tokens

## Typography

- Body: Inter Regular, 400, locally sourced from `/fonts/Inter-Regular.woff2`.
- Bold text: Inter Bold, 700, locally sourced from `/fonts/Inter-Bold.woff2`.
- Logo: Yuji Mai, rendered at 20px/28px with synthesized 700 weight and -0.5px tracking.
- Monospace handle: system monospace stack.
- Desktop display: 72px/79.2px, 700, -1.8px tracking.
- Tablet display: 60px/66px, 700, -1.5px tracking.
- Mobile display: 36px/39.6px, 700, -0.9px tracking.

## Theme colors

| Token | Light | Dark |
| --- | --- | --- |
| background | `#ffffff` | `#000000` |
| foreground | `#0a0a0a` | `#fafafa` |
| card | `#ffffff` | `#0a0a0a` |
| muted | `#f5f5f5` | `#171717` |
| muted foreground | `#737373` | `#a3a3a3` |
| border | `#e5e5e5` | `#262626` |
| availability | `oklch(0.723 0.219 149.579)` | same |

## Layout and shape

- Spacing scale follows 4px increments.
- Main container breakpoints: 640px, 768px, 960px, 1200px; 15px inline gutters.
- Content grid max-width: 1024px.
- Grid gap: 16px.
- Card radius: 16px; control radius: 6px; pill radius: 8px.
- Borders: 1 CSS px (`0.666667px` measured at the captured browser scale).
- No elevation shadows are used.

## Motion

- Default hover transition: 150ms cubic-bezier(0.4, 0, 0.2, 1).
- Header state transition: 300ms cubic-bezier(0.4, 0, 0.2, 1).
- Availability ping: 1s cubic-bezier(0, 0, 0.2, 1), infinite.
- Skills marquee: 25s linear, infinite, translate X from 0 to -50%.
