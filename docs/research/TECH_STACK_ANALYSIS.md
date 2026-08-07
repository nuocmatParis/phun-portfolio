# Technical Stack Analysis

## Target

- Astro 6.3.1.
- Tailwind CSS v4 utility output.
- Local Inter font files plus Google-hosted Yuji Mai.
- Inline extracted SVG symbols.
- CSS keyframes for ping and marquee; vanilla JavaScript for theme and header scroll state.
- Astro view transitions exist for cross-route navigation but do not affect the static home-page state.

## Clone equivalent

- Next.js 16 App Router with React 19 and strict TypeScript.
- Tailwind CSS v4 and exact CSS custom properties.
- `next/font/local` for Inter and the exact Yuji Mai Katakana subset.
- A narrow Client Component boundary for theme and scroll interactions.
- Server Components for static portfolio cards and footer.
