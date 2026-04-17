"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhatIsEmailMarketing() {
  return (
    <section className="text-[#0f0f0f] bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 -mt-8 sm:-mt-12 md:-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        
        {/* 🔹 Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="space-y-5 text-center md:text-left"
        >
          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold leading-snug text-[#0f0f0f]">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500">
              Email Marketing?
            </span>
          </h2>

          <p className="text-[#0f0f0f] text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Email marketing is one of the most powerful digital communication
            tools used by businesses to engage directly with their audience.
            It’s more than just sending emails — it’s about delivering the right
            message to the right people at the right time.
          </p>

          <p className="text-[#0f0f0f] text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Through personalized, targeted, and automated campaigns, brands can
            build stronger relationships, increase customer retention, and
            drive conversions with measurable results.
          </p>
        </motion.div>

        {/* 🔹 Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[90%] sm:w-[80%] md:w-[450px] lg:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
  <Image
    src="/email.png"
    alt="Email Marketing Illustration"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
    className="object-cover rounded-2xl"
    priority
  />
</div>

        </motion.div>
      </div>
    </section>
  );
}
