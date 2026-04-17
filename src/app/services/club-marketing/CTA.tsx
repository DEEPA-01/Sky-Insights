"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiUser, HiMail, HiPhone, HiOfficeBuilding, HiChat } from "react-icons/hi";

export default function ClubMarketingCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clubType: "",
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
          message:
            `Club Type: ${formData.clubType}\nMessage: ${formData.message}`,
          page: "/club-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will get back to you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          clubType: "",
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
          <h2 className="text-[1.85rem] sm:text-3xl md:text-4xl font-extrabold text-[#0f0f0f] leading-tight mb-4">
            Sky Insights – Power Your{" "}
            <span className="text-[#00B4D8]">Club Marketing Growth</span>
          </h2>

          <p className="text-gray-700 text-[1.1rem] sm:text-lg leading-relaxed mb-6 max-w-lg">
            Grow memberships, increase engagement, and build a strong digital
            community with{" "}
            <span className="text-[#00B4D8] font-semibold]">
              data-driven club marketing strategies
            </span>.
          </p>

          {/* SOCIAL ICONS */}
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
            {/* Name */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiMail className="text-[#00B4D8] text-xl" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiPhone className="text-[#00B4D8] text-xl" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Club Type */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiOfficeBuilding className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="clubType"
                value={formData.clubType}
                onChange={handleChange}
                placeholder="Type of Club (Fitness, Lifestyle, Nightlife)"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiChat className="text-[#00B4D8] text-xl mt-1" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_22px_rgba(0,180,216,0.6)] transition-all"
            >
             Send
            </button>

            {status && (
              <p className="text-gray-300 text-sm mt-2 text-center">{status}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
