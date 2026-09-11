import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

import partner1 from "../../assets/partner_1.jpg";
import partner2 from "../../assets/partner_2.jpg";
import partner3 from "../../assets/partner_3.jpg";
import partner4 from "../../assets/partner_4.jpg";
import partner5 from "../../assets/partner_5.jpg";
import partner6 from "../../assets/partner_6.jpg";
import partner7 from "../../assets/partner_7.jpg";
import partner8 from "../../assets/partner_8.jpg";
import partner9 from "../../assets/partner_9.jpg";
import partner10 from "../../assets/partner_10.jpg";
import partner11 from "../../assets/partner_11.jpg";

export default function Partners() {
  const partnerLogos = [
    { id: 1, name: "Tally Education", src: partner1 },
    { id: 2, name: "Adobe Certified", src: partner2 },
    { id: 3, name: "Microsoft Office", src: partner3 },
    { id: 4, name: "Microsoft Tech", src: partner4 },
    { id: 5, name: "IC3 Digital", src: partner5 },
    { id: 6, name: "E-Learning", src: partner6 },
    { id: 7, name: "Industry Associate", src: partner7 },
    { id: 8, name: "IT Zone", src: partner8 },
    { id: 9, name: "Office Champion", src: partner9 },
    { id: 10, name: "Tally Learning", src: partner10 },
    { id: 11, name: "Tally 3-Star", src: partner11 },
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-0 pb-14 sm:pb-28 overflow-hidden">
      {/* Top Hairline Divider with Center Drop Line */}
      <div className="relative w-full flex flex-col items-center pointer-events-none">
        <div className="w-full h-px bg-slate-800/60" />
        <div className="w-px h-8 bg-linear-to-b from-blue-500 to-blue-500/20" />
      </div>

      {/* Subtle Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          {/* Node Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Affiliations & Certifications
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Authorized{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Industry Partners
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            Recognized by premier computing and accounting authorities, ensuring
            credentials carry verifiable industry weight.
          </p>
        </div>

        {/* Clean Bento Grid: Controlled, low-glare logo pods */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="group relative h-28 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 py-3 px-0 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 overflow-hidden backdrop-blur-sm"
            >
              {/* Contained Light Frame (Width reduced from w-full to w-4/5) */}
              <div className="w-4/5 h-full rounded-xl bg-white flex items-center justify-center p-3 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={partner.src}
                  alt={partner.name}
                  width="200"
                  height="70"
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 sm:max-h-16 max-w-[85%] object-contain mix-blend-multiply"
                />
              </div>
            </div>
          ))}

          {/* Symmetrical 12th Card */}
          <div className="group relative h-28 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mb-1 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              100% Certified
            </span>
            <span className="text-[10px] text-slate-400">
              Authentic Credentials
            </span>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-14 pt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Authorized Testing & Training Center</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Verifiable Online Credentials</span>
          </div>
        </div>
      </div>
    </section>
  );
}
