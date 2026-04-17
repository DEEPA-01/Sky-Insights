"use client";

import { motion } from "framer-motion";
import { Globe2, DollarSign, Users, MessageCircle, BarChart3, Rocket } from "lucide-react";
import Image from "next/image";

export default function HospitalMarketingPage() {
  return (
    <main className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Why <span className="text-blue-600">Hospitals Need Digital Marketing</span>
            </h1>

            <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              In today’s fast-paced healthcare industry, digital marketing is no longer optional — 
              it’s essential for visibility, trust, and patient growth. With the right strategy, 
              hospitals can attract, engage, and retain patients effectively in the digital era.
            </p>

            {/* Button scrolls to contact section */}
            <a
              href="#contact-section"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition inline-block"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src="/healthcaree.png"
              alt="Why Hospitals Need Digital Marketing"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

        </div>

        {/* Decorative Shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 fill-blue-100"
          >
            <path d="M0,0V46.29c47.77,22,98.13,29,146,21,53.15-9,104.09-36,157-45,86.75-15,172,19,258,26,69.51,6,136-9,204-12,53.85-2,105,3,158,16,70.69,18,136,48,203,49,66,.95,128-26,184-48V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-blue-100 py-16 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.75rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug"
        >
          The Role of Digital Marketing in Modern Healthcare
        </motion.h2>

        <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With rising competition among hospitals and clinics, the ability to stand out online 
          determines success. <span className="font-semibold text-blue-700">Sky Insights</span> 
          helps hospitals enhance patient engagement, improve visibility, and build trust 
          with result-driven digital marketing strategies.
        </p>
      </section>

      {/* Your contact section will go here */}
      <div id="contact-section"></div>

    </main>
  );
}
