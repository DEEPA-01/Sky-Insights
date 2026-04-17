"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      {/* 🔹 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative w-screen overflow-hidden
          mt-0
          pt-16 sm:pt-10 md:pt-0
        "
      >
        {/* 🔹 Background Image */}
        <div className="absolute inset-0 top-0 h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src="/digi.png"
              alt="Digital Marketing Background"
              fill
              priority
              className="
                object-cover
                object-center
                sm:object-[center_top]
                transition-all duration-500
              "
            />
            {/* 🔹 Dark Overlay */}
            <div className="absolute inset-0 bg-[#0a1a2f]/70"></div>
          </div>
        </div>

        {/* 🔹 Text Content */}
        <div
          className="
            relative z-10 flex flex-col items-center justify-center text-center text-white
            px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
            h-[320px] sm:h-[380px] md:h-[380px] lg:h-[400px] xl:h-[420px]
            translate-y-2 sm:translate-y-0
          "
        >
          <h1
            className="
              text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl
              font-bold leading-tight
            "
          >
            Club <span className="text-[#00AEEF]">Marketing</span>
          </h1>

          <p
            className="
              mt-3 sm:mt-4 md:mt-5
              text-[1.15rem] sm:text-sm md:text-base lg:text-lg xl:text-xl
              max-w-[95%] sm:max-w-[600px] md:max-w-[700px]
              leading-relaxed
            "
          >
            Transform your club into the city’s most talked-about experience.

          </p>
        </div>

        {/* 🔹 Wave Bottom Shape */}
        <svg
          className="absolute bottom-0 sm:-bottom-6 md:-bottom-8 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,739.4,14.19,
               663.55-1,586.9,1.55,511.55,17.34,
               437.15,33,363.53,61.4,287.68,81.85,
               207.45,103.57,123.91,116,41.24,112.73,
               27.23,112.2,13.15,111.37,0,109.91V120H1200V0
               C1131.6,22.1,1058.87,64.4,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </motion.section>
    </section>
  );
}
