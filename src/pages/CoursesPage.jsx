import { Link } from "react-router-dom";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import { coursesData } from "../data/courses";

export default function CoursesPage() {
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

  return (
    <div className="relative bg-slate-950 text-white min-h-screen pt-28 sm:pt-32 pb-24 overflow-hidden">
      {/* Background Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"
      />

      {/* Ambient Radial Glows */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4 z-10 flex flex-col items-center">
        {/* Node Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Career-Ready Curricula
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Our Academic{" "}
          <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            Programs
          </span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Industry-aligned courses designed to build elite technical, software,
          and financial accounting skills.
        </p>
      </div>

      {/* Course Cards Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course, index) => {
            const gradientClass = gradients[index % gradients.length];

            return (
              <div
                key={course.id}
                className="w-full bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-black/60"
              >
                {/* Top Half: Gradient Banner */}
                <div
                  className={`h-40 sm:h-44 w-full bg-linear-to-br ${gradientClass} p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-black/25 backdrop-blur-md text-white rounded-md border border-white/10 shadow-sm">
                      Sheel Institute
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-3 py-1 bg-black/40 backdrop-blur-md text-white rounded-full border border-white/10 shadow-sm">
                      <Clock size={11} className="sm:w-3 sm:h-3" />{" "}
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                      <span className="scale-90 sm:scale-100">
                        {course.icon}
                      </span>
                    </div>
                    <span className="text-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-wider line-clamp-1 drop-shadow-sm">
                      Professional Certification
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Content & Button */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
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
          })}
        </div>
      </div>
    </div>
  );
}
