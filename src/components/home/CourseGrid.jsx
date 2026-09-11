import { Link } from "react-router-dom";
import { ArrowRight, Clock, Compass } from "lucide-react";
import { coursesData } from "../../data/courses";

export default function CourseGrid() {
  const gradients = [
    "from-blue-600 to-indigo-950",
    "from-emerald-600 to-teal-950",
    "from-amber-600 to-rose-950",
    "from-violet-600 to-purple-950",
    "from-cyan-600 to-blue-950",
    "from-rose-600 to-red-950",
    "from-fuchsia-600 to-pink-950",
    "from-sky-500 to-indigo-950",
  ];

  const infiniteCourses = [...coursesData, ...coursesData];

  // Reusable Course Card Component
  const renderCard = (course, index, isMobile = false) => {
    const gradientClass = gradients[index % gradients.length];
    return (
      <div
        key={`${course.id}-${index}-${isMobile ? "mobile" : "desktop"}`}
        className={`${
          isMobile ? "w-full" : "w-72 sm:w-88 shrink-0"
        } bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
      >
        {/* Top Half: Gradient Banner */}
        <div
          className="h-36 sm:h-44 w-full bg-linear-to-br p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundImage: undefined }}
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${gradientClass}`}
          />

          <div className="flex justify-between items-center relative z-10">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-black/25 backdrop-blur-md text-white rounded-md border border-white/10 shadow-sm">
              Sheel Institute
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-3 py-1 bg-black/40 backdrop-blur-md text-white rounded-full border border-white/10 shadow-sm">
              <Clock size={11} className="sm:w-3 sm:h-3" /> {course.duration}
            </span>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
              <span className="scale-90 sm:scale-100">{course.icon}</span>
            </div>
            <span className="text-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-wider line-clamp-1 drop-shadow-sm">
              Professional Certification
            </span>
          </div>
        </div>

        {/* Bottom Half: Content & Button */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-1">
              {course.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {course.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <Link
              to={`/course/${course.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-sm active:scale-98"
            >
              <span>View Course Details</span>
              <ArrowRight
                size={14}
                className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative pt-0 pb-24 sm:pb-28 bg-slate-950 text-white overflow-hidden">
      {/* Top Hairline Divider with Center Drop Line */}
      <div className="relative w-full flex flex-col items-center pointer-events-none">
        <div className="w-full h-px bg-slate-800/60" />
        <div className="w-px h-8 bg-linear-to-b from-blue-500 to-blue-500/20" />
      </div>

      {/* Background Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"
      />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 z-10 flex flex-col items-center">
        {/* Node Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Career-Ready Curricula
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Featured{" "}
          <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            Courses
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Industry-relevant curriculums designed after careful market study to
          ensure you graduate job-ready and technically proficient.
        </p>
      </div>

      {/* Mobile: Simple Vertical Grid Layout */}
      <div className="block md:hidden px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5">
          {coursesData
            .slice(0, 4)
            .map((course, index) => renderCard(course, index, true))}
        </div>
      </div>

      {/* Desktop & Tablet: Infinite Running Carousel */}
      <div className="hidden md:block relative w-full overflow-hidden py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5 sm:gap-6 px-4">
          {infiniteCourses.map((course, index) =>
            renderCard(course, index, false),
          )}
        </div>
      </div>

      {/* Bottom Exploration Prompt */}
      <div className="mt-12 text-center relative z-10 px-4">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
        >
          <Compass className="w-4 h-4 text-blue-400" />
          <span>Browse Complete Course Catalog</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
        </Link>
      </div>
    </section>
  );
}
