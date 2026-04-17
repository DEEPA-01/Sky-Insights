"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhatIsClubMarketing() {
  return (
    <section className="relative bg-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 🔹 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-snug">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3A3] to-[#0077B6]">
              Club Marketing?
            </span>
          </h2>

          <p className="text-black text-[1.15rem] md:text-lg lg:text-xl leading-relaxed mb-4">
            Club marketing is a specialized approach to promoting membership-based
            communities such as fitness clubs, luxury lounges, nightlife venues,
            and hobby groups. It focuses on attracting new members, engaging
            existing audiences, and strengthening brand loyalty through creative
            storytelling, social media, and targeted digital campaigns.
          </p>

          <p className="text-black text-[1.15rem] md:text-lg lg:text-xl leading-relaxed">
            At <span className="font-semibold text-[#0077B6]">Sky Insights</span>,
            we combine strategy, data, and design to help clubs grow their
            membership base, improve online visibility, and build strong emotional
            connections with their audience. Whether it’s a premium lifestyle club
            or a local sports community, our marketing solutions create lasting
            impact and measurable growth.
          </p>
        </motion.div>

        {/* 🔹 Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/cluub.png"
            alt="Club Marketing Concept"
            width={500}
            height={380}
            className="object-contain drop-shadow-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
