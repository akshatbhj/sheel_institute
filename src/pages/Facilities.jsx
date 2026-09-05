import { Monitor, Cpu, Wifi, BookOpen, ShieldCheck, Users } from "lucide-react";

export default function Facilities() {
  const facilitiesList = [
    {
      title: "Advanced Computer Lab",
      desc: "Equipped with the latest high-performance computer systems and hardware configurations to give students a hands-on technical environment.",
      icon: <Monitor size={24} />,
      image: "/facility5.png",
      width: 220,
      height: 170,
    },
    {
      title: "High-Speed Internet Connectivity",
      desc: "Seamless, high-speed internet access across the campus to support online learning, research, and practical software development.",
      icon: <Wifi size={24} />,
      image: "/facility2.png",
      width: 505,
      height: 292,
    },
    {
      title: "Modern Accounting Software",
      desc: "Dedicated systems pre-loaded with standard industry tools like Tally.ERP 9 to simulate real-world financial accounting and taxation workflows.",
      icon: <Cpu size={24} />,
      image: "/facility1.png",
      width: 640,
      height: 445,
    },
    {
      title: "Resource Library",
      desc: "A comprehensive collection of reference books, journals, and study materials covering IT, programming, and industrial accounting.",
      icon: <BookOpen size={24} />,
      image: "/facility3.png",
      width: 220,
      height: 170,
    },
    {
      title: "Expert Mentorship",
      desc: "Experienced faculty members and certified trainers dedicated to providing personalized guidance and practical skill development.",
      icon: <Users size={24} />,
      image: "/facility4.png",
      width: 220,
      height: 170,
    },
    {
      title: "Certified Environment",
      desc: "A secure, professional, and well-maintained campus located in Shivalik Nagar, BHEL, Haridwar, designed for optimal student productivity.",
      icon: <ShieldCheck size={24} />,
      image: "/facility6.png",
      width: 870,
      height: 250,
    },
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Campus Facilities
          </h1>
          <p className="text-slate-600 text-lg">
            State-of-the-art infrastructure and resources designed to foster an
            efficient and immersive learning environment.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500 transition-all group flex flex-col"
            >
              {/* Facility Image Banner */}
              <div className="h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={facility.image || "/placeholder_course.jpg"}
                  alt={facility.title}
                  width={facility.width}
                  height={facility.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center transition-colors shrink-0">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
