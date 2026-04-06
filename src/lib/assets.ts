const optimizableImageFolders = [
  "/shots/",
  "/project cover images/",
  "/rodney project desc. images/",
  "/mirar project descp. images/",
  "/bridgent project descp. images/",
  "/ayinke project descp. images/",
  "/Ara project descp. images/",
  "/kora project desc. images/"
];

function normalizeLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function toOptimizedAssetPath(path: string) {
  return path.replace(/(\.[^./]+)$/u, "__optimized$1");
}

export function canUseOptimizedAsset(path: string) {
  return optimizableImageFolders.some((folder) => path.includes(folder));
}

export function getManagedAssetPath(path: string) {
  const normalized = normalizeLeadingSlash(path);
  return canUseOptimizedAsset(normalized) ? toOptimizedAssetPath(normalized) : normalized;
}

export function toAssetUrl(path: string) {
  return encodeURI(normalizeLeadingSlash(path));
}
