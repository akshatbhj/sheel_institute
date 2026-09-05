import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import slide1 from "../../assets/optimized/slide_1.webp";

export default function Welcome() {
  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
              <Award size={14} /> 30 Years of Trusted Education
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Welcome to{" "}
                <span className="text-blue-600">Sheel Institute</span>
              </h2>
            </div>

            {/* Perfectly aligned flex container with centered vertical alignment */}
            <div className="flex items-center gap-6 p-5 bg-amber-50/60 border border-amber-200/60 rounded-2xl shadow-sm">
              <span className="text-5xl sm:text-6xl font-black text-amber-500 tracking-tighter shrink-0">
                30+
              </span>
              <div className="border-l border-amber-200 pl-6 flex flex-col justify-center">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  Years of Excellence
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  In Accounting & IT Education System
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Sheel Institute is located at Shivalik Nagar, BHEL, Haridwar
                (Uttarakhand) and for the last 30 years has been empowering
                students for rewarding careers in the leading IT and corporate
                industries. Equipped with cutting-edge infrastructure and
                state-of-the-art computer systems, we foster an environment of
                maximum efficiency.
              </p>
              <p>
                We believe in holistic development-balancing rigorous technical
                training with professional mentorship to shape well-rounded,
                industry-ready professionals.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Know More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Image Area - Expanded Width & Height */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-500/10 to-amber-500/10 rounded-3xl blur-2xl -z-10"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100">
              <img
                src={slide1}
                alt="Sheel Institute Building"
                width="1920"
                height="1020"
                loading="lazy"
                decoding="async"
                className="w-full h-105 sm:h-120 lg:h-130 object-cover rounded-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-medium tracking-wide">
                  Shivalik Nagar, Haridwar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
