"use client";

import { motion } from "framer-motion";
import { Film, PlayCircle, Video, Megaphone, Users } from "lucide-react";
import React from "react";

export default function TypesOfVideoMarketing() {
  const types = [
    {
      icon: Film,
      title: "Brand Storytelling Videos",
      desc: "Create emotional connections by showcasing your brand’s journey through powerful storytelling.",
    },
    {
      icon: PlayCircle,
      title: "Product Explainer Videos",
      desc: "Simplify complex ideas and boost conversions with engaging product explainers and demos.",
    },
    {
      icon: Megaphone,
      title: "Social Media Ads",
      desc: "Grab attention instantly with short, impactful videos crafted for social media platforms.",
    },
    {
      icon: Users,
      title: "Testimonial Videos",
      desc: "Build credibility and trust with authentic customer testimonial videos that drive engagement.",
    },
    {
      icon: Video,
      title: "Corporate Films",
      desc: "Showcase your company’s mission, culture, and values with professional-grade corporate films.",
    },
  ];

  return (
    <section className="relative bg-white text-gray-900 py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-24 -mt-6 sm:-mt-10 md:-mt-14 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔹 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold mb-10 leading-tight"
        >
          Types of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Video Marketing
          </span>{" "}
          We Offer
        </motion.h2>

        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-10">
          {types.map((item, index) => {
            const Icon = item.icon;
            const isLifted = index === 3 || index === 4; // bottom row glow & lift

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`relative bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                            rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                            transition-all duration-500 ease-out 
                            p-[1.5rem] sm:p-[1.8rem] md:p-[2rem]
                            overflow-hidden text-white hover:shadow-[0_0_40px_rgba(255,120,200,0.5)]
                            ${
                              isLifted
                                ? "lg:-mt-6 md:-mt-4 shadow-[0_0_45px_rgba(255,160,80,0.5)]"
                                : ""
                            }`}
              >
                {/* Glow Overlay (Soft Inner Light) */}
                <div className="absolute inset-0 bg-white/10 blur-[6px] opacity-40 rounded-2xl pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4 transition-all duration-300">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-4 sm:p-5 rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 shadow-inner"
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                  </motion.div>

                  <h3 className="text-[1.15rem] sm:text-xl md:text-[1.35rem] font-semibold leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>

                  <p className="text-[1.1rem] sm:text-[1.15rem] md:text-[1.2rem] text-white/90 leading-relaxed max-w-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {item.desc}
                  </p>
                </div>

                {/* Extra Ambient Glow for Lifted Boxes */}
                {isLifted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-300/20 to-pink-400/30 blur-[10px] opacity-70 rounded-2xl animate-pulse"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
