"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import React from "react";

export default function SocialMediaChecklist() {
  const features = [
    {
      title: "Dedicated Resource",
      desc: "An experienced social media manager dedicated to your business, ensuring consistent growth and performance.",
    },
    {
      title: "Customised Design",
      desc: "Creative, custom-made designs that highlight your brand’s personality and connect with your audience.",
    },
    {
      title: "Daily Posts",
      desc: "Regular posts crafted strategically for the best engagement — from Monday to Sunday, every week.",
    },
    {
      title: "In-depth Understanding",
      desc: "We study your business and industry deeply to produce content that resonates with your target audience.",
    },
    {
      title: "Tailored Hashtags",
      desc: "Smartly researched hashtags that improve your post visibility and reach across social platforms.",
    },
    {
      title: "Performance Tracking",
      desc: "Real-time analytics and reporting that showcase what’s working and how your campaigns are growing.",
    },
  ];

  return (
    <section className="relative bg-[#041024] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      
      {/* 🌟 Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffffff] leading-snug">
          What You Get With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
            Sky Insights’ Social Media Marketing
          </span>
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto 
                      text-[1.15rem] sm:text-lg md:text-2xl leading-relaxed">
          Our social media marketing solutions are designed to give your brand a
          powerful, consistent, and creative online presence — helping you grow
          organically and meaningfully.
        </p>
      </div>

      {/* 📋 Timeline List */}
      <div className="max-w-4xl mx-auto relative pl-8 sm:pl-12">

        {/* Vertical Line */}
        <div className="absolute top-0 left-4 sm:left-6 w-[2px] h-full 
                        bg-gradient-to-b from-[#0077FF] to-[#00B8FF] opacity-40"></div>

        <ul className="space-y-10">
          {features.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10 sm:pl-14"
            >
              {/* Icon */}
              <div className="absolute left-[-6px] sm:left-[-2px] top-0 
                              bg-gradient-to-br from-[#0077FF] to-[#00B8FF] 
                              rounded-full p-2 shadow-md">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>

              {/* Text Content */}
              <div className="bg-[#0A1A3A]/80 hover:bg-[#0E2554] 
                              transition-all duration-300 rounded-xl p-5 
                              border border-[#00B8FF]/20 
                              shadow-[0_8px_25px_rgba(0,184,255,0.15)]">

                <h3 className="text-lg sm:text-xl md:text-2xl 
                               font-semibold text-[#00B8FF] mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-[1.15rem] sm:text-base 
                              md:text-2xl leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.li>
          ))}
        </ul>
      </div>

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10 
                      bg-gradient-to-b from-[#001122] via-[#020E26] to-[#000814] 
                      opacity-90"></div>

      <div className="absolute top-[-80px] right-[-60px] 
                      w-[250px] h-[250px] bg-[#00B8FF]/20 
                      blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-80px] left-[-60px] 
                      w-[250px] h-[250px] bg-[#0077FF]/20 
                      blur-3xl rounded-full"></div>
    </section>
  );
}
