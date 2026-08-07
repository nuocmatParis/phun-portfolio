# About and Projects Route Layout Specification

## Shared route shell
- Target files: `src/app/about/page.tsx`, `src/app/projects/page.tsx`
- Reuse `SiteNavigation` before `main` and `SiteFooter` after it, matching the homepage structure.
- `main` is `relative z-10` and uses a `site-container max-w-5xl py-24 sm:py-32` route container.
- Inner content width is 994px at desktop with the existing 15px container gutters; 344.67px at the captured mobile scrollbar width.
- Desktop/tablet vertical padding 128px; mobile 96px.
- Route heading 36px/39.6px, weight 700, tracking -0.9px; at `sm` 60px/66px, tracking -1.5px.
- Subtitle 18px/28px muted. Header area margin-bottom 48px, flex column gap 16px (About uses 24px outer gap because of button).
- SiteFooter is hidden below `md`; fixed mobile SiteNavigation is reused unchanged.

## About route
- Metadata title: `About - ラエクセラ`.
- Metadata description: “DevSecOps Engineer specializing in hybrid multi-cloud infrastructure and distributed systems.”
- Header text: “About Me”; subtitle: “My professional background, experience, and skills.”
- Header row stacks, then at `sm` aligns title block and Download CV button horizontally with space-between.
- Download uses the real local file `/documents/Rayhan_Kafi_Pratama_CV.pdf` and filename `Rayhan_Kafi_Pratama_CV.pdf`.
- Button: h-9 (`sm:h-10`), border, rounded-lg, px-4, gap 8px, 14px weight 500 muted; hover border/80, muted background, foreground. Download icon 16px moves up 2px on hover.
- Content grid: one column, 16px gaps. Experience, Skills, then nested two-column `sm` grid for Education/Awards.

## Projects route
- Metadata title: `Projects - ラエクセラ`; same description as About.
- Header text: “My Projects”; subtitle: “A collection of my work, experiments, and contributions.”
- Project grid follows the 48px heading margin.

## Page measurements
- About: target scroll height 2089 desktop, 2221 tablet, 2892 mobile in the captured environment.
- Projects: target scroll height 1157 desktop, 1353 tablet, 1793 mobile.
- Desktop footer target height 84.67px; header 64px. Header gains the existing scrolled state at any `scrollY > 0`.

## Navigation verification
- Desktop and mobile active item must follow `usePathname`: About active only on `/about`, Projects active only on `/projects`, Home active only on `/`.
- All internal links navigate without full-page errors; theme persists across all three routes.
