export type ImageTile = { columns?: number; type: 'image', wide?: boolean, tall?: boolean; image: string }
export type GroupTile = { type: 'group'; columns?: number; images: ImageTile[] }

export type TileType =
  ImageTile |
  { columns?: number; type: 'quote'; text: string; wide?: boolean } |
  { columns?: number; type: 'gif'; gifSrc: string; placeholderSrc: string } |
  GroupTile;

export interface LocationType {
  id: string;
  name: string;
  description: string;
  tiles: TileType[];
}