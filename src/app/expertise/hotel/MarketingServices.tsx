"use client";

import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Megaphone,
  Star,
  Camera,
  Globe2,
} from "lucide-react";

export default function HospitalityMarketingServices() {
  const services = [
    {
      icon: Search,
      title: "SEO for Hotels & Resorts",
      desc: "Boost your visibility and attract guests searching for stays, dining, and experiences through strategic SEO.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      desc: "Engage audiences with powerful storytelling and content that builds your hotel’s brand online.",
    },
    {
      icon: Megaphone,
      title: "Paid Campaigns (Google & Meta Ads)",
      desc: "Drive bookings with targeted campaigns optimized for reach, conversions, and ROI.",
    },
    {
      icon: Star,
      title: "Reputation & Review Management",
      desc: "Build trust and credibility by managing guest reviews and improving your online reputation.",
    },
    {
      icon: Camera,
      title: "Content Creation & Photography",
      desc: "Highlight your property with captivating visuals and creative content strategies.",
    },
    {
      icon: Globe2,
      title: "Website Optimization & Analytics",
      desc: "Ensure a seamless booking experience with optimized performance and actionable insights.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061A1C] via-[#0B2B2D] to-[#0F1E1F] py-20 px-6 md:px-12 lg:px-20">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 animate-gradientMove bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,200,0.15),transparent_70%),radial-gradient(circle_at_75%_75%,rgba(0,200,255,0.2),transparent_70%)]"></div>

      {/* Decorative Glows */}
      <div className="absolute top-[-100px] left-[-80px] w-[350px] h-[350px] bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto z-10"
      >
        {/* Heading */}
        <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-center text-white mb-16 leading-snug">
          Our{" "}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Hospitality Marketing
          </span>{" "}
          Services
        </h2>

        {/* Vertical Timeline */}
        <div className="relative flex flex-col items-start md:items-center">
          
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400/40 to-cyan-400/40"></div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-14 w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Pulsing Dot */}
              <div className="absolute left-7 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-teal-400 to-emerald-500 w-6 h-6 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.6)] animate-pulseGlow z-10"></div>

              {/* Card */}
              <div
                className={`backdrop-blur-xl bg-[#112424]/70 border border-emerald-500/10 p-6 rounded-2xl shadow-lg hover:shadow-emerald-400/20 transition-transform hover:scale-[1.03] max-w-md ${
                  index % 2 === 0
                    ? "ml-16 md:ml-0 md:mr-8 text-left"
                    : "ml-16 md:ml-8 text-left md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-3 mb-3 ${
                    index % 2 !== 0 ? "justify-end" : ""
                  }`}
                >
                  <service.icon className="text-emerald-400 w-6 h-6" />
                  <h3 className="text-[1.15rem] sm:text-lg md:text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.6),
              0 0 30px rgba(6, 182, 212, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.8),
              0 0 45px rgba(16, 185, 129, 0.5);
          }
          100% {
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.6),
              0 0 30px rgba(6, 182, 212, 0.3);
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 18s ease infinite;
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
