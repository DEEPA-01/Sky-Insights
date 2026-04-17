"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SocialMediaFundamentals() {
  const fundamentals = [
    {
      tag: "STEP 1",
      badge: "CORE",
      badgeColor: "from-green-400/40 to-emerald-500/40 text-green-200",
      title: "Profile Optimization",
      desc: "Accurate, complete, active, and linked profiles with strong CTAs to attract and retain your audience.",
    },
    {
      tag: "STEP 2",
      badge: "ACTIVE",
      badgeColor: "from-blue-400/40 to-cyan-500/40 text-blue-200",
      title: "Posting",
      desc: "Share useful, entertaining, and relevant content — posts, photos, videos, and stories that engage users.",
    },
    {
      tag: "STEP 3",
      badge: "ENGAGE",
      badgeColor: "from-yellow-400/40 to-amber-500/40 text-yellow-200",
      title: "Engaging",
      desc: "Like, comment, and interact with followers, customers, and influencers to build community trust.",
    },
    {
      tag: "STEP 4",
      badge: "BOOST",
      badgeColor: "from-pink-400/40 to-rose-500/40 text-pink-200",
      title: "Advertising",
      desc: "Use paid promotions to reach highly targeted audiences effectively and boost conversions.",
    },
    {
      tag: "STEP 5",
      badge: "INSIGHTS",
      badgeColor: "from-indigo-400/40 to-purple-500/40 text-indigo-200",
      title: "Measuring",
      desc: "Analyze performance and optimize strategies using analytics and audience insights for growth.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A1124] via-[#0B162E] to-[#0E1B36] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">

      {/* 🔹 Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Social Media Marketing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8FF] to-[#0077B6]">
            Fundamentals
          </span>
        </h2>
      </motion.div>

      {/* 🔹 FIRST ROW */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {fundamentals.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 0 25px rgba(0,200,255,0.25)",
                "0 0 45px rgba(0,200,255,0.35)",
                "0 0 25px rgba(0,200,255,0.25)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="relative rounded-2xl p-[1px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-[85%] md:w-[80%]"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold bg-white/10 text-cyan-300 px-2 py-0.5 rounded-md border border-white/20">
                  {item.tag}
                </span>
                <span
                  className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${item.badgeColor} border border-white/10`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title stays same size */}
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                {item.title}
              </h3>

              {/* ⭐ Increased mobile text to 1.15rem */}
              <p className="text-gray-300 text-[1.15rem] sm:text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 SECOND ROW */}
      <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {fundamentals.slice(3).map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 0 25px rgba(0,200,255,0.25)",
                "0 0 45px rgba(0,200,255,0.35)",
                "0 0 25px rgba(0,200,255,0.25)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            className="relative rounded-2xl p-[1px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-[85%] md:w-[75%]"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold bg-white/10 text-cyan-300 px-2 py-0.5 rounded-md border border-white/20">
                  {item.tag}
                </span>
                <span
                  className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${item.badgeColor} border border-white/10`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title unchanged */}
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                {item.title}
              </h3>

              {/* ⭐ Increased mobile text to 1.15rem */}
              <p className="text-gray-300 text-[1.15rem] sm:text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
