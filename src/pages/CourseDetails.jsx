import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { coursesData } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();

  const course = coursesData.find((c) => c.slug === slug);

  const gradients = [
    'from-blue-600 to-indigo-900',
    'from-emerald-600 to-teal-900',
    'from-amber-500 to-rose-900',
    'from-violet-600 to-purple-900',
    'from-cyan-600 to-blue-900',
    'from-rose-600 to-red-900',
    'from-fuchsia-600 to-pink-900',
    'from-sky-500 to-indigo-900',
  ];

  const courseIndex = coursesData.findIndex((c) => c.slug === slug);
  const gradientClass = gradients[Math.abs(courseIndex) % gradients.length];

  if (!course) {
    return (
      <div className="py-24 text-center min-h-screen bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900">Course not found</h2>
        <Link
          to="/courses"
          className="text-blue-600 hover:underline mt-4 inline-block font-semibold"
        >
          Return to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className={`bg-linear-to-br ${gradientClass} text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center text-white/85 hover:text-white font-medium text-sm mb-6 transition-colors bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 w-fit"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Courses
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-md">
              Sheel Institute
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-black/30 backdrop-blur-md text-white rounded-full">
              <Clock size={12} /> {course.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            {course.details?.fullTitle || course.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 pb-24 relative z-20">
        {course.details ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* IMAGE COLUMN (Appears FIRST on mobile using order-1, and right-side (5 cols) on desktop using lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 w-full">
              <div className="sticky top-28 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl shadow-slate-900/5 space-y-6">
                
                <div className="h-56 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-100 relative shadow-inner">
                  <img
                    src={course.details.image || "/placeholder_course.jpg"}
                    alt={`${course.title} course`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {course.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/apply"
                      className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/25"
                    >
                      Apply For Admission Now
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* TEXT COLUMN (Appears SECOND on mobile using order-2, and left-side (7 cols) on desktop using lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 space-y-8">
              
              {/* Eligibility */}
              {course.details.eligibility && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Eligibility / Requirements
                  </h3>
                  {Array.isArray(course.details.eligibility) ? (
                    <ul className="space-y-2 list-disc list-inside text-slate-600">
                      {course.details.eligibility.map((item, idx) => (
                        <li key={idx} className="text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-600 text-base leading-relaxed">{course.details.eligibility}</p>
                  )}
                </div>
              )}

              {/* Overview */}
              {course.details.overview && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Overview
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">{course.details.overview}</p>
                </div>
              )}

              {/* Prerequisites */}
              {course.details.prerequisites && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Course Prerequisites
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">{course.details.prerequisites}</p>
                </div>
              )}

              {/* Syllabus */}
              {course.details.syllabus && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Syllabus
                  </h3>
                  <ul className="space-y-3">
                    {course.details.syllabus.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-600 text-base"
                      >
                        <div className="mt-1.5 mr-3 flex items-center justify-center shrink-0 w-4 h-4 rounded-full border-2 border-amber-500">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modules */}
              {course.details.modules && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Course Modules
                  </h3>
                  {course.details.modules.map((module, modIdx) => (
                    <div
                      key={modIdx}
                      className="border border-slate-100 rounded-xl p-5 bg-slate-50/70 space-y-3"
                    >
                      <h4 className="text-base font-bold text-blue-700">
                        {module.name}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {module.topics.map((topic, topIdx) => (
                          <li
                            key={topIdx}
                            className="flex items-start text-slate-600 text-sm"
                          >
                            <div className="mt-1 mr-2 flex items-center justify-center shrink-0 w-3.5 h-3.5 rounded-full border border-amber-500">
                              <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                            </div>
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
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Course Levels
                  </h3>
                  {course.details.levels.map((lvl, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-100 rounded-xl p-5 bg-slate-50/70 space-y-2"
                    >
                      <h4 className="text-base font-bold text-blue-700">
                        {lvl.name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-600 italic">
                        "{lvl.tagline}"
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {lvl.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Benefits */}
              {course.details.benefits && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                    Review Benefits
                  </h3>
                  <ul className="space-y-3">
                    {course.details.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-600 text-base"
                      >
                        <div className="mt-1.5 mr-3 flex items-center justify-center shrink-0 w-4 h-4 rounded-full border-2 border-amber-500">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        ) : (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center text-slate-500 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {course.title}
            </h2>
            Detailed syllabus is being updated. Check back soon.
          </div>
        )}
      </div>

    </div>
  );
}