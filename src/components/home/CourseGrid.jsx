import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { coursesData } from '../../data/courses';

export default function CourseGrid() {
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

  const infiniteCourses = [...coursesData, ...coursesData];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Featured Courses
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Industry-relevant curriculums designed after careful market study to ensure you are job-ready.
        </p>
      </div>

      {/* Infinite Scrolling Carousel Track */}
      <div className="w-full overflow-hidden py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4">
          {infiniteCourses.map((course, index) => {
            const gradientClass = gradients[index % gradients.length];
            return (
              <div 
                key={`${course.id}-${index}`} 
                className="w-65 sm:w-90 bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group shrink-0"
              >
                {/* Top Half: Gradient Banner */}
                <div className={`h-32 sm:h-44 w-full bg-linear-to-br ${gradientClass} p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/20 backdrop-blur-md text-white rounded-md">
                      Sheel Institute
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 bg-black/30 backdrop-blur-md text-white rounded-full">
                      <Clock size={10} className="sm:w-3 sm:h-3" /> {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                      <span className="scale-75 sm:scale-100">{course.icon}</span>
                    </div>
                    <span className="text-white/80 font-bold text-[10px] sm:text-xs uppercase tracking-wider line-clamp-1">
                      Professional Certification
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Content & Button */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {course.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-100">
                    <Link 
                      to={`/course/${course.slug}`} 
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-sm"
                    >
                      <span>View Course Details</span>
                      <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}