"use client";

import { motion } from "framer-motion";
import { Search, Brush, Code2, Rocket, TrendingUp } from "lucide-react";

export default function WebsiteProcessSection() {
  const steps = [
    {
      title: "Discovery & Research",
      icon: Search,
      desc: "We begin by understanding your brand, goals, and audience. Through in-depth research and analysis, we identify opportunities and map out a tailored strategy for your digital presence.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Creative Design",
      icon: Brush,
      desc: "Our designers craft visually stunning, user-centered designs that reflect your brand personality while ensuring flawless usability and engagement.",
      color: "from-cyan-400 to-blue-600",
    },
    {
      title: "Development & Coding",
      icon: Code2,
      desc: "Our developers transform designs into interactive, high-performing websites using clean, secure, and scalable code optimized for all devices.",
      color: "from-blue-600 to-indigo-500",
    },
    {
      title: "Launch & Optimization",
      icon: Rocket,
      desc: "After rigorous testing, we deploy your website with precision. From SEO optimization to loading speed, we fine-tune every element before going live.",
      color: "from-indigo-500 to-blue-700",
    },
    {
      title: "Continuous Growth",
      icon: TrendingUp,
      desc: "We monitor performance, analyze data, and optimize continuously. Our team helps you adapt, grow, and stay ahead in the competitive digital market.",
      color: "from-blue-700 to-cyan-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-24 px-6 sm:px-8 md:px-12 lg:px-20 -mt-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-[-100px] left-[-150px] w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Our Process for{" "}
          <span className="text-black font-bold">
            Custom Website Development
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16 
                     text-[1.15rem] sm:text-lg md:text-xl leading-relaxed"
        >
          We follow a structured, data-driven approach to craft websites that
          don’t just look beautiful — they perform, engage, and grow with your business.
        </motion.p>

        {/* Process Flow */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-14 lg:gap-6">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-100 via-cyan-200 to-blue-100 -translate-y-1/2 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center 
                         lg:w-1/5 bg-white/30 backdrop-blur-xl border border-white/40 
                         rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/30 
                         transition-all duration-300"
            >
              {/* Step icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-4 
                            bg-gradient-to-r ${step.color} shadow-lg`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                {step.desc}
              </p>

              {/* Connector dot for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-20px] top-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
