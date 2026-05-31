import { LocationType } from "../../types/types";
import { ASSET_CDN } from "../../utils/constants";

const Nambigrens = {
  id: 'nambigrens',
  name: 'Nambigrens',
  description: '1 day',
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
  ],
} as LocationType;

export default Nambigrens;