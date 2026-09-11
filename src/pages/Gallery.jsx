import { useState } from "react";
import { Image as ImageIcon, X, ZoomIn } from "lucide-react";
import slide1 from "../assets/optimized/slide_1.webp";
import slide2 from "../assets/optimized/slide_2.webp";
import slide3 from "../assets/optimized/slide_3.webp";
import slide4 from "../assets/optimized/slide_4.webp";
import slide5 from "../assets/optimized/slide_5.webp";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: slide1,
      alt: "Sheel Institute building campus exterior",
      tag: "Campus Infrastructure",
      width: 1920,
      height: 1020,
    },
    {
      src: slide2,
      alt: "Director of Sheel Institute at office workstation",
      tag: "Administration & Leadership",
      width: 487,
      height: 487,
    },
    {
      src: slide3,
      alt: "High-tech computer lab workstations with students",
      tag: "Practical Lab Environment",
      width: 1920,
      height: 1020,
    },
    {
      src: slide4,
      alt: "Faculty members, students, and academic ceremonies",
      tag: "Community & Events",
      width: 1920,
      height: 1020,
    },
    {
      src: slide5,
      alt: "Students actively attending technical class sessions",
      tag: "Interactive Classrooms",
      width: 1920,
      height: 1020,
    },
    {
      src: slide2,
      alt: "Reception, career guidance, and student support",
      tag: "Student Counseling",
      width: 1920,
      height: 1020,
    },
    {
      src: "/facility3.png",
      alt: "Reference library, textbooks, and accounting resources",
      tag: "Resource Library",
      width: 220,
      height: 170,
    },
    {
      src: "/facility4.png",
      alt: "Personalized mentorship and one-on-one doubt clearing",
      tag: "Mentorship Sessions",
      width: 220,
      height: 170,
    },
    {
      src: "/facility5.png",
      alt: "Dedicated computer laboratory and hardware training setup",
      tag: "IT Labs",
      width: 220,
      height: 170,
    },
    {
      src: "/facility6.png",
      alt: "Collaborative learning, workshops, and student interaction",
      tag: "Campus Highlights",
      width: 870,
      height: 250,
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          {/* Node Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Campus Life & Moments
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Photo{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A visual glimpse into our classrooms, computer labs, practical
            workshops, and vibrant student community at Sheel Institute.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-black/60 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Corner Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-medium bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-sm">
                    {image.tag}
                  </span>
                </div>

                {/* Hover Reveal Quick Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-white backdrop-blur-md shadow-lg shadow-black/50 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} className="text-blue-400" />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 inset-x-3 z-10">
                  <p className="text-xs font-semibold text-white truncate drop-shadow-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-9999 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-900/90 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white p-2.5 rounded-full border border-slate-700/80 transition-all duration-200 shadow-lg cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-slate-950 p-2">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  decoding="async"
                  className="w-full h-auto max-h-[72vh] object-contain rounded-lg"
                />
              </div>

              {/* Modal Metadata Footer */}
              <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400 mb-0.5 block">
                    {selectedImage.tag}
                  </span>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {selectedImage.alt}
                  </p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap hidden sm:inline">
                  Sheel Institute Campus Archive
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
