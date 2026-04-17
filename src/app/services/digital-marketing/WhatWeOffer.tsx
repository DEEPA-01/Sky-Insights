"use client";

import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaMailBulk,
  FaSearchDollar,
} from "react-icons/fa";

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: <FaSearchDollar size={40} />,
      title: "Search Engine Optimization (SEO)",
      desc: "Enhance your website’s visibility and rank higher on Google through our result-driven SEO strategies.",
    },
    {
      icon: <FaBullhorn size={40} />,
      title: "Social Media Marketing",
      desc: "Build a powerful online presence and connect authentically with your audience through engaging social campaigns.",
    },
    {
      icon: <FaMailBulk size={40} />,
      title: "Email Marketing",
      desc: "Deliver personalized and effective campaigns that convert subscribers into loyal customers.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Marketing",
      desc: "Transform your website into a digital growth engine optimized for engagement, conversions, and brand impact.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Performance Marketing",
      desc: "Drive measurable ROI through data-backed campaigns across Google, Meta, and other high-impact channels.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Influencer & Video Marketing",
      desc: "Collaborate with trusted influencers and create impactful video content that inspires and converts.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#EAF4FF] via-[#F5FBFF] to-[#D9EEFF] text-[#000000] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      {/* 🔹 Background Overlay Circles */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-[#00AEEF]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#004C8C]/15 rounded-full blur-3xl"></div>

      {/* 🔹 Section Header */}
      <div className="relative text-center mb-14 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000]">
          What We Offer
        </h2>
        <p className="text-gray-900 text-[1.15rem] sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Explore our end-to-end digital marketing services designed to help your brand grow,
          connect, and convert effectively in the digital world.
        </p>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#004C8C] mx-auto rounded-full mt-5"></div>
      </div>

      {/* 🔹 Content Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon */}
            <div className="relative mb-5 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#004C8C] to-[#00AEEF] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500 group-hover:rotate-[360deg]">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#004C8C] mb-2 group-hover:text-[#00AEEF] transition-colors duration-300">
              {service.title}
            </h3>

            {/* ✅ Increased paragraph size for mobile */}
            <p className="text-gray-600 text-[1.15rem] sm:text-base max-w-[320px] leading-relaxed group-hover:text-[#0B2545] transition-colors duration-300">
              {service.desc}
            </p>

            {/* Line Divider */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#00AEEF] to-[#004C8C] rounded-full mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-[#D9EEFF] to-transparent"></div>
    </section>
  );
}
