"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiUser, HiMail, HiPhone, HiOfficeBuilding } from "react-icons/hi";

export default function EmailMarketingCTAForm() {
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
          company: formData.company,
          message: formData.message,
          page: "/email-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
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
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left px-2">
          <h2 className="text-[1.9rem] sm:text-3xl md:text-4xl font-extrabold text-[#0f0f0f] leading-tight mb-4">
            Sky Insights – Boost Your{" "}
            <span className="text-[#00B4D8]">Email Marketing Performance</span>
          </h2>

          <p className="text-gray-700 text-[1.05rem] sm:text-lg leading-relaxed mb-6 max-w-lg">
            Increase your <span className="text-[#00B4D8] font-semibold">open rates</span>, improve{" "}
            <span className="text-[#00B4D8] font-semibold">reply rates</span>,
            and build long-term customer relationships using smart email automation.
          </p>

          {/* SOCIAL ICONS - ORDER FIXED */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://wa.me/918779290627"
              target="_blank"
              className="text-[#0f0f0f] text-3xl hover:text-[#25D366] transition-all"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/sky_insights_"
              target="_blank"
              className="text-[#0f0f0f] text-3xl hover:text-[#E1306C] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/skyinsights"
              target="_blank"
              className="text-[#0f0f0f] text-3xl hover:text-[#0A66C2] transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111827]/80 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_20px_rgba(0,180,216,0.25)] border border-[#00B4D8]/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* NAME */}
            <div className="flex items-center gap-3 bg-[#1F2937] px-4 py-3 rounded-md text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-[#1F2937] px-4 py-3 rounded-md text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiMail className="text-[#00B4D8] text-xl" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 bg-[#1F2937] px-4 py-3 rounded-md text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiPhone className="text-[#00B4D8] text-xl" />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* COMPANY / WEBSITE */}
            <div className="flex items-center gap-3 bg-[#1F2937] px-4 py-3 rounded-md text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiOfficeBuilding className="text-[#00B4D8] text-xl" />
              <input
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Website Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* MESSAGE BOX */}
            <div className="flex items-start gap-3 bg-[#1F2937] px-4 py-3 rounded-md text-white border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiOfficeBuilding className="text-[#00B4D8] text-xl mt-1" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_22px_rgba(0,180,216,0.6)] transition-all text-lg"
            >
              Send
            </button>

            {status && (
              <p className="text-gray-300 text-sm text-center mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
