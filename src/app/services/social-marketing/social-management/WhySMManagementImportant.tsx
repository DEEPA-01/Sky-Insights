"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhySocialMediaManagementImportant() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-[480px] h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/socialmanagement.png"
              alt="Why Social Media Management is Important"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left -mt-22 sm:-mt-20 md:-mt-22 lg:-mt-20 pr-0 sm:pr-4 md:pr-8 lg:pr-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Why is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B8FF]">
              Social Media Management
            </span>{" "}
            Important?
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
            In today’s digital-first world, social media has become the heartbeat of
            brand communication. It’s not just about staying active online — it’s about
            building a reputation, connecting authentically, and shaping how your brand
            is perceived across the globe.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
            A strong social media management strategy ensures consistent messaging,
            better audience engagement, and data-driven growth. It helps your business
            understand what works, what doesn’t, and how to stay ahead of the competition.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed indent-8">
            At{" "}
            <span className="font-semibold text-[#0077B6]">
              Sky Insights
            </span>
            , we combine creativity with analytics to craft impactful digital narratives —
            turning followers into loyal communities and brands into digital leaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
