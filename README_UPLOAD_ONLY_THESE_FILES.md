# v87 Building / lease profile cleanup

Single-file GitHub package plus responsive splash images.

Updates:
- Rebuilt detail profiles with curated sections instead of dumping all fields.
- Removed redundant owner/landlord fields from profile display.
- Standardized profile label to Owner / landlord.
- Moved internal IDs and source references to a bottom section.
- Removed noisy fields from the main profile area, including match status, screenshots, source batch, source confidence artifacts, matched property name and repeated landlord/owner variants.
- Reordered fields so key business information appears at the top:
  - Tenant/building
  - Address
  - Owner/landlord
  - Region/market/submarket
  - SF/expiration/rent/leverage
  - Building context
  - Internal IDs at bottom
- Underlying data is preserved.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
