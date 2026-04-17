"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ClubWhyChoose() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#F1FBFC] to-[#E6F8FA] py-20 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ✨ Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Circles - always moving */}
        <div className="absolute top-10 left-12 w-16 h-16 bg-gradient-to-br from-[#0EA5E9]/25 to-[#14B8A6]/35 rounded-full blur-2xl animate-float-loop"></div>

        <div className="absolute top-[40%] right-10 w-24 h-24 bg-gradient-to-tr from-[#0284C7]/25 to-[#0EA5E9]/30 rounded-full blur-3xl animate-float-loop-slow"></div>

        <div className="absolute bottom-10 left-[30%] w-20 h-20 bg-gradient-to-bl from-[#14B8A6]/30 to-[#0EA5E9]/35 rounded-full blur-2xl animate-float-loop-delayed"></div>

        {/* Floating Star Icons */}
        <svg
          className="absolute top-20 right-[25%] w-8 h-8 text-[#0EA5E9]/40 animate-twinkle"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l1.09 3.41L16.5 6l-2.8 2.09L14.18 12l-2.18-1.59L9.82 12l.48-3.91L7.5 6l3.41-.59L12 2z" />
        </svg>

        <svg
          className="absolute bottom-[25%] right-[10%] w-6 h-6 text-[#0284C7]/50 animate-twinkle-delayed"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l1.09 3.41L16.5 6l-2.8 2.09L14.18 12l-2.18-1.59L9.82 12l.48-3.91L7.5 6l3.41-.59L12 2z" />
        </svg>
      </div>

      {/* 🌟 Section Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[1.15rem] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#14B8A6]">
            Sky Insights
          </span>{" "}
          for Club Marketing
        </h2>
      </div>

      {/* 💎 Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center text-black space-y-6 sm:space-y-8 relative z-10"
      >
        <p className="text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#0284C7]">Sky Insights</span>, we
          go beyond traditional marketing. Our strategies empower fitness clubs,
          lifestyle lounges, social communities, and entertainment venues to grow
          through digital innovation and storytelling. Every club is unique — and
          so are its members. That’s why our campaigns focus on emotional
          connection, meaningful engagement, and effective conversion.
        </p>

        <p className="text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          From targeted member acquisition and influencer-led social promotions to
          retention strategies and creative campaigns, our team ensures your club
          maintains visibility and relevance. With{" "}
          <span className="font-semibold text-[#0EA5E9]">data-backed insights</span>{" "}
          and transparent analytics, we make every marketing effort measurable and
          impactful.
        </p>

        <p className="text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          Choosing{" "}
          <span className="font-semibold text-[#14B8A6]">Sky Insights</span> means
          partnering with a team that understands how to build{" "}
          <span className="italic">communities, not just audiences</span>. Whether
          you aim to attract new members, host exclusive events, or elevate your
          brand image — we ensure your club shines across every digital platform.
        </p>
      </motion.div>

      {/* 🌊 Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[35px] sm:h-[40px] md:h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43C654.55 15.45 568.81 17.07 
              484.75 32.86C403.55 47.98 324.08 76.84 243.1 92.9C163.39 108.67 82.08 
              111.13 0 93.52V120H1200V110.8C1131.23 117.22 1059.75 114.33 
              985.66 95Z"
            fill="#E0F7FA"
          ></path>
        </svg>
      </div>

      {/* 🌠 Animations CSS */}
      <style jsx global>{`
        /* Continuous Floating Animations */
        @keyframes float-loop {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes float-loop-slow {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes float-loop-delayed {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(12px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .animate-float-loop {
          animation: float-loop 6s ease-in-out infinite;
        }

        .animate-float-loop-slow {
          animation: float-loop-slow 8s ease-in-out infinite;
        }

        .animate-float-loop-delayed {
          animation: float-loop-delayed 7s ease-in-out infinite;
        }

        /* Stars Twinkling */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle 5s ease-in-out 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
