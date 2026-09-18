# Az Ops Design | Portfolio

Portfolio Website based on Nuxt 4.

## Requirements

- Node.js 20+ (Nuxt 4 requirement)
- NPM

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Site runs at http://localhost:3000 with the same two routes as before.

## Build

Nuxt 4 supports both rendering modes out of the box, no extra config needed
— pick whichever you need per deploy:

```bash
# Server build (Node server, SSR) — for platforms that run a Node process
npm run build
npm run preview   # or: node .output/server/index.mjs

# Fully static build — for static hosting (Netlify, GitHub Pages, S3, etc.)
npm run generate
npm run preview   # serves .output/public
```

## TODO:

- add Volta with node and npm version
- update readme
- check assets
- split code
- add vs settings
- add linter
- add prettier
- set navigation logic
