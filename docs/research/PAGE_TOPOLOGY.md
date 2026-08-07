# Page Topology

1. Fixed `SiteNavigation` overlay.
   - Desktop/tablet: top header, z-index 50, 64px high.
   - Mobile: bottom bar, z-index 50, 64px high, 16px side offsets.
2. `main`, z-index 10, normal-flow flex column.
3. One home section containing a centered responsive card grid:
   1. `IdentityCard`, full row.
   2. `BioCard`, two desktop columns.
   3. `SocialLinksCard`, one desktop column.
   4. `SkillsMarquee`, full row.
4. `SiteFooter`, normal flow and desktop-only.

The fixed navigation overlays the normal-flow page. All four home cards share the same surface treatment. The mobile footer is intentionally absent because the fixed bottom navigation occupies that role.

## About route

1. Shared fixed `SiteNavigation`.
2. Normal-flow `main` with a max-width 5xl route container.
3. Header row: title/subtitle plus Download CV control.
4. One-column content grid:
   1. `ExperienceTimeline`.
   2. Skills section.
   3. Responsive Education/Awards subgrid.
5. Shared desktop-only `SiteFooter`.

## Projects route

1. Shared fixed `SiteNavigation`.
2. Normal-flow `main` with a max-width 5xl route container.
3. Header block: title and subtitle.
4. `ProjectGrid`: one column mobile, two columns from 640px.
5. Shared desktop-only `SiteFooter`.
