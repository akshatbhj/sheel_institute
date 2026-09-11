import { GraduationCap, ArrowRight, User, Users, BookOpen } from "lucide-react";

export default function Apply() {
  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2";

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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Admissions Open
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Apply for{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Admission
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Fill out the application form below to register for vocational,
            technical, and accounting certification programs at Sheel Institute.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <form className="space-y-10">
            {/* Program Selection */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2.5">
                Registering for Course *
              </label>
              <select
                className={`${inputClass} cursor-pointer bg-slate-900 text-slate-200`}
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                  className="bg-slate-900 text-slate-500"
                >
                  -- Select Academic Program --
                </option>
                <option className="bg-slate-900 text-white">
                  Post Graduate Diploma in Computer Application (PGDCA)
                </option>
                <option className="bg-slate-900 text-white">
                  Diploma in Computer Application (DCA)
                </option>
                <option className="bg-slate-900 text-white">
                  Six Months Diploma in Computer Application
                </option>
                <option className="bg-slate-900 text-white">
                  Two Month Special Course on Software Packages
                </option>
                <option className="bg-slate-900 text-white">
                  MS Office 4 Month Course
                </option>
                <option className="bg-slate-900 text-white">
                  Shorthand 6 Month Course
                </option>
                <option className="bg-slate-900 text-white">
                  Tally.ERP 9 Course
                </option>
                <option className="bg-slate-900 text-white">
                  Industrial Accounting Course
                </option>
                <option className="bg-slate-900 text-white">
                  C, C++, JAVA, ASP.NET, PHP Course
                </option>
                <option className="bg-slate-900 text-white">
                  English Speaking Course
                </option>
              </select>
            </div>

            {/* Applicant Information Section */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <User className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Applicant Information
                </h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Middle Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Middle Name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Date of Birth *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="DD/MM/YYYY"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Gender *</label>
                    <div className="flex items-center space-x-6 h-11.5 px-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                      <label className="flex items-center text-sm text-slate-300 cursor-pointer hover:text-white">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          className="mr-2 text-blue-600 focus:ring-blue-500 accent-blue-600"
                        />
                        Male
                      </label>
                      <label className="flex items-center text-sm text-slate-300 cursor-pointer hover:text-white">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          className="mr-2 text-blue-600 focus:ring-blue-500 accent-blue-600"
                        />
                        Female
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Category *</label>
                    <div className="flex items-center justify-between h-11.5 px-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                      {["General", "SC", "ST", "OBC"].map((cat) => (
                        <label
                          key={cat}
                          className="flex items-center text-xs text-slate-300 cursor-pointer hover:text-white"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={cat}
                            className="mr-1 text-blue-600 focus:ring-blue-500 accent-blue-600"
                          />
                          {cat}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone No. *</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>E-mail *</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="E-mail Address"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Information Section */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Parent / Guardian Information
                </h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Father's Name *</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Father's Name"
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Mother's Name *</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Mother's Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Home Address *</label>
                    <textarea
                      className={`${inputClass} grow resize-y min-h-29`}
                      placeholder="Full residential address"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Phone (Landline)</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="01334-XXXXXX"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Mobile No. *</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Parent's E-mail</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="Parent's E-mail"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>City *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Zip / Postal Code *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>State *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="State"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className={labelClass}>Language(s) Known</label>
                    <div className="flex items-center space-x-6 h-11.5 px-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                      <label className="flex items-center text-sm text-slate-300 cursor-pointer hover:text-white">
                        <input
                          type="checkbox"
                          name="language"
                          value="English"
                          className="mr-2 text-blue-600 focus:ring-blue-500 rounded-sm accent-blue-600"
                        />
                        English
                      </label>
                      <label className="flex items-center text-sm text-slate-300 cursor-pointer hover:text-white">
                        <input
                          type="checkbox"
                          name="language"
                          value="Hindi"
                          className="mr-2 text-blue-600 focus:ring-blue-500 rounded-sm accent-blue-600"
                        />
                        Hindi
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Nationality *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g. Indian"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Qualifications Section */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Educational Background
                </h2>
              </div>

              <div className="space-y-4">
                {/* Class X */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Class X *
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Passing Year"
                      required
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Board / University"
                      required
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Percentage / CGPA"
                      required
                    />
                  </div>
                </div>

                {/* Class XII */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Class XII
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Passing Year"
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Board / University"
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Percentage / CGPA"
                    />
                  </div>
                </div>

                {/* Graduation */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Graduation / Diploma
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Passing Year"
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Board / University"
                    />
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Percentage / CGPA"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Remarks */}
            <div>
              <label className={labelClass}>
                Additional Information / Inquiries
              </label>
              <textarea
                className={`${inputClass} min-h-27.5 resize-y`}
                placeholder="Mention any prior computer courses, specific batch preferences, or general notes..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
