
  # SorokinLab Digital Employee Site

  This is a code bundle for SorokinLab Digital Employee Site. The original project is available at https://www.figma.com/design/qPnjgzuhs9Xu6Zhbyl3uLX/SorokinLab-Digital-Employee-Site.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Deploying to Vercel

  This app uses Vite with a custom output directory `build/`. A `vercel.json` is provided so Vercel knows how to build and serve the app.

  - Connect your GitHub repo `remardo/aisistent` in Vercel
  - Framework preset: Vite (auto-detected)
  - Build command: `npm run build`
  - Output directory: `build`

  The app uses hash routing, but a SPA rewrite is included in `vercel.json` just in case.

  ## Supabase Edge Function (optional)

  See `supabase/DEPLOY.md` for local serve and deploy via Supabase CLI. Set secrets in the Supabase project before deploying.
  
