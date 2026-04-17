"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function OurVideoProcess() {
  const process = [
    {
      img: "/strategy.png",
      title: "Strategy & Scriptwriting",
      desc: "We begin with in-depth research and creative storytelling to align your brand’s message and audience goals.",
    },
    {
      img: "/production.png",
      title: "Production & Filming",
      desc: "Our professional crew captures your vision using high-quality visuals, lighting, and direction.",
    },
    {
      img: "/editing.png",
      title: "Editing & Animation",
      desc: "We craft stunning visuals with seamless editing, music, motion graphics, and dynamic transitions.",
    },
    {
      img: "/promotion.png",
      title: "Distribution & Promotion",
      desc: "We help your video reach the right audience through effective marketing and optimization strategies.",
    },
  ];

  return (
    <section className="relative text-gray-900 py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 -mt-14 sm:-mt-18 md:-mt-24 lg:-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔹 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold mb-10 md:mb-14 leading-tight"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Video Marketing Process
          </span>
        </motion.h2>

        {/* 🔹 Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group px-4"
            >
              {/* 🔸 Circle Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gray-100">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 🔸 Title */}
              <h3 className="mt-6 text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-orange-500 transition-all duration-300">
                {step.title}
              </h3>

              {/* 🔸 Description */}
              <p className="mt-3 text-[1.15rem] sm:text-lg md:text-[1.15rem] text-gray-900 leading-relaxed max-w-xs sm:max-w-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
