"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function SocialMediaIntro() {
  return (
    <section
      className="relative bg-white text-[#052640] py-12 sm:py-16 md:py-20 
                 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden 
                 -mt-12 sm:-mt-14 md:-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 
                      gap-10 sm:gap-12 md:gap-16 items-center">

        {/* 🔹 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left"
        >
          {/* 🔹 Heading 2 */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            Why Social Media Marketing is Essential Today
          </h3>

          {/* MOBILE text = 1.15rem */}
          <p className="text-[#333] text-[1.15rem] sm:text-lg md:text-xl 
                        leading-relaxed mb-4">
            With billions of people scrolling through feeds daily,
            <strong> social media has become the heartbeat of modern communication</strong>.
            From sharing moments to exploring trends, every user — whether a
            teenager or a senior — is actively connected online.
          </p>

          <p className="text-[#333] text-[1.15rem] sm:text-lg md:text-xl 
                        leading-relaxed mb-4">
            In fact, as per research, over <strong>4.2 billion users</strong> worldwide
            engage with social platforms regularly. This presents a massive
            opportunity for brands to interact, influence, and inspire.
          </p>

          <p className="text-[#333] text-[1.15rem] sm:text-lg md:text-xl 
                        leading-relaxed">
            Social media marketing helps businesses{" "}
            <span className="text-[#0077B6] font-medium">
              break barriers and reach target audiences
            </span>{" "}
            across borders. Whether through creative storytelling or
            performance-driven campaigns, <strong>Sky Insights</strong> ensures
            your brand connects at the right time, with the right audience,
            on the right platform.
          </p>
        </motion.div>

        {/* 🔹 Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/media.png"
            alt="Social Media Marketing Concept"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg rounded-xl
                       sm:w-[420px] md:w-[460px] lg:w-[500px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}




 {/* Heading 1 */}
          {/* <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
            We are a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3A3] to-[#0077B6]">
              Creative Social Media Marketing Agency
            </span>
          </h2>

          <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-[#0077B6]">Sky Insights</span>,
            we harness the true power of social media marketing to help brands,
            businesses, and services build impactful online identities. As a
            trusted{" "}
            <strong>social media marketing agency in Mumbai</strong>, we
            specialize in crafting personalized, effective, and data-driven
            strategies that elevate businesses of all sizes across the globe.
          </p>

          <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-10">
            From content creation and community engagement to paid campaigns and
            influencer collaborations — our approach ensures that your brand not
            only shines online but connects meaningfully with your audience.
            Let’s make your brand the next big thing on social media with{" "}
            <strong>Sky Insights</strong> — the best agency for creative growth
            and engagement.
          </p> */}