import { useEffect, useState } from "react";
import { HolidayGroupType, LocationType } from "../../types/types";

type HeaderProps = {
  holidayGroups: HolidayGroupType[];
  selectedHolidayId: string;
  onHolidayChange: (holidayId: string) => void;
  locations: LocationType[];
};

const Header: React.FC<HeaderProps> = ({ holidayGroups, selectedHolidayId, onHolidayChange, locations }) => {
  const [activeSection, setActiveSection] = useState(locations[0]?.id ?? '');

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
  }, [locations]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">
                Zoe and Edd visit...
              </h1>
              <label htmlFor="holiday-select" className="sr-only">Select holiday</label>
              <select
                id="holiday-select"
                value={selectedHolidayId}
                onChange={(event) => onHolidayChange(event.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition focus:border-gray-500 focus:outline-none"
              >
                {holidayGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1">
            {locations.map((location) => (
              <a
                key={location.id}
                href={`#${location.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === location.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {location.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;