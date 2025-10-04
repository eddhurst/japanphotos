import { useEffect, useRef, useState } from 'react';

interface Location {
  id: string;
  name: string;
  images: (string | { type: 'quote'; text: string })[];
}

const locations: Location[] = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    images: [
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://cdn.jsdelivr.net/gh/eddhurst/japanphotos@1.0.0/public/assets/20250906_180207.jpg',
      {
        type: 'quote',
        text: 'Landing in Tokyo felt like stepping into a dream where ancient traditions danced gracefully alongside neon-lit modernity. The energy of Shibuya crossing, the serenity of Meiji Shrine, and the electric nights in Shinjuku created a tapestry of experiences that would forever change how I see the world.',
      },
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'hakone',
    name: 'Hakone',
    images: [
      'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3408356/pexels-photo-3408356.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5604991/pexels-photo-5604991.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/10498841/pexels-photo-10498841.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    images: [
      'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'takayama',
    name: 'Takayama',
    images: [
      'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5769536/pexels-photo-5769536.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4905075/pexels-photo-4905075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5833843/pexels-photo-5833843.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'yamanouchi',
    name: 'Yamanouchi',
    images: [
      'https://images.pexels.com/photos/2131683/pexels-photo-2131683.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7675416/pexels-photo-7675416.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/12461026/pexels-photo-12461026.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'kamakura',
    name: 'Kamakura',
    images: [
      'https://images.pexels.com/photos/3408344/pexels-photo-3408344.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1829042/pexels-photo-1829042.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2187602/pexels-photo-2187602.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5433929/pexels-photo-5433929.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'hanoi',
    name: 'Hanoi',
    images: [
      'https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2412610/pexels-photo-2412610.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4244785/pexels-photo-4244785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5624361/pexels-photo-5624361.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];

function LazyImage({ src, alt }: { src: string; alt: string }) {
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

  return (
    <div
      ref={imgRef}
      className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group"
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

function QuoteTile({ text }: { text: string }) {
  return (
    <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-8 group hover:from-gray-900 hover:to-black transition-all duration-500">
      <div className="relative z-10">
        <div className="text-6xl text-gray-600 mb-4 opacity-50 font-serif leading-none">&ldquo;</div>
        <p className="text-white text-lg leading-relaxed font-light italic">
          {text}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <h1 className="text-2xl font-bold text-gray-900">My Holiday Journey</h1>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {location.name}
                </h2>
                <div className="w-20 h-1 bg-gray-900 rounded"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.images.map((image, imgIdx) => {
                  if (typeof image === 'object' && image.type === 'quote') {
                    return <QuoteTile key={imgIdx} text={image.text} />;
                  }
                  return (
                    <LazyImage
                      key={imgIdx}
                      src={image as string}
                      alt={`${location.name} - Photo ${imgIdx + 1}`}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Memories from an unforgettable journey</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
