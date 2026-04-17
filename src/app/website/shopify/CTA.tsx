"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function ShopifyCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
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
          message: `Business Type: ${formData.businessType}\nMessage: ${formData.message}`,
          page: "/shopify-development",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
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
    <section className="relative py-20 px-6 md:px-12 bg-white">

      

      {/* HEADING */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Build Your Shopify Store with{" "}
          <span className="text-[#00B4D8]">Sky Insights</span>
        </h2>

        <p className="text-[1.1rem] text-gray-600 mt-3">
          Share your requirements — our Shopify experts will contact you.
        </p>
        {/* 🔵 SOCIAL ICONS ABOVE HEADING */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://wa.me/918779290627"
          target="_blank"
          className="flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full hover:bg-blue-200 transition"
        >
          <MessageCircle className="w-6 h-6 text-[#0077B6]" />
        </a>

        <a
          href="https://www.instagram.com/sky_insights_"
          target="_blank"
          className="flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full hover:bg-blue-200 transition"
        >
          <Instagram className="w-6 h-6 text-[#0077B6]" />
        </a>

        <a
          href="https://www.linkedin.com/company/skyinsights"
          target="_blank"
          className="flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full hover:bg-blue-200 transition"
        >
          <Linkedin className="w-6 h-6 text-[#0077B6]" />
        </a>
      </div>
      </div>

      {/* 🔵 DEEP BLUE GRADIENT FORM */}
      <div
        className="
          max-w-3xl mx-auto
          bg-[#0f172a] text-white 
          rounded-2xl shadow-2xl 
          p-8 md:p-10 
          border border-blue-500/20
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-white/50" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 border outline-none"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-white/50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 border outline-none"
                required
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-white/50" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 border outline-none"
              required
            />
          </div>

          {/* BUSINESS TYPE */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 w-5 h-5 text-white/50" />
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 border outline-none"
              required
            >
              <option value="">Select Business Type</option>
              <option>Fashion & Clothing</option>
              <option>Electronics</option>
              <option>Home & Decor</option>
              <option>Beauty & Skin Care</option>
              <option>Fitness & Nutrition</option>
              <option>Other</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/50" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your Shopify requirements..."
              rows={3}
              className="w-full rounded-lg pl-10 px-4 py-3 bg-white text-gray-900 border outline-none"
            />
          </div>

          {/* SUBMIT BUTTON — CENTERED */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r
              from-cyan-400 to-blue-600 px-10 py-3 rounded-full font-semibold 
              text-white shadow-lg hover:shadow-cyan-300/40 transition"
            >
              <Send className="w-5 h-5" />
              Submit Details
            </button>
          </div>

          {/* STATUS */}
          {status && (
            <p className="text-center text-white/90 text-sm mt-3">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
