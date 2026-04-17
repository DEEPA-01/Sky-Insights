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

export default function GymServicesSection() {
  const reasons = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      desc: "Rank your gym on top of Google results. We optimize your website and local listings so fitness lovers find you instantly.",
      tag: "BOOST VISIBILITY",
    },
    {
      icon: BarChart3,
      title: "Pay Per Click (PPC)",
      desc: "Generate quick memberships with targeted Google Ads and high-converting landing pages for your gym.",
      tag: "INSTANT LEADS",
    },
    {
      icon: Users,
      title: "Social Media Marketing (SMM)",
      desc: "Build your fitness brand across Instagram, Facebook, and YouTube with creative reels, offers, and transformation posts.",
      tag: "GROW MEMBERS",
    },
    {
      icon: Target,
      title: "Brand Awareness Campaigns",
      desc: "Boost your gym’s credibility through inspiring visuals, influencer tie-ups, and professional storytelling.",
      tag: "BRAND GROWTH",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-orange-50 py-16 md:py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <p className="uppercase text-gray-500 text-sm tracking-wider text-[1.15rem] sm:text-base">
            Gym Marketing Strategies
          </p>

          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Digital Marketing Services <br />
            for <span className="text-orange-500">Gyms & Fitness Studios</span>
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
            At <span className="font-semibold text-orange-500">Sky Insights</span>, we help gyms
            grow faster with data-driven campaigns that bring new members, boost visibility,
            and keep your fitness brand thriving.
          </p>

          <ul className="space-y-3 text-left font-medium text-gray-900 pt-4 text-[1.15rem] sm:text-lg md:text-xl">
            <li className="border-b border-gray-300 pb-2">Increase gym memberships</li>
            <li className="border-b border-gray-300 pb-2">Enhance online visibility</li>
            <li className="border-b border-gray-300 pb-2">Boost social engagement</li>
            <li className="border-b border-gray-300 pb-2">Build loyal fitness communities</li>
          </ul>

          {/* BUTTON — SCROLL TO CTA */}
          <button
            onClick={() => {
              document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-orange-600 transition text-[1.15rem] sm:text-lg md:text-xl"
          >
            Get Started Today
          </button>
        </motion.div>

        {/* RIGHT SIDE — GLASS SERVICE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 md:p-6"
        >
          {reasons.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,153,51,0.4)",
              }}
              className="relative bg-white/40 backdrop-blur-lg border border-white/40 
                         shadow-[0_0_18px_rgba(255,153,51,0.25)]
                         hover:shadow-[0_0_30px_rgba(255,153,51,0.45)]
                         rounded-2xl p-6 transition duration-300"
            >
              <service.icon className="w-10 h-10 text-orange-600 mb-4" />

              <h3 className="text-[1.3rem] sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed mb-4">
                {service.desc}
              </p>

              <span className="inline-block text-xs font-semibold text-orange-600 border border-orange-600/40 px-3 py-1 rounded-md uppercase tracking-wider bg-white/40 backdrop-blur-sm">
                {service.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
