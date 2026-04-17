"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Settings,
  BarChart3,
  MapPin,
  Link2,
  FileSearch,
} from "lucide-react";

export default function SEOOptimizationSolutions() {
  const solutions = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      desc: "We identify high-value keywords your target audience is searching for and design a focused strategy that improves visibility and brings qualified traffic to your website.",
    },
    {
      icon: Settings,
      title: "Technical SEO Enhancements",
      desc: "Our experts fix site architecture, improve crawlability, and enhance page load speeds — ensuring search engines can easily understand and index your website.",
    },
    {
      icon: BarChart3,
      title: "On-Page & Content Optimization",
      desc: "We optimize your website’s meta tags, headers, and content structure, while crafting engaging SEO-friendly content that builds authority and improves rankings.",
    },
    {
      icon: MapPin,
      title: "Local SEO Targeting",
      desc: "We help your business appear in local search results through Google My Business optimization, local citations, and reviews — ideal for attracting nearby customers.",
    },
    {
      icon: Link2,
      title: "Backlink Building & Authority Growth",
      desc: "Our white-hat link-building techniques establish your brand credibility through relevant, high-quality backlinks from trusted domains.",
    },
    {
      icon: FileSearch,
      title: "Performance Tracking & Analytics",
      desc: "With transparent monthly reports and data-driven insights, we monitor your website’s traffic, ranking improvements, and ROI for continuous SEO growth.",
    },
  ];

  return (
    <section
      id="seo-solutions"
      aria-labelledby="seo-solutions-heading"
      className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-b from-white via-[#F8F5FF] to-[#F3E8FF] -mt-10 overflow-hidden"
    >
      {/* 🌟 Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16 -mt-6 sm:-mt-8 lg:-mt-10"
      >
        <h2
          id="seo-solutions-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold lg:font-semibold text-black mb-4"
        >
          Powerful SEO Optimization Strategies That Deliver Lasting Results
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#C084FC] to-[#A855F7] mx-auto mb-6 rounded-full"></div>
        <p className="text-slate-900 text-[1.15rem] sm:text-lg lg:text-[1.3rem] max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#A855F7]">Sky Insights</span>,
          our SEO strategies go beyond keywords — we focus on technical precision,
          content excellence, and authority building to help your business rank
          higher and grow organically.
        </p>
      </motion.div>

      {/* 🔹 Timeline Layout */}
      <div className="max-w-6xl mx-auto relative">
        {/* Central Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A855F7]/30 to-[#C084FC]/40 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {solutions.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center lg:items-start ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } gap-6 lg:gap-10`}
            >
              {/* Icon with Glow */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#A855F7] to-[#C084FC] flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full blur-xl bg-[#C084FC]/30 -z-10"></div>
              </div>

              {/* Text Section */}
              <div
                className={`text-center lg:text-left ${
                  index % 2 === 0 ? "lg:pr-32" : "lg:pl-32"
                }`}
              >
                <h3 className="text-2xl font-bold text-[#A855F7] mb-2">
                  {title}
                </h3>
                <p className="text-slate-900 text-[1.15rem] sm:text-lg lg:text-[1.3rem] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-gradient-to-t from-[#A855F7]/20 to-transparent blur-3xl opacity-50 -z-10"></div>
    </section>
  );
}
