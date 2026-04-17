"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe2, CreditCard, TrendingUp } from "lucide-react";

export default function EcommerceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 py-24 px-6 md:px-12">

      {/* Animated Background Orbs */}
      <div className="absolute top-[-80px] left-[-100px] w-[350px] h-[350px] bg-blue-200/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Smart E-Commerce Solutions
            </span>
          </h1>

          {/* Main Paragraph → manually set mobile text to 1.15rem */}
          <p className="text-gray-600 text-[1.15rem] md:text-xl leading-relaxed mb-6">
            At <span className="font-semibold text-blue-700">Sky Insights</span>, we don’t just build e-commerce websites —
            we create growth engines that drive your business 24/7.
            Our custom solutions help you sell globally, streamline operations,
            and deliver seamless shopping experiences that convert visitors into loyal customers.
          </p>

          {/* Redirect Button */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full font-semibold text-white shadow-md hover:shadow-blue-400/30 transition-all inline-block"
          >
            Build My Online Store
          </a>
        </motion.div>

        {/* Feature Icons Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center md:text-left"
        >
          {[
            {
              icon: ShoppingBag,
              title: "Smart Online Stores",
              desc: "Beautiful, fast, and built to convert your visitors into customers.",
            },
            {
              icon: Globe2,
              title: "Global Reach",
              desc: "Expand beyond borders and sell worldwide — anytime, anywhere.",
            },
            {
              icon: CreditCard,
              title: "Secure Payments",
              desc: "Integrated payment gateways with full encryption and security.",
            },
            {
              icon: TrendingUp,
              title: "Growth Analytics",
              desc: "Data-driven insights that help you track sales and performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <item.icon className="w-10 h-10 text-blue-500 mb-3 mx-auto md:mx-0" />

              {/* Card Title → 1.15rem on mobile */}
              <h3 className="font-semibold mb-1 text-[1.15rem] md:text-lg">
                {item.title}
              </h3>

              {/* Card Description → 1.15rem on mobile */}
              <p className="text-gray-900 leading-relaxed text-[1.15rem] md:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
