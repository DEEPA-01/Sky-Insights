"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, TrendingUp } from "lucide-react";

export default function ShopifyProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      desc: "We begin by understanding your brand, audience, and goals — laying a strong foundation for your eCommerce growth journey.",
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: Palette,
      title: "Design & Experience",
      desc: "Our designers craft a modern, conversion-focused layout — balancing aesthetics with seamless navigation to delight every visitor.",
      color: "from-blue-600 to-indigo-500",
    },
    {
      icon: Code,
      title: "Development & Integration",
      desc: "We build your Shopify store with custom features, integrations, and automation — ensuring security, performance, and scalability.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      desc: "After testing every detail, we launch your store with powerful SEO, PPC, and marketing automation to drive measurable sales.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Growth & Support",
      desc: "Our work doesn’t stop at launch — we monitor, analyze, and optimize your Shopify store to ensure sustainable business growth.",
      color: "from-pink-500 to-cyan-400",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-20 md:py-24 px-6 md:px-12">

      {/* FLOAT ANIMATION CSS */}
      <style>{`
        @keyframes floatIcon {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: floatIcon 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-cyan-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[1.35rem] sm:text-4xl md:text-5xl font-bold text-gray-900 mb-14 md:mb-16 leading-snug"
        >
          How{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Sky Insights
          </span>{" "}
          Builds Your Shopify Success Story
        </motion.h2>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center md:w-1/5"
            >
              {/* Floating Icon Bubble */}
              <div
                className={`w-20 h-20 rounded-full float-animation bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg mb-6`}
              >
                <step.icon className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-[1.2rem] sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[1.15rem] sm:text-base md:text-[1.1rem] leading-relaxed max-w-xs">
                {step.desc}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 right-[-10%] w-[120px] h-[3px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  style={{ zIndex: -1 }}
                ></div>
              )}
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
