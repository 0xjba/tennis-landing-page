# TENNIS Landing Page

A marketing site for TENNIS, the on-chain identity layer for the TEN ecosystem. The single-page application highlights the product story, roadmap, and user journey with a focus on playful visuals and layered motion.

## Getting Started

```sh
git clone <repository-url>
cd tennis-landing-page
npm install
npm run dev
```

The development server runs on `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` – start the Vite development server.
- `npm run build` – create a production build.
- `npm run preview` – serve the build output locally.
- `npm run lint` – run ESLint across the project.

## Tech Stack

- React 18 with TypeScript
- Vite build tooling
- Tailwind CSS with shadcn/ui primitives
- Radix UI for accessible headless components

## Project Structure

- `src/components` – shared UI and landing page sections.
- `src/pages` – route-level components.
- `src/assets` – imagery and illustration assets.
- `public` – static assets served as-is.

## Deployment

Build the site with `npm run build`, then deploy the contents of the `dist` directory to your hosting provider or a static site platform such as Vercel, Netlify, or Cloudflare Pages.
