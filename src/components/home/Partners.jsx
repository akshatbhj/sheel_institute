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
    { id: 1, alt: "Sheel Institute partner logo", src: partner1 },
    { id: 2, alt: "Sheel Institute partner logo", src: partner2 },
    { id: 3, alt: "Sheel Institute partner logo", src: partner3 },
    { id: 4, alt: "Sheel Institute partner logo", src: partner4 },
    { id: 5, alt: "Sheel Institute partner logo", src: partner5 },
    { id: 6, alt: "Sheel Institute partner logo", src: partner6 },
    { id: 7, alt: "Sheel Institute partner logo", src: partner7 },
    { id: 8, alt: "Sheel Institute partner logo", src: partner8 },
    { id: 9, alt: "Sheel Institute partner logo", src: partner9 },
    { id: 10, alt: "Sheel Institute partner logo", src: partner10 },
    { id: 11, alt: "Sheel Institute partner logo", src: partner11 },
  ];

  return (
    <div className="bg-slate-50 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
            Our Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Sheel Institute is a rapidly growing institute, widely acknowledged
            for its warmth and welcome to both parents and students. Choosing
            the right institute for your child is a difficult decision.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-slate-200 h-32 flex items-center justify-center p-6 hover:shadow-md transition-shadow rounded-lg"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width="180"
                height="100"
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
