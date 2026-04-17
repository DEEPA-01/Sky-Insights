"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AdvantagesOfSocialMediaManagement() {
  const advantages = [
    "Builds strong and lasting customer relationships",
    "Increases brand visibility and awareness globally",
    "Improves audience engagement and trust",
    "Drives targeted traffic to your website or business",
    "Enhances reputation through active online presence",
    "Provides valuable insights through analytics and data",
    "Supports lead generation and business growth",
    "Keeps your brand consistent across all platforms",
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center -mt-12 sm:-mt-16 md:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-snug">
          Advantages of{" "}
          <span className="text-blue-600">Social Media Management</span>
        </h2>

        {/* GRID LIST */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {advantages.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 relative"
            >
              {/* ICON WITH ANIMATED GLOW */}
              <div className="relative">
                <span className="absolute inset-0 w-8 h-8 bg-blue-500/20 blur-xl rounded-full animate-pulse"></span>

                <CheckCircle className="text-blue-600 w-7 h-7 relative z-10" />
              </div>

              <span className="indent-2">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
