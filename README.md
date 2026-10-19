# Little Recipe
A calm, ad-free recipe box with server-side URL import, ingredient scaling, browser-local saving, search, sorting, and removal with undo.

Run `node scripts/build.mjs`, `node --test tests/recipe.test.mjs`, then `node scripts/preview.mjs` for a local preview on port 5173. There are no package dependencies.

Import reads Recipe JSON-LD published by the source website. Websites that block automated requests or omit structured recipe data return a clear error. Stored recipes live in localStorage on the current browser and do not sync between devices. Three removable sample recipes are supplied on the first visit.

Ingredient scaling adjusts the leading amount, including mixed and Unicode fractions, decimals, and ranges. Package sizes, temperatures, and cooking times remain unchanged. Directions retain their original text. Recipe data is rendered as text; remote URLs are restricted to HTTP(S).

The deployment artifact is a Cloudflare Worker at `dist/server/index.js`; the build embeds all page content and recipe utilities in that single file.
