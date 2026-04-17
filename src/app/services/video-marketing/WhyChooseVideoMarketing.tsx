"use client";

import { motion } from "framer-motion";
import React from "react";

export default function WhyChooseVideoMarketing() {
  return (
    <section className="bg-[#F9FAFB] text-gray-800 py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">

        {/* LEFT GRAPH */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg p-6 
            w-[90%] sm:w-[80%] md:w-[450px] lg:w-[500px]
            min-h-[380px] flex flex-col"
          >
            {/* Heading */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">
              Video Marketing Growth Insights
            </h3>

        {/* 📈 LINE GRAPH (Animated & Responsive) */}
<div className="relative w-full h-[250px] sm:h-[300px] md:h-[330px]">

  {/* --- Grid Lines --- */}
  <div className="absolute inset-0 flex flex-col justify-between">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-full border-t border-gray-200"></div>
    ))}
  </div>

  {/* --- Labels (Bottom) --- */}
  <div className="absolute bottom-0 w-full flex justify-between px-2 text-[10px] sm:text-xs font-semibold text-gray-700">
    <span>Awareness</span>
    <span>Engagement</span>
    <span>Clicks</span>
    <span>Reach</span>
    <span>Retention</span>
  </div>

  {/* --- Line Path --- */}
  <svg viewBox="0 0 500 300" className="w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      fill="none"
      stroke="url(#grad)"
      strokeWidth="4"
      d="M20 220 
         L120 80 
         L220 160 
         L320 40 
         L420 110"
    />

    {/* Gradient */}
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="25%" stopColor="#EC4899" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="75%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>

    {/* --- Points --- */}
    {[{ x:20, y:220 }, {x:120, y:80}, {x:220, y:160}, {x:320, y:40}, {x:420, y:110}].map((pt, i) => (
      <motion.circle
        key={i}
        cx={pt.x}
        cy={pt.y}
        r="8"
        fill="white"
        stroke="#4F46E5"
        strokeWidth="3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: i * 0.2 }}
        viewport={{ once: true }}
      />
    ))}
  </svg>
</div>
</div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-5 text-center md:text-left"
        >
          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
              Sky Insights
            </span>{" "}
            for Video Marketing?
          </h2>

          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-900 leading-relaxed">
            At Sky Insights, we don’t just create videos — we craft{" "}
            <span className="italic font-medium">visual experiences</span> that tell your brand’s story.
          </p>

          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-900 leading-relaxed">
            From scripting to strategy, our creative and data-driven approach ensures your videos perform — 
            not just look good.
          </p>

          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-900 leading-relaxed">
            Whether it’s social media reels, brand films, or ad campaigns, we blend art with analytics 
            to help your brand stand out.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
