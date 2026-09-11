import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-9999 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  );
}