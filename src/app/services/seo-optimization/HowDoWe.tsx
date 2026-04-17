"use client";
import React from "react";
import {
  Search,
  Settings,
  BarChart3,
  Globe,
  Link2,
  FileSearch,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowWeHelpSEO() {
  const helpItems = [
    {
      icon: Search,
      title: "Keyword Research & Targeting",
      desc: "We identify the right search terms your audience is using to ensure your business appears where it matters most — on top of search results.",
    },
    {
      icon: Settings,
      title: "Technical SEO Optimization",
      desc: "From improving crawlability to boosting site speed and mobile performance, we make sure your website runs smoothly for users and search engines alike.",
    },
    {
      icon: FileSearch,
      title: "On-Page Optimization",
      desc: "We refine titles, meta tags, URLs, and content structures to make every page search-engine friendly and user-focused for higher rankings.",
    },
    {
      icon: Link2,
      title: "Backlink & Authority Building",
      desc: "We help your brand earn high-quality backlinks through ethical outreach and collaborations, increasing your domain authority and trust online.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Reporting",
      desc: "Get transparent analytics and monthly reports showing keyword rankings, traffic growth, and ROI — so you see measurable results from your SEO efforts.",
    },
    {
      icon: Globe,
      title: "Local & Global SEO Reach",
      desc: "Whether targeting local markets or global customers, we tailor SEO strategies to expand your visibility and attract the right audience everywhere.",
    },
  ];

  return (
    <section
      id="how-we-help-seo"
      aria-labelledby="how-we-help-seo-heading"
      className="relative w-full bg-white py-16 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* 🌟 Section Heading */}
      <div className="text-center mb-14">
        <h2
          id="how-we-help-seo-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold lg:font-semibold text-black mb-4 leading-tight"
        >
          How We Help Your Business Grow with SEO Optimization
        </h2>
        <div className="w-24 sm:w-28 h-[3px] bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] mb-6 mx-auto rounded-full"></div>
        <p className="text-black text-[1.15rem] sm:text-lg lg:text-[1.25rem] leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-[#8B5CF6]">Sky Insights</span>,
          we empower brands to rank higher, attract quality traffic, and
          generate lasting growth through strategic, data-driven SEO solutions.
          Our approach combines deep keyword analysis, technical expertise, and
          performance monitoring to help your business stay ahead in search.
        </p>
      </div>

      {/* 🧩 SEO Solutions Cards */}
      <div className="flex flex-wrap justify-center items-stretch gap-10 max-w-7xl mx-auto">
        {helpItems.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col justify-between bg-white rounded-2xl p-8 border border-[#A855F7]/20 shadow-[0_5px_20px_rgba(168,85,247,0.1)] hover:shadow-[0_10px_25px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2 w-full sm:w-[45%] lg:w-[30%] ${
              i % 2 === 1 ? "mt-12 sm:mt-16" : ""
            }`}
          >
            {/* 🔹 Icon */}
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#A855F7] to-[#8B5CF6] text-white shadow-md mb-5 mx-auto">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            {/* 🔸 Text */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8B5CF6] mb-2">
                {title}
              </h3>
              <p className="text-black text-[1.15rem] sm:text-[1.1rem] lg:text-[1.25rem] leading-relaxed">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
