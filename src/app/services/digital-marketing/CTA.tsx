"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiUser, HiMail, HiPhone, HiChatAlt2, HiOfficeBuilding } from "react-icons/hi";

export default function DigitalMarketingCTA() {
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
          message: formData.message,
          page: "/digital-marketing",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will reach out soon.");
        setFormData({ name: "", email: "", phone: "", company: "" ,message: "" });
      } else {
        setStatus("⚠️ Something went wrong. Try again.");
      }
    } catch {
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <section className="relative w-full flex justify-center items-center py-16 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >

        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f0f0f] leading-tight mb-4">
            Grow Your Business with  
            <span className="text-[#00B4D8]"> Digital Marketing </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Let <span className="text-[#00B4D8] font-semibold">Sky Insights</span> 
            boost your online presence with powerful digital strategies.
          </p>

          {/* SOCIAL ICONS */}
<div className="flex justify-center md:justify-start gap-5 mt-4">

  {/* WhatsApp */}
  <a
    href="https://wa.me/918779290627"
    target="_blank"
    className="text-[#0f0f0f] text-2xl hover:text-[#25D366] transition-all"
  >
    <FaWhatsapp />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/sky_insights_"
    target="_blank"
    className="text-[#0f0f0f] text-2xl hover:text-[#E1306C] transition-all"
  >
    <FaInstagram />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/skyinsights"
    target="_blank"
    className="text-[#0f0f0f] text-2xl hover:text-[#0A66C2] transition-all"
  >
    <FaLinkedinIn />
  </a>

</div>          
          </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111827]/80 backdrop-blur-lg p-8 rounded-2xl shadow-[0_0_20px_rgba(0,180,216,0.3)] border border-[#00B4D8]/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* NAME */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiUser className="text-[#00B4D8] text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiMail className="text-[#00B4D8] text-xl" />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiPhone className="text-[#00B4D8] text-xl" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleChange}
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
            {/* MESSAGE */}
            <div className="flex items-start gap-3 bg-[#1F2937] rounded-md px-4 py-3 border border-[#00B4D8]/20 focus-within:border-[#00B4D8] transition-all">
              <HiChatAlt2 className="text-[#00B4D8] text-xl mt-1" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                required
                className="bg-transparent outline-none w-full text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold py-3 rounded-md hover:shadow-[0_0_15px_rgba(0,180,216,0.7)]"
            >
              Submit
            </motion.button>

            {status && (
              <p className="text-center text-gray-300 mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
