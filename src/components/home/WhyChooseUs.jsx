import {
  BookOpen01Icon,
  UserStar01Icon,
  Brain02Icon,
  Building03Icon,
} from "@hugeicons/core-free-icons";

import Icon from "../icons/Icon";
import whyChooseUs from "../../assets/optimized/why-choose-us.png";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Up-to-date & industry-relevant courses",
      desc: "We design our curriculum in line with latest trends in technology after careful market study.",
      icon: BookOpen01Icon,
    },
    {
      title: "Expert faculty",
      desc: "Sheel Institute courses are taught by experienced & certified faculty. All our trainers upgrade their technical skills constantly to maintain their industry expertise.",
      icon: UserStar01Icon,
    },
    {
      title: "Skills Development",
      desc: "Our curriculum provides the platform for learning which ensures continuity and progression, rigorous assessment and a strong focus on skills development and critical thinking.",
      icon: Brain02Icon,
    },
    {
      title: "Excellent Infra",
      desc: "Well equipped and well furnished Labs with excellent facilities for practical work English Language Teaching.",
      icon: Building03Icon,
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Side: Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={whyChooseUs}
              alt="Students attending classes at Sheel Institute"
              width="660"
              height="700"
              loading="lazy"
              decoding="async"
              className="rounded-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
              Why <span className="text-blue-700">Sheel</span> Institute?
            </h2>

            <p className="text-slate-500 text-sm md:text-base mb-10">
              Sheel Institute ensures quality training to its students to
              prepare them for IT and accounting careers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group"
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-blue-700
                      transition-all
                      duration-300
                      ease-out
                      group-hover:-translate-y-1
                      group-hover:scale-105
                      group-hover:rounded-xl
                      group-hover:bg-blue-700
                      group-hover:text-white
                    "
                  >
                    <Icon
                      icon={feature.icon}
                      size={30}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                      mb-2
                      leading-tight
                      transition-colors
                      duration-300
                      group-hover:text-blue-700
                    "
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}