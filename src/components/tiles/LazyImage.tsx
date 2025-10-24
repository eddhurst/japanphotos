import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  columns?: number;
  tall?: boolean;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, columns = 1, tall = false, onClick }) => {
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
  
  let width = 'col-span-3 lg:col-span-1';
  if (columns === 2) {
    width = 'md:col-span-2 max-h-[300px]';
  } else if (columns === 3) {
    width = 'md:col-span-3 max-h-[300px]';
  }

  let height = 'h-full max-h-[320px]';
  if (tall) {
    height = 'h-full max-h-[656px]';
  }

  const wrapperStyles = clsx(
    'relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer',
    width,
    height,
    !width && !height ? 'aspect-[4/3]' : ''
  )

  return (
    <div
      ref={imgRef}
      className={wrapperStyles}
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