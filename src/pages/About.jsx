import { Target, Eye, Compass, Quote, Award, Sparkles } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "Technology should improve our critical and problem-solving skills, improve our motivation and attitude, and increase global awareness and responsibility.",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      borderHover: "hover:border-blue-500/50",
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "The Institute aims to build and sustain a comprehensive academic institute that values service through high-quality education in information and communications technology.",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      borderHover: "hover:border-amber-500/50",
    },
    {
      icon: Compass,
      title: "Our Strategy",
      desc: "Digital technology is getting embedded everywhere: every process, every individual, and every professional field is being fundamentally shaped by it.",
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      borderHover: "hover:border-indigo-500/50",
    },
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
        className="absolute top-24 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Section: Overview & Director's Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16 sm:mb-24">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-4 w-full">
              {/* Node Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Institutional Profile
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About{" "}
                <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  Sheel Institute
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
                Sheel Institute is located at Shivalik Nagar, BHEL, Haridwar
                (Uttarakhand). For over three decades, we have mentored students
                aspiring toward high-trajectory, competitive careers in the IT
                and enterprise technology sectors.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Our campus features modern computing workstations and hands-on
                lab setups designed for maximum efficiency. Beyond technical
                skills and certifications, our pedagogical framework emphasizes
                critical reasoning, problem-solving, and professional
                discipline.
              </p>
            </div>

            {/* Quick Legacy Callout Strip */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center justify-around sm:justify-start gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    30+ Years
                  </p>
                  <p className="text-xs text-slate-400">Academic Legacy</p>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-800" />

              <div>
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Haridwar, UK
                </p>
                <p className="text-xs text-slate-400">Campus Base</p>
              </div>
            </div>
          </div>

          {/* Right Column: Director's Message Card */}
          <div className="lg:col-span-5 relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group">
            {/* Watermark Quote Icon */}
            <div className="absolute -top-4 -right-4 p-4 text-slate-800/40 pointer-events-none transition-transform duration-500 group-hover:scale-105">
              <Quote size={100} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                  Director's Message
                </h3>
              </div>

              <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6 font-normal">
                "Accounting and Information Technology have become the primary
                engines of productivity and global industry growth. I am proud
                to see our alumni continually recognized across enterprise
                organizations for their technical integrity and work ethic."
              </p>
            </div>

            {/* Director Details & Headshot Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 relative z-10">
              <img
                src="/director.jpg"
                alt="Mr. Vibhas Sinha, Director"
                width="487"
                height="487"
                loading="lazy"
                decoding="async"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border-2 border-amber-400/80 shadow-lg shadow-black/50 shrink-0"
              />
              <div>
                <h4 className="font-bold text-white text-lg sm:text-xl tracking-tight">
                  Mr. Vibhas Sinha
                </h4>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                  Director, Sheel Institute
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Junction Divider */}
        <div className="relative w-full flex flex-col items-center pointer-events-none mb-12 sm:mb-16">
          <div className="w-full h-px bg-slate-800/60" />
          <div className="w-px h-8 bg-linear-to-b from-blue-500 to-blue-500/20" />
        </div>

        {/* Bottom Section: Mission, Vision, Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 ${item.borderHover} backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 overflow-hidden`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-105 ${item.accent}`}
                  >
                    <IconComponent size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
