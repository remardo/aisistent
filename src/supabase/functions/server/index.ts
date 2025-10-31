import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: (origin) => {
      const allowed = Deno.env.get("ALLOWED_ORIGIN");
      if (!allowed) return true; // fallback to allow all in dev if not set
      return origin === allowed;
    },
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-da675fb6/health", (c) => {
  return c.json({ status: "ok" });
});

Deno.serve(app.fetch);
