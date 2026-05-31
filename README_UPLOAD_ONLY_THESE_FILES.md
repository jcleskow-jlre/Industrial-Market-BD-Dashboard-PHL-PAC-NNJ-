# v53 Market AI NER metric cleanup

Single-file GitHub package.

Updates:
- Removed the confusing “Starting rent vs. NER spread” metric from Market AI.
- Replaced it with “Average NER / PSF” in:
  - Market-wide annualized concessions
  - Submarket-level concession analysis
- Kept the more defensible apples-to-apples concession metrics:
  - Free rent / lease year
  - TI / PSF / year
  - Total concession / PSF / year
  - Average NER / PSF
- No data count changes from v52.

Upload these four files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
