import clsx from "clsx";
import { GroupTile } from "../../types/types";
import LazyImage from "./LazyImage";

type TwoColumnProps = {
  tile: GroupTile;
  locationName: string;
  openModal: (image: string) => void;
}

const TwoColumn: React.FC<TwoColumnProps> = ({ tile, locationName, openModal }) => {
  if (tile.images && tile.images.length === 0) return null;

  let width = 'col-span-3 lg:col-span-1';
  if (tile.columns === 2) {
    width = 'md:col-span-2';
  } else if (tile.columns === 3) {
    width = 'md:col-span-3';
  }

  return (
    <div className={clsx('col-span-2 flex flex-col gap-4', width)}>
      {tile.images.map((groupTile, idx) => (
        <LazyImage
          key={idx}
          columns={groupTile.columns}
          src={groupTile.image}
          tall={groupTile.tall}
          alt={`${locationName} - Photo`}
          onClick={() => openModal(groupTile.image)}
        />
      ))}
    </div>
  )
}

export default TwoColumn;