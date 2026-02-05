/// <reference types="astro/client" />

interface Env {
  METRIC_WORKER_URL: string;
  CTA_WORKER_URL: string;
  CTA_PUBLIC_API_TOKEN: string;
  TTL: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
