import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import slide1 from "../../assets/optimized/slide_1.webp";
import slide2 from "../../assets/optimized/slide_2.webp";
import slide3 from "../../assets/optimized/slide_3.webp";
import slide4 from "../../assets/optimized/slide_4.webp";
import slide5 from "../../assets/optimized/slide_5.webp";

const slides = [
  {
    src: slide1,
    alt: "Sheel Institute building",
  },
  {
    src: slide2,
    alt: "Sheel Institute reception and office",
  },
  {
    src: slide3,
    alt: "Students attending computer classes at Sheel Institute",
  },
  {
    src: slide4,
    alt: "Sheel Institute faculty and staff",
  },
  {
    src: slide5,
    alt: "Students attending classes at Sheel Institute",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));

  const loadSlide = (index) => {
    setLoadedSlides((previous) => {
      if (previous.has(index)) {
        return previous;
      }

      const next = new Set(previous);
      next.add(index);
      return next;
    });
  };

  const goToSlide = (index) => {
    loadSlide(index);
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  };

  // Automatically advance the carousel.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex =
          previousIndex === slides.length - 1 ? 0 : previousIndex + 1;

        // Load the next image before it becomes visible.
        setLoadedSlides((previous) => {
          if (previous.has(nextIndex)) {
            return previous;
          }

          const next = new Set(previous);
          next.add(nextIndex);

          return next;
        });

        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Sheel Institute introduction"
      className="relative w-full h-100 md:h-125 lg:h-150 group overflow-hidden"
    >
      {/* Hero Images */}
      {slides.map((slide, index) => {
        if (!loadedSlides.has(index)) {
          return null;
        }

        const isActive = index === currentIndex;

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              width="2048"
              height="1092"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        );
      })}

      {/* Static Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto pointer-events-none">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-600/80 text-white text-sm font-bold mb-4 uppercase tracking-wide backdrop-blur-sm shadow-sm">
          30 Years of Excellence
        </span>

        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:leading-tight mb-6 drop-shadow-md">
          A Landmark for Professional Education
        </h1>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pointer-events-auto">
          <Link
            to="/courses"
            className="px-8 py-3 font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg"
          >
            Explore Courses
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-4 md:left-8 rounded-sm p-2 bg-white/70 text-slate-900 hover:bg-white transition shadow-md z-30"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-4 md:right-8 rounded-sm p-2 bg-white/70 text-slate-900 hover:bg-white transition shadow-md z-30"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      {/* Pagination */}
      <div
        className="absolute bottom-6 right-0 left-0 flex justify-center space-x-3 z-30"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((slide, slideIndex) => {
          const isActive = currentIndex === slideIndex;

          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToSlide(slideIndex)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={`cursor-pointer transition-all duration-500 rounded-full border border-white/50 shadow-sm ${
                isActive
                  ? "bg-white w-3 h-3 scale-125"
                  : "bg-transparent w-3 h-3 hover:bg-white/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}