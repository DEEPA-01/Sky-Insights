"use client";

import { motion } from "framer-motion";

export default function WhatMakesUsDifferent() {
  const points = [
    {
      title: "Affordability with Impact",
      desc: `We blend premium marketing with cost efficiency — delivering campaigns that drive measurable results without inflated costs.`,
    },
    {
      title: "Creative Excellence",
      desc: `Every strategy we create reflects originality. Our team combines design, storytelling, and analytics to deliver campaigns that stand out.`,
    },
    {
      title: "Transparency and Trust",
      desc: `We maintain full transparency — sharing detailed reports, performance data, and clear communication at every stage.`,
    },
    {
      title: "Personalized Strategies",
      desc: `No one-size-fits-all plans. We study your brand, audience, and goals to build strategies that are uniquely yours.`,
    },
    {
      title: "Dedicated Support",
      desc: `Our experts work alongside you — offering real-time updates, strategic insights, and proactive support for sustained growth.`,
    },
  ];

  return (
    <section className="relative bg-linear-to-br from-[#F0F5FF] via-[#E6F0FF] to-[#F9FBFF] text-[#0B2545] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      {/* 🌈 Background Decorative Glow */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-[#004C8C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-[#00AEEF]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 z-10">
        {/* 🔹 Left Side Text (Heading + Description) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-left"
        >
          {/* ✅ Heading — reduced boldness on laptop */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[2.8rem] font-bold lg:font-semibold text-black mb-3">
            What Makes Us <span className="text-[#00AEEF] font-semibold">Different</span>
          </h2>

          {/* ✅ Marquee Underline Animation */}
          <div className="relative w-28 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#004C8C] rounded-full overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[marquee_2s_linear_infinite]" />
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>

          {/* Description */}
          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed max-w-lg">
            At <b>Sky Insights</b>, we don’t follow trends — we create them. Our
            approach is built on innovation, creativity, and transparency,
            ensuring that every client achieves meaningful and measurable growth.
          </p>
        </motion.div>

        {/* 🔹 Right Side Points List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8"
        >
          {points.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative border-l-4 border-[#00AEEF] pl-5 hover:pl-6 transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-[#004C8C] mb-1">
                {title}
              </h4>
              <p className="text-gray-700 text-[1.15rem] sm:text-base leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
