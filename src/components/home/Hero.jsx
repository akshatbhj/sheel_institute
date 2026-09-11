import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Award,
  CheckCircle2,
} from "lucide-react";
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
    tag: "Modern Infrastructure",
  },
  {
    src: slide2,
    alt: "Sheel Institute reception and office",
    tag: "Student Support & Admin",
  },
  {
    src: slide3,
    alt: "Students attending computer classes at Sheel Institute",
    tag: "High-Tech Computer Labs",
  },
  {
    src: slide4,
    alt: "Sheel Institute faculty and staff",
    tag: "Expert Mentorship",
  },
  {
    src: slide5,
    alt: "Students attending classes at Sheel Institute",
    tag: "Skill-Centric Learning",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));

  const loadSlide = (index) => {
    setLoadedSlides((previous) => {
      if (previous.has(index)) return previous;
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
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex =
          previousIndex === slides.length - 1 ? 0 : previousIndex + 1;

        setLoadedSlides((previous) => {
          if (previous.has(nextIndex)) return previous;
          const next = new Set(previous);
          next.add(nextIndex);
          return next;
        });

        return nextIndex;
      });
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Sheel Institute introduction"
      className="relative w-full bg-slate-950 text-white overflow-hidden pt-28 sm:pt-28 lg:pt-28 pb-12 lg:pb-16"
    >
      {/* Background Ambient Glows & Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 backdrop-blur-md mb-6 transition hover:border-blue-400/40">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                30+ Years of Academic Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              A Landmark for{" "}
              <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                Professional
              </span>{" "}
              Education.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 font-normal">
              Empowering ambitious minds with industry-certified vocational,
              computer, and management programs built for the modern workforce.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center lg:justify-start mb-10">
              <Link
                to="/courses"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 active:scale-95 w-full sm:w-auto"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm active:scale-95 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-7 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-4 sm:gap-8 w-full lg:w-fit">
              <div className="text-center lg:text-left flex-1 lg:flex-initial">
                <div className="text-2xl font-bold text-white tracking-tight">
                  30+
                </div>
                <div className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">
                  Years Legacy
                </div>
              </div>

              <div className="h-8 w-px bg-slate-800/80 shrink-0" />

              <div className="text-center lg:text-left flex-1 lg:flex-initial">
                <div className="text-2xl font-bold text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">
                  Practical Focus
                </div>
              </div>

              <div className="h-8 w-px bg-slate-800/80 shrink-0" />

              <div className="text-center lg:text-left flex-1 lg:flex-initial">
                <div className="text-2xl font-bold text-white tracking-tight">
                  15k+
                </div>
                <div className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">
                  Alumni Network
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Media Showcase Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Top Right Floating Accent Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-3 z-30 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/70 shadow-2xl backdrop-blur-md">
              <Award className="w-5 h-5 text-amber-400" />
              <div className="text-xs text-left">
                <p className="font-semibold text-white">Govt. & Industry</p>
                <p className="text-slate-400 text-[10px]">
                  Recognized Certifications
                </p>
              </div>
            </div>

            {/* Bottom Left Floating Accent Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 z-30 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/70 shadow-2xl backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="text-xs text-left">
                <p className="font-semibold text-white">Job-Ready Training</p>
                <p className="text-slate-400 text-[10px]">
                  Hands-on Lab Curriculum
                </p>
              </div>
            </div>

            {/* Main Stage Window */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-950/40 bg-slate-900 group">
              {/* Carousel Slides */}
              {slides.map((slide, index) => {
                if (!loadedSlides.has(index)) return null;
                const isActive = index === currentIndex;

                return (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center"
                      width="1200"
                      height="900"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Slide Caption Pill */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-md text-[11px] font-medium bg-slate-950/70 backdrop-blur-md text-slate-200 border border-slate-700/50">
                        {slide.tag}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Navigation Controls */}
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="pointer-events-auto p-2 rounded-lg bg-slate-950/60 hover:bg-slate-900 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition shadow-md active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="pointer-events-auto p-2 rounded-lg bg-slate-950/60 hover:bg-slate-900 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition shadow-md active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Segmented Timeline Progress Indicators */}
              <div
                className="absolute bottom-3 inset-x-4 flex gap-1.5 z-20"
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
                      className="h-1 flex-1 rounded-full overflow-hidden bg-white/20 transition-all cursor-pointer relative"
                    >
                      <div
                        className={`h-full bg-blue-400 transition-all duration-300 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
