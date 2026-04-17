"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { HiUser, HiMail, HiPhone, HiOfficeBuilding, HiChatAlt2 } from "react-icons/hi";

export default function SEOCTAFormModern() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.company, // using company field as message or details
          page: "/seo-optimization",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch {
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <section className="relative w-full flex justify-center items-center py-16 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT TEXT SECTION */}
        <div className="text-center md:text-left px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f0f0f] leading-tight mb-4">
            Boost Your Website’s Growth with{" "}
            <span className="text-[#00B4D8]">SEO Optimization</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
            Let <span className="text-[#00B4D8] font-semibold">Sky Insights</span>{" "}
            help your brand achieve higher rankings, more visibility, and steady organic growth
            with smart SEO strategies.
          </p>

          {/* SOCIAL ICONS */}
          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918779290627"
              target="_blank"
              className="text-[#0f0f0f] text-2xl hover:text-[#25D366] transition-all"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sky_insights_"
              target="_blank"
              className="text-[#0f0f0f] text-2xl hover:text-[#E1306C] transition-all"
            >
              <FaInstagram />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/skyinsights"
              target="_blank"
              className="text-[#0f0f0f] text-2xl hover:text-[#0A66C2] transition-all"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111827]/80 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_20px_rgba(0,180,216,0.3)] border border-[#00B4D8]/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* FULL NAME */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiMail className="text-[#00B4D8] text-xl" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiPhone className="text-[#00B4D8] text-xl" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* COMPANY / WEBSITE */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiOfficeBuilding className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Website Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
              {/* MESSAGE */}
                        <div className="flex items-start gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
                          <HiChatAlt2 className="text-[#00B4D8] text-xl mt-1" />
                          <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            placeholder="Your Message"
                            onChange={handleChange}
                            required
                            className="bg-transparent outline-none w-full text-white placeholder-gray-400 resize-none"
                          ></textarea>
                        </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_20px_rgba(0,180,216,0.7)] transition-all"
            >
              Send
            </button>

            {status && (
              <p className="text-center text-gray-300 text-sm mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
