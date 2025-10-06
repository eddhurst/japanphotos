import { useEffect, useRef, useState } from 'react';

const ASSET_VERSION = '1.2.0';

const IS_LOCAL = window.location.hostname === 'localhost';
const ASSET_CDN = IS_LOCAL ? '.' : `https://cdn.jsdelivr.net/gh/eddhurst/japanphotos@${ASSET_VERSION}`;

interface Location {
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
  {
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
  },
  {
    id: 'hakone',
    name: 'Hakone',
    description: '3 days',
    tiles: [
      { type: 'image', image: `${ASSET_CDN}/assets/hakone/hakoneTorii.jpg`, tall: true },
      { type: 'image', image: `${ASSET_CDN}/assets/hakone/hakoneFerry.jpg`, wide: true },
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    description: '5 days',
    tiles: [
      { type: 'image', image: 'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    id: 'takayama',
    name: 'Takayama',
    description: '2 days',
    tiles: [
{ type: 'image', image:       'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/5769536/pexels-photo-5769536.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/4905075/pexels-photo-4905075.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/5833843/pexels-photo-5833843.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    id: 'yamanouchi',
    name: 'Yamanouchi',
    description: '2 days',
    tiles: [
      { type: 'image', image: 'https://images.pexels.com/photos/2131683/pexels-photo-2131683.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/7675416/pexels-photo-7675416.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/12461026/pexels-photo-12461026.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    id: 'kamakura',
    name: 'Kamakura',
    description: '1 day',
    tiles: [
      { type: 'image', image: 'https://images.pexels.com/photos/3408344/pexels-photo-3408344.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/1829042/pexels-photo-1829042.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/2187602/pexels-photo-2187602.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/5433929/pexels-photo-5433929.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    id: 'hanoi',
    name: 'Hanoi',
    description: '3 days',
    tiles: [
      { type: 'image', image: 'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/2412610/pexels-photo-2412610.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/4244785/pexels-photo-4244785.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { type: 'image', image: 'https://images.pexels.com/photos/5624361/pexels-photo-5624361.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
];

function LazyImage({ src, alt, wide = false, tall = false }: { src: string; alt: string, wide?: boolean, tall?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aspectRatio = wide ? 'sm:col-span-2 max-h-[300px]' : (tall ? 'max-h-[480px]' : '');

  return (
    <div
      ref={imgRef}
      className={`relative bg-gray-200 rounded-lg overflow-hidden group ${aspectRatio}`}
    >
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function GifTile({ gifSrc, placeholderSrc, alt }: { gifSrc: string; placeholderSrc: string; alt: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      ref={imgRef}
      className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
      onClick={togglePlay}
    >
      {isInView && (
        <>
          <img
            src={isPlaying ? gifSrc : placeholderSrc}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-4">
              {isPlaying ? (
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function QuoteTile({ text, wide = false }: { text: string; wide?: boolean }) {
  return (
    <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-8 group hover:from-gray-900 hover:to-black transition-all duration-500 ${
      wide ? 'sm:col-span-1 md:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className="text-7xl text-white opacity-50 font-serif leading-[0.25] absolute top-8 left-2 pointer-events-none">&ldquo;</div>
      <p className="text-white text-lg leading-relaxed font-light italic">
        {text}
      </p>
      <div className="text-7xl text-white opacity-50 font-serif leading-[0.25] absolute bottom-0 right-2 pointer-events-none">&rdquo;</div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('tokyo');

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
                      />
                    );
                  }
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">All content copyright &copy; Edward Hurst and Zoe Courchene 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
