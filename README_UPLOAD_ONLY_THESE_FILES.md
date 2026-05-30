# v28 single-file bulletproof package

This package intentionally has:
- no PNG files
- no favicon files
- no external data folder dependency

All dashboard data is embedded directly inside dashboard.html.

Upload only these files into `/Claude-Dashboard/`:
- index.html
- dashboard.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md

Best process:
1. Delete the existing `/Claude-Dashboard/` folder contents on GitHub.
2. Upload these four files.
3. Wait 1-3 minutes.
4. Hard refresh.
5. Open `/Claude-Dashboard/dashboard.html?v=28`.

If you still see `PNG IHDR`, then GitHub still has an old binary file named dashboard.html or index.html in that folder.
