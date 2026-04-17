"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Quote, PenLine } from "lucide-react";

export default function DigitalMarketingVsAdvertising() {
  const strategies = [
    {
      icon: Instagram,
      title: "Interactive Social Media",
      desc: "Platforms like Instagram offer dynamic tools such as polls and Q&As in stories — allowing your IVF clinic to directly understand patient interests and questions.",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.5)]",
    },
    {
      icon: Youtube,
      title: "Educational Video Marketing",
      desc: "YouTube lets you share insightful videos about fertility, procedures, and patient success stories, helping you emotionally connect with future parents.",
      glow: "shadow-[0_0_25px_rgba(34,211,238,0.5)]",
    },
    {
      icon: Quote,
      title: "Authentic Testimonials",
      desc: "Show real success stories from your patients. Video testimonials establish credibility, reduce hesitation, and build trust through emotion and transparency.",
      glow: "shadow-[0_0_25px_rgba(99,102,241,0.5)]",
    },
    {
      icon: PenLine,
      title: "Informative Blogging",
      desc: "Publishing fertility-related blogs boosts SEO and credibility. Answer patient questions, discuss treatments, and share medical expertise to attract organic traffic.",
      glow: "shadow-[0_0_25px_rgba(56,189,248,0.5)]",
    },
  ];

  return (
    <section className="bg-white py-4 md:py-8 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.15rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5"
        >
          What is{" "}
          <span className="text-blue-600">Digital Marketing</span> vs{" "}
          <span className="text-blue-600">Advertising?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          Advertising reaches everyone — but digital marketing connects you
          with the right people.{" "}
          <span className="text-blue-600 font-semibold">Sky Insights</span>{" "}
          helps IVF clinics go beyond ads and build real relationships through
          valuable, trust-driven content.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-[#0b1220] text-white border border-blue-500/30 backdrop-blur-lg 
                         rounded-2xl p-8 ${item.glow} transition-all duration-300`}
            >
              <item.icon className="w-10 h-10 text-blue-400 mb-4 mx-auto" />

              <h3 className="text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-[1.15rem] sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
