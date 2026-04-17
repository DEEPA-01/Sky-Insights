"use client";

import { motion } from "framer-motion";

export default function WhatIsHotelMarketing() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center"
      >
        {/* Heading */}
        <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-snug">
          What is <span className="text-blue-600">Hotel Marketing?</span>
        </h2>

        {/* Paragraphs */}
        <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
          Hotel marketing is the art and science of promoting a hotel’s services,
          rooms, and experiences to attract guests, build trust, and increase bookings.
          It blends creativity, technology, and data to connect hotels with travelers
          across digital platforms.
        </p>

        <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
          From optimizing your online visibility to building emotional connections through
          visuals and storytelling, effective hotel marketing ensures that travelers
          not only find your property but also choose it over competitors.
        </p>

        <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 indent-8">
          It involves multiple strategies — including{" "}
          <span className="font-semibold text-blue-600">
            SEO, social media marketing, reputation management, paid ads,
          </span>{" "}
          and{" "}
          <span className="font-semibold text-blue-600">influencer collaborations</span>{" "}
          — to drive awareness, bookings, and long-term guest relationships.
        </p>

        <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed indent-8">
          At <span className="font-semibold text-blue-600">Sky Insights</span>, we believe hotel 
          marketing is more than promotions — it’s about positioning your hotel as a brand, 
          creating memorable digital experiences, and turning clicks into loyal customers.
        </p>
      </motion.div>
    </section>
  );
}
