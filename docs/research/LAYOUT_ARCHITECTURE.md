# Layout Architecture

- The document body is a full-height flex column on a solid themed background.
- Desktop/tablet at 768px and wider use a fixed 64px header and a normal-flow desktop footer.
- Below 768px the header/footer are hidden and a fixed 64px bottom navigation is shown with 16px side offsets.
- The main home section has `min-height: calc(100vh - 12rem)` and vertical padding of 96px below 640px or 128px from 640px upward.
- A responsive container has 15px inline gutters and max-widths 640/768/960/1200px.
- The card grid is capped at 1024px, centered, and uses a 16px gap.
- From 768px the grid has three equal columns. Identity and marquee span all three, biography spans two, and social links span one.
- Below 768px all cards stack in one column in identity, biography, social, marquee order.
- The document uses native scrolling with no scroll snap and no smooth-scroll library.
