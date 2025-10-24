import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Hanoi = {
  id: 'hanoi',
  name: 'Hanoi',
  description: '3 days',
  tiles: [
    {
      type: 'group',
      tiles: [
        { type: 'image', image: 'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=800', wide: true },
        { type: 'image', image: 'https://images.pexels.com/photos/2412610/pexels-photo-2412610.jpeg?auto=compress&cs=tinysrgb&w=800', wide: true },
        { type: 'image', image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800', tall: true },
        
      ]
    }
    { type: 'image', image: 'https://images.pexels.com/photos/4244785/pexels-photo-4244785.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', image: 'https://images.pexels.com/photos/5624361/pexels-photo-5624361.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
} as Location;

export default Hanoi;