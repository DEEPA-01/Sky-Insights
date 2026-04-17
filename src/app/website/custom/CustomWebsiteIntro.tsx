"use client";

import { motion } from "framer-motion";

export default function CustomWebsiteIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[-50px] w-80 h-80 bg-blue-400/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-[-100px] w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full" />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 leading-snug"
        >
          <span className="text-black font-bold">
            The Art of Custom Website Development
          </span>
        </motion.h2>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-gray-900 text-[1.15rem] sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-6"
        >
          <p>
            At <span className="font-semibold text-blue-600">Sky Insights</span>, we believe that every website begins with a purpose. 
            It’s not just about design — it’s about understanding your business goals, your audience, 
            and the message you want the world to see.
          </p>

          <p>
            Our creative process begins with discovery. We analyze who your ideal customers are, 
            how they behave online, and what drives them to take action. 
            With this insight, we design a digital experience that speaks directly to them.
          </p>

          <p>
            Whether you’re dreaming of scaling your business globally or simply building a credible 
            online presence that earns trust, a powerful website is your foundation. 
            And when crafted with the right strategy, that dream becomes achievable.
          </p>

          <p>
            Many businesses fade into the background because they settle for average — 
            but the digital market rewards innovation. 
            We build websites that not only look stunning but also perform, engage, and convert.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/40 transition"
          >
            Start Your Website Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
