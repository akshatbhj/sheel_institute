import { BookOpen, Globe2, Sparkles, ArrowUpRight } from "lucide-react";

export default function MissionVisionSection() {
  const cards = [
    {
      index: "01",
      title: "Our Mission",
      category: "Purpose & Drive",
      desc: "Improving critical and problem-solving skills through technology to create effective, responsible members of society and lifelong learners.",
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      accentGlow: "from-blue-500/20 via-indigo-500/10 to-transparent",
      badgeBorder: "border-blue-500/30 bg-blue-500/10 text-blue-300",
      hoverBorder: "hover:border-blue-500/50",
      glowSpot: "group-hover:bg-blue-600/15",
    },
    {
      index: "02",
      title: "Our Vision",
      category: "Future Outlook",
      desc: "Building a comprehensive academic institute that values service through high-quality education in information and communications technology.",
      icon: <Globe2 className="w-5 h-5 text-amber-400" />,
      accentGlow: "from-amber-500/20 via-rose-500/10 to-transparent",
      badgeBorder: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      hoverBorder: "hover:border-amber-500/50",
      glowSpot: "group-hover:bg-amber-600/15",
    },
    {
      index: "03",
      title: "Expert Faculty",
      category: "Academic Standard",
      desc: "Courses are taught by experienced & certified faculty who constantly upgrade their technical skills to maintain industry expertise.",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeBorder: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      hoverBorder: "hover:border-emerald-500/50",
      glowSpot: "group-hover:bg-emerald-600/15",
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-2 pb-14 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 1. Luminous Tapered Horizon Seam Divider */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.3)]" />
      </div>

      {/* 2. Seamless Ambient Flow Gradient */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 inset-x-0 h-48 bg-linear-to-b from-blue-950/15 via-slate-950/40 to-transparent pointer-events-none" 
      />

      {/* Dot Grid Pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header with Connecting Flow Line */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">
          
          {/* Vertical Visual Guide Line */}
          <div className="w-px h-10 bg-linear-to-b from-blue-500/40 via-blue-400/20 to-transparent mb-4" />

          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md mb-4 shadow-inner shadow-blue-500/5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Pillars of Sheel Institute
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Forging Future-Ready{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rooted in dedication, high-caliber instruction, and real-world impact across every discipline.
          </p>
        </div>

        {/* Exquisite Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.index}
              className={`group relative rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between overflow-hidden ${card.hoverBorder}`}
            >
              {/* Radial Accent Glow Behind Card */}
              <div 
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-linear-to-br ${card.accentGlow} blur-2xl transition-transform duration-700 group-hover:scale-150 pointer-events-none`} 
              />
              <div 
                className={`absolute inset-0 bg-transparent transition-colors duration-500 ${card.glowSpot} pointer-events-none`} 
              />

              {/* Watermark Index Number */}
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-800/40 select-none group-hover:text-slate-700/50 transition-colors">
                {card.index}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 rounded-xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 shadow-lg ${card.badgeBorder}`}>
                    {card.icon}
                  </div>
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
                  {card.category}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-slate-100 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Interactive Link Line */}
              <div className="relative z-10 pt-8 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Core Foundation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}