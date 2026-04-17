"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GymHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="uppercase text-[1.15rem] sm:text-base text-black tracking-wider mb-2">
            Gym & Fitness Digital Marketing Agency
          </p>

          <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Sky Insights —{" "}
            <span className="text-blue-700">Gym & Fitness Digital Marketing</span>
          </h1>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-6">
            In today’s fast-paced world, fitness is no longer just a trend — it’s
            a lifestyle. From young professionals to senior citizens, people are
            investing more in health, strength, and overall well-being.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-8">
            At{" "}
            <span className="font-semibold text-blue-700">Sky Insights</span>, we
            help gyms and fitness studios attract more members, build strong
            reputations, and grow using data-driven digital marketing strategies.
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
  src="/gymm.png"
  alt="Gym Digital Marketing"
  width={500}
  height={400}
  className="rounded-2xl shadow-lg object-cover h-[400px]"
/>
        </motion.div>
      </div>

      {/* Decorative Shape */}
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
