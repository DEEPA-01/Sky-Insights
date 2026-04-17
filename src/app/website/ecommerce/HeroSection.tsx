"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
<section className="relative overflow-hidden bg-[#060b22] text-white pt-36 sm:pt-28 md:pt-30 pb-10 sm:pb-12 md:pb-14">
      {/* Background Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-[#08112f] to-blue-600/30" />

      {/* Animated glowing orbs (Re-positioned for mobile) */}
      <div className="absolute top-[-40px] left-[-60px] sm:top-5 sm:left-[-80px] w-40 h-40 sm:w-48 sm:h-48 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] sm:bottom-0 sm:right-[-80px] w-52 h-52 sm:w-64 sm:h-64 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Decorative Mesh Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:35px_35px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          {/* Empower Your Brand with{" "} */}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Ecommerce Websites
          </span>
        </motion.h1>

        {/* Short Accent Line */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"
        ></motion.div> */}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-[1.05rem] sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Sell more. Grow faster. Go global.
        </motion.p>

        {/* CTA Button Area (hidden) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
