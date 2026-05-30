# PA/NJ Industrial Market & BD Dashboard - import-ready shell

This package uses Claude's cleaner interface as the front-end shell, with empty data placeholders ready for a fresh database rebuild.

## Data files the dashboard reads

Replace these four files after the fresh import is generated:

- `data/buildings.js` - `const BUILDINGS = [...]`
- `data/comps.js` - `const COMPS = [...]`
- `data/bd_opportunities.js` - `const BD_OPPORTUNITIES = [...]`
- `data/market_rents.js` - `const MARKET_RENTS = { regions: [...] }`

## Parent-child database model

- Buildings are the parent records.
- Lease comps are sister/child records tied by `BuildingID` wherever possible.
- BD opportunities / lease events are also tied by `BuildingID` wherever possible.
- Market rent data is tied by `Region`, `Market`, and `Submarket`.

## Send for the fresh rebuild

Best import order:

1. Master CoStar building inventory for PHL, PA I-78/I-81, and NNJ.
2. Any latitude/longitude or geocoding export.
3. Lease comps from CompStak, CoStar, or internal files.
4. BD opportunity / lease expiration files.
5. Current Savills market reports or market rent benchmark exports.
6. Any manual correction files for landlords, brokers, tenant names, lease expirations, or coordinates.

## Responsive status

The dashboard has been patched for desktop, iPad/tablet, and mobile breakpoints. The intended production experience is still desktop/iPad-first because the map, cards, and raw data table are dense. Mobile now stacks panels and allows horizontal scrolling for the raw table.

## Notes

The current data files are intentionally blank so the database can be restarted cleanly. The original Claude data should not be treated as the source of truth unless intentionally re-imported.


## Fresh database import completed - 2026-05-30
- Buildings loaded: 2,663
- Lease comps loaded: 1,459
- BD lease-event opportunities loaded: 465
- BD opportunities matched to master building records: 272
- BD opportunities requiring building/location review: 193
- Buildings with mapped coordinates: 2,663

Primary source of truth: cleaned master building inventory and cleaned standardized sister-record workbook. CoStar exports supplement only.
