"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function RealEstateCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ SUBMIT FORM — CONNECTED TO DATABASE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop refresh
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Real Estate Lead:\n${formData.message}`,
          page: "/real-estate-marketing",
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
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section className="-mt-16 bg-white py-16 px-6 md:px-12 flex flex-col justify-center items-center">
      {/* ⭐ Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Grow Your{" "}
          <span className="text-blue-600">Real Estate Business</span> Online
        </h2>

        <p className="text-gray-700 text-base md:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Let <span className="font-semibold text-blue-600">Sky Insights</span>{" "}
          help you generate high-quality property leads through strategic digital
          marketing.
        </p>
      </div>

      {/* ⭐ Social Icons Under Heading */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <a
          href="https://wa.me/918779290627"
          target="_blank"
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition"
        >
          <MessageCircle className="w-6 h-6 text-gray-900" />
        </a>

        <a
          href="https://www.instagram.com/sky_insights_"
          target="_blank"
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition"
        >
          <Instagram className="w-6 h-6 text-gray-900" />
        </a>

        <a
          href="https://www.linkedin.com/company/skyinsights"
          target="_blank"
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition"
        >
          <Linkedin className="w-6 h-6 text-gray-900" />
        </a>
      </div>

      {/* ⭐ Gradient Form */}
      <div className="relative max-w-3xl w-full bg-gradient-to-br from-[#0a0f1f] via-[#0d1430] to-[#111a3a] text-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-blue-500/20 blur-2xl rounded-full"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-cyan-500/20 blur-2xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center items-center"
          >
            {/* ⭐ Row 1 — Name + Email */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <div className="relative flex-1">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 px-4 py-2.5 rounded-lg bg-white/10 text-gray-100 placeholder-gray-400
                  border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div className="relative flex-1">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 px-4 py-2.5 rounded-lg bg-white/10 text-gray-100 placeholder-gray-400
                  border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* ⭐ Phone */}
            <div className="relative w-full">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-300" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full pl-10 px-4 py-2.5 rounded-lg bg-white/10 text-gray-100 placeholder-gray-400
                border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>

            {/* ⭐ Message */}
            <div className="relative w-full">
              <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-300" />
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full pl-10 px-4 py-3 rounded-lg bg-white/10 text-gray-100 placeholder-gray-400
                border border-white/10 focus:border-blue-500 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* ⭐ Submit */}
            <button
              type="submit"
              className="w-full sm:w-auto mt-2 px-8 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white font-semibold shadow-md hover:shadow-cyan-400/30 transition-all"
            >
              Send
            </button>

            {/* ⭐ Status Message */}
            {status && (
              <p className="text-center text-white text-sm mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
