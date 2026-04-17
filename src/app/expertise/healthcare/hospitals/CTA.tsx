"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function HospitalCTADark() {
  // ⭐ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ⭐ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ Submit Form (Database Connected)
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
          message: `Hospital/Clinic: ${formData.hospital}\nMessage: ${formData.message}`,
          page: "/hospital-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! Our healthcare marketing expert will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", hospital: "", message: "" });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section id="contact-section" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* ⭐ Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Boost Your Hospital’s{" "}
          <span className="text-cyan-600">Growth & Trust Online</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Let <span className="font-semibold text-cyan-600">Sky Insights</span>{" "}
          help you reach more patients, build trust, and grow digitally with advanced
          healthcare marketing.
        </p>

        {/* ⭐ SOCIAL ICONS (Moved Up) */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://wa.me/918779290627"
            className="p-3 rounded-full bg-black/10 hover:bg-cyan-500 transition"
          >
            <FaWhatsapp className="text-black text-xl" />
          </a>

          <a
            href="https://instagram.com/sky_insights_"
            className="p-3 rounded-full bg-black/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-cyan-500 transition"
          >
            <FaInstagram className="text-black text-xl" />
          </a>

          <a
            href="https://linkedin.com/company/skyinsights"
            className="p-3 rounded-full bg-black/10 hover:bg-blue-600 transition"
          >
            <FaLinkedinIn className="text-black text-xl" />
          </a>
        </div>

        {/* ⭐ CTA FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-[#0B132B] text-white rounded-2xl shadow-[0_0_25px_rgba(0,200,255,0.25)] p-8 md:p-10 relative"
        >
          {/* Glow Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-cyan-600/20 to-transparent blur-2xl rounded-2xl"></div>

          {/* ⭐ FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">

            {/* ROW 1 — Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div className="relative w-full">
                <User className="absolute left-4 top-3.5 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-600 rounded-lg 
                  placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Email */}
              <div className="relative w-full">
                <Mail className="absolute left-4 top-3.5 text-cyan-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-600 rounded-lg 
                  placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

            </div>

            {/* Phone */}
            <div className="relative w-full">
              <Phone className="absolute left-4 top-3.5 text-cyan-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-600 rounded-lg 
                placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Hospital Name */}
            <div className="relative w-full">
              <Building2 className="absolute left-4 top-3.5 text-cyan-400 w-5 h-5" />
              <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                placeholder="Hospital / Clinic Name"
                required
                className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-600 rounded-lg 
                placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Message */}
            <div className="relative w-full">
              <MessageSquare className="absolute left-4 top-4 text-cyan-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Your Message"
                className="w-full pl-12 px-5 py-3 bg-transparent border border-gray-600 rounded-lg 
                placeholder-gray-400 text-white focus:outline-none focus:border-cyan-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition-all"
            >
              Send 
            </button>

            {/* Status message */}
            {status && (
              <p className="text-center text-gray-300 text-sm mt-2">{status}</p>
            )}
          </form>

        </motion.div>
      </div>
    </section>
  );
}
