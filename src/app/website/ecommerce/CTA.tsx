"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function CustomWebsiteCenteredCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          message: `Website Type: ${formData.websiteType}\nMessage: ${formData.message}`,
          page: "/custom-website",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! Our team will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          websiteType: "",
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
    <section className="relative w-full py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a]"
        >
          Ready to Build Your Dream E-Commerce Store?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto mt-3"
        >
          Fill in your details and our web development team will contact you shortly.
        </motion.p>
      </div>

      {/* Social Links */}
      <div className="max-w-xl mx-auto flex justify-center gap-6 mb-6">
        <a
          href="https://wa.me/918779290627"
          target="_blank"
          className="text-[#0f0f0f] text-3xl hover:text-[#25D366] transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/sky_insights_"
          target="_blank"
          className="text-[#0f0f0f] text-3xl hover:text-[#E1306C] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/skyinsights"
          target="_blank"
          className="text-[#0f0f0f] text-3xl hover:text-[#0A66C2] transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl border border-blue-500/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name */}
            <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-3 rounded-lg border border-blue-500/20">
              <HiUser className="text-blue-400 text-xl" />
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

            {/* Email */}
            <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-3 rounded-lg border border-blue-500/20">
              <HiMail className="text-blue-400 text-xl" />
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

            {/* Phone */}
            <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-3 rounded-lg border border-blue-500/20">
              <HiPhone className="text-blue-400 text-xl" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* Website Type (DROPDOWN ADDED HERE) */}
            <select
  name="websiteType"
  value={formData.websiteType}
  onChange={handleChange}
  required
  className="w-full rounded-lg px-4 py-3 text-white bg-[#1e293b] border border-blue-500/20 outline-none"
>
  <option value="" className="text-white bg-[#1e293b]">
    Select Website Type
  </option>
  <option className="text-white bg-[#1e293b]">E-Commerce Website</option>
  <option className="text-white bg-[#1e293b]">Portfolio Website</option>
  <option className="text-white bg-[#1e293b]">Business / Corporate Website</option>
  <option className="text-white bg-[#1e293b]">Landing Page</option>
  <option className="text-white bg-[#1e293b]">Custom Web App</option>
  <option className="text-white bg-[#1e293b]">Other</option>
</select>


            {/* Message */}
            <div className="flex items-start gap-3 bg-[#1e293b] px-4 py-3 rounded-lg border border-blue-500/20">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              className="bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-semibold hover:shadow-cyan-400/40 transition"
            >
              Submit Details
            </button>

            {status && (
              <p className="text-center text-gray-300 text-sm mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>

    </section>
  );
}
