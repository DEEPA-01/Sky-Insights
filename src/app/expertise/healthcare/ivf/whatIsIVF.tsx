"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IVFHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex flex-col text-left"
        >
          {/* Small Heading */}
          <p className="uppercase text-[1.15rem] sm:text-sm md:text-base text-gray-500 tracking-wider mb-3 md:mb-2 -mt-6 md:-mt-10 text-left">
            IVF Digital Marketing Agency
          </p>

          {/* Subheading */}
          <h2 className="text-[1.5rem] sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-left leading-snug">
            IVF Digital Marketing Solutions for Fertility Clinics
          </h2>

          {/* Paragraphs */}
          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-left">
            In today’s world, IVF clinics face growing competition as fertility
            services gain massive demand both in India and across the globe. To
            stand out and reach the right audience, your clinic needs more than
            just traditional advertising — it needs a strategic, result-driven
            digital presence.
          </p>

          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-left">
            At{" "}
            <span className="font-semibold text-blue-600">Sky Insights</span>,
            we help IVF and fertility centers connect with couples seeking
            fertility solutions through modern, data-backed marketing campaigns
            that drive awareness, trust, and patient bookings.
          </p>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/ivf.png"
            alt="IVF Digital Marketing"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-blue-100"
        >
          <path d="M0,0V46.29c47.77,22,98.13,29,146,21,53.15-9,104.09-36,157-45,86.75-15,172,19,258,26,69.51,6,136-9,204-12,53.85-2,105,3,158,16,70.69,18,136,48,203,49,66,.95,128-26,184-48V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
