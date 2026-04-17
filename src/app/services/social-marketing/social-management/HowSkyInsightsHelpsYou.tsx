"use client";

import { motion } from "framer-motion";
import { Rocket, Users, BarChart3, Zap, Brain } from "lucide-react";

export default function HowSkyInsightsHelpsYou() {
  const points = [
    {
      icon: Rocket,
      title: "Strategic Roadmap",
      desc: "We build a clear, actionable social media strategy tailored to your brand goals and target audience.",
    },
    {
      icon: Users,
      title: "Community Connection",
      desc: "Our team engages meaningfully with your audience to strengthen relationships and boost loyalty.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      desc: "Every campaign is tracked, analyzed, and optimized to ensure measurable success.",
    },
    {
      icon: Zap,
      title: "Creative Consistency",
      desc: "We maintain visual and messaging consistency that reinforces your brand identity.",
    },
    {
      icon: Brain,
      title: "Smart Insights",
      desc: "We combine creativity and data to make smarter marketing decisions — maximizing ROI.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 -mt-12 sm:-mt-16 md:-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* LEFT SIDE - TITLE + INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-[1.55rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            How <span className="text-blue-600">Sky Insights</span> Helps You Stand Out
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-6">
            At Sky Insights, we go beyond basic social management. We help you
            create real impact — combining human creativity with data intelligence
            to transform your social presence into measurable success.
          </p>
        </motion.div>

        {/* RIGHT SIDE - ANIMATED LIST */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative"
        >
          {/* Connecting Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-blue-100 hidden md:block"></div>

          <ul className="space-y-8">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start relative"
              >
                <div className="relative z-10 bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-md mr-4 flex-shrink-0">
                  <point.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-[1.25rem] sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    {point.title}
                  </h3>

                  <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
