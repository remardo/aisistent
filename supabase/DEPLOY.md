Supabase Edge Function: server

Overview
- Function code lives in `supabase/functions/server/` and is written for Deno using `hono`.
- Uses Supabase client via `jsr:@supabase/supabase-js` and reads env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ALLOWED_ORIGIN`.

Local Serve
1) Copy env example and fill values:
   cp supabase/functions/server/.env.example supabase/functions/server/.env.local
   # Edit .env.local with real values

2) Run local server (requires Supabase CLI):
   npm run supabase:serve

Deploy
- Project ref is baked into script (`iwsotwmndxldsojqkqbe`). Adjust if needed.

1) Optionally link project (writes config to `supabase/config.toml`):
   npx supabase link --project-ref iwsotwmndxldsojqkqbe

2) Set secrets in project (run in a shell with these vars exported):
   # Bash/Zsh
   SUPABASE_URL=... \
   SUPABASE_SERVICE_ROLE_KEY=... \
   ALLOWED_ORIGIN=... \
   npx supabase secrets set --project-ref iwsotwmndxldsojqkqbe \
     SUPABASE_URL=$SUPABASE_URL SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY ALLOWED_ORIGIN=$ALLOWED_ORIGIN

   # PowerShell
   npx supabase secrets set --project-ref iwsotwmndxldsojqkqbe \
     SUPABASE_URL=$env:SUPABASE_URL SUPABASE_SERVICE_ROLE_KEY=$env:SUPABASE_SERVICE_ROLE_KEY ALLOWED_ORIGIN=$env:ALLOWED_ORIGIN

3) Deploy function:
   npm run supabase:deploy

Routes
- Healthcheck: GET `/make-server-da675fb6/health`

Notes
- Never commit real secrets. Use project secrets and local `.env.local` only.
- The client anon key in `src/utils/supabase/info.tsx` is public; keep service role key server-only.

