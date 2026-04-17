"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiUser, HiMail, HiPhone, HiOfficeBuilding } from "react-icons/hi";

export default function SEOCTAFormModern() {
  return (
    <section className="relative w-full flex justify-center items-center py-16 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Section */}
        <div className="text-center md:text-left px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f0f0f] leading-tight mb-4">
            Boost Your Website’s Growth with{" "}
            <span className="text-[#00B4D8]">SEO Optimization</span> 
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
            Let <span className="text-[#00B4D8] font-semibold">Sky Insights</span>{" "}
            help your brand achieve higher rankings, more visibility, and steady
            organic growth with smart SEO strategies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a
              href="https://www.linkedin.com/company/skyinsights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#0A66C2] transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/skyinsights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#E1306C] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918779290627"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#25D366] transition-all"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="bg-[#111827]/80 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_20px_rgba(0,180,216,0.3)] border border-[#00B4D8]/20"
        >
          <form className="flex flex-col gap-5">
            {/* Fields */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiMail className="text-[#00B4D8] text-xl" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiPhone className="text-[#00B4D8] text-xl" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiOfficeBuilding className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                placeholder="Company / Website Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_20px_rgba(0,180,216,0.7)] transition-all"
            >
              Send
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
