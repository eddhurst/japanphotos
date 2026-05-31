import { LocationType } from "../../types/types";
import { ASSET_CDN } from "../../utils/constants";

const Nambigrens = {
  id: 'nambigrens',
  name: 'Nambigrens',
  description: '1 day',
  tiles: [
    {
      columns: 3,
      type: 'image',
      image: `${ASSET_CDN}/assets/2026-africa/nambigrens-panorama.jpg`,
      wide: true
    },
    {
      columns: 1,
      type: 'quote',
      text: 'We took the Shinkansen to Odawara, a train to Hakone, and then a bus to Motohakone to get to our hotel just off the shores of Lake Ashi. We found this vantage point with a 212 step climb and because it was so late in the day, we had it almost entirely to ourselves.'
    },
  ],
} as LocationType;

export default Nambigrens;