import {
  BookOpen01Icon,
  UserStar01Icon,
  Brain02Icon,
  Building03Icon,
} from "@hugeicons/core-free-icons";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  MonitorPlay,
} from "lucide-react";

import Icon from "../icons/Icon";
import whyChooseUs from "../../assets/optimized/why-choose-us.png";

export default function WhyChooseUs() {
  const features = [
    {
      step: "01",
      title: "Industry-Relevant Courses",
      tag: "Curriculum",
      desc: "Direct alignment with current tech and accounting enterprise requirements.",
      icon: BookOpen01Icon,
      hoverBorder: "hover:border-blue-500/50",
      accentBadge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      glow: "group-hover:bg-blue-600/10",
    },
    {
      step: "02",
      title: "Certified Expert Faculty",
      tag: "Mentorship",
      desc: "Instructors with industry track records who constantly upgrade technical acumen.",
      icon: UserStar01Icon,
      hoverBorder: "hover:border-amber-500/50",
      accentBadge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      glow: "group-hover:bg-amber-600/10",
    },
    {
      step: "03",
      title: "Holistic Skill Progression",
      tag: "Methodology",
      desc: "Structured milestone checkpoints focused on critical reasoning and logic building.",
      icon: Brain02Icon,
      hoverBorder: "hover:border-violet-500/50",
      accentBadge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      glow: "group-hover:bg-violet-600/10",
    },
    {
      step: "04",
      title: "Modern Lab Infrastructure",
      tag: "Facilities",
      desc: "Fully air-conditioned systems, high-speed networks, and designated testing setups.",
      icon: Building03Icon,
      hoverBorder: "hover:border-emerald-500/50",
      accentBadge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      glow: "group-hover:bg-emerald-600/10",
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-0 pb-14 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Hairline Divider with Center Drop Line */}
      <div className="relative w-full flex flex-col items-center pointer-events-none">
        <div className="w-full h-px bg-slate-800/60" />
        <div className="w-px h-8 bg-linear-to-b from-blue-500 to-blue-500/20" />
      </div>

      {/* Dot Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"
      />

      {/* Ambient background flares */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header: Centered & Focused */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 flex flex-col items-center">
          {/* Node Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              The Sheel Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Choose{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Sheel Institute?
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            A comprehensive learning ecosystem designed to bridge theoretical
            fundamentals with hands-on enterprise competency.
          </p>
        </div>

        {/* Cinematic Panoramic Showcase Stage */}
        <div className="relative w-full rounded-3xl p-2 sm:p-3 bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl mb-12 overflow-hidden group">
          <div className="relative w-full h-72 sm:h-96 lg:h-105 rounded-2xl overflow-hidden">
            <img
              src={whyChooseUs}
              alt="Students attending classes at Sheel Institute"
              width="1400"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
            />

            {/* Gradient Overlays for High-Tech Contrast */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-transparent to-slate-950/60" />

            {/* Top-Left Stage Tag */}
            <div className="absolute top-5 left-5 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md text-slate-200 text-xs font-medium">
              <MonitorPlay className="w-4 h-4 text-blue-400" />
              <span>Dedicated Practical Lab Training</span>
            </div>

            {/* Bottom Overlay Info Banner */}
            <div className="absolute bottom-5 inset-x-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Govt. Authorized Curriculum
                  </h4>
                  <p className="text-xs text-slate-400">
                    Regular assessments & verified completion diplomas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-300 font-medium border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800 w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Small Batch Sizes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>1-on-1 Doubt Clearing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Feature Bento Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${feature.hoverBorder} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden`}
            >
              {/* Card Ambient Glow Spot */}
              <div
                className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${feature.glow}`}
              />

              <div>
                {/* Header: Icon + Step Index */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:border-slate-600">
                    <Icon
                      icon={feature.icon}
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-xs font-black text-slate-700 group-hover:text-slate-500 transition-colors">
                    {feature.step}
                  </span>
                </div>

                <div className="relative z-10">
                  <span
                    className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-3 ${feature.accentBadge}`}
                  >
                    {feature.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-slate-100 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Micro Line */}
              <div className="relative z-10 pt-5 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                <span>Standard Pillar</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
