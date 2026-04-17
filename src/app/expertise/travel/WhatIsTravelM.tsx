"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatIsTravelDigitalMarketing() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
            What is Travel Digital Marketing?
          </h2>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-4">
            Travel Digital Marketing is the process of helping destinations, travel agencies, and hospitality brands
            connect with travelers across the world through online platforms and digital strategies.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-4">
            From showcasing breathtaking destinations on social media to optimizing your website for search engines,
            it blends creativity, analytics, and technology to inspire travelers and encourage them to book their next journey with you.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-blue-600">Sky Insights</span>, we use SEO, social media, content marketing,
            and performance ads to elevate travel brands—boosting visibility, engagement, and bookings in a highly competitive market.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/travell.png"
            alt="Travel Digital Marketing Concept"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full max-w-[500px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
