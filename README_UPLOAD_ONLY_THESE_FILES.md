# v88 Profile label emphasis and owner runtime backfill

Single-file GitHub package plus responsive splash images.

Updates from v87:
- Profile field labels are now bold and Savills yellow so each data segment is easier to scan.
- Adds a runtime owner/landlord normalization step before the dashboard renders.
- Owner values are copied into all expected owner/landlord fields across buildings, lease events and comps before tables are drawn.
- Building inventory table is forced to use OwnerTableDisplay.
- This keeps the cleaned-up profile layout from v87 and strengthens the owner table display path.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
