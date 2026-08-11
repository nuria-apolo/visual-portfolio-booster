export const SITE_URL = "https://srtaserifa.es";
export const HOME_OG_IMAGE = "/og-home.png";

export function absoluteAssetUrl(asset: string) {
  return new URL(asset, SITE_URL).href;
}
