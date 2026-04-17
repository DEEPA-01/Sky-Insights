"use client";

import { motion } from "framer-motion";
import React from "react";

export default function EmailMarketingStrategies() {
  const strategies = [
    {
      type: "TYPE 1",
      title: "Welcome Series",
      desc: "Automated onboarding emails that make a strong first impression, introduce your brand, and drive early engagement.",
      tag: "NEW",
      tagColor: "bg-green-100 text-green-700 border-green-300",
    },
    {
      type: "TYPE 2",
      title: "Promotional Campaigns",
      desc: "Smart, data-driven campaigns designed to boost seasonal sales and re-engage your most active customers.",
      tag: "HOT",
      tagColor: "bg-red-100 text-red-700 border-red-300",
    },
    {
      type: "TYPE 3",
      title: "Abandoned Cart Recovery",
      desc: "Recover missed sales through personalized reminders and limited-time offers crafted with behavioral insights.",
      tag: "TRENDING",
      tagColor: "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
    {
      type: "TYPE 4",
      title: "Post-Purchase Follow-ups",
      desc: "Encourage repeat purchases with appreciation emails, customer feedback requests, and smart upsell prompts.",
      tag: "TOP PICK",
      tagColor: "bg-blue-100 text-blue-700 border-blue-300",
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[3px] text-sm font-semibold text-teal-600 mb-3">
            Sky Insights Email Marketing
          </p>

          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Get the most out of your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
              Email marketing campaigns
            </span>
          </h2>

          <div className="space-y-5 text-[1.15rem] sm:text-lg md:text-xl font-medium text-gray-800">
            <div className="border-b border-gray-300 pb-2">
              Reach the right audience with smart targeting
            </div>
            <div className="border-b border-gray-300 pb-2">
              Improve conversions through automation
            </div>
            <div className="border-b border-gray-300 pb-2">
              Build loyalty with personalized experiences
            </div>
          </div>

          <button className="mt-8 bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg">
            Get in touch with us
          </button>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow:
                  "0 0 12px rgba(0,255,200,0.12), 0 0 18px rgba(0,200,255,0.10)",
              }}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -4,
                scale: 1.05,
                boxShadow:
                  "0 0 18px rgba(0,255,200,0.18), 0 0 28px rgba(0,200,255,0.15)",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className={`
                relative rounded-2xl p-6 sm:p-8 transition-all duration-500
                border border-teal-400/20 bg-white/20 backdrop-blur-xl
                shadow-[0_0_10px_rgba(0,255,200,0.10),0_0_15px_rgba(0,200,255,0.08)]
                ${index % 2 === 1 ? "sm:translate-y-6" : ""}
              `}
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff10,#ffffff10_10px,#f4f4f410_10px,#f4f4f410_20px)] rounded-2xl -z-10" />

              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded">
                  {item.type}
                </span>
                <span
                  className={`border text-xs font-medium px-3 py-1 rounded-full ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-[1.05rem] sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
