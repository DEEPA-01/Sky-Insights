"use client";


import {
  Rocket,
  TrendingUp,
  MonitorSmartphone,
  Palette,
  Mail,
  BarChart3,
} from "lucide-react";
export default function SolutionsSection() {
  return (
    <>
      {/* ✅ Solutions Cards Section */}
      <section className="bg-gradient-to-b from-[#108df3] via-[#E6EEFA] to-[#0b0909] py-16 px-6 sm:px-12 lg:px-24">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000102] dark:text-black">
            Our Growth-Driven Digital Solutions
          </h2>
          <p className="mt-3 text-black dark:text-gray-900 text-base sm:text-lg max-w-2xl mx-auto">
            We deliver AI-powered marketing strategies designed to boost
            engagement, visibility, and conversions — efficiently.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Social Media Marketing",
              desc: "Strengthen your brand identity through impactful social media campaigns that engage and inspire.",
              icon: TrendingUp,
            },
            {
              title: "SEO Management",
              desc: "Enhance your search rankings and attract the right audience with data-driven SEO solutions.",
              icon: Rocket,
            },
            {
              title: "Website Design & Development",
              desc: "Build a stunning, performance-driven website that engages visitors and grows your business.",
              icon: MonitorSmartphone,
            },
            {
              title: "Digital Marketing",
              desc: "Reach the right audience with the right message — through smart, targeted digital marketing.",
              icon: BarChart3,
            },
            {
              title: "Creative Branding",
              desc: "Shape your brand identity with captivating visuals, messaging, and modern storytelling.",
              icon: Palette,
            },
            {
              title: "Email & Automation",
              desc: "Automate your communication and nurture customers with personalized, high-converting email campaigns.",
              icon: Mail,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#002147] shadow-md hover:shadow-lg rounded-xl p-8 transition-transform transform hover:-translate-y-1 border border-gray-100 dark:border-[#004C97]"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#004C97] to-[#00AEEF] text-white mx-auto mb-6">
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#002E6E] dark:text-white text-center mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center text-sm sm:text-base leading-relaxed mb-4">
                {card.desc}
              </p>
              <div className="flex justify-center">
                {/* <button className="text-[#0072BC] dark:text-[#00AEEF] font-medium flex items-center gap-2 hover:text-[#00AEEF] dark:hover:text-[#66DFFF] transition">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Divider Line Below Solutions Section */}
      {/* <div className="w-full flex justify-center mt-6">
        <hr className="border-t-2 border-gray-200 w-4/5 md:w-3/4 lg:w-2/3" />
      </div> */}
    </>
  );
}
