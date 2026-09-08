ACS Gallatin Food Bank page update

This update adds:
- https://acsgallatin.com/foodbank
- A warm, simple, senior-friendly Food Bank page that matches the main site.
- A prominent link to the 7-page Community Food Bank Application on Google Drive.
- Clear appointment instructions and a simple checklist of what to bring.
- Large call-to-action buttons for calling 660-663-2478.
- Mobile-friendly navigation, the same logo, colors, fonts, footer, and map style as the main site.
- Static prerendering for /foodbank so Cloudflare Pages can serve the page directly.

Files in this update:
- app/foodbank.tsx (NEW)
- app/main.tsx (REPLACE)
- app/render.tsx (REPLACE)
- scripts/build.mjs (REPLACE)
- app/page.tsx (REPLACE; updates Food Bank links on the homepage while preserving the thrift-store scroll behavior)

How to upload:
1. Extract this ZIP.
2. Open the britbrae08/acsgallatin GitHub repository.
3. Upload the extracted files/folders at the repository root, allowing GitHub to replace files with the same names.
4. Commit to the main branch.
5. Cloudflare Pages should deploy automatically.
6. After deployment, check both:
   https://acsgallatin.com/
   https://acsgallatin.com/foodbank
