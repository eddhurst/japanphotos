import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Kyoto = {
  id: 'kyoto',
  name: 'Kyoto',
  description: '5 days',
  tiles: [
    { type: 'image', image: 'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
} as Location;

export default Kyoto;