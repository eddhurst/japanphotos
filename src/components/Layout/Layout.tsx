import { TileType } from "../../types/types";
import GifTile from "../tiles/GifTile";
import LazyImage from "../tiles/LazyImage";
import QuoteTile from "../tiles/QuoteTile";
import TwoColumn from "../tiles/TwoColumn";

type LayoutProps = {
  tile: TileType;
  openModal: (image: string) => void;
  locationName: string;
};

const Layout: React.FC<LayoutProps> = ({ tile, locationName, openModal }) => {
    if (tile.type === 'quote') {
      return <QuoteTile text={tile.text} columns={tile.columns} />;
    } else if (tile.type === 'gif') {
      return (
        <GifTile
          gifSrc={tile.gifSrc}
          placeholderSrc={tile.placeholderSrc}
          alt={`${locationName} - Animation`}
        />
      );
    } else if (tile.type === 'group') {
      return (
        <TwoColumn tile={tile} locationName={locationName} openModal={openModal} />
      )
    } else {
      return (
        <LazyImage
          columns={tile.columns}
          src={tile.image}
          tall={tile.tall}
          alt={`${locationName} - Photo`}
          onClick={() => openModal(tile.image)}
        />
      );
    }
    
}

export default Layout;