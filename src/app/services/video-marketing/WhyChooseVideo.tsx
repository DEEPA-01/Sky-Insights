"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseVideoMarketing() {
  const cards = [
    {
      title: "Boost Engagement",
      desc: "Video content captures attention and keeps viewers engaged longer.",
    },
    {
      title: "Build Trust",
      desc: "People connect emotionally through storytelling and visuals.",
    },
    {
      title: "Increase Conversions",
      desc: "Videos drive up to 80% higher conversions across platforms.",
    },
    {
      title: "Better SEO Ranking",
      desc: "Search engines favor websites with engaging video content.",
    },
  ];

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center -mt-4 md:-mt-20">
        {/* 🔹 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[1.9rem] sm:text-4xl md:text-[2.7rem] font-semibold md:font-bold text-gray-900 mb-10 leading-tight"
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700">
            Video Marketing?
          </span>
        </motion.h2>

        {/* 🔹 Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="
                relative bg-white/60 backdrop-blur-lg border border-gray-200/40
                rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                hover:shadow-[0_12px_45px_rgba(0,0,0,0.15)]
                hover:border-blue-400/40 hover:-translate-y-1
                transition-all duration-500 flex flex-col justify-center items-center text-center
                sm:p-8 md:p-10
                sm:hover:scale-[1.02] active:scale-[0.98]
              "
            >
              {/* Always-visible Glow Layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200/30 via-cyan-100/20 to-blue-300/20 blur-xl opacity-60 sm:opacity-70"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[1.15rem] sm:text-xl md:text-[1.35rem] font-semibold text-blue-700 mb-3 drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-gray-900 text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
