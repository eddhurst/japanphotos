import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Yamanouchi = {
  id: 'yamanouchi',
  name: 'Yamanouchi',
  description: '2 days',
  tiles: [
    { type: 'image', image: 'https://images.pexels.com/photos/2131683/pexels-photo-2131683.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/7675416/pexels-photo-7675416.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/12461026/pexels-photo-12461026.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
} as Location;

export default Yamanouchi;