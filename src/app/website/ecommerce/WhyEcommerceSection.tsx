"use client";

import { motion } from "framer-motion";
import { Globe2, Building2, Rocket, BarChart3 } from "lucide-react";

export default function WhyEcommerceSection() {
  const reasons = [
    {
      id: "01",
      icon: Globe2,
      title: "Expand Your Global Reach",
      points: [
        "Connect with customers across borders and time zones.",
        "A well-optimized e-commerce website brings traffic 24/7.",
        "Collaborate with global brands to boost credibility and revenue.",
        "Your store becomes a digital marketplace for worldwide engagement.",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "02",
      icon: Building2,
      title: "Empower Brand Partnerships",
      points: [
        "Offer a platform where companies can list and promote their products.",
        "Earn through brand affiliations and product collaborations.",
        "Enhance visibility — your partners help market you too.",
        "E-commerce builds long-term trust between brands and customers.",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "03",
      icon: Rocket,
      title: "Accelerate Business Growth",
      points: [
        "Gain traction quickly through data-driven online campaigns.",
        "Attract more customers with SEO, offers, and retargeting ads.",
        "Reach the top of Google rankings with optimized product listings.",
        "Transform your website into a digital supermarket — always open.",
      ],
      color: "from-indigo-500 to-cyan-500",
    },
    {
      id: "04",
      icon: BarChart3,
      title: "Measure, Improve, and Grow",
      points: [
        "Monitor every sale, click, and customer interaction in real time.",
        "Respond to feedback to strengthen brand trust.",
        "Continuously update and refine your site for better performance.",
        "Let analytics guide your next business strategy confidently.",
      ],
      color: "from-blue-600 to-cyan-400",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#050b1a] via-[#08152b] to-[#0a1836] text-white py-24 px-6 md:px-12 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.35rem] md:text-4xl font-bold text-center mb-16"
        >
          Why Businesses Need{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            E-Commerce Website Solutions
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="flex flex-col items-center space-y-16 relative before:absolute before:left-[50%] before:top-0 before:h-full before:w-[3px] before:bg-gradient-to-b before:from-cyan-500/40 before:via-blue-600/50 before:to-cyan-400/40 before:-translate-x-1/2">

          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center w-full md:w-10/12 lg:w-9/12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Dot */}
              <div className="absolute left-[50%] top-[50%] w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-[#0a1023] shadow-[0_0_25px_rgba(56,189,248,0.6)] transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Left Content */}
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8">

                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-[0_0_30px_rgba(56,189,248,0.6)] mb-5`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className={`text-7xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-20 mb-3`}>
                  {item.id}
                </div>

                <h3 className="font-semibold text-[1.2rem] md:text-2xl mb-4 text-white">
                  {item.title}
                </h3>
              </div>

              {/* Right Card */}
              <div className="md:w-1/2 bg-[#0e1a35]/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.3)] p-8 md:p-10 transition-all duration-500">
                <ul className="space-y-3 text-gray-300 text-[1.15rem] md:text-[1.05rem] lg:text-[1.1rem] leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
