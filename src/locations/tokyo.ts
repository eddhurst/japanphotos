import { type Location } from "../App";
import { ASSET_CDN } from "../utils/constants";

const Tokyo = {
  id: 'tokyo',
  name: 'Tokyo',
  description: '4 days',
  tiles: [
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoWet.jpg` },
    {
    type: 'quote',
    text: 'We arrived in Tokyo at the same time as a typhoon. The rain was intense, but not enough to dampen the spirits of this parade we saw in the park. We hid in the Science Museum, and found an exhition on mammoths to wait it out.',
    wide: false
    },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoMammoth.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoStreet.jpg`, wide: true },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoFood.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoTrees.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoTemple.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoStoneLantern.jpg` },
    {
    type: 'quote',
    text: 'On Day 2 we started with a walking tour around the Old Town, followed by a trip up the Tokyo Tower that looks surprisingly identical to the Eiffel Tower. The next night we found a food tour around the Shinjuku region that took us to some amazing hidden gems, and walked us past the infamous Cat billboard',
    wide: true,
    },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/toriiGates.jpg`, tall: true },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoTowerFuji.jpg`, tall: true },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoTowerTall.jpg`, tall: true },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoCatScreen.jpg`, tall: true },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoWaterPipe.jpg` },
    {
    type: 'quote',
    text: 'Surprisingly, the Waterworks museum (C16 wooden water pipe, pictured left) was one of our favourite museums in Tokyo. Lots of tourist hostpots and scenic areas lacked context for why they were important, but by focussing on a small niche we got a deeper understanding for the historical events within the last 4 centuries that filled in a lot of gaps for other aspects of the city as well.',
    wide: true,
    },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoWaterFountain.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoDinner.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/whisky.jpg` },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoWoodenSculptureLeft.jpg`, tall: true },
    {
    type: 'quote',
    text: 'We accidentally checked out of our hotel a day early after misreading our calendar (our own dumb mistake), but it did allow us to visit the Tokyo National Museum with our free day. We followed it up with a visit to a cute whiskey & book bar nearby that had a great selection of Japanese single malt and a very friendly bartender.',
    },
    { type: 'image', image: `${ASSET_CDN}/assets/tokyo/tokyoWoodenSculptureRight.jpg`, tall: true },
  ],
} as Location;

export default Tokyo;