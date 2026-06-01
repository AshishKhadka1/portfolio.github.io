# Portfolio (Next.js)

Quick setup for this Next.js + Tailwind project.

Prerequisites

- Node.js 18+ (or latest LTS)
- pnpm (recommended) or npm/yarn

Install

```bash
pnpm install
# or
npm install
```

Run development server

```bash
pnpm dev
# or
npm run dev
```

Build

```bash
pnpm build
pnpm start
```

Notes

- Tailwind configuration: [tailwind.config.cjs](tailwind.config.cjs)
- Global styles: [app/globals.css](app/globals.css)

Deployment

- Vercel (recommended): Connect this repository to Vercel. The included GitHub Actions workflow (`.github/workflows/deploy-to-vercel.yml`) will build and deploy on push to `master`. Configure the following repository secrets in GitHub:
	- `VERCEL_TOKEN` — your Vercel personal token
	- `VERCEL_ORG_ID` — your Vercel organization ID
	- `VERCEL_PROJECT_ID` — your Vercel project ID

- Docker: build and run the production container locally:

```bash
# build
docker build -t portfolio:latest .

# run
docker run -p 3000:3000 portfolio:latest
```

