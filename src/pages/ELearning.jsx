import { Link } from "react-router-dom";
import { Laptop, ArrowRight, CheckCircle2, MonitorCheck, Wifi } from "lucide-react";
import elearningImage from "../assets/optimized/elearning.webp";

export default function ELearning() {
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
        className="absolute top-20 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Text Content & Curriculum Overview */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-6">
            {/* Node Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 backdrop-blur-md shadow-inner">
              <Laptop className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Smart E-Learning Platform
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              E-Learning{" "}
              <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                Facility
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Sheel Institute offers certified online training courses and
              programs in the fields of Financial Accounting and Taxation,
              Tally.ERP9 & All types of Basic & Advance Computer Courses.
            </p>

            {/* Micro Feature Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 border-y border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Self-Paced Flexible Schedules</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Online Certifications</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <Wifi className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Remote Lab Cloud Connectivity</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <MonitorCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated Faculty Guidance</span>
              </div>
            </div>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Online training is generally self-paced and customizable to suit
                an individual's specific learning needs. Therefore, online
                training can be conducted at almost any time and place, provided
                there is a computer with high-speed internet access. This makes
                this form of training convenient for the users, who can modify
                their training to fit into their day-to-day schedule.
              </p>
              <p>
                To use online training, users should have a basic knowledge of
                computers. This should include, but is not limited to, the
                ability to use a mouse, which involves knowing the difference
                between left-click and right-click; the ability to open and
                close documents and web pages; and the ability to navigate a
                website and web pages. Those with no computer experience at all
                may have trouble using our online training and, for their own
                benefit, may want to enroll in a basic computer training class
                before using any of our online courses. Advanced computer users
                will be able to use our eLearning system to its full capacity.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/apply"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95 w-full sm:w-auto"
              >
                <span>Click here to Apply for Admission</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Admission Poster Display */}
          <div className="lg:col-span-5 w-full">
            <div className="sticky top-28 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                  Tally Course & E-Learning Smart Classroom
                </h3>
              </div>

              {/* Contained Light Frame for the Admission Poster */}
              <div className="rounded-xl overflow-hidden bg-white/95 p-2 shadow-inner border border-white/20">
                <img
                  src={elearningImage}
                  alt="Tally Course with Certificate Admission Open Flyer"
                  width="1280"
                  height="1073"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <p className="text-[11px] text-slate-400 tracking-wide">
                Authorized testing & training curriculum for academic sessions
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}