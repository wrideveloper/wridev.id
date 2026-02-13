import type { AstroGlobal } from "astro";
import { METRIC_WORKER_URL } from "astro:env/server";

export async function loadTalentData(
  Astro: AstroGlobal,
  slug: string | undefined,
) {
  if (!slug) return null;

  const url = `${METRIC_WORKER_URL}/talent/${slug}?t=${Date.now()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Ideally, if have an internal secret token, add it here:
        // "Authorization": `Bearer ${env.API_SECRET}`
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(
        `[loadTalentData] Failed to fetch for ${slug}: ${response.status}`,
      );
      return null;
    }

    const rawData: any = await response.json();

    const talent_data = {
      ...rawData,
      contacts:
        typeof rawData.contacts === "string"
          ? JSON.parse(rawData.contacts)
          : rawData.contacts,
      proficiencies:
        typeof rawData.proficiencies === "string"
          ? JSON.parse(rawData.proficiencies)
          : rawData.proficiencies,
      availabilities:
        typeof rawData.availabilities === "string"
          ? JSON.parse(rawData.availabilities)
          : rawData.availabilities,
      metrics: rawData.metrics || { github: null, figma: null, dribbble: null },
    };

    return talent_data;
  } catch (error) {
    console.error(`[loadTalentData] Error loading data for ${slug}:`, error);
    return null;
  }
}
