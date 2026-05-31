# v63 landlord fallback display fix

Single-file GitHub package plus responsive splash images.

Updates:
- Adds matched-building landlord fallback display logic.
- If a lease event or comp record landlord is blank, dashboard now falls back to matched building owner/landlord fields.
- Applies to record details, mobile comp cards, table-derived landlord fields and email prompt context.
- No data structure changes from v62.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
