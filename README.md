# ACS Gallatin

Responsive homepage for Gallatin Adventist Community Services and the Daviess County Food Bank. Hosted on Cloudflare Pages from this GitHub repository.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run build` to generate the prerendered page and assets in `dist`. Run `npx tsc --noEmit` and `node scripts/check.mjs` to validate.

Cloudflare Pages: production branch `main`, build command `npm run build`, output directory `dist`. This project uses a static React build, so no server credentials are required.

## Content

Main copy: `app/page.tsx`. Branding and responsive styles: `app/globals.css`. Photo list and descriptions: `app/photos.json`. Images: `public/images`.

Confirmed address: 1210 S Willow St, Gallatin, MO 64640. Hours were not provided; the page asks visitors to call for current hours.

The owner chose saved photos for this release. The gallery contains the 27 supplied store photos, shown on request. It is not a live Facebook feed and does not claim current inventory. A future automatic latest-30 feed requires an authorized Facebook connection, with credentials kept server-side.

Sponsor logo provenance: `public/images/sponsors/SOURCES.md`.

