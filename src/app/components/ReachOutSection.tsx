"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, User, Building2, FileText } from "lucide-react";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  type ErrorType = {
  name?: string;
  email?: string;
  phone?: string;
};

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear validation error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ---------------- FRONTEND VALIDATION ----------------
// ---------------- FRONTEND VALIDATION ----------------
const validateForm = () => {
  const newErrors: ErrorType = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address.";
  }

  if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Only 10 digits are allowed for phone number.";
  }

  // FIXED ↓↓↓
  setErrors({
    name: newErrors.name || "",
    email: newErrors.email || "",
    phone: newErrors.phone || "",
  });

  return Object.keys(newErrors).length === 0;
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
          page: window.location.pathname,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Thank you! We will get back to you shortly.");
        setFormData({
          name: "",
          phone: "",
          company: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`⚠️ ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to submit. Try again later.");
    }
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-start -mt-10">
          <Image
            src="/contact.png"
            alt="Reach Out Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-black mb-2">Reach out to us</h2>
          <p className="text-gray-600 mb-6">
            Let our marketing experts help you elevate your business.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#00152e] to-[#012a52]"
          >
            {/* NAME + PHONE */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* NAME */}
              <div className="flex flex-col text-white">
                <label className="text-sm mb-1">Name</label>
                <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
                  <User className="text-white mr-2" size={18} />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full py-2 bg-transparent text-white placeholder-gray-300 outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-300 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="flex flex-col text-white">
                <label className="text-sm mb-1">Mobile Number</label>

                <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
                  <Phone className="text-white mr-2" size={18} />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full py-2 bg-transparent text-white placeholder-gray-300 outline-none"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* COMPANY + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* COMPANY */}
              <div className="flex flex-col text-white">
                <label className="text-sm mb-1">Company / Organization</label>
                <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
                  <Building2 className="text-white mr-2" size={18} />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter company name"
                    className="w-full py-2 bg-transparent text-white placeholder-gray-300 outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col text-white">
                <label className="text-sm mb-1">Email</label>
                <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
                  <Mail className="text-white mr-2" size={18} />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full py-2 bg-transparent text-white placeholder-gray-300 outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col text-white">
              <label className="text-sm mb-1">How can we help you?</label>
              <div className="relative bg-white/10 border border-white/20 rounded-md">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent text-white appearance-none outline-none"
                >
                  <option value="" className="text-black">Select Option</option>
                  <option className="text-black" value="Website Development">Website Development</option>
                  <option className="text-black" value="Digital Marketing">Digital Marketing</option>
                  <option className="text-black" value="Social Media Marketing">Social Media Marketing</option>
                  <option className="text-black" value="Graphic Design">Graphic Design</option>
                  <option className="text-black" value="Google Ads">Google Ads</option>
                </select>
                <span className="absolute right-3 top-3 text-white">▼</span>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col text-white">
              <label className="text-sm mb-1">Message</label>
              <div className="flex items-start bg-white/10 border border-white/20 rounded-md px-3">
                <FileText className="text-white mr-2 mt-3" size={18} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full py-2 bg-transparent text-white placeholder-gray-300 outline-none resize-none"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 bg-white text-[#004C97] font-bold py-2 rounded-md hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>

            {status && <p className="text-center text-sm text-white mt-3">{status}</p>}

            {/* FOLLOW US SECTION */}
            <div className="text-center mt-6">
              <p className="text-white text-sm font-semibold mb-3">Follow Us:</p>

              <div className="flex justify-center gap-5">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918779290627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sky_insights_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/skyinsights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition duration-300"
                >
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
