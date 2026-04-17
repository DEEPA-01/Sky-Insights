"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EducationExpertise() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* RIGHT SIDE — TEXT FIRST */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left order-1"
        >
          <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
            Our Expertise in <span className="text-blue-600">Education Marketing</span>
          </h2>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            At <span className="font-semibold text-blue-600">Sky Insights</span>, we specialize in helping educational institutions
            enhance their visibility, build trust, and attract more students through powerful digital marketing strategies.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            From schools and universities to online learning platforms, we craft
            personalized campaigns that tell your institution’s story, highlight your strengths,
            and connect you with the right audience.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Our approach blends creativity, data, and technology to make education brands
            stand out in the digital space — increasing engagement, leads, and enrollments.
          </p>
        </motion.div>

        {/* IMAGE SECOND */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center order-2"
        >
          {/* ⭐ Corrected single container */}
          <div className="relative w-full max-w-[520px] h-[350px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/educational.png"
              alt="Education Marketing Expertise"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
