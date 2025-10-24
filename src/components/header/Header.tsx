import { useEffect, useState } from "react";
import { LocationType } from "../../types/types";

const Header: React.FC<{ locations: LocationType[] }> = ({ locations }) => {
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
  )
};

export default Header;