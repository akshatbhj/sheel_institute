export default function MissionVisionSection() {
  const cards = [
    {
      title: "Our Mission",
      desc: "Improving critical and problem-solving skills through technology to create effective, responsible members of society and lifelong learners.",
      accent: "from-blue-600 to-indigo-900",
      iconBg: "bg-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      desc: "Building a comprehensive academic institute that values service through high-quality education in information and communications technology.",
      accent: "from-amber-500 to-rose-900",
      iconBg: "bg-amber-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Expert Faculty",
      desc: "Courses are taught by experienced & certified faculty who constantly upgrade their technical skills to maintain industry expertise.",
      accent: "from-emerald-600 to-teal-900",
      iconBg: "bg-emerald-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dotted background pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top accent line matching card style */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${card.accent}`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 ${card.iconBg} text-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Decorative subtle ambient shape */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-100 rounded-full blur-2xl group-hover:bg-blue-50 transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}