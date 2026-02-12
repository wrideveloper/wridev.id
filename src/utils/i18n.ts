export function getLocalizedPath(path: string, locale: string) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Remove trailing slash if present (except for root)
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath.replace(/\/$/, "");

  return `/${locale}${cleanPath}`;
}

export function switchLocalePath(path: string, currentLocale: string, targetLocale: string) {
  if (currentLocale === targetLocale) return path;

  // Handle root paths /en and /id
  if (path === `/${currentLocale}` || path === `/${currentLocale}/`) {
      return `/${targetLocale}`;
  }

  const prefix = `/${currentLocale}/`;
  let basePath = path;
  if (path.startsWith(prefix)) {
      basePath = path.substring(prefix.length - 1); // keep the leading /
  } else if (path.startsWith(`/${currentLocale}`)) {
      // Handle case where path is just /en or /id but caught above?
      // Maybe /en?query=...
      // For now assume clean paths or handle query params separately if passed in path string
      // If path is exactly /en, it's handled above.
      // If path is /enSomething... unlikely with Astro routing unless dynamic.
  }
  
  return getLocalizedPath(basePath, targetLocale);
}
