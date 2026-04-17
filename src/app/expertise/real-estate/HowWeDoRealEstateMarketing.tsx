"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  FileText,
  Globe2,
  Megaphone,
  Share2,
  Mail,
  BarChart3,
  Video,
  RefreshCw,
} from "lucide-react";

export default function HowWeDoRealEstateMarketing() {
  const steps = [
    {
      icon: Search,
      title: "Market Research & Analysis",
      desc: "We begin by analyzing the property market, studying buyer behavior, and evaluating your competitors to find untapped opportunities.",
    },
    {
      icon: Target,
      title: "Audience Targeting",
      desc: "We identify and segment your ideal audience — from families and investors to professionals — and tailor campaigns to their buying motivations.",
    },
    {
      icon: FileText,
      title: "Strategic Planning",
      desc: "Our team crafts a clear marketing roadmap with timelines, channels, and performance milestones to ensure maximum ROI.",
    },
    {
      icon: Globe2,
      title: "Website & Landing Page Development",
      desc: "We create responsive, SEO-optimized real estate websites that attract, engage, and convert visitors into verified leads.",
    },
    {
      icon: Megaphone,
      title: "Advertising & Lead Generation",
      desc: "We launch high-performing ad campaigns on Google, Meta, and YouTube that drive real, qualified property inquiries.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "We design content that showcases properties, builds brand trust, and engages your audience across all major social channels.",
    },
    {
      icon: Video,
      title: "Video & Drone Marketing",
      desc: "From aerial drone shoots to cinematic walk-throughs — we bring your properties to life with stunning visuals.",
    },
    {
      icon: Mail,
      title: "Email Automation",
      desc: "We nurture potential buyers through automated, personalized email workflows that keep your brand top-of-mind.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      desc: "Every campaign is monitored using analytics and refined continuously to achieve higher conversions and lower costs.",
    },
    {
      icon: RefreshCw,
      title: "Optimization & Reporting",
      desc: "We constantly update, optimize, and report results transparently so you stay informed and ahead in the market.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          How <span className="text-blue-600">Sky Insights</span> Executes{" "}
          <span className="text-blue-600">Real Estate Marketing</span>
        </motion.h2>

        <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          We follow a step-by-step process designed to connect properties with
          the right buyers, boost visibility, and deliver measurable results.
        </p>

        {/* Process Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-400/30">
                <step.icon className="text-white w-10 h-10" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-20 mb-10 rounded-full"></div>

      </div>
    </section>
  );
}
