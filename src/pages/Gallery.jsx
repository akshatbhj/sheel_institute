import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";
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
      alt: "Sheel Institute building",
      width: 1920,
      height: 1020,
    },
    {
      src: slide2,
      alt: "Director of Sheel Institute",
      width: 487,
      height: 487,
    },
    {
      src: slide3,
      alt: "Sheel Institute campus",
      width: 1920,
      height: 1020,
    },
    {
      src: slide4,
      alt: "Sheel Institute students and campus",
      width: 1920,
      height: 1020,
    },
    {
      src: slide5,
      alt: "Sheel Institute educational environment",
      width: 1920,
      height: 1020,
    },
    {
      src: slide2,
      alt: "Sheel Institute learning environment",
      width: 1920,
      height: 1020,
    },
    {
      src: "/facility3.png",
      alt: "Sheel Institute facility",
      width: 220,
      height: 170,
    },
    {
      src: "/facility4.png",
      alt: "Sheel Institute facility",
      width: 220,
      height: 170,
    },
    {
      src: "/facility5.png",
      alt: "Sheel Institute computer facility",
      width: 220,
      height: 170,
    },
    {
      src: "/facility6.png",
      alt: "Sheel Institute campus facility",
      width: 870,
      height: 250,
    },
  ];
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <ImageIcon size={14} /> Campus Life & Moments
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-slate-600 text-lg">
            A visual glimpse into our classrooms, computer labs, events, and
            vibrant student community at Sheel Institute.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group relative"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-9999 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                decoding="async"
                className="w-full h-auto max-h-[80vh] object-contain bg-slate-900"
              />
              <div className="p-4 bg-white text-center">
                <p className="font-bold text-slate-900 text-base">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
