import { LocationType } from "../../types/types";
import { ASSET_CDN } from "../../utils/constants";

const Kyoto = {
  id: 'kyoto',
  name: 'Kyoto',
  description: '5 days',
  tiles: [
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250914155340.jpg` },

    { columns: 1, type: 'quote', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250913174735.jpg` },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250913183937.jpg`, tall: true },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250913184507.jpg`, tall: true },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250914164108.jpg`, tall: true },

    {
      columns: 2, type: 'group', images: [
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250914195507.jpg` },
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250914182557.jpg` },
      ]
    },

    { columns: 1, type: 'quote', text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },


    {
      columns: 1, type: 'group', images: [
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/20250915_132855.jpg` },
        { columns: 1, type: 'quote', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ]
    },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250915182317.jpg`, tall: true },

    {
      columns: 1, type: 'group', images: [
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250915181718.jpg` },
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250915205927.jpg` },
      ]
    },

    {
      columns: 1, type: 'group', images: [
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916160847.jpg` },
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916132631.jpg`, tall: true },
      ]
    },

    {
      columns: 1, type: 'group', images: [
        { columns: 1, type: 'quote', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tall: true },
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916161155.jpg` },
      ]
    },

    {
      columns: 1, type: 'group', images: [
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916131800.jpg` },
        { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916173902.jpg`, tall: true },
      ]
    },

    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917155419.jpg` },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917160127.jpg` },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917161800.jpg` },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250916195102.jpg`, tall: true },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917151509.jpg`, tall: true },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917173531.jpg`, tall: true },
    { columns: 1, type: 'image', image: `${ASSET_CDN}/assets/kyoto/IMG20250917224654.jpg`, tall: true },
    { columns: 2, type: 'quote', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ],
} as LocationType;

export default Kyoto;