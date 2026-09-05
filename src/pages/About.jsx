import { Target, Eye, Compass, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Overview & Director's Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Description */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Sheel Institute
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Sheel Institute is located at Shivalik Nagar, BHEL, Haridwar
              (Uttarakhand) and for the last 30 Years has been helping students
              who are looking for a challenging career in the leading IT
              industry.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              The Institute is equipped with all facilities & latest computer
              machines that provide an environment to work in a more efficient
              way. We believe in providing holistic education; apart from
              academics and professional training, we support the overall
              development of the student.
            </p>
          </div>

          {/* Right Director's Message Card with Integrated Image */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 text-blue-50 pointer-events-none">
              <Quote size={80} strokeWidth={1} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">
                Director's Message
              </h3>
              <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                "Accounting and Information Technology (IT) has become one of
                the most robust industries in the world. It has increased
                productivity and is a key driver of global economic growth.
                Today I am proud to say that we have created a workforce whose
                loyalty and hard work are prevailing across the organization."
              </p>
            </div>

            {/* Director Details & Image Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100 relative z-10">
              <img
                src="/director.jpg"
                alt="Mr. Vibhas Sinha, Director"
                width="487"
                height="487"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded object-cover border-2 border-amber-500 shadow-md shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-xl sm:text-2xl">
                  Mr. Vibhas Sinha
                </h4>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Mission, Vision, Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Technology should improve our critical and problem solving skills,
              improve our motivation and our attitude, and increase our global
              awareness and responsibility.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Institute aims to build and sustain a comprehensive academic
              institute which values service through high quality education in
              information and communications technology.
            </p>
          </div>

          {/* Strategy */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Compass size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Strategy
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Digital technology is getting embedded in every place: every
              thing, every person, every walk of life is being fundamentally
              shaped by digital technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
