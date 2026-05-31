import { useEffect, useRef, useState } from 'react';
import Header from './components/header/Header';
import Layout from './components/Layout/Layout';
import Modal from './components/Modal/Modal';
import { holidayGroups } from './holidays';

function getHolidayFromUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const holidayId = params.get('holiday');
  return holidayGroups.some((group) => group.id === holidayId)
    ? (holidayId as string)
    : holidayGroups[0].id;
}

function App() {
  const [selectedHolidayId, setSelectedHolidayId] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return holidayGroups[0].id;
    }
    return getHolidayFromUrl();
  });
  const [modalImage, setModalImage] = useState<string | null>(null);
  const handleCloseModal = () => setModalImage(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('holiday', selectedHolidayId);

    const queryString = params.toString();
    const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`;
    window.history.replaceState(null, '', newUrl);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo(0, 0);
  }, [selectedHolidayId]);

  const selectedHoliday = holidayGroups.find((holiday) => holiday.id === selectedHolidayId) ?? holidayGroups[0];
  const locations = selectedHoliday.locations;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        holidayGroups={holidayGroups}
        selectedHolidayId={selectedHolidayId}
        onHolidayChange={setSelectedHolidayId}
        locations={locations}
      />

      <main className="pt-24 pb-16">
        <div className="max-w-9xl mx-auto px-4">
          {locations.map((location, idx) => (
            <section
              key={location.id}
              id={location.id}
              className={`${idx > 0 ? 'mt-20' : ''} scroll-mt-28`}
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                  location.tiles.map((tile, imgIdx) => (
                    <Layout key={imgIdx} tile={tile} openModal={setModalImage} locationName={location.name} />
                  ))
                }
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
          <p className="text-gray-600">&copy; Edward Hurst and Zoe Courchene 2013 - 2026. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
