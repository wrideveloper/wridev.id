import type { APIRoute } from "astro";

export const prerender = false;

type IncomingBody = {
  companyName: string;
  email: string;
  proficiency: string;
  description: string;
  "cf-turnstile-response": string;
};

interface TurnstileOutcome {
  success: boolean;
  "error-codes": string[];
  challenge_ts?: string;
  hostname?: string;
}

/**
 * Verifies the Turnstile token with Cloudflare's API.
 */
async function verifyTurnstile(
  token: string,
  secret: string,
  ip?: string,
): Promise<boolean> {
  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      body: formData,
      method: "POST",
    },
  );

  const outcome = (await result.json()) as TurnstileOutcome;
  return outcome.success;
}

/**
 * Proxy Endpoint for Talent Requests.
 * Checks origin, verifies Turnstile, and then calls Worker.
 */
export const POST: APIRoute = async ({ request, url, clientAddress }) => {
  // --- ORIGIN CHECK ---
  const origin = request.headers.get("Origin");
  const allowedOrigin = new URL(url).origin;

  if (!origin || origin !== allowedOrigin) {
    return new Response(
      JSON.stringify({ error: "Forbidden: Invalid Origin" }),
      { status: 403 },
    );
  }

  // --- CONFIG CHECK ---
  const WORKER_URL = process.env.CTA_WORKER_URL;
  const API_TOKEN = process.env.CTA_PUBLIC_API_TOKEN;
  const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

  if (!WORKER_URL || !API_TOKEN || !TURNSTILE_SECRET) {
    console.error("Missing Server Config");
    return new Response(JSON.stringify({ error: "Server Config Error" }), {
      status: 500,
    });
  }

  // --- PARSE & VERIFY ---
  let body: IncomingBody;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  const token = body["cf-turnstile-response"];
  if (!token) {
    return new Response(JSON.stringify({ error: "Security check missing" }), {
      status: 403,
    });
  }

  const isHuman = await verifyTurnstile(token, TURNSTILE_SECRET, clientAddress);
  if (!isHuman) {
    return new Response(
      JSON.stringify({ error: "Security check failed (Bot detected)" }),
      { status: 403 },
    );
  }

  // --- FORWARD TO WORKER ---
  try {
    const workerPayload = {
      companyName: body.companyName,
      email: body.email,
      proficiency: body.proficiency,
      description: body.description,
    };

    console.log(
      "Attempting to send to Worker:",
      `${WORKER_URL}/talent-request`,
    );

    const workerResponse = await fetch(`${WORKER_URL}/talent-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(workerPayload),
    });

    if (!workerResponse.ok) {
      const errorText = await workerResponse.text();
      console.error(`Worker Error (${workerResponse.status}):`, errorText);
      throw new Error(
        `Worker responded with ${workerResponse.status}: ${errorText}`,
      );
    }

    const data = await workerResponse.json();

    return new Response(JSON.stringify(data), {
      status: workerResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Detailed Proxy Error:", err);

    return new Response(
      JSON.stringify({
        error: "Internal Proxy Error",
        details: err.message,
      }),
      {
        status: 500,
      },
    );
  }
};
