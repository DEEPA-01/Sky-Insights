"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function HotelDigitalMarketingCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh

    setStatus("Submitting...");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Hotel: ${formData.hotel}\nMessage: ${formData.message}`,
          page: "/hotel-digital-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          hotel: "",
          message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">

      {/* Decorative Gradient Background */}
      <div className="absolute top-[-100px] left-[-80px] w-[350px] h-[350px] bg-cyan-100/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-blue-100/40 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
          Let’s Elevate Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Hotel’s Digital Presence
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Let’s attract more guests and increase bookings effortlessly.
        </p>

        {/* ⭐ Social Icons (OUTSIDE FORM) */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://wa.me/918779290627"
            target="_blank"
            className="bg-black/5 hover:bg-black/10 p-3 rounded-full transition"
          >
            <MessageCircle className="w-7 h-7 text-black" />
          </a>

          <a
            href="https://instagram.com/skyinsights"
            target="_blank"
            className="bg-black/5 hover:bg-black/10 p-3 rounded-full transition"
          >
            <Instagram className="w-7 h-7 text-black" />
          </a>

          <a
            href="https://linkedin.com/company/skyinsights"
            target="_blank"
            className="bg-black/5 hover:bg-black/10 p-3 rounded-full transition"
          >
            <Linkedin className="w-7 h-7 text-black" />
          </a>
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            bg-gradient-to-br from-[#004c6d] via-[#005f85] to-[#00739e]
            border border-white/20 shadow-xl rounded-2xl
            p-8 max-w-2xl mx-auto text-white
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Name */}
              <div className="relative w-full">
                <User className="absolute left-3 top-3 text-black w-5 h-5" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900"
                />
              </div>

              {/* Email */}
              <div className="relative w-full">
                <Mail className="absolute left-3 top-3 text-black w-5 h-5" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-black w-5 h-5" />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900"
              />
            </div>

            {/* Hotel */}
            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-black w-5 h-5" />
              <input
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                placeholder="Hotel / Resort Name"
                className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-black w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your goals..."
                required
                className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-10 py-3 rounded-full shadow-md w-full sm:w-auto mx-auto"
            >
              Send
            </motion.button>

            {/* Status Message */}
            {status && (
              <p className="text-center text-white mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
