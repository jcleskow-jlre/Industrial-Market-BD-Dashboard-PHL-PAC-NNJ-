# v24 stable rollback package

This is a rollback-forward package based on the stable v19 build.

Upload the full contents of this ZIP into the live GitHub folder:
`/Claude-Dashboard/`

Do not upload the ZIP file itself. Upload the contents.

Required files included:
- index.html
- dashboard.html
- .nojekyll
- data/buildings.js
- data/bd_opportunities.js
- data/comps.js
- data/market_rents.js
- savills-logo.png
- favicon.png

Data QA in this package:
- Buildings: 2,663
- BD lease events: 465
- Matched comp records: 829
- Comp records with starting rent: 828
- Comp records with calculated NER: 828

This version removes the experimental alternate comp script / cache-busted filename that caused the zero-data page.
