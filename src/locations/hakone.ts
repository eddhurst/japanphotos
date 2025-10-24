import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Hakone = {
  id: 'hakone',
  name: 'Hakone',
  description: '3 days',
  tiles: [
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/hakoneFerry.jpg`, wide: true },
    {
      type: 'quote',
      text: 'Hakone is a mountainous town in Japan\'s Kanagawa Prefecture, known for its hot springs, natural beauty, and views of Mount Fuji. It\'s a popular destination for both tourists and locals seeking relaxation and outdoor activities.'
    },
    
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/hakoneTorii.jpg`, tall: true },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/20250913_074418.jpg`, tall: true },
    

    { type: 'image', image: `${ASSET_CDN}/assets/hakone/20250911_095631.jpg`, wide: true },
    
    
    
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250910142915.jpg`, wide: true },

    {
      type: 'group',
      tiles: [
        { type: 'image', image: `${ASSET_CDN}/assets/hakone/20250911_165935.jpg`, wide: true },
        { type: 'image', image: `${ASSET_CDN}/assets/hakone/20250912_160512.jpg`, wide: true },
        { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250910173437.jpg`, tall: true },
      ]
    }
    
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250910191553.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250910175000.jpg`, wide: true },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250910192724.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911050804.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911081147.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911082222.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911082345.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911083241.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911134919.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911135055.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250911151605.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250912115500.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/hakone/IMG20250912173632.jpg` },
  ],
} as Location;

export default Hakone;