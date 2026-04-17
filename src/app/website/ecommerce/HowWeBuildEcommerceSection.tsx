"use client";

import { motion } from "framer-motion";
import {
  Search,
  Building2,
  ShieldCheck,
  LayoutGrid,
  ClipboardList,
  Sparkles,
  Palette,
  Code,
  RefreshCcw,
} from "lucide-react";

export default function HowWeBuildEcommerceSection() {
  const sections = [
    {
      heading: "Foundation & Strategy",
      paragraph:
        "Before writing a single line of code, we dive deep into your business goals and market insights. This helps us create an e-commerce foundation that’s solid, scalable, and success-driven.",
      cardGradient: "from-gray-900 via-gray-800 to-gray-900",
      glowColor: "shadow-[0_0_25px_rgba(0,180,255,0.3)]",
      steps: [
        {
          icon: Search,
          title: "Market Research & Strategy",
          desc: "We study your target market, analyze competitors, and craft strategies that help your store stand out.",
        },
        {
          icon: Building2,
          title: "Strategic Partnerships",
          desc: "We connect your store with trusted brands, suppliers, and payment systems to create a powerful ecosystem.",
        },
        {
          icon: ShieldCheck,
          title: "Secure Transactions",
          desc: "We integrate encrypted payment gateways for smooth, safe, and transparent transactions.",
        },
      ],
    },
    {
      heading: "Product & Experience Design",
      paragraph:
        "A great e-commerce experience is built on how products are presented and how easily users can navigate through them. We focus on both design and usability.",
      cardGradient: "from-indigo-900 via-blue-800 to-indigo-900",
      glowColor: "shadow-[0_0_25px_rgba(0,100,255,0.3)]",
      steps: [
        {
          icon: LayoutGrid,
          title: "Smart Product Organization",
          desc: "We structure and categorize your products for easy browsing and better user satisfaction.",
        },
        {
          icon: ClipboardList,
          title: "Optimized Product Listings",
          desc: "Our SEO experts optimize product titles and metadata to improve visibility and rank higher.",
        },
        {
          icon: Palette,
          title: "Elegant UI/UX Design",
          desc: "We blend creativity and simplicity for a premium shopping experience that converts visitors into buyers.",
        },
      ],
    },
    {
      heading: "Development & Growth",
      paragraph:
        "Once the experience is designed, we focus on performance, scalability, and long-term growth. Your platform evolves continuously with user behavior and market needs.",
      cardGradient: "from-teal-900 via-cyan-800 to-teal-900",
      glowColor: "shadow-[0_0_25px_rgba(0,255,200,0.3)]",
      steps: [
        {
          icon: Code,
          title: "Efficient Coding & Integration",
          desc: "We develop clean, secure, and scalable code with seamless integrations for analytics and automation tools.",
        },
        {
          icon: Sparkles,
          title: "Advanced Features",
          desc: "From wishlists to loyalty programs, we enhance user engagement through advanced functionalities.",
        },
        {
          icon: RefreshCcw,
          title: "Maintenance & Growth",
          desc: "We continuously monitor and upgrade your store with new features, offers, and insights.",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-white py-24 px-6 md:px-12 overflow-hidden">

      {/* Background glow accents */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-cyan-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-400/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.35rem] md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          How{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Sky Insights
          </span>{" "}
          Builds Powerful E-Commerce Experiences
        </motion.h2>

        {/* Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-20">

            {/* Section intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <h3 className="text-[1.2rem] md:text-3xl font-semibold text-gray-900 mb-4">
                {section.heading}
              </h3>

              <p className="text-gray-800 leading-relaxed text-[1.15rem] md:text-lg">
                {section.paragraph}
              </p>
            </motion.div>

            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {section.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden bg-gradient-to-br ${section.cardGradient} text-white border border-gray-700 rounded-2xl p-8 transition-all duration-300 ${section.glowColor}`}
                >

                  {/* Glow overlay inside */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl"></div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-[1.15rem] md:text-xl text-white mb-3 relative z-10">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-[1.15rem] md:text-base relative z-10">
                    {step.desc}
                  </p>

                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
