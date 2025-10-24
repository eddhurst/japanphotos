import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Takayama = {
  id: 'takayama',
  name: 'Takayama',
  description: '2 days',
  tiles: [
    { type: 'image', image:       'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/5769536/pexels-photo-5769536.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/5833843/pexels-photo-5833843.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
} as Location;

export default Takayama;