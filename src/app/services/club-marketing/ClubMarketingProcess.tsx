"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, TrendingUp } from "lucide-react";
import React from "react";

export default function ClubMarketingProcess() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Research",
      desc: "We begin by analyzing your club’s goals, audience insights, and competitors — forming the foundation for a powerful growth plan.",
    },
    {
      icon: Target,
      title: "Strategy & Planning",
      desc: "Our experts design a tailored marketing strategy, combining creativity, automation, and precision targeting to engage members effectively.",
    },
    {
      icon: Rocket,
      title: "Execution & Campaigns",
      desc: "We execute impactful campaigns across social, web, and email — attracting new members and amplifying your brand’s reach.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Optimization",
      desc: "We track campaign performance using advanced analytics and continuously refine strategies to ensure higher ROI and member retention.",
    },
  ];

  return (
    <section
      className="relative bg-linear-to-b from-[#FFFFFF] via-[#F0FAFF] to-[#E6F7FB] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      aria-labelledby="club-marketing-process"
    >
      {/* 🌟 Section Header */}
      <div className="text-center mb-16">
        <h2
          id="club-marketing-process"
          className="text-[1.15rem] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#052640]"
        >
          Our Process for{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0284C7] via-[#0EA5E9] to-[#14B8A6]">
            Club Marketing Success
          </span>
        </h2>

        <p className="text-[#000000] mt-4 max-w-2xl mx-auto text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          A result-oriented process that helps your club grow strategically —
          backed by creativity, data, and innovation.
        </p>
      </div>

      {/* 🔹 Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* 🌈 Animated Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#14B8A6] opacity-70 animate-gradientFlow"></div>

        {/* Timeline Steps */}
        <div className="space-y-16 md:space-y-20 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Connector Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-full border-4 border-white shadow-lg z-0 animate-pulse"></div>

              {/* Icon Bubble */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 bg-white p-5 rounded-full shadow-md border border-[#0284C7]/30 relative z-10"
              >
                <step.icon className="w-10 h-10 text-[#0284C7]" />
              </motion.div>

              {/* Step Content Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#0284C7]/10 
                           shadow-[0_10px_25px_rgba(2,132,199,0.15)] 
                           hover:shadow-[0_14px_40px_rgba(14,165,233,0.25)]
                           max-w-xl text-center md:text-left relative z-10"
              >
                <h3 className="text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-[#052640] mb-2">
                  {step.title}
                </h3>

                <p className="text-[#444] text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌊 Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[35px] md:h-[45px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43C654.55 15.45 568.81 17.07 484.75 32.86C403.55 47.98 324.08 76.84 243.1 92.9C163.39 108.67 82.08 111.13 0 93.52V120H1200V110.8C1131.23 117.22 1059.75 114.33 985.66 95Z"
            fill="#45e0f5"
          ></path>
        </svg>
      </div>

      {/* ✨ Animated Gradient CSS */}
      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-gradientFlow {
          background-size: 100% 200%;
          animation: gradientFlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
