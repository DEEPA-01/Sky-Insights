"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function JewelleryCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ⭐ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ Handle Form Submit (Connect To DB)
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
          message: `Jewellery Inquiry:\n${formData.message}`,
          page: "/jewellery-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! Our jewellery marketing expert will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch {
      setStatus("❌ Network error. Please try later.");
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* ⭐ Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Let’s Make Your{" "}
          <span className="text-yellow-600">Jewellery Brand Shine Online</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Partner with <span className="font-semibold text-yellow-600">Sky Insights</span>{" "}
          to elevate your jewellery brand with high-end creative digital marketing.
        </p>

        {/* ⭐ SOCIAL ICONS (Moved Up) */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://wa.me/918779290627"
            target="_blank"
            className="p-3 rounded-full bg-black/10 hover:bg-yellow-500 transition"
          >
            <FaWhatsapp className="text-black text-xl" />
          </a>

          <a
            href="https://instagram.com/skyinsights"
            target="_blank"
            className="p-3 rounded-full bg-black/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 transition"
          >
            <FaInstagram className="text-black text-xl" />
          </a>

          <a
            href="https://linkedin.com/company/skyinsights"
            target="_blank"
            className="p-3 rounded-full bg-black/10 hover:bg-blue-600 transition"
          >
            <FaLinkedinIn className="text-black text-xl" />
          </a>
        </div>

        {/* ⭐ CTA FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-[#0b0b0b] text-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div className="relative w-full">
                <User className="absolute left-4 top-3.5 text-gray-300 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-700 rounded-lg placeholder-gray-400 
                  focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* Email */}
              <div className="relative w-full">
                <Mail className="absolute left-4 top-3.5 text-gray-300 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-700 rounded-lg placeholder-gray-400 
                  focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

            </div>

            {/* Phone */}
            <div className="relative w-full">
              <Phone className="absolute left-4 top-3.5 text-gray-300 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-700 rounded-lg 
                placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition"
              />
            </div>

            {/* Message */}
            <div className="relative w-full">
              <MessageSquare className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your jewellery business..."
                required
                className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-700 rounded-lg 
                placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 
              text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-yellow-400/40 transition-all"
            >
              Send
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
