# BiiLHex Studio

Black/silver Roblox asset workspace.

## Files
- `index.html`: static dashboard.
- `worker.js`: Cloudflare Worker backend serving the dashboard and Roblox Open Cloud upload endpoint.

## Deploy
The easiest setup is to deploy `worker.js` as the Cloudflare Worker because it serves the dashboard at `/` and the API routes at `/api/*`. You do not need to separately deploy `index.html` in this setup, but keep it in the repo as the standalone front-end source.

1. Put `worker.js` in the Worker code editor or deploy it with Wrangler.
2. Add `ROBLOX_API_KEY` as a Worker secret; never put it in HTML or commit it to GitHub.
3. Check `/api/health`.
4. Open `/` to see BiiLHex Studio.

The library and history in this starter are browser-local, not synced to a server. Per-user uploads require Roblox OAuth and secure token handling; the current upload endpoint uses the configured Worker API key.
