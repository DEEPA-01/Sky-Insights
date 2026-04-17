"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function EmailMarketingHero() {
  return (
    <section
      className="
      relative overflow-hidden bg-[#050B1E] text-white
      pt-40
      sm:pt-36
      md:pt-44
      lg:pt-52
      pb-20
      "
    >
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ema.png"
          alt="Hospital Digital Marketing Background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/70 via-[#0B2248]/60 to-[#0D2C5A]/50" />

      {/* 🔹 Diagonal Highlight */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-tr from-teal-600/40 to-transparent clip-diagonal"></div>

      {/* 🔹 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gold-400 to-yellow-500">
            IVF Digital Marketing
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl"
        >
          Helping IVF Clinics Reach Hopeful Parents Through Smart Digital Marketing.
        </motion.p>
      </motion.div>

      {/* 🔹 Bottom Divider Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[35px] md:h-[40px]"
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
