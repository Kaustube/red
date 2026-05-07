# RED Vasant Vihar Website

Website for RED Vasant Vihar, a Pan-Asian restaurant in Basant Lok, Vasant Vihar, New Delhi.

## Tech Stack

- React
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS
- Framer Motion

## Requirements

- Node.js 22.12 or newer
- npm

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:5173
```

Do not open `public/index.html` directly in the browser for local development. The app uses Vite and TanStack Start, so routes, assets, and hot reload work properly through the dev server.

## Build

Create a production build:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Preview Production Build

After building, preview the production version locally:

```bash
npm run preview
```

Vite usually serves the preview at:

```text
http://localhost:4173
```

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Project Structure

```text
src/routes/        Site pages and route metadata
src/assets/        Restaurant images and favicon
src/styles.css     Global styles and Tailwind theme
public/robots.txt  Search crawler rules
public/sitemap.xml Sitemap placeholder
vite.config.ts     Vite and TanStack Start configuration
```

## Deployment Note

Before deploying, update `public/sitemap.xml` with the final live domain and add the full sitemap URL to `public/robots.txt`.
