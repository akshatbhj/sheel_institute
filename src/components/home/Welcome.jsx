import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin,
  Building2,
} from "lucide-react";
import slide1 from "../../assets/optimized/slide_1.webp";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pb-32 bg-slate-950 text-white">
      {/* Top subtle seam divider from Pillars section */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
        <div className="w-2/3 max-w-3xl h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* Dynamic Background Dot Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 pointer-events-none"
      />

      {/* Subtle Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-6 w-full">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 backdrop-blur-md shadow-inner">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                30 Years of Trusted Education
              </span>
            </div>

            {/* Headline */}
            <div className="w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Welcome to{" "}
                <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  Sheel Institute
                </span>
              </h2>
            </div>

            {/* 30+ Years Stat Card */}
            <div className="w-full flex items-center gap-6 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl">
              <span className="text-5xl sm:text-6xl font-black bg-linear-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent tracking-tight shrink-0">
                30+
              </span>
              <div className="border-l border-slate-800 pl-6 flex flex-col justify-center">
                <h3 className="font-bold text-white text-base sm:text-lg leading-snug">
                  Years of Excellence
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-0.5">
                  In Accounting, Vocational & IT Education Ecosystems
                </p>
              </div>
            </div>

            {/* Body Copy */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-normal">
              <p>
                Sheel Institute is situated at Shivalik Nagar, BHEL, Haridwar
                (Uttarakhand). For over three decades, we have been empowering
                students to build high-trajectory careers in leading IT and
                corporate sectors.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Equipped with cutting-edge computer labs and authorized industry
                curricula, we cultivate an environment of hands-on technical
                proficiency combined with personalized career mentorship.
              </p>
            </div>

            {/* Verification Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full py-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. Recognized & Authorized Training</span>
              </div>
              <div className="flex items-center  gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Job-Ready Practical Course Modules</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 w-full flex justify-center lg:justify-start">
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Stage */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Soft Outer Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 bg-linear-to-tr from-blue-600/15 via-indigo-600/10 to-amber-500/10 rounded-3xl blur-2xl -z-10"
            />

            {/* Image Card Container */}
            <div className="relative w-full rounded-2xl p-2.5 bg-slate-900 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-xl overflow-hidden aspect-4/5 sm:aspect-3/4">
                <img
                  src={slide1}
                  alt="Sheel Institute Building Campus"
                  width="1200"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Contrast Vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Campus Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-700/60 backdrop-blur-md text-white text-xs font-medium">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Main Campus Building</span>
                </div>
              </div>

              {/* Location Tag */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700/80 backdrop-blur-md flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Shivalik Nagar, Haridwar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}