# Behaviour Audit

## Existing site

- Sticky header is present, but the desktop page overflows horizontally.
- The hero uses a looping slider that duplicates the header and hero content in full-page capture.
- Service cards appear in a horizontal carousel, making discovery and keyboard navigation harder.
- Many interactions lead to placeholder `#` links.

## Redesign

- Header remains sticky with a compact shadow after page movement via native sticky positioning.
- Mobile navigation uses an accessible disclosure button.
- Buttons and cards use short color, transform and shadow transitions.
- All interactive controls have visible focus states and minimum touch-friendly dimensions.
- Content is rendered in the document rather than hidden behind a carousel.
