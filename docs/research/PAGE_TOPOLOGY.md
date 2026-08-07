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
