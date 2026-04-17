"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Send, MessageCircle, BarChart3 } from "lucide-react";

export default function KeyElementsOfSocialMediaManagement() {
  const elements = [
    {
      icon: Lightbulb,
      title: "Strategy Planning",
      desc: "We start by crafting a custom plan that aligns your goals, audience, and content direction.",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      desc: "Creative visuals, videos, and captions that represent your brand’s story and tone.",
    },
    {
      icon: Send,
      title: "Scheduling & Publishing",
      desc: "We schedule content for the right time, ensuring maximum reach and engagement.",
    },
    {
      icon: MessageCircle,
      title: "Community Engagement",
      desc: "We interact, respond, and build relationships to maintain authentic brand presence.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      desc: "We track, measure, and optimize every move for data-backed performance improvement.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden -mt-12 sm:-mt-16 md:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-[1.55rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-16 leading-snug">
          Key Elements of{" "}
          <span className="text-blue-600">Social Media Management</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between lg:space-x-10 space-y-10 lg:space-y-0">
          {elements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="bg-gradient-to-br from-[#0077B6] to-[#00B8FF] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg mb-4">
                  <item.icon className="w-7 h-7" />
                </div>

                <h3 className="text-[1.3rem] sm:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
