import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Kamakura = {
  id: 'kamakura',
  name: 'Kamakura',
  description: '1 day',
  tiles: [
    { type: 'image', image: 'https://images.pexels.com/photos/3408344/pexels-photo-3408344.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/1829042/pexels-photo-1829042.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/2187602/pexels-photo-2187602.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/5433929/pexels-photo-5433929.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
} as Location;

export default Kamakura;