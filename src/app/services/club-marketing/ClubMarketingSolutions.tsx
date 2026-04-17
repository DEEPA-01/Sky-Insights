"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ClubMarketingSolutions() {
  const solutions = [
    {
      title: "Fitness & Sports Clubs",
      desc: "Boost memberships and promote fitness challenges that energize and retain your audience.",
      icon: "/fitness.png",
    },
    {
      title: "Luxury & Lifestyle Clubs",
      desc: "Enhance exclusivity and build a premium image through personalized, elegant branding.",
      icon: "/luxury-icon.png",
    },
    {
      title: "Nightlife & Entertainment Clubs",
      desc: "Keep your events packed and buzzing with influencer-led promotions and creative campaigns.",
      icon: "/party-icon.png",
    },
    {
      title: "Social & Hobby Clubs",
      desc: "Grow your community through engaging digital campaigns and unique online experiences.",
      icon: "/community-icon.png",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F9FAFB] via-[#EAF4FF] to-[#E0E7FF] py-20 px-6 sm:px-10 md:px-16 lg:px-24 -mt-8 overflow-hidden">

      {/* 🌟 Background Glows */}
      <div className="absolute top-[-80px] left-[-40px] w-[260px] h-[260px] bg-gradient-to-r from-purple-300 via-pink-200 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-100px] right-[-60px] w-[300px] h-[300px] bg-gradient-to-l from-indigo-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-70"></div>

      {/* 🌟 Section Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-[1.15rem] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 leading-snug">
          Club Marketing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
            Solutions We Offer
          </span>
        </h2>

        <p className="text-black mt-4 max-w-3xl mx-auto text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          At <span className="font-semibold text-[#4F46E5]">Sky Insights</span>,
          we combine creativity, analytics, and innovation to deliver marketing
          strategies that help clubs connect, engage, and grow in the digital world.
        </p>
      </div>

      {/* 💎 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl 
                       shadow-[0_15px_35px_rgba(79,70,229,0.35),0_8px_25px_rgba(99,102,241,0.25)]
                       hover:scale-105 transition-all duration-500 flex flex-col items-center text-center p-8 sm:p-10
                       animate-pulse-glow"
          >
            {/* Icon */}
            <div className="mb-6 flex justify-center items-center w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] shadow-[0_6px_20px_rgba(79,70,229,0.35)]">
              <Image
                src={item.icon}
                alt={item.title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>


            {/* Title */}
            <h3 className="text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-black mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-black text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-[250px]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🌊 Bottom Decorative Wave - DARK COLOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[45px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43C654.55 15.45 568.81 17.07 484.75 32.86C403.55 47.98 324.08 76.84 243.1 92.9C163.39 108.67 82.08 111.13 0 93.52V120H1200V110.8C1131.23 117.22 1059.75 114.33 985.66 95Z"
            fill="#1E1E2F"
          ></path>
        </svg>
      </div>

      {/* 🌟 Animation */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 15px 35px rgba(79, 70, 229, 0.35), 0 8px 25px rgba(99, 102, 241, 0.25);
          }
          50% {
            box-shadow: 0 18px 45px rgba(99, 102, 241, 0.5), 0 10px 30px rgba(129, 140, 248, 0.4);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
