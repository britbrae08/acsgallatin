ACS Gallatin shared menu + footer update

What changed:
- The main page and Food Bank page now use one shared header/menu and one shared footer.
- This guarantees the menu and footer stay exactly the same on both pages.
- Added “Church” to the main menu.
- Church links to https://gallatinmo.adventistchurch.org/
- Added a Church link to the shared footer as well.
- The menu now reads: Home, Food Bank, Thrift store, Get involved, Visit & contact, Church, Donate.
- Existing Food Bank and thrift-store behavior is preserved.

How to upload:
1. Extract this ZIP.
2. Upload the included folders/files into the root of the acsgallatin GitHub repository.
3. Allow matching files to replace the existing versions.
4. Commit to the main branch.
5. Cloudflare Pages should deploy automatically.

Files in this update:
- app/page.tsx
- app/foodbank.tsx
- app/site-chrome.tsx (new shared header/footer component)
