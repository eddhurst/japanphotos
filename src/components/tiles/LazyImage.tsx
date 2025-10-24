import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, wide = false, tall = false, onClick }: { src: string; alt: string, wide?: boolean, tall?: boolean, onClick?: () => void }) => {
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
      className={`relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer ${aspectRatio}`}
      onClick={onClick}
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

export default LazyImage;