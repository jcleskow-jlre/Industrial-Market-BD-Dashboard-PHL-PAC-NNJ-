# v78 Building owner and comp submarket display cleanup

Single-file GitHub package plus responsive splash images.

Updates from v77:
- Building inventory table now uses an explicit OwnerDisplay field so owner/landlord names appear reliably.
- OwnerDisplay is populated from building owner fields, then developer/leasing fallback where needed.
- Comp table now uses a cleaned CompSubmarketDisplay field.
- Bad shifted comp submarket artifacts are replaced with the matched building submarket where available.
- Comp submarket filter now uses the cleaned submarket values.
- No record counts changed.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
