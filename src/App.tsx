import { useEffect, useState } from 'react';
import QuoteTile from './components/tiles/QuoteTile';
import GifTile from './components/tiles/GifTile';
import LazyImage from './components/tiles/LazyImage';
import { Hakone, Hanoi, Kamakura, Kyoto, Takayama, Tokyo, Yamanouchi } from './locations';
import Header from './components/header/Header';
import { LocationType, TileType } from './types/types';
import Modal from './components/Modal/Modal';

const locations: LocationType[] = [
  Tokyo,
  Hakone,
  Kyoto,
  Takayama,
  Yamanouchi,
  Kamakura,
  Hanoi,
];

function App() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const handleCloseModal = () => setModalImage(null);

  const renderTile = (tile: TileType, tileKey: string | number, locationName: string) => {
    if (tile.type === 'quote') {
      return <QuoteTile key={tileKey} text={tile.text} wide={tile.wide} />;
    } else if (tile.type === 'gif') {
      return (
        <GifTile
          key={tileKey}
          gifSrc={tile.gifSrc}
          placeholderSrc={tile.placeholderSrc}
          alt={`${locationName} - Animation`}
        />
      );
    } else if (tile.type === 'group') {
      return (
        <div key={tileKey} className="sm:col-span-2 grid grid-cols-2 gap-6">
          {tile.tiles.map((subTile, subIdx) => renderTile(subTile, `${tileKey}-${subIdx}`, locationName))}
        </div>
      );
    } else {
      return (
        <LazyImage
          key={tileKey}
          src={tile.image}
          wide={tile.wide}
          tall={tile.tall}
          alt={`${locationName} - Photo`}
          onClick={() => setModalImage(tile.image)}
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header locations={locations} />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {locations.map((location, idx) => (
            <section
              key={location.id}
              id={location.id}
              className={idx > 0 ? 'mt-20' : ''}
            >
              <div className="mb-8">
                <div className="flex items-end gap-3 mb-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {location.name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    ({location.description})
                  </p>
                </div>
                <div className="w-20 h-1 bg-gray-900 rounded"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.tiles.map((tile, imgIdx) => renderTile(tile, imgIdx, location.name))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {
        modalImage && (
          <Modal modalImage={modalImage} onClose={handleCloseModal} />
        )
      }

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">All content copyright &copy; Edward Hurst and Zoe Courchene 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
