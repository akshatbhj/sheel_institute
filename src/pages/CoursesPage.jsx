import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { coursesData } from '../data/courses';

export default function CoursesPage() {
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

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-14 pb-24 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Academic Programs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Industry-aligned courses designed to build elite technical and financial accounting skills.
          </p>
        </div>
      </div>

      {/* Course Cards Grid - Negative margin pulls the grid up so the first card overlaps the banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-10 pb-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course, index) => {
            const gradientClass = gradients[index % gradients.length];
            return (
              <div 
                key={course.id} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Half: Vibrant Creative Gradient & Icon Banner */}
                <div className={`h-40 sm:h-44 w-full bg-linear-to-br ${gradientClass} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/20 backdrop-blur-md text-white rounded-md">
                      Sheel Institute
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-black/30 backdrop-blur-md text-white rounded-full">
                      <Clock size={12} /> {course.duration}
                    </span>
                  </div>

                  {/* Large Course Icon & Title Accent */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                      {course.icon}
                    </div>
                    <span className="text-white/80 font-bold text-xs uppercase tracking-wider line-clamp-1">
                      Professional Certification
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Content & Intuitive Button */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {course.desc}
                    </p>
                  </div>

                  {/* Intuitive Full-Width Call to Action Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      to={`/course/${course.slug}`} 
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300 shadow-sm"
                    >
                      <span>View Course Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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