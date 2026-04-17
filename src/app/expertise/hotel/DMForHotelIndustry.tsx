"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalMarketingForHotelIndustry() {
  return (
    <section className="bg-white py-4 md:py-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-[520px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hotell.png"
              alt="Digital Marketing for Hotel Industry"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Digital Marketing for the <span className="text-blue-600">Hotel Industry</span>
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            In today’s competitive travel landscape, digital marketing plays a vital role 
            in helping hotels attract the right audience, enhance visibility, and increase direct bookings. 
            It connects hotels with guests at every stage — from discovery to loyalty.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 ">
            By leveraging channels like <span className="font-semibold text-blue-600">
            SEO, social media, paid ads,</span> and{" "}
            <span className="font-semibold text-blue-600">online reputation management</span>, 
            hotels can communicate their brand story, showcase experiences, and build trust with travelers.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            At <span className="font-semibold text-blue-600">Sky Insights</span>, we craft 
            personalized digital marketing strategies for hotels that blend creativity with analytics — 
            ensuring every click turns into a potential booking.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Our approach focuses on measurable results — improving search rankings, increasing web traffic, 
            and elevating brand reputation across digital platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
