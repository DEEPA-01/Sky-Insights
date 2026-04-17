"use client";

import { motion } from "framer-motion";
import { Globe2, Users, BarChart3, Smartphone } from "lucide-react";

export default function WhyChooseDigitalMarketing() {
  const reasons = [
    {
      icon: Globe2,
      title: "Reach Global Travelers",
      desc: "Digital marketing helps your travel agency go beyond borders—connecting with travelers across continents through search engines, social media, and online ads.",
    },
    {
      icon: Users,
      title: "Target the Right Audience",
      desc: "Whether it’s solo backpackers, families, or luxury travellers, advanced targeting lets you reach people who are genuinely interested in your destinations and packages.",
    },
    {
      icon: BarChart3,
      title: "Boost Bookings & Conversions",
      desc: "Smart SEO and optimized ad campaigns increase your visibility and website traffic, leading to more inquiries, confirmed bookings, and loyal repeat customers.",
    },
    {
      icon: Smartphone,
      title: "Win in a Mobile-First World",
      desc: "Most travellers research and book trips on mobile devices. With mobile-first digital strategies, your agency stays visible and persuasive wherever your audience is browsing.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-cyan-50 py-24 px-6 md:px-12">
      
      {/* Decorative Backgrounds */}
      <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px] bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-cyan-300/20 blur-3xl rounded-full"></div>

      {/* Airplane Trail */}
      <svg
        className="absolute top-0 left-0 w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C300,90 900,10 1200,60 L1200,0 L0,0 Z"
          fill="url(#skyGradient)"
        />
        <defs>
          <linearGradient id="skyGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-6"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Digital Marketing
          </span>{" "}
          for Your Travel Agency?
        </motion.h2>

        {/* Subheading */}
        <p className="text-black text-[1.15rem] sm:text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed">
          The travel industry thrives on inspiration — and digital marketing delivers that inspiration at scale.
          With the right approach, your agency can attract dreamers, convert them into travelers, and keep them coming back.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/90 backdrop-blur-lg border border-blue-100 shadow-lg rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-blue-300/40 group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl"></div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Floating Airplane */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-3 text-blue-400 opacity-60"
              >
                ✈️
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
