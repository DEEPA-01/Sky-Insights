"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function EducationDigitalMarketingCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institute: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop page refresh

    setStatus("Submitting...");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Institute: ${formData.institute}\nMessage: ${formData.message}`,
          page: "/education-digital-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! Our team will contact you shortly.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          institute: "",
          message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Let’s Grow Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Educational Institute Digitally
          </span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Get a personalized strategy that helps increase visibility, boost
          admissions, and attract more students.
        </p>

        {/* ⭐ SOCIAL ICONS (above the form) */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://wa.me/918779290627"
            target="_blank"
            className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <MessageCircle className="w-6 h-6 text-gray-900" />
          </a>

          <a
            href="https://instagram.com/sky_insights_"
            target="_blank"
            className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <Instagram className="w-6 h-6 text-gray-900" />
          </a>

          <a
            href="https://linkedin.com/company/skyinsights"
            target="_blank"
            className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <Linkedin className="w-6 h-6 text-gray-900" />
          </a>
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            bg-gradient-to-br from-[#003d66] via-[#004f80] to-[#006699]
            text-white border border-white/20 rounded-2xl shadow-2xl
            p-8 md:p-10 max-w-2xl mx-auto space-y-6 text-left
          "
        >
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-black" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 px-4 py-3 bg-white text-gray-900 border border-white/30 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-black" />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-10 px-4 py-3 bg-white text-gray-900 border border-white/30 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-black" />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full pl-10 px-4 py-3 bg-white text-gray-900 border border-white/30 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
          </div>

          {/* Institute Name */}
          <div className="relative">
            <Building2 className="absolute left-3 top-3 w-5 h-5 text-black" />
            <input
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              type="text"
              placeholder="Institute Name"
              className="w-full pl-10 px-4 py-3 bg-white text-gray-900 border border-white/30 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-black" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us how we can help your institute"
              required
              className="w-full pl-10 px-4 py-3 bg-white text-gray-900 border border-white/30 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-600 
              text-white font-semibold rounded-full shadow-lg 
              hover:shadow-cyan-300/40 transition-all"
          >
            Send
          </motion.button>

          {/* Status Message */}
          {status && <p className="text-center text-white mt-2">{status}</p>}
        </motion.form>
      </motion.div>
    </section>
  );
}
