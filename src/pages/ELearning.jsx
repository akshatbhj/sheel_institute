import { Link } from "react-router-dom";
import { Laptop, ArrowRight } from "lucide-react";
import elearningImage from "../assets/optimized/elearning.webp";

export default function ELearning() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Side-by-Side Grid Container for Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Text Content (Takes 7/12 columns on desktop) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
              <Laptop size={14} /> Smart E-Learning Platform
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              E-Learning Facility
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed">
              Sheel Institute offers certified online training courses and
              programs in the fields of Financial Accounting and Taxation,
              Tally.ERP9 & All types of Basic & Advance Computer Courses.
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-6">
              <p>
                Online training is generally self-paced and customizable to suit
                an individual's specific learning needs. Therefore, online
                training can be conducted at almost any time and place, provided
                there is a computer with high-speed internet access. This makes
                this form of training convenient for the users, who can modify
                their training to fit into their day-to-day schedule.
              </p>
              <p>
                To use online training, users should have a basic knowledge of
                computers. This should include, but is not limited to, the
                ability to use a mouse, which involves knowing the difference
                between left-click and right-click; the ability to open and
                close documents and web pages; and the ability to navigate a
                website and web pages. Those with no computer experience at all
                may have trouble using our online training and, for their own
                benefit, may want to enroll in a basic computer training class
                before using any of our online courses. Advanced computer users
                will be able to use our eLearning system to its full capacity.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/apply"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/25"
              >
                Click here to Apply for Admission{" "}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column: Flyer / Sticky Image (Takes 5/12 columns on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="sticky top-28 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm text-center space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Tally Course with Certificate & E-Learning Smart Classroom
              </h3>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img
                  src={elearningImage}
                  alt="Tally Course with Certificate Admission Open Flyer"
                  width="1280"
                  height="1073"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
