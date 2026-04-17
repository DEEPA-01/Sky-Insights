"use client";

import { motion } from "framer-motion";
import { Mail, Send, Users, TrendingUp } from "lucide-react";
import React, { useState } from "react";

export default function EmailMarketingCircularFeatures() {
  const features = [
    {
      icon: Mail,
      title: "Personalization",
      desc: "Deliver tailored messages that resonate with your audience and build lasting <br /> relationships.",
    },
    {
      icon: Send,
      title: "Automated Campaigns",
      desc: "Automate your workflow with smart triggers, saving time and boosting engagement effortlessly.",
    },
    {
      icon: Users,
      title: "Segmentation",
      desc: "Reach the right people with audience segmentation for higher open rates and conversions.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      desc: "Analyze campaign performance to continuously optimize and maximize ROI.",
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050B1E]" />
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight"
        >
          Core Features of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
            Email Marketing
          </span>
        </motion.h2>

        <p className="text-gray-300 sm:text-lg md:text-xl max-w-2xl mx-auto">
          Discover how strategic automation, personalization, and data-driven insights
          can transform your email campaigns into high-converting customer journeys.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {features.map((feature, index) => (
          <CircularCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

function CircularCard({ feature, index }: { feature: Feature; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered((prev) => !prev)} // MOBILE TAP
      animate={{
        scale: isHovered ? 1.08 : 1,
        y: isHovered ? -10 : 0,

        // 🔥 PERMANENT GLOW ALWAYS ON
        boxShadow: isHovered
          ? "0px 15px 30px rgba(0,255,200,0.6), 0px 0px 35px rgba(0,200,255,0.45)"
          : "0px 10px 28px rgba(0,255,200,0.35), 0px 0px 25px rgba(0,200,255,0.3)",
      }}
      className="group relative border border-teal-400/40 rounded-full 
                 w-64 h-64 sm:w-60 sm:h-60 md:w-64 md:h-64 
                 flex flex-col items-center justify-center text-center 
                 transition-all duration-300 ease-out hover:cursor-pointer
                 bg-gradient-to-br from-[#00FFB3]/25 via-[#00C7A3]/30 to-[#009F9D]/25"
    >
      {/* Icon */}
      <motion.div
        animate={{ rotate: isHovered ? 360 : 0 }} // 🔥 Always rotates on mobile
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex justify-center items-center mb-3"
      >
        <Icon
          className={`w-14 h-14 rounded-full p-3 border border-teal-300/40 transition-all duration-300 ${
            isHovered ? "text-white bg-teal-400" : "text-teal-300 bg-[#0E2436]"
          }`}
        />
      </motion.div>

      {/* Title */}
      <h3
        className={`text-[1.15rem] sm:text-lg md:text-xl font-semibold mb-2 transition-colors duration-200 ${
          isHovered ? "text-teal-100" : "text-white"
        }`}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className={`text-[0.95rem] sm:text-sm md:text-base leading-relaxed px-6 transition-colors duration-200 ${
          isHovered ? "text-gray-200" : "text-gray-300"
        }`}
      >
        {feature.desc}
      </p>
    </motion.div>
  );
}
