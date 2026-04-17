"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  DollarSign,
  MessageCircle,
  BarChart3,
  Users,
  Rocket,
} from "lucide-react";

export default function HospitalBenefits() {
  const benefits = [
    {
      icon: Globe2,
      title: "Stronger Online Visibility",
      desc: "We help hospitals appear at the top of Google results and local searches so patients can easily discover your trusted healthcare services.",
    },
    {
      icon: DollarSign,
      title: "High ROI Marketing",
      desc: "Reach more patients with cost-effective digital strategies that maximize ad spend and generate measurable leads and appointments.",
    },
    {
      icon: MessageCircle,
      title: "Patient Communication Made Simple",
      desc: "Engage with patients through chatbots, WhatsApp, and email campaigns — ensuring faster responses and stronger patient relationships.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Growth",
      desc: "We analyze every click, call, and conversion to fine-tune strategies, ensuring consistent growth and transparent performance metrics.",
    },
    {
      icon: Users,
      title: "Build Reputation & Trust",
      desc: "Positive reviews and authentic engagement enhance your hospital’s online reputation and build long-term patient trust.",
    },
    {
      icon: Rocket,
      title: "Sustainable Hospital Growth",
      desc: "From branding to lead generation, our team helps you scale your hospital’s digital presence while maintaining patient loyalty.",
    },
  ];

  return (
    <section className="relative bg-[#050B1E] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[1.75rem] sm:text-3xl md:text-4xl font-bold mb-14 leading-snug"
        >
          Key Benefits of{" "}
          <span className="text-cyan-400">Hospital Digital Marketing</span> with{" "}
          <span className="text-blue-500">Sky Insights</span>
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#0E1630]/60 backdrop-blur-xl border border-blue-800/30 
                         rounded-3xl p-8 shadow-[0_0_25px_rgba(0,180,255,0.25)] 
                         hover:shadow-[0_0_40px_rgba(0,180,255,0.35)] transition-transform 
                         hover:scale-[1.03] text-center"
            >
              {/* Permanent Glow Ring */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-lg"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full 
                                bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-400/40 mb-5">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>

                <p className="text-[1.15rem] sm:text-base md:text-lg text-gray-300 leading-relaxed">
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
