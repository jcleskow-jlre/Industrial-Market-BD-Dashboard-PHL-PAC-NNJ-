# v71 Comp rent escalation standardization

Single-file GitHub package plus responsive splash images.

Updates:
- Standardized comp rent escalation values for table and calculation use.
- Visible comp table now shows the normalized Annual Escalation field instead of raw escalation text.
- Parsed formats include:
  - Annual percent bumps, e.g. 3.50% annually
  - Annual dollar/PSF bumps, e.g. $0.10 PSF annually
  - Step rent schedules, normalized to avg. annual PSF step
- Shifted/bad values such as TI, rent type values, or annual rent amounts are suppressed from the visible escalation field.
- Raw rent escalation text is retained only behind the scenes for current-rent calculation where needed.
- No building, lease-event, or comp count changes.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
