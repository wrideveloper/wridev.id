/// <reference types="astro/client" />

interface Env {
  WORKER_URL: string;
  TTL: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
