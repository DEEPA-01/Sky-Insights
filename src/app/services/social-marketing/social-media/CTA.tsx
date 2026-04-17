"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiUser, HiMail, HiPhone } from "react-icons/hi";
import { FaBullhorn } from "react-icons/fa";

export default function SocialMediaCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
          message: `Service: ${formData.service}\nMessage: ${formData.message}`,
          page: "/social-media-marketing",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
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
    <section className="relative bg-white text-[#052640] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[#00B8FF]/10 to-[#0077B6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-tl from-[#00B8FF]/10 to-[#0077B6]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-60"></div>
      </div>

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10"
      >
        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Supercharge Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B8FF]">
              Social Media Presence
            </span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Ready to transform your brand’s digital footprint?  
            Let <span className="text-[#0077B6] font-semibold">Sky Insights</span> help you build engagement,
            attract loyal audiences, and grow faster through strategic social media marketing.
          </p>

          {/* CALL NOW BUTTON */}
          <a
            href="tel:+918779290627"
            className="mt-6 inline-block bg-[#0077B6] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#005f8e] transition-all"
          >
            📞 Call Now: +91 87792 90627
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6">
            <a
              href="https://wa.me/918779290627"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#25D366] transition-all"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/skyinsights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#E1306C] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/skyinsights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] text-2xl hover:text-[#0A66C2] transition-all"
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
          className="bg-[#111827]/80 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_25px_rgba(0,180,216,0.25)] border border-[#00B4D8]/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Full Name */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="bg-transparent w-full outline-none placeholder-gray-400 text-white"
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
                className="bg-transparent w-full outline-none placeholder-gray-400 text-white"
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
                className="bg-transparent w-full outline-none placeholder-gray-400 text-white"
              />
            </div>

            {/* Service Type */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8]">
              <FaBullhorn className="text-[#00B4D8] text-xl" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white"
              >
                <option value="" className="text-black">Select Service</option>
                <option className="text-black">Social Media Management</option>
                <option className="text-black">Paid Ad Campaigns</option>
                <option className="text-black">Content Creation</option>
                <option className="text-black">Influencer Marketing</option>
                <option className="text-black">Other</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your goals..."
              className="bg-[#1F2937] text-white placeholder-gray-400 rounded-md px-4 py-3 border border-[#00B4D8]/20 focus:outline-none resize-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_22px_rgba(0,180,216,0.6)] transition-all text-lg"
            >
            Send            
           </button>

            {status && <p className="text-gray-200 text-sm">{status}</p>}
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 95C906.67 75 823.78 45 739.74 31.43C654.55 15.45 
               568.81 17.07 484.75 32.86C403.55 47.98 324.08 76.84 
               243.1 92.9C163.39 108.67 82.08 111.13 0 
               93.52V120H1200V110.8C1131.23 117.22 
               1059.75 114.33 985.66 95Z"
            fill="#F8FAFC"
          ></path>
        </svg>
      </div>
    </section>
  );
}
