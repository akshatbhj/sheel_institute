import { Home, Phone, Mail } from "lucide-react";

export default function Contact() {
  const iconBoxClass =
    "bg-amber-500 p-3 flex items-center justify-center text-white shrink-0";
  const inputClass =
    "w-full p-3 border border-slate-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-slate-700 placeholder-slate-400";
  const sectionHeadingClass = "text-xl font-bold text-slate-900 mb-6";

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-slate-900 inline-block border-b-2 border-amber-500 pb-1">
            Contact Us
          </h1>
        </div>

        {/* Top Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div>
            <h3 className={sectionHeadingClass}>Location</h3>
            <div className="flex items-start">
              <div className={iconBoxClass}>
                <Home size={28} strokeWidth={1.5}/>
              </div>
              <div className="ml-4 text-sm text-slate-500 leading-relaxed">
                <p className="font-bold text-slate-800 text-base mb-1">
                  Sheel Institute
                </p>
                <p>H-24, Shivalik Nagar</p>
                <p>BHEL Ranipur- Haridwar-249403, Uttarakhand (India)</p>
              </div>
            </div>
          </div>

          {/* Call Us */}
          <div>
            <h3 className={sectionHeadingClass}>Call us at</h3>
            <div className="flex items-start">
              <div className={iconBoxClass}>
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div className="ml-4 text-sm text-slate-500 leading-relaxed">
                <p>01334-230360</p>
                <p>+91 - 9837592424 / 9897370320</p>
              </div>
            </div>
          </div>

          {/* Mail Us */}
          <div>
            <h3 className={sectionHeadingClass}>Mail us at</h3>
            <div className="flex items-start">
              <div className={iconBoxClass}>
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <div className="ml-4 text-sm text-slate-500 leading-relaxed">
                <p>sheelvs@gmail.com</p>
                <p>sheelvs@rediffmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="mb-16">
          <h3 className={sectionHeadingClass}>Send An Enquiry</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                className={inputClass}
                required
              />
              <input
                type="text"
                placeholder="Address *"
                className={inputClass}
                required
              />
              <input
                type="tel"
                placeholder="Phone *"
                className={inputClass}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className={inputClass}
                required
              />
            </div>

            <textarea
              placeholder="Type Your Message Here . . ."
              rows="8"
              className={`${inputClass} resize-y`}
            ></textarea>

            <div>
              <button
                type="submit"
                className="bg-amber-500 text-white font-medium px-8 py-3 hover:bg-amber-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:outline-none shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Google Maps Embed */}
        <div>
          <h3 className={sectionHeadingClass}>Our Location on Google Maps</h3>
          <div className="w-full h-125 bg-slate-100 border border-slate-200 p-1">
            <iframe
              title="Sheel Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656.19371042752!2d78.04671891506577!3d29.94998213319233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948fecbb09e61%3A0xeea8528ccd836c1c!2sSHEEL%20INSTITUTE!5e0!3m2!1sen!2sin!4v1788089703600!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
