const ASSET_VERSION = '1.3.0';
const IS_LOCAL = window.location.hostname === 'localhost';
export const ASSET_CDN = IS_LOCAL ? '.' : `https://cdn.jsdelivr.net/gh/eddhurst/zoeandedd@${ASSET_VERSION}`;