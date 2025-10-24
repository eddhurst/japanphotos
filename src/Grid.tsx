import clsx from "clsx";
import { Tokyo, Hakone, Kyoto, Takayama, Yamanouchi, Kamakura, Hanoi } from "./locations";
import { LocationType } from "./types/types";
import LazyImage from "./components/tiles/LazyImage";
import QuoteTile from "./components/tiles/QuoteTile";

const styledBox = "rounded-lg bg-indigo-800 text-indigo-400";
const subBox = "bg-teal-600 text-white";

const locations: LocationType[] = [
  Tokyo,
  // Hakone,
  // Kyoto,
  // Takayama,
  // Yamanouchi,
  // Kamakura,
  // Hanoi,
];

const SingleColumnItem = ({ children }) => (
  <div className={clsx(styledBox, 'p-4')}>{children}</div>
)

const ThreeColumnLayout = () => (
  <>
    <div className={clsx(styledBox, 'p-4')}>01</div>
    <div className={clsx(styledBox, 'p-4')}>01</div>
    <div className={clsx(styledBox, 'p-4')}>01</div>
  </>
)

const TwoOneColumnLayout = () => (
  <>
    <div className={clsx(styledBox, 'flex flex-col gap-4 col-span-2')}>
      <div className={clsx(subBox, 'rounded-t-lg p-4')}>01</div>  
      <div className={clsx(subBox, 'rounded-b-lg p-4')}>01</div>
    </div>
    <div className={clsx(styledBox, 'p-4')}>01</div>
  </>
)

const OneTwoColumnLayout = () => (
  <>
    <div className={clsx(styledBox, 'p-4')}>01</div>
    <div className={clsx(styledBox, 'col-span-2')}>01</div>
  </>
)

const OneColumnLayout = () => (
  <>
    <div className={clsx(styledBox, 'p-4 col-span-3')}>01</div>
  </>
)

const Layout = () => (
  <div className="grid grid-cols-3 gap-6 p-8">
    {
      locations.map((location) => (
        location.tiles.map((tile) => {
          let tileStyle = '';

          if (tile.columns === 1) {
            tileStyle = '';
          }
          
          if (tile.columns === 2) {
            tileStyle = 'col-span-2';
          }

          let RenderedTile = <></>
          if (tile.type === 'image') {
            RenderedTile = <LazyImage src={tile.image} alt={`${location.name} - Photo`} />
          } else if (tile.type === 'quote') {
            RenderedTile = <QuoteTile text={tile.text} />
          }

          return (
            <div className={clsx(styledBox, tileStyle)}>
              {RenderedTile}   
            </div>
          );
        })
      ))
    }

    <OneColumnLayout />
    <ThreeColumnLayout />
    <TwoOneColumnLayout />
    <ThreeColumnLayout />
    <OneTwoColumnLayout />
    <ThreeColumnLayout />
  </div>
);

export default Layout;