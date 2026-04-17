"use client";

import { motion } from "framer-motion";

export default function ServicesOffered() {
  const services = [
    {
      type: "TYPE 1",
      title: "Search Engine Optimization (SEO)",
      desc: "Optimize your hospital website to rank higher for healthcare searches and attract both local and global patients.",
      tag: "TRENDING",
    },
    {
      type: "TYPE 2",
      title: "Search Engine Marketing (SEM / PPC)",
      desc: "Run paid ads on Google to increase visibility, reach potential patients, and drive fast conversions.",
      tag: "BOOST REACH",
    },
    {
      type: "TYPE 3",
      title: "Social Media Marketing (SMM)",
      desc: "Build your hospital’s brand identity through engaging posts, targeted campaigns, and patient engagement strategies.",
      tag: "POPULAR",
    },
    {
      type: "TYPE 4",
      title: "Content & Email Marketing",
      desc: "Create valuable healthcare content and personalized email campaigns to retain and re-engage your audience effectively.",
      tag: "BOOST TRUST",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <p className="uppercase tracking-wider text-gray-500 text-sm mb-3">
            Hospital Digital Marketing
          </p>

          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Digital Marketing Services <br /> for{" "}
            <span className="text-blue-600">Hospitals</span>
          </h2>

          <ul className="space-y-4 text-[1.15rem] sm:text-lg md:text-xl text-gray-700 mb-8">
            <li className="border-b border-gray-300 pb-3">Increase Online Visibility</li>
            <li className="border-b border-gray-300 pb-3">Reach Local & Global Patients</li>
            <li className="border-b border-gray-300 pb-3">Build Trust & Brand Awareness</li>
            <li className="border-b border-gray-300 pb-3">Generate Quality Leads</li>
          </ul>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition">
            Get in touch with us
          </button>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
              hover:shadow-md hover:scale-[1.02] transition-all duration-300 ${
                index === 1 ? "lg:mt-8" : ""
              }`}
            >
              {/* TYPE LABEL */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-sm text-white ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-blue-600 to-blue-400"
                      : "bg-gradient-to-r from-cyan-600 to-blue-500"
                  }`}
                >
                  {service.type}
                </span>
              </div>

              <div className="mt-10">
                {/* ⭐ UPDATED TITLE SIZE */}
                <h3 className="text-[1.15rem] sm:text-[1.25rem] md:text-[1.35rem] font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* ⭐ UPDATED DESC SIZE — 1.15rem on mobile */}
                <p className="text-[1.15rem] sm:text-sm md:text-base text-gray-900 leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* TAG LABEL */}
                <span
                  className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-sm border ${
                    index === 0
                      ? "border-blue-600 text-blue-600 bg-blue-50"
                      : index === 1
                      ? "border-cyan-600 text-cyan-600 bg-cyan-50"
                      : index === 2
                      ? "border-emerald-600 text-emerald-600 bg-emerald-50"
                      : "border-indigo-600 text-indigo-600 bg-indigo-50"
                  }`}
                >
                  {service.tag}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
