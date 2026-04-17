"use client";

import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Users,
  Target,
  Sparkles,
  Globe2,
} from "lucide-react";

export default function WhyGymMarketing() {
  const reasons = [
    {
      icon: Search,
      title: "Online Discovery Drives Decisions",
      desc: "Most people now search for the best gyms, trainers, and fitness offers online. Your visibility on search engines directly influences their choice.",
      color: "from-orange-500 to-amber-400",
      glow: "shadow-[0_0_25px_4px_rgba(251,146,60,0.7)]",
    },
    {
      icon: Users,
      title: "Build Trust & Reputation",
      desc: "A strong digital presence helps your gym earn credibility. Reviews, testimonials, and consistent branding increase your community’s trust.",
      color: "from-emerald-500 to-lime-400",
      glow: "shadow-[0_0_25px_4px_rgba(16,185,129,0.7)]",
    },
    {
      icon: Target,
      title: "Target the Right Audience",
      desc: "Digital marketing allows you to reach fitness-conscious individuals near your location through geo-targeted ads and campaigns.",
      color: "from-pink-500 to-rose-400",
      glow: "shadow-[0_0_25px_4px_rgba(244,63,94,0.7)]",
    },
    {
      icon: Sparkles,
      title: "Attract with Exclusive Offers",
      desc: "Promotions like seasonal discounts or limited-time memberships instantly draw attention and motivate users to join your gym.",
      color: "from-yellow-400 to-orange-400",
      glow: "shadow-[0_0_25px_4px_rgba(250,204,21,0.7)]",
    },
    {
      icon: BarChart3,
      title: "Compete in a Crowded Market",
      desc: "With so many gyms launching every day, strategic digital campaigns ensure your fitness center stands out and wins more memberships.",
      color: "from-cyan-400 to-teal-400",
      glow: "shadow-[0_0_25px_4px_rgba(6,182,212,0.7)]",
    },
    {
      icon: Globe2,
      title: "Professional Strategy for Growth",
      desc: "We combine SEO, PPC, and social media expertise to ensure your gym gets more traffic, better engagement, and higher conversion rates.",
      color: "from-purple-500 to-fuchsia-400",
      glow: "shadow-[0_0_25px_4px_rgba(168,85,247,0.7)]",
    },
  ];

  return (
    <section className="relative bg-white py-14 md:py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading (white) */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[1.9rem] sm:text-4xl md:text-5xl font-bold text-black mb-12"
        >
          Why Your Gym Needs{" "}
          <span className="text-orange-500">Digital Marketing</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-gradient-to-br ${item.color} ${item.glow}
                          rounded-2xl p-8 shadow-xl transition-all duration-300 
                          flex flex-col items-start hover:shadow-[0_0_35px_6px_rgba(255,255,255,0.4)]`}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 mb-5">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title (black) */}
              <h3 className="text-[1.3rem] sm:text-xl md:text-2xl font-semibold mb-3 text-white">
                {item.title}
              </h3>

              {/* Description (black) */}
              <p className="text-black text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note (black) */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-900 text-[1.15rem] sm:text-lg md:text-xl max-w-3xl mx-auto mt-14 leading-relaxed"
        >
          At <span className="font-semibold text-orange-500">Sky Insights</span>, we build 
          high-performing gym marketing strategies that power your growth, boost memberships, 
          and position your fitness brand as a leader in your area.
        </motion.p>
      </div>
    </section>
  );
}
