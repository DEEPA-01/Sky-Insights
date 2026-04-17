"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Brush, Target, RefreshCcw } from "lucide-react";

export default function KeyPillarsSection() {
  const pillars = [
    {
      number: "01",
      title: "Creative & Impactful Design",
      icon: Brush,
      color: "from-blue-500 to-cyan-400",
      points: [
        "Designs that create strong first impressions.",
        "Smart use of colors, typography & layout for trust.",
        "User-focused psychology that improves engagement.",
        "Each page guides users naturally toward action.",
      ],
    },
    {
      number: "02",
      title: "Goal-Driven Development",
      icon: Target,
      color: "from-cyan-500 to-blue-600",
      points: [
        "Projects begin with clear business objectives.",
        "Every feature built for growth & engagement.",
        "Helps drive traffic, leads & customer retention.",
        "Works with a roadmap for measurable progress.",
      ],
    },
    {
      number: "03",
      title: "Strong Security Foundation",
      icon: Shield,
      color: "from-blue-600 to-indigo-500",
      points: [
        "Built-in SSL & strong encryption.",
        "Safe handling of user data & payments.",
        "Regular security audits & malware protection.",
        "Peace of mind for both users & owners.",
      ],
    },
    {
      number: "04",
      title: "High-Performance Code & SEO",
      icon: Code2,
      color: "from-indigo-500 to-blue-400",
      points: [
        "Clean, scalable, SEO-friendly code.",
        "Fast loading with strong web performance.",
        "Keyword-focused content with storytelling.",
        "Visuals crafted for user engagement.",
      ],
    },
    {
      number: "05",
      title: "Continuous Maintenance & Growth",
      icon: RefreshCcw,
      color: "from-cyan-500 to-blue-700",
      points: [
        "Regular updates & performance checks.",
        "Analytics reveal growth opportunities.",
        "Consistent engagement through feedback.",
        "Strategies evolve to stay competitive.",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-6 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-[-100px] w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Key Pillars of a{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Successful Custom Website
          </span>
        </motion.h2>

        {/* Pillar Items */}
        <div className="space-y-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Number & Icon */}
              <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                <div
                  className={`text-7xl font-black bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent opacity-30 mb-3`}
                >
                  {pillar.number}
                </div>

                <div
                  className={`w-14 h-14 flex items-center justify-center bg-gradient-to-r ${pillar.color} rounded-2xl shadow-lg mb-6`}
                >
                  <pillar.icon className="text-white w-8 h-8" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                  {pillar.title}
                </h3>

                {/* Increased text size for Mobile */}
                <ul className="space-y-2 text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                  {pillar.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* Glassmorphism Panel */}
              <div className="lg:w-1/2 bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 hover:shadow-lg transition-all">
                <h4
                  className={`text-lg md:text-xl font-semibold mb-3 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}
                >
                  Why It Matters
                </h4>

                <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  Every website we craft at{" "}
                  <span className="font-semibold text-blue-600">Sky Insights</span>{" "}
                  is built on these principles — blending creativity, performance,
                  and strategy to help your digital identity grow stronger over time.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
