# v74 Top KPI leverage gauge update

Single-file GitHub package plus responsive splash images.

Updates:
- Top KPI boxes now show:
  1. BD lease events
  2. Total inventory in MSF, with building count below
  3. Comps in database
  4. Landlord leverage score gauge
- Gauge runs 1-100:
  - 1 = strongest tenant leverage / green
  - 100 = strongest landlord leverage / red
- Score considers vacancy, availability, direct vacancy and recent comp rent vs. Savills research asking-rent benchmarks.
- No underlying data changes from v73.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
