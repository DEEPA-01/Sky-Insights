"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  ShoppingBag,
  Globe2,
  Users,
  LayoutDashboard,
  Camera,
  Mail,
} from "lucide-react";

export default function WhyJewelleryDigitalMarketing() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.8rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Why Digital Marketing for Jewellery Brands?
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 
          text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          The jewellery industry has evolved — from showrooms to screens. At{" "}
          <span className="font-semibold text-yellow-600">Sky Insights</span>, we help
          jewellery brands shine online through strategic, measurable, and
          result-oriented marketing.
        </p>

        {/* ---------------- 1st Row - Light Theme Cards ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Planned Strategies, Proven Results",
              desc: "Success in jewellery marketing isn’t luck — it’s precision. Every campaign we create is data-driven and creativity-infused for guaranteed results.",
            },
            {
              icon: TrendingUp,
              title: "Huge Return on Investment",
              desc: "Digital marketing helps jewellery brands earn high ROI with lower costs. Every ad and click is designed to drive real buyers — not just views.",
            },
            {
              icon: ShoppingBag,
              title: "Rise of Online Jewellery Shopping",
              desc: "We make your jewellery brand shine online with SEO-driven content, ads, and visuals that attract consistent sales.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg 
              border border-transparent hover:border-yellow-400 transition"
            >
              <item.icon className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-[1.25rem] md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------------- 2nd Row - Dark Theme with Permanent Glow ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: Globe2,
              title: "Expand Beyond Local Markets",
              desc: "Why limit your brand to one city when the world can see your designs? We help you gain global exposure and attract international buyers.",
            },
            {
              icon: Users,
              title: "Build Trust and Customer Relationships",
              desc: "We help you connect directly with your audience through personalized campaigns and social interactions that build loyalty.",
            },
            {
              icon: LayoutDashboard,
              title: "Measure, Improve, and Grow",
              desc: "Every campaign is measurable. We analyze results, identify gaps, and continuously optimize for better performance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#0c0c0c] via-[#111111] 
              to-[#1a1a1a] text-white rounded-2xl p-8 shadow-xl border-yellow-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 
              via-yellow-500/5 to-transparent rounded-2xl blur-2xl"></div>

              <div className="relative z-10">
                <item.icon className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-[1.25rem] md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------- 3rd Row Split Cards ---------------- */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
          {[
            {
              icon: Camera,
              title: "Visual Storytelling that Sells",
              desc: "We craft stunning product photos, videos, and reels that stop scrollers and convert admirers into buyers.",
              gradient: "from-yellow-400/30 via-yellow-500/20 to-white",
            },
            {
              icon: Mail,
              title: "Stay Connected & Relevant",
              desc: "Keep your audience engaged through email campaigns and social media updates about new launches and offers.",
              gradient: "from-rose-300/30 via-yellow-200/20 to-white",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl 
              bg-gradient-to-r ${item.gradient} border border-gray-200 shadow-md`}
            >
              <div className="flex-shrink-0 bg-yellow-500/10 p-4 rounded-full">
                <item.icon className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="text-left">
                <h3 className="text-[1.25rem] md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
