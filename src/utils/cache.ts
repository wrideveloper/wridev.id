interface CacheEntry {
  timestamp: number;
  data: any;
  status: number;
  statusText: string;
}

const cache = new Map<string, CacheEntry>();

export async function fetchWithCache(
  url: string,
  ttlSeconds: number = import.meta.env.TTL,
): Promise<Response> {
  const now = Date.now();
  const cached = cache.get(url);

  if (cached && now - cached.timestamp < ttlSeconds * 1000) {
    console.log(`[CACHE HIT] ${url}`);
    return new Response(JSON.stringify(cached.data), {
      status: cached.status,
      statusText: cached.statusText,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log(`[API FETCH] ${url}`);
  const response = await fetch(url);

  if (!response.ok) {
    return response;
  }

  const textData = await response.text();

  let data;
  try {
    data = JSON.parse(textData);
  } catch (e) {
    console.error("JSON Parse Error:", e);
    return new Response(textData, { status: response.status });
  }

  cache.set(url, {
    timestamp: now,
    data: data,
    status: response.status,
    statusText: response.statusText,
  });

  return new Response(textData, {
    status: response.status,
    statusText: response.statusText,
    headers: { "Content-Type": "application/json" },
  });
}
