# v81 Email prompt update

Single-file GitHub package plus responsive splash images.

Updates from v80:
- Rewrote the dashboard email prompt system for both copied email versions.
- Version 1 now follows a concise captive-tenant / credible-competition CTA structure.
- Version 2 now follows a longer strategic due-diligence structure.
- Prompt context still pulls tenant, address, lease expiration, SF, submarket/corridor, landlord/owner, rent position, market context, building data, and same-building comps.
- The same prompt logic is used from desktop, iPad, and mobile because all copy buttons call the shared copyPrompt() function.

Upload all files into `/Claude-Dashboard/`:
- dashboard.html
- index.html
- .nojekyll
- README_UPLOAD_ONLY_THESE_FILES.md
- splash-desktop.png
- splash-mobile.png
