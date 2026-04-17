"use client";

import { motion } from "framer-motion";

export default function HospitalIntro() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug"
        >
          Transform Your Hospital’s Growth with Digital Marketing
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
        >
          Hospitals and clinics today rely on digital marketing to reach more patients, 
          enhance their visibility, and strengthen their reputation. With the growing competition 
          in the healthcare sector, it’s no longer enough to provide excellent care — 
          you also need a strategic online presence that connects you with people actively 
          seeking trusted healthcare services.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
        >
          At <span className="font-semibold text-blue-600">Sky Insights</span>, we help hospitals 
          and healthcare organizations build strong, credible brands through 
          data-driven marketing strategies. From patient awareness campaigns 
          and local SEO to social media and reputation management, 
          we craft tailored plans that drive measurable growth and patient trust.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          In a fast-evolving healthcare landscape, 
          our <span className="font-semibold text-blue-600">Hospital Digital Marketing Services</span> 
          ensure your organization stays ahead — by reaching the right audience, 
          increasing patient engagement, and delivering results that truly matter.
        </motion.p>

      </div>
    </section>
  );
}
