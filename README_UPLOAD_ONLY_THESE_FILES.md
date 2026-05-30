# v41 comp evidence table QA fix

Single-file GitHub package.

Updates:
- Removed long rent escalation/comment-style fields from the main Comp evidence table.
- Cleaned comp economics display logic so raw shifted values do not fall back into Free rent.
- Suppressed suspect free-rent values from visible table/cards while preserving them in RawFreeRentField.
- Confirmed Behr Paints and GEODIS suspect free-rent values are suppressed.
- Sortable table headers preserved.

Suppressed suspect raw free-rent fields: 6

Upload these four files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
