"use client";

import { motion } from "framer-motion";
import { InstagramIcon, FacebookIcon, LinkedinIcon, Twitter } from "lucide-react";
import React from "react";

export default function WhatIsSocialMediaMarketing() {
  return (
    <section className="relative bg-white text-[#052640] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

      {/* 🌈 Floating Background Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-[#0077B6]/10"
      >
        <InstagramIcon size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 text-[#00A3A3]/10"
      >
        <FacebookIcon size={85} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute bottom-36 left-1/2 text-[#0EA5E9]/10"
      >
        <LinkedinIcon size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-24 right-32 text-[#0096C7]/10"
      >
        <Twitter size={70} />
      </motion.div>

      {/* 🌟 Section Content */}
      <div className="max-w-6xl mx-auto space-y-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#052640] leading-snug">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3A3] to-[#0077B6]">
              Social Media Marketing?
            </span>
          </h2>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 max-w-5xl mx-auto">
            In simple terms, <strong>Social Media Marketing (SMM)</strong> is the art of promoting your business through social media platforms like <strong>Facebook, Instagram, LinkedIn,
            Twitter, and WhatsApp</strong>. It involves creating impactful content, running sponsored campaigns, and connecting directly with potential customers through their daily feeds. The goal is to create a message that attracts, engages, and persuades your audience to take meaningful actions.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 max-w-5xl mx-auto">
          At <span className="font-semibold text-[#0077B6]">Sky Insights</span>, we understand how social media has completely redefined digital marketing. <strong>As a leading social media marketing agency in Mumbai,</strong> we specialize in crafting powerful and personalized strategies that help businesses of all sizes build brand visibility, trust, and engagement.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5 max-w-5xl mx-auto">
            The real importance of social media marketing lies in how it brings <span className="text-[#0077B6] font-medium">your brand closer to your target audience</span>.
          </p>

          <p className="text-black text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-8 max-w-5xl mx-auto">
            As the best digital marketing agency, <strong>Sky Insights</strong> brings together innovation, creativity, and performance to deliver meaningful social campaigns.
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#052640] mt-8"
        >
          Key Components of Social Media Marketing
        </motion.h3>

        {/* 🌐 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          {[ 
            {
              title: "Content Creation",
              desc: "We craft engaging posts, reels, and stories that resonate with your audience and boost brand visibility.",
            },
            {
              title: "Targeted Ads",
              desc: "Our precision targeting helps reach your ideal audience through data-backed social media campaigns.",
            },
            {
              title: "Influencer Collaboration",
              desc: "Partner with top creators to enhance credibility, expand reach, and create authentic engagement.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(0, 150, 255, 0.25)",
              }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl backdrop-blur-md bg-gradient-to-br 
                         from-white/40 via-white/20 to-white/10 
                         border border-[#052640] shadow p-6 sm:p-8 md:p-10 
                         text-center text-[#052640]
                         mobileCardGlow"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3A3]/30 via-[#0077B6]/20 to-[#0EA5E9]/30 rounded-2xl opacity-60"></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{item.title}</h3>

                <p className="text-black text-[1.15rem] sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ Mobile Glow + Soft Floating Animation */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .mobileCardGlow {
            animation: mobileGlow 3s ease-in-out infinite;
            box-shadow: 0 0 18px rgba(0, 150, 255, 0.25);
          }
        }

        @keyframes mobileGlow {
          0% { transform: translateY(0); box-shadow: 0 0 12px rgba(0,150,255,0.25); }
          50% { transform: translateY(-10px); box-shadow: 0 0 22px rgba(0,150,255,0.45); }
          100% { transform: translateY(0); box-shadow: 0 0 12px rgba(0,150,255,0.25); }
        }
      `}</style>
    </section>
  );
}
