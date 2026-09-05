export default function Apply() {
  const inputClass =
    "w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm transition-colors text-slate-700 bg-white placeholder-slate-400";
  const sectionTitleClass =
    "text-2xl font-bold text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2";
  const labelClass = "block text-sm font-semibold text-slate-700 mb-1";

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 border-b-4 border-orange-500 pb-1 inline-block">
              Apply for Admission
            </h1>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-10">
              <label className="text-sm font-bold text-slate-700 md:col-span-1">
                Registering for Course
              </label>
              <div className="md:col-span-3">
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    -- Select One --
                  </option>
                  <option>
                    Post Graduate Diploma in Computer Application (PGDCA)
                  </option>
                  <option>Diploma in Computer Application (DCA)</option>
                  <option>Six Months Diploma in Computer Application</option>
                  <option>Two Month Special Course on Software Packages</option>
                  <option>MS Office 4 Month Course</option>
                  <option>Shorthand 6 Month Course</option>
                  <option>Tally.ERP 9 Course</option>
                  <option>Industrial Accounting Course</option>
                  <option>C, C++, JAVA, ASP.NET, PHP Course</option>
                  <option>English Speaking Course</option>
                </select>
              </div>
            </div>

            {/* Applicant Information */}
            <h2 className={sectionTitleClass}>Applicant Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="First Name"
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
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Date of Birth</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="(DD/MM/YYYY)"
                />
              </div>

              <div>
                <label className={labelClass}>Gender</label>
                <div
                  className={`flex items-center space-x-6 h-9.5 px-4 border border-slate-300 rounded-md`}
                >
                  <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    Male
                  </label>
                  <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    Female
                  </label>
                </div>
              </div>

              <div>
                <label className={labelClass}>Category</label>
                <div
                  className={`flex items-center space-x-4 h-9.5 px-4 border border-slate-300 rounded-md`}
                >
                  {["General", "SC", "ST", "OBC"].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center text-sm text-slate-700 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        className="mr-1.5 text-blue-600 focus:ring-blue-500"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone No.</label>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="Phone No."
                />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="E-mail"
                />
              </div>
            </div>

            {/* Parent Information */}
            <h2 className={sectionTitleClass}>Parent Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Father's Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Father's Name"
                  />
                </div>
                <div>
                  <label className={labelClass}>Mother's Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Mother's Name"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Home Address</label>
                <textarea
                  className={`${inputClass} grow resize-y min-h-26.25`}
                  placeholder="Home Address"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" className={inputClass} placeholder="Phone" />
              </div>
              <div>
                <label className={labelClass}>Mobile</label>
                <input type="tel" className={inputClass} placeholder="Mobile" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>City</label>
                <input type="text" className={inputClass} placeholder="City" />
              </div>
              <div>
                <label className={labelClass}>Zip</label>
                <input type="text" className={inputClass} placeholder="Zip" />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input type="text" className={inputClass} placeholder="State" />
              </div>
            </div>

            {/* Language & Nationality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <label className={labelClass}>Language(s) Known</label>
                <div
                  className={`flex items-center space-x-6 h-9.5 px-4 border border-slate-300 rounded-md`}
                >
                  <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="language"
                      value="English"
                      className="mr-2 text-blue-600 focus:ring-blue-500 rounded-sm"
                    />
                    English
                  </label>
                  <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="language"
                      value="Hindi"
                      className="mr-2 text-blue-600 focus:ring-blue-500 rounded-sm"
                    />
                    Hindi
                  </label>
                </div>
              </div>
              <div>
                <label className={labelClass}>Nationality</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Country Name"
                />
              </div>
            </div>

            {/* Education */}
            <h2 className={sectionTitleClass}>Education</h2>

            {/* Class X */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              <div className="md:col-span-3 text-sm font-bold text-slate-800">
                Class X
              </div>
              <input type="text" className={inputClass} placeholder="Year" />
              <input
                type="text"
                className={inputClass}
                placeholder="Board / University"
              />
              <input
                type="text"
                className={inputClass}
                placeholder="Percentage"
              />
            </div>

            {/* Class XII */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 mt-4">
              <div className="md:col-span-3 text-sm font-bold text-slate-800">
                Class XII
              </div>
              <input type="text" className={inputClass} placeholder="Year" />
              <input
                type="text"
                className={inputClass}
                placeholder="Board / University"
              />
              <input
                type="text"
                className={inputClass}
                placeholder="Percentage"
              />
            </div>

            {/* Graduation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="md:col-span-3 text-sm font-bold text-slate-800">
                Graduation
              </div>
              <input type="text" className={inputClass} placeholder="Year" />
              <input
                type="text"
                className={inputClass}
                placeholder="Board / University"
              />
              <input
                type="text"
                className={inputClass}
                placeholder="Percentage"
              />
            </div>

            {/* Additional Information */}
            <div className="pt-4">
              <label className={labelClass}>Additional Information</label>
              <textarea
                className={`${inputClass} min-h-30 resize-y`}
                placeholder="Write Your Message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-8 border border-slate-300 rounded hover:bg-blue-500 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-none cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
