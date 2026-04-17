"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Users, Heart } from "lucide-react";

export default function SocialMediaSection() {
  const items = [
    {
      icon: Facebook,
      title: "Build Awareness & Engagement",
      desc: "Facebook helps your clinic grow visibility through targeted posts, ads, and community groups — creating an active network of future parents.",
    },
    {
      icon: Linkedin,
      title: "Showcase Expertise",
      desc: "LinkedIn is the perfect platform to share your clinic’s achievements, research, and updates — establishing your brand as a trusted medical authority.",
    },
    {
      icon: Users,
      title: "Create a Community",
      desc: "Through patient stories, Q&A sessions, and discussion groups, you can form genuine emotional connections with your audience.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE — HEADING */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 text-center lg:text-left"
        >
          <h2 className="text-[1.15rem] sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Why Use{" "}
            <span className="text-blue-600">Social Media</span>{" "}
            to Promote Your Clinic?
          </h2>

          <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-600">
            Social media is not just for visibility — it’s a space to educate,
            connect, and inspire hope. Sky Insights helps IVF clinics turn
            engagement into trust.
          </p>
        </motion.div>

        {/* RIGHT SIDE — FLOATING INFO BLOCKS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:w-2/3 flex flex-col items-center justify-center"
        >
          {/* Decorative connection line */}
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-blue-300 to-blue-600 left-1/2 transform -translate-x-1/2 hidden lg:block" />

          {/* Floating Info Blocks */}
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white/60 backdrop-blur-lg border border-white/30 shadow-md hover:shadow-lg 
                          rounded-2xl p-6 md:p-8 w-full md:w-3/4 lg:w-[60%] mb-8 hover:scale-[1.02] transition-all
                          ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <item.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-[1.15rem] sm:text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-[1.15rem] sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              {index < items.length - 1 && (
                <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <Heart className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
