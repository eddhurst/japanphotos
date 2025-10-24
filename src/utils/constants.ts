const ASSET_VERSION = '1.2.0';
const IS_LOCAL = window.location.hostname === 'localhost';
export const ASSET_CDN = IS_LOCAL ? '.' : `https://cdn.jsdelivr.net/gh/eddhurst/japanphotos@${ASSET_VERSION}`;