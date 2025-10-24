const QuoteTile = ({ text, wide = false }: { text: string; wide?: boolean }) => {
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

export default QuoteTile;