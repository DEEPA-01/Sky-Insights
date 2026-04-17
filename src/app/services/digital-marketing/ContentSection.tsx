"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalMarketingPage() {
  return (
    <section className="flex flex-col items-center justify-center pt-12 sm:pt-14 md:pt-16 pb-20 px-6 sm:px-10 md:px-20">
      {/* 🔹 What Is Digital Marketing Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left -mt-2 md:-mt-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004C8C] mb-6 leading-snug">
            What Is <span className="text-[#00AEEF]">Digital Marketing?</span>
          </h2>

          {/* ✅ Increased mobile text size only */}
          <p className="text-black text-[1.15rem] sm:text-lg leading-relaxed mb-4">
            <b>Digital marketing</b> is the art and science of promoting brands,
            products, or services through digital channels such as search engines,
            social media, websites, and email. It helps businesses reach their
            audiences where they spend most of their time — online.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg leading-relaxed">
            At <b>Sky Insights</b>, we use data-driven strategies and creative
            content to increase brand awareness, generate qualified leads, and
            deliver measurable results. Our goal is to turn your online presence
            into a powerful growth engine for your business.
          </p>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/5types.png"
            alt="Digital Marketing Illustration"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
