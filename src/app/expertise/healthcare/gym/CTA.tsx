"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function GymCTADarkForm() {
  // ⭐ Form State
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

  // ⭐ Submit Form — Connected to DATABASE
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
          message: formData.message,
          page: "/gym-digital-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch {
      setStatus("❌ Network error. Please try again.");
    }
  };

  return (
    <section
      id="cta-form"
      className="py-16 px-6 md:px-12 flex justify-center items-center bg-white"
    >
      <div className="w-full max-w-3xl">

        {/* ⭐ HEADING OUTSIDE THE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Transform Your Gym’s{" "}
            <span className="text-orange-500">Digital Growth?</span>
          </h2>

          <p className="text-gray-600 text-[1.15rem] sm:text-lg md:text-xl mt-3 max-w-2xl mx-auto">
            Get a powerful marketing strategy designed to bring more members,
            boost visibility, and scale your fitness brand effortlessly.
          </p>
        </motion.div>

        {/* ⭐ SOCIAL ICONS (Moved UPWARD as requested) */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://wa.me/918779290627"
            className="p-3 bg-neutral-200 rounded-full hover:bg-orange-500 transition"
          >
            <FaWhatsapp className="text-black text-xl" />
          </a>

          <a
            href="https://instagram.com/skyinsights"
            className="p-3 bg-neutral-200 rounded-full hover:bg-gradient-to-tr hover:from-orange-500 hover:to-yellow-400 transition"
          >
            <FaInstagram className="text-black text-xl" />
          </a>

          <a
            href="https://linkedin.com/company/skyinsights"
            className="p-3 bg-neutral-200 rounded-full hover:bg-orange-600 transition"
          >
            <FaLinkedinIn className="text-black text-xl" />
          </a>
        </div>

        {/* ⭐ CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 text-white rounded-2xl p-8 md:p-10 shadow-[0_0_25px_rgba(255,115,0,0.4)] relative overflow-hidden"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-400/10 animate-pulse rounded-2xl pointer-events-none" />

          {/* ⭐ FORM START */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

            {/* Name */}
            <div className="flex items-center gap-3 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 focus-within:border-orange-500">
              <User className="w-5 h-5 text-orange-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full text-[1.15rem] bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 focus-within:border-orange-500">
              <Mail className="w-5 h-5 text-orange-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full text-[1.15rem] bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 focus-within:border-orange-500">
              <Phone className="w-5 h-5 text-orange-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
                required
                className="w-full text-[1.15rem] bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 focus-within:border-orange-500">
              <MessageSquare className="w-5 h-5 text-orange-400 mt-1" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                required
                className="w-full text-[1.15rem] bg-transparent text-white placeholder-gray-400 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white 
                         font-semibold text-[1.15rem] py-3 rounded-md shadow-md"
            >
              Send
            </motion.button>

            {/* Form Status */}
            {status && (
              <p className="text-center text-orange-400 mt-2">{status}</p>
            )}
          </form>

        </motion.div>
      </div>
    </section>
  );
}
