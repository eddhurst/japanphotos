export type TileType =
  { type: 'image', wide?: boolean, tall?: boolean; image: string } |
  { type: 'quote'; text: string; wide?: boolean } |
  { type: 'gif'; gifSrc: string; placeholderSrc: string } |
  { type: 'group'; tiles: TileType[] };

export interface LocationType {
  id: string;
  name: string;
  description: string;
  tiles: TileType[];
}