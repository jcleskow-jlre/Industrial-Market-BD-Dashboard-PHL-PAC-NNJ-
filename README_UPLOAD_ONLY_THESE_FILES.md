# v72 Comp table filters and formatting cleanup

Single-file GitHub package plus responsive splash images.

Updates:
- Reordered comp table columns to:
  Street Address, City, State, Square Feet, Commenced, Expires, Starting Rent, Annual Escalation, Free Rent, TI, NER.
- Removed Tenant, Rent Type, Executed Date, Term, Transaction Type and Landlord columns from the comp table.
- Square footage now shows full numbers rather than KSF.
- Annual Escalation no longer says “annually”; values display as % or PSF/YR.
- Added comp table filters for:
  - Submarket
  - Sublease
  - Size range
- Preserved sortable table headers.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
