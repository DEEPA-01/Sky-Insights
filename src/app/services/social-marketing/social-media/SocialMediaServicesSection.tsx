"use client";

import { motion } from "framer-motion";
import { PenTool, Users2, BarChart3, MessageSquare, Settings } from "lucide-react";
import React from "react";

export default function SocialMediaServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Customized Strategies",
      desc: "We create social media strategies tailored to your brand’s goals, audience, and industry trends — ensuring every post drives meaningful engagement.",
    },
    {
      icon: PenTool,
      title: "Content Creation & Management",
      desc: "From creative visuals to compelling copy, we manage your brand presence across all platforms with consistent quality and storytelling.",
    },
    {
      icon: Users2,
      title: "Community Engagement",
      desc: "We build genuine connections with your audience — responding, interacting, and fostering loyal communities that boost your brand’s credibility.",
    },
    {
      icon: MessageSquare,
      title: "Social Media Advertising",
      desc: "Our expert ad campaigns target the right audience through precision-based ads on Facebook, Instagram, and LinkedIn to drive conversions.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "We track your performance with deep analytics, measuring engagement, growth, and conversions — refining strategy for continual success.",
    },
  ];

  const radarValues = [0.6, 0.85, 0.45, 1.0, 0.7];
  const labels = ["Awareness", "Engagement", "Clicks", "Reach", "Retention"];

  return (
    <section className="relative bg-white text-[#0B1221] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

      {/* Soft Divider */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-gray-300 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

        {/* LEFT — RADAR GRAPH */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[95%] sm:w-[75%] lg:w-[85%] max-w-[560px] -mt-6">

            {/* Responsive container */}
            <div className="relative w-full pt-[80%] rounded-2xl overflow-hidden shadow-2xl bg-white">

              <svg
                viewBox="0 0 600 450"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >

                {/* Radar grid rings */}
                <g transform="translate(300,225)" stroke="#E6EEF6" strokeWidth="1" fill="none">
                  <circle r="180" />
                  <circle r="135" />
                  <circle r="90" />
                  <circle r="45" />
                </g>

                {/* Spokes */}
                <g transform="translate(300,225)" stroke="#E6EEF6" strokeWidth="1">
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2={Math.cos(rad) * 180}
                        y2={Math.sin(rad) * 180}
                      />
                    );
                  })}
                </g>

                {/* Labels */}
                <g transform="translate(300,225)" fontSize="14" fontWeight="600" fill="#0B1221">
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <text
                        key={i}
                        x={Math.cos(rad) * 210}
                        y={Math.sin(rad) * 210}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {labels[i]}
                      </text>
                    );
                  })}
                </g>

                {/* Radar Polygon */}
                <motion.g
                  transform="translate(300,225)"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  <polygon
                    points={radarValues
                      .map((v, i) => {
                        const angle = (i * 2 * Math.PI) / radarValues.length - Math.PI / 2;
                        return `${Math.cos(angle) * v * 180},${Math.sin(angle) * v * 180}`;
                      })
                      .join(" ")}
                    fill="rgba(0, 120, 255, 0.22)"
                    stroke="none"
                  />

                  <polygon
                    points={radarValues
                      .map((v, i) => {
                        const angle = (i * 2 * Math.PI) / radarValues.length - Math.PI / 2;
                        return `${Math.cos(angle) * v * 180},${Math.sin(angle) * v * 180}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="url(#gradientStroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* Stroke gradient */}
                <defs>
                  <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0077FF" />
                    <stop offset="100%" stopColor="#00B8FF" />
                  </linearGradient>
                </defs>

                {/* Dots + percentage labels */}
                <g transform="translate(300,225)">
                  {radarValues.map((v, i) => {
                    const angle = (i * 2 * Math.PI) / radarValues.length - Math.PI / 2;
                    const r = v * 180;
                    const cx = Math.cos(angle) * r;
                    const cy = Math.sin(angle) * r;

                    return (
                      <motion.g
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <circle cx={cx} cy={cy} r="8" fill="#fff" stroke="#0077FF" strokeWidth="3" />
                        <text
                          x={cx + (cx > 0 ? 15 : -15)}
                          y={cy}
                          textAnchor={cx > 0 ? "start" : "end"}
                          fontSize="12"
                          fill="#0B1221"
                        >
                          {Math.round(v * 100)}%
                        </text>
                      </motion.g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — SERVICE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 grid grid-cols-1 gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0B1221]">
            Best Social Media Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B8FF]">
              Services by Sky Insights
            </span>
          </h2>

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-[#F9FAFB] hover:bg-[#F1F5F9] 
              transition-all duration-300 
              border border-[#0B1221] 
              rounded-2xl p-6 flex gap-4 items-start shadow-md"
            >
              <div className="flex-shrink-0 bg-gradient-to-br from-[#0077FF] to-[#00B8FF] p-3 rounded-full">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0077B6] mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[60px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43C654.55 15.45 
               568.81 17.07 484.75 32.86C403.55 47.98 324.08 76.84 
               243.1 92.9C163.39 108.67 82.08 111.13 0 93.52V120H1200V110.8
               C1131.23 117.22 1059.75 114.33 985.66 95Z"
            fill="#e0f7fa"
          />
        </svg>
      </div>
    </section>
  );
}
