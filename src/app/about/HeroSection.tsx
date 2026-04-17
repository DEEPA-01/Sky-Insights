"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutUsBanner() {
  return (
    <section className="relative overflow-hidden bg-[#050B1E] text-white min-h-[40vh] sm:min-h-[32vh] md:min-h-[35vh] flex items-center">
      {/* 🔹 Background Image with cinematic tone */}
      <div className="absolute inset-0">
        <Image
          src="/video.png" // ✅ Replace with your About banner image
          alt="About Us Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1443]/70 via-[#0A1B50]/60 to-[#051633]/60" />
      </div>

      {/* 🔹 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24 pt-50 sm:pt-42 md:pt-44 pb-8 sm:pb-10 md:pb-12 w-full max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500">
            Sky Insights
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-md md:max-w-xl lg:max-w-2xl"
        >
          {/* We are a team of passionate digital marketers, designers, and strategists based
          in Mumbai — driven by innovation and focused on helping brands grow through
          creative, data-driven, and impactful digital solutions. */}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 max-w-md md:max-w-xl lg:max-w-2xl"
        >
          {/* At Sky Insights, we believe in transforming ideas into measurable results —
          empowering businesses to reach new heights in the digital world. */}
        </motion.p>
      </motion.div>

      {/* 🔹 Decorative Curved Bottom Shape */}
      <div className="absolute bottom-[4px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[15px] sm:h-[22px] md:h-[35px] lg:h-[45px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43 654.55 15.45 568.81 17.07 484.75 32.86 403.55 47.98 324.08 76.84 243.1 92.9 163.39 108.67 82.08 111.13 0 93.52V120h1200V110.8C1131.23 117.22 1059.75 114.33 985.66 95Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
