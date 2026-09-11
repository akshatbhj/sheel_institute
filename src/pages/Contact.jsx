import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all";

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
        className="absolute top-20 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Get in Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contact{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Sheel Institute
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions regarding admissions, certifications, or academic
            schedules? Reach out directly or visit our Haridwar campus.
          </p>
        </div>

        {/* Top Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location Card */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                  Campus Address
                </span>
                <h3 className="font-bold text-white text-base mt-0.5 mb-1.5">
                  Sheel Institute
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  H-24, Shivalik Nagar, BHEL Ranipur, Haridwar - 249403,
                  Uttarakhand (India)
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                  Direct Line
                </span>
                <h3 className="font-bold text-white text-base mt-0.5 mb-1.5">
                  Call Us
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  01334-230360
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                  +91 - 9837592424 / 9897370320
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                  Electronic Mail
                </span>
                <h3 className="font-bold text-white text-base mt-0.5 mb-1.5">
                  Mail Us
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  sheelvs@gmail.com
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                  sheelvs@rediffmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Enquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Admissions & Feedback
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                Send An Enquiry
              </h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  rows={5}
                  className={`${inputClass} resize-y`}
                  required
                ></textarea>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Interactive Campus Map
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                29.9499° N, 78.0467° E
              </span>
            </div>

            <div className="relative w-full flex-1 min-h-90 rounded-xl overflow-hidden border border-slate-800/80 mt-3">
              <iframe
                title="Sheel Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656.19371042752!2d78.04671891506577!3d29.94998213319233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948fecbb09e61%3A0xeea8528ccd836c1c!2sSHEEL%20INSTITUTE!5e0!3m2!1sen!2sin!4v1788089703600!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.88] hue-rotate-180 contrast-[1.15]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
