"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhatIsVideoMarketing() {
  // ✅ Smooth Scroll Function
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="
        bg-transparent text-gray-900 
        py-20 
        px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 🔹 Left Side — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold leading-snug text-black">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700">
              Video Marketing?
            </span>
          </h2>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Video marketing is a creative and engaging approach to promoting your brand,
            products, or services using impactful videos. It helps connect emotionally with
            your audience, build trust, and boost conversions through visual storytelling.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            From social media clips to brand films and product explainers, video content
            transforms how your business communicates online — making your message more
            memorable and effective.
          </p>

          {/* 🔹 Smooth Scroll Button */}
          <div className="mt-6">
            <button
              onClick={handleScroll}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full 
              text-white font-semibold text-[1.05rem] sm:text-base md:text-lg 
              hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>
        </motion.div>

        {/* 🔹 Right Side — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-[90%] sm:w-[80%] md:w-[450px] lg:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/vid.png"
              alt="What is Video Marketing"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
