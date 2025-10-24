import { useEffect, useState } from 'react';
import QuoteTile from './components/QuoteTile';
import GifTile from './components/GifTile';
import LazyImage from './components/LazyImage';
import { Hakone, Hanoi, Kamakura, Kyoto, Takayama, Tokyo, Yamanouchi } from './locations';

export interface Location {
  id: string;
  name: string;
  description: string;
  tiles: (
    { type: 'image', wide?: boolean, tall?: boolean; image: string } |
    { type: 'quote'; text: string; wide?: boolean } |
    { type: 'gif'; gifSrc: string; placeholderSrc: string }
  )[];
}

const locations: Location[] = [
  Tokyo,
  Hakone,
  Kyoto,
  Takayama,
  Yamanouchi,
  Kamakura,
  Hanoi,
];

function App() {
  const [activeSection, setActiveSection] = useState('tokyo');
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = locations.map((loc) => ({
        id: loc.id,
        element: document.getElementById(loc.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">JapanMoon</h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => scrollToSection(location.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === location.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

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
                
                {/* Add the ability for a grid to hold 2 columns */}
                {location.tiles.map((tile, imgIdx) => {
                  if (tile.type === 'quote') {
                    return <QuoteTile key={imgIdx} text={tile.text} wide={tile.wide} />;
                  } else if (tile.type === 'gif') {
                    return (
                        <GifTile
                          key={imgIdx}
                          gifSrc={tile.gifSrc}
                          placeholderSrc={tile.placeholderSrc}
                          alt={`${location.name} - Animation ${imgIdx + 1}`}
                        />
                      );
                  } else {
                    

                    return (
                      <LazyImage
                        key={imgIdx}
                        src={tile.image}
                        wide={tile.wide}
                        tall={tile.tall}
                        alt={`${location.name} - Photo ${imgIdx + 1}`}
                        onClick={() => setModalImage(tile.image)}
                      />
                    );
                  }
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setModalImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={modalImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">All content copyright &copy; Edward Hurst and Zoe Courchene 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
