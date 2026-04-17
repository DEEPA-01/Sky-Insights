"use client";

import { motion } from "framer-motion";
import { School, GraduationCap, University } from "lucide-react";

export default function DigitalMarketingForEducation() {
  const educationTypes = [
    {
      icon: School,
      title: "Schools",
      desc: "We help schools build strong digital footprints through storytelling, parent-focused campaigns, and consistent branding — creating awareness and trust.",
    },
    {
      icon: GraduationCap,
      title: "Higher Education",
      desc: "Colleges and institutes thrive online with tailored SEO strategies, social campaigns, and performance marketing that turn inquiries into admissions.",
    },
    {
      icon: University,
      title: "Universities",
      desc: "Our campaigns showcase research, placements, and global programs — positioning your university as a leading institution in digital education.",
    },
  ];

  return (
    <section className="relative py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0A0F1E] via-[#101933] to-[#0E142A] text-white overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >

        {/* Heading */}
        <h2 className="text-[1.15rem] sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Digital Marketing for{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Schools, Colleges & Universities
          </span>
        </h2>

        <p className="text-[1.15rem] sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
          At <span className="font-semibold text-cyan-400">Sky Insights</span>, we empower educational institutions
          with digital marketing strategies that connect, engage, and grow — from K-12 schools to globally recognized universities.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {educationTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // viewport={{ once: true }}
              className="relative bg-[#151D3B]/60 border border-blue-500/30 rounded-2xl p-8 text-center backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              {/* Glow Ring Behind Icon */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl rounded-full"></div>

              <div className="relative flex items-center justify-center mb-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-400/50">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-[1.15rem] sm:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-[1.15rem] sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Text */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          // viewport={{ once: true }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-16 max-w-4xl mx-auto"
        >
          Whether shaping young minds or driving innovation in higher education,{" "}
          <span className="text-cyan-400 font-semibold">Sky Insights</span> ensures your institute
          stands out digitally with creative strategy, storytelling, and measurable growth.
        </motion.p>

      </motion.div>
    </section>
  );
}
