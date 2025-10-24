import { LocationType } from "../types/types";
import { ASSET_CDN } from "../utils/constants";

const Hakone = {
  id: 'hakone',
  name: 'Hakone',
  description: '3 days',
  tiles: [
    {
      columns: 1,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/hakoneTorii.jpg`,
      tall: true
    },
    {
      columns: 1,
      type: 'quote',
      text: 'We took the Shinkansen to Odawara, a train to Hakone, and then a bus to Motohakone to get to our hotel just off the shores of Lake Ashi. We found this vantage point with a 212 step climb and because it was so late in the day, we had it almost entirely to ourselves.'
    },
    {
      columns: 1,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250910173437.jpg`,
      tall: true
    },
    {
      columns: 1,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/hakoneFerry.jpg`,
    },
    {
      columns: 2,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/20250911_095631.jpg`,
    },

    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/20250913_074418.jpg`,
      tall: true
    },

    {
      type: 'group',
      columns: 2,
      images: [
        {
          columns: 2,
          type: 'image',
          image: `${ASSET_CDN}/assets/hakone/IMG20250910142915.jpg`,
        },
        {
          columns: 2,
          type: 'image',
          image: `${ASSET_CDN}/assets/hakone/20250911_165935.jpg`,
        },
      ]
    },

    {
      columns: 2,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/20250912_160512.jpg`,
    },
    
    
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250910191553.jpg`
    },
  
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250910192724.jpg`
    },
    {
      columns: 2,
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250910175000.jpg`,
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911050804.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911081147.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911082222.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911082345.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911083241.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911134919.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911135055.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250911151605.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250912115500.jpg`
    },
    {
      type: 'image',
      image: `${ASSET_CDN}/assets/hakone/IMG20250912173632.jpg`
    },
  ],
} as LocationType;

export default Hakone;