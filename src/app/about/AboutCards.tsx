"use client";

import { motion, cubicBezier } from "framer-motion";
import {
  FaChartLine,
  FaUserTie,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export default function SkyInsightsMarketingSection() {
  const cards = [
    {
      icon: <FaChartLine size={36} />,
      title: "Website Design & Development",
      desc: "We create responsive, visually stunning websites designed to attract and engage your audience.",
    },
    {
      icon: <FaLightbulb size={36} />,
      title: "SEO Optimization",
      desc: "Enhance your website’s visibility with proven SEO strategies that drive organic traffic and conversions.",
    },
    {
      icon: <FaUserTie size={36} />,
      title: "Social Media Marketing",
      desc: "Build your brand presence and connect with your target audience through impactful social media campaigns.",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Digital Marketing",
      desc: "Promote your brand through strategic, creative, and performance-driven digital marketing campaigns designed to boost visibility, engagement, and growth.",
    },
  ];

  // ✅ Use Framer’s easing helper for TypeScript safety
  const easeOut = cubicBezier(0.25, 0.1, 0.25, 1);

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 1 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: easeOut } },
  };

  return (
    <section className="bg-[#F9FAFB] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          // viewport={{ once: true }}
          className="text-center lg:text-left space-y-5 lg:space-y-6"
        >
          <h3 className="text-[#004C97] font-semibold text-xl sm:text-2xl">
            We’re Best
          </h3>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] leading-snug">
            Digital Marketing Agency in{" "}
            <span className="text-[#00AEEF]">Mumbai.</span>
          </h2>

          <div className="w-16 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#004C97] rounded-full mx-auto lg:mx-0"></div>

          <p className="text-black text-[1.05rem] sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Start working with Sky Insights — a company that helps you build a
            strong online presence, drive conversions, and connect with your
            audience using innovative digital marketing strategies.
          </p>
        </motion.div>

        {/* ✅ Right Cards Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
           viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="inView"
              whileHover="hover"
               viewport={{ once: false, amount: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
                         w-[90%] sm:w-[270px] lg:w-[300px] h-[240px] lg:h-[260px]
                         flex flex-col items-center justify-center text-center px-6 py-6 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* ✅ Icon — rotates on scroll + hover anywhere */}
              <motion.div
                animate={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: easeOut }}
                // viewport={{ once: false }}
                className="mb-3 text-[#00AEEF] transition-colors duration-300 group-hover:text-[#004C97]"
              >
                {card.icon}
              </motion.div>

              {/* ✅ Title — color changes on hover */}
              <motion.h3
                whileHover={{ color: "#004C97" }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-[#004C97]"
              >
                {card.title}
              </motion.h3>

              {/* ✅ Description */}
              <p className="text-black text-[1.05rem] sm:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* ✅ Hover Glow — visible on large screens */}
              <motion.div
                className="absolute inset-0 opacity-0 lg:group-hover:opacity-10 bg-gradient-to-br from-[#00AEEF] to-[#004C97] rounded-2xl pointer-events-none transition-opacity duration-500"
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
