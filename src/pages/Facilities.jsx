import {
  Monitor,
  Cpu,
  Wifi,
  BookOpen,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

export default function Facilities() {
  const facilitiesList = [
    {
      title: "Advanced Computer Lab",
      desc: "Equipped with the latest high-performance computer systems and hardware configurations to give students a hands-on technical environment.",
      icon: <Monitor size={22} />,
      image: "/facility5.png",
      width: 220,
      height: 170,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      borderHover: "hover:border-blue-500/50",
    },
    {
      title: "High-Speed Internet Connectivity",
      desc: "Seamless, high-speed internet access across the campus to support online learning, research, and practical software development.",
      icon: <Wifi size={22} />,
      image: "/facility2.png",
      width: 505,
      height: 292,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      borderHover: "hover:border-cyan-500/50",
    },
    {
      title: "Modern Accounting Software",
      desc: "Dedicated systems pre-loaded with standard industry tools like Tally.ERP 9 to simulate real-world financial accounting and taxation workflows.",
      icon: <Cpu size={22} />,
      image: "/facility1.png",
      width: 640,
      height: 445,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      borderHover: "hover:border-indigo-500/50",
    },
    {
      title: "Resource Library",
      desc: "A comprehensive collection of reference books, journals, and study materials covering IT, programming, and industrial accounting.",
      icon: <BookOpen size={22} />,
      image: "/facility3.png",
      width: 220,
      height: 170,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      borderHover: "hover:border-amber-500/50",
    },
    {
      title: "Expert Mentorship",
      desc: "Experienced faculty members and certified trainers dedicated to providing personalized guidance and practical skill development.",
      icon: <Users size={22} />,
      image: "/facility4.png",
      width: 220,
      height: 170,
      accent: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      borderHover: "hover:border-violet-500/50",
    },
    {
      title: "Certified Environment",
      desc: "A secure, professional, and well-maintained campus located in Shivalik Nagar, BHEL, Haridwar, designed for optimal student productivity.",
      icon: <ShieldCheck size={22} />,
      image: "/facility6.png",
      width: 870,
      height: 250,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      borderHover: "hover:border-emerald-500/50",
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
        className="absolute top-20 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4 z-10 flex flex-col items-center">
        {/* Node Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Infrastructure & Learning Spaces
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Campus{" "}
          <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            Facilities
          </span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          State-of-the-art infrastructure and resources designed to foster an
          efficient, immersive, and hands-on professional learning environment.
        </p>
      </div>

      {/* Facilities Cards Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilitiesList.map((facility, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 ${facility.borderHover} backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-black/60`}
            >
              <div>
                {/* Facility Image Container with Dark Vignette */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={facility.image || "/placeholder_course.jpg"}
                    alt={facility.title}
                    width={facility.width}
                    height={facility.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Contrast Gradients */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105 ${facility.accent}`}
                    >
                      {facility.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Horizon Seam */}
              <div className="px-6 pb-6 pt-2">
                <div className="h-px w-full bg-slate-800/80 group-hover:bg-slate-700/80 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
