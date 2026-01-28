import { fetchWithCache } from "~/utils/cache";
import type { AstroGlobal } from "astro";

export async function loadTalentData(
  Astro: AstroGlobal,
  slug: string | undefined,
) {
  if (!slug) return null;

  const { env } = Astro.locals.runtime;

  const response = await fetchWithCache(
    `${env.WORKER_URL}/talent/${slug}`,
    parseInt(env.TTL),
  );

  if (!response.ok) {
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
    metrics: rawData.metrics || { github: null, figma: null },
  };

  return talent_data;
}
