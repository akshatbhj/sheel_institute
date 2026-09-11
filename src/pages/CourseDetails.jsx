/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { coursesData } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();

  const course = coursesData.find((c) => c.slug === slug);

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

  const courseIndex = coursesData.findIndex((c) => c.slug === slug);
  const gradientClass = gradients[Math.abs(courseIndex) % gradients.length];

  if (!course) {
    return (
      <div className="relative py-32 text-center min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Course Not Found
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested course curriculum does not exist or has been relocated.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/25"
        >
          <ArrowLeft size={16} /> Return to Courses
        </Link>
      </div>
    );
  }

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
        className="absolute top-20 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Header Banner */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 z-10">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white mb-6 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-700 backdrop-blur-md transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={14} /> Back to Courses
        </Link>

        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300">
              Sheel Institute
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-slate-900/80 border border-slate-800/80 backdrop-blur-md text-white rounded-full shadow-sm">
            <Clock size={12} className="text-amber-400" /> {course.duration}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          {course.details?.fullTitle || course.title}
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {course.details ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* TEXT / SYLLABUS COLUMN */}
            <div className="order-2 lg:order-1 lg:col-span-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl space-y-8">
              {/* Eligibility */}
              {course.details.eligibility && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Eligibility / Requirements
                    </h3>
                  </div>

                  {Array.isArray(course.details.eligibility) ? (
                    <ul className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {course.details.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {course.details.eligibility}
                    </p>
                  )}
                </div>
              )}

              {/* Overview */}
              {course.details.overview && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Overview
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {course.details.overview}
                  </p>
                </div>
              )}

              {/* Prerequisites */}
              {course.details.prerequisites && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Course Prerequisites
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {course.details.prerequisites}
                  </p>
                </div>
              )}

              {/* Syllabus */}
              {course.details.syllabus && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Syllabus
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {course.details.syllabus.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                      >
                        <div className="mt-1.5 flex items-center justify-center shrink-0 w-3.5 h-3.5 rounded-full border border-amber-500/80">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modules */}
              {course.details.modules && (
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Course Modules
                    </h3>
                  </div>
                  {course.details.modules.map((module, modIdx) => (
                    <div
                      key={modIdx}
                      className="border border-slate-800 rounded-xl p-5 bg-slate-950/60 space-y-3"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-blue-400">
                        {module.name}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {module.topics.map((topic, topIdx) => (
                          <li
                            key={topIdx}
                            className="flex items-start text-slate-400 text-xs sm:text-sm"
                          >
                            <span className="mr-2 text-amber-500 font-bold">
                              •
                            </span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Levels */}
              {course.details.levels && (
                <div className="space-y-5">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Course Levels
                    </h3>
                  </div>
                  {course.details.levels.map((lvl, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-800 rounded-xl p-5 bg-slate-950/60 space-y-2"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-blue-400">
                        {lvl.name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-400 italic">
                        "{lvl.tagline}"
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {lvl.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Benefits */}
              {course.details.benefits && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Course Benefits
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {course.details.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* STICKY SIDEBAR / ACTION POD */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full">
              <div className="sticky top-28 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl space-y-6">
                {/* Course Image Header with Subtle Vignette */}
                <div className="relative h-56 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                  <img
                    src={course.details.image || "/placeholder_course.jpg"}
                    alt={`${course.title} course`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">
                      Standard Certification Track
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {course.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80">
                    <Link
                      to="/apply"
                      className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95"
                    >
                      <span>Apply For Admission Now</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-12 text-center text-slate-400 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              {course.title}
            </h2>
            <p className="text-sm text-slate-400">
              Detailed syllabus is currently being revised for upcoming academic
              batches. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
