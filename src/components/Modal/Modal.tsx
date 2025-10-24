import { useEffect } from "react";

const Modal: React.FC<{ modalImage: string, onClose: () => void }> = ({ modalImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('overflow-hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  });
  
  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
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
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={modalImage}
        alt="Enlarged view"
        className="max-w-full max-h-full object-contain" />
    </div>
  );
}

export default Modal;