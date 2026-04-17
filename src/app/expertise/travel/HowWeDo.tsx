"use client";

import { motion } from "framer-motion";
import { Compass, Search, PenTool, TrendingUp, MapPin } from "lucide-react";

export default function HowWeDoIt() {
  const steps = [
    {
      icon: Search,
      title: "Market Research",
      desc: "We analyze travel trends and customer behavior to understand what inspires today’s travelers.",
    },
    {
      icon: PenTool,
      title: "Creative Content",
      desc: "From blogs to reels — we create compelling stories that spark wanderlust and drive action.",
    },
    {
      icon: Compass,
      title: "Targeted Campaigns",
      desc: "We design highly targeted campaigns to reach the right audience at the right moment.",
    },
    {
      icon: MapPin,
      title: "Destination Visibility",
      desc: "We enhance your visibility across maps, listings, search engines, and social platforms.",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      desc: "We monitor data insights and continually optimize campaigns for stronger ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#D6FFF4] via-[#CCF7FF] to-[#E9FFFA] py-24 px-6 md:px-12">
      
      {/* Decorative Glows */}
      <div className="absolute top-10 left-12 w-60 h-60 bg-teal-200/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-100/40 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-black mb-16"
        >
          How{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            We Do It
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-teal-300 ml-6 md:ml-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-14 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-8`}
            >
              {/* Dot */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-[-1.15rem] w-5 h-5 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full border-4 border-white shadow-lg"
              ></motion.div>

              {/* Icon */}
              <div className="bg-white shadow-md rounded-full p-5 border border-teal-200 hover:shadow-teal-300/40 transition">
                <step.icon className="w-7 h-7 text-teal-700" />
              </div>

              {/* Text Box */}
              <div className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md p-6 md:w-3/5 hover:shadow-xl hover:shadow-teal-200/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-black text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D6FFF4]/60 to-transparent"></div>
    </section>
  );
}
