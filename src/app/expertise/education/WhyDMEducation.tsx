"use client";

import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Megaphone,
  Star,
  Target,
  BarChart3,
  Globe2,
} from "lucide-react";

export default function WhyDigitalMarketingEducation() {
  const reasons = [
    {
      icon: Search,
      title: "Reach More Students",
      desc: "Digital marketing helps institutes connect with a larger audience beyond local boundaries, reaching students globally through targeted campaigns.",
    },
    {
      icon: BarChart3,
      title: "Improve Brand Awareness",
      desc: "A strong online presence builds trust and recognition, making your institute stand out among competitors.",
    },
    {
      icon: Globe2,
      title: "Increase Admissions & Inquiries",
      desc: "SEO, social media, and paid ads drive organic traffic to your website, boosting student inquiries and admissions.",
    },
    {
      icon: Star,
      title: "Build Credibility & Reputation",
      desc: "Positive online reviews, testimonials, and consistent branding enhance your institute’s image and reliability.",
    },
    {
      icon: Target,
      title: "Track Results & Performance",
      desc: "Unlike traditional marketing, digital marketing provides real-time analytics to measure success and improve strategies.",
    },
  ];

  return (
    <section className="relative bg-white py-10 md:py-14 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Why{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Digital Marketing
          </span>{" "}
          is Required for Educational Institutes?
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto indent-8">
          In today’s competitive academic landscape, an effective digital marketing strategy
          is no longer optional — it’s essential. Educational institutions must connect,
          engage, and influence students and parents online to stay relevant and drive more enrollments.
        </p>

        {/* Responsive Layout */}
        <div className="flex flex-col gap-12">

          {/* Row 1 - 3 Cards*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-sm"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md mb-4">
                  <reason.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>

                <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center place-items-center">
            {reasons.slice(3, 5).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-sm"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md mb-4">
                  <reason.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>

                <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
