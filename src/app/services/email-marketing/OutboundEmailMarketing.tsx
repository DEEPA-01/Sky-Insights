"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function OutboundEmailMarketing() {
  return (
    <>
      {/* 🔹 Outbound Email Marketing Section */}
      <section className="relative bg-[#050B1E] text-white overflow-hidden py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 🔹 Left Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/outboundemail.png"
              alt="Outbound Email Marketing - Sky Insights"
              width={500}
              height={400}
              className="object-contain w-[90%] sm:w-[400px] md:w-[480px] lg:w-[520px]"
              priority
            />
          </motion.div>

          {/* 🔹 Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-white">
              Outbound / Cold{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500">
                Email Marketing
              </span>
            </h2>

            <p className="text-white/85 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 max-w-xl mx-auto md:mx-0">
              At <span className="text-teal-400 font-semibold">Sky Insights</span>, 
              we turn cold outreach into meaningful conversations using 
              AI-powered targeting and accurate segmentation.
            </p>

            <p className="text-white/85 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Through powerful <span className="text-yellow-400 font-semibold">A/B testing</span>,{" "}
              intelligent <span className="text-emerald-400 font-semibold">automation</span>, and{" "}
              deep <span className="text-blue-400 font-semibold">analytics</span>, 
              every campaign is optimized for higher replies and conversions.
            </p>

            {/* 🔹 CTA Button - NOW BRIGHTER + WHITE TEXT + SCROLLS TO CONTACT FORM */}
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 12px 40px rgba(0, 255, 255, 0.55)",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="
                bg-gradient-to-r 
                from-[#0FE3FF] 
                to-[#4FACFE] 
                text-white
                font-semibold 
                px-10 
                py-4 
                rounded-lg 
                flex 
                items-center 
                gap-2 
                w-fit 
                mx-auto 
                md:mx-0
                shadow-[0_0_25px_rgba(0,255,255,0.35)]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.55)]
                transition-all
              "
            >
              Let’s Get Started →
            </motion.button>
          </motion.div>
        </div>

        {/* Soft Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B1530]/40 via-transparent to-[#051021]/80 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-20 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-gradient-to-r from-blue-500/20 to-teal-400/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-gradient-to-br from-emerald-400/10 to-blue-500/10 rounded-full blur-2xl opacity-60"></div>
      </section>

      {/* Space */}
      <div className="h-10 sm:h-12 md:h-14 bg-transparent"></div>

      {/* Metrics Section */}
      <PerformanceMetrics />
    </>
  );
}

/* 🌟 Performance Metrics Component */
function PerformanceMetrics() {
  const metrics = [
    { label: "Email Open Rate", value: 92, color: "from-teal-400 to-blue-500" },
    { label: "Reply Rate", value: 78, color: "from-cyan-400 to-blue-400" },
    { label: "Conversion Rate", value: 65, color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <section className="relative bg-[#091A2F] text-white py-12 sm:py-14 md:py-16 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[1.9rem] sm:text-3xl md:text-4xl font-extrabold mb-10 text-white"
        >
          Performance That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500">
            Speaks for Itself
          </span>
        </motion.h3>

        {/* Progress Bars */}
        <div className="space-y-8 text-left">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2 text-[1.15rem] sm:text-base text-white/80 font-medium">
                <span>{metric.label}</span>
                <span className="text-teal-300 font-semibold">{metric.value}%</span>
              </div>

              <div className="w-full h-3 sm:h-4 bg-[#0E1B33] rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.value}%` }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Glows */}
      <div className="absolute top-0 left-0 w-[160px] h-[160px] bg-gradient-to-br from-teal-400/15 to-blue-400/10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-tr from-blue-500/15 to-emerald-400/10 blur-3xl opacity-60"></div>
    </section>
  );
}
