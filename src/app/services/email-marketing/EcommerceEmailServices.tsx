"use client";

import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  RefreshCcw,
  Gift,
  ThumbsUp,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

export default function EcommerceEmailServices() {
  const services = [
    {
      icon: TrendingUp,
      title: "Smart Automation Workflows",
      desc: "Create intelligent email journeys that nurture, convert, and retain customers effortlessly.",
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Recovery",
      desc: "Recover lost revenue with automated, time-sensitive reminders optimized for conversions.",
    },
    {
      icon: Gift,
      title: "Personalized Product Recommendations",
      desc: "Serve dynamic product suggestions based on customer behavior and browsing patterns.",
    },
    {
      icon: ThumbsUp,
      title: "Customer Review Boosters",
      desc: "Collect authentic customer reviews that strengthen trust and brand credibility.",
    },
    {
      icon: RefreshCcw,
      title: "Re-Engagement & Win-Back Flows",
      desc: "Bring back inactive subscribers with tailored reactivation campaigns.",
    },
    {
      icon: MessageCircle,
      title: "Seasonal & Festive Campaigns",
      desc: "Leverage festivals and trending moments to deliver high-impact promotional emails.",
    },
    {
      icon: Star,
      title: "Upsell & Cross-Sell Funnels",
      desc: "Increase average order value with targeted post-purchase flows and smart recommendations.",
    },
  ];

  return (
    <section className="relative py-20 px-8 sm:px-14 md:px-20 lg:px-28">
      {/* 🔹 Title Section */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[4px] text-sm font-medium text-teal-500 mb-2">
          Sky Insights – Email Marketing Agency
        </p>

        <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Powerful Email Marketing Services for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 underline decoration-teal-400">
            Digital & Ecommerce Brands
          </span>
        </h2>
      </div>

      {/* 🔹 Responsive Auto-Fill Grid (Fixes 4/3 empty gap issue) */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-8 
        mx-auto 
        max-w-7xl
        place-items-center
      "
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              group border border-teal-400/20 rounded-2xl p-8 
              flex flex-col items-start text-left
              bg-gradient-to-b from-[#0D1224] to-[#161E32]
              
              shadow-[0_0_25px_rgba(0,255,200,0.35),0_0_50px_rgba(0,200,255,0.25)]
              hover:shadow-[0_0_35px_rgba(0,255,200,0.6),0_0_60px_rgba(0,200,255,0.45)]
              
              transition-all duration-300 
              hover:scale-[1.03]
            "
          >
            {/* Icon Box */}
            <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-teal-500 shadow-md shadow-teal-400/60">
              <service.icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-[1.15rem] sm:text-lg md:text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-[1rem] sm:text-sm md:text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
