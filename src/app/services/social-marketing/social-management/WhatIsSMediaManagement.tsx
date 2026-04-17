"use client";

import { motion } from "framer-motion";

export default function WhatIsSocialMediaManagement() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-12 lg:px-20 flex items-center justify-center">
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="max-w-4xl text-center -mt-16 sm:-mt-16 md:-mt-20"
>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          What is{" "}
          <span className="text-gray-900 font-bold mb-6 leading-snug">
            Social Media Management?
          </span>
        </h2>

        {/* Updated text sizes: base → 1.15rem */}
        <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
          Social media management is the process of creating, scheduling, analyzing,
          and engaging with content posted on platforms like Instagram, Facebook,
          LinkedIn, and X (Twitter). It involves strategically using social channels
          to connect with your audience, build your brand, increase sales, and drive
          website traffic.
        </p>

        <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
          Effective social media management is more than just posting regularly.
          It includes understanding your audience, creating engaging visual and
          written content, running campaigns, monitoring performance metrics, and
          optimizing strategies to achieve measurable growth.
        </p>

        <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed indent-8">
          At{" "}
          <span className="font-semibold text-[#0077B6]">Sky Insights</span>,
          we take social media management to the next level by blending creativity,
          analytics, and technology — helping your brand stay relevant, consistent,
          and connected in the digital world.
        </p>
      </motion.div>
    </section>
  );
}
