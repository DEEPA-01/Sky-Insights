// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           subject: `Service: ${form.service} | Phone: ${form.phone}`,
//           message: form.message,
//         }),
//       });

//       const data = await res.json();
//       if (data.ok) {
//         setSuccess(true);
//         setForm({ name: "", email: "", phone: "", service: "", message: "" });
//       } else {
//         alert("Something went wrong!");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative bg-white text-gray-900 py-28 px-6 sm:px-10 md:px-16 lg:px-24">
//       {/* ✅ Section padding ensures it’s below header */}

//       {/* Center Heading */}
//       <div className="text-center mb-16 mt-8">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
//         >
//           Let’s Start a{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400">
//             Conversation
//           </span>
//         </motion.h1>
//         <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//           Get in touch with our team to discuss your next digital project.
//         </p>
//       </div>

//       {/* Two-column Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//         {/* 🔹 Left Side - Dark Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[#0B1221] border border-gray-700 rounded-2xl shadow-lg p-8 sm:p-10 text-white"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block text-gray-300 mb-2 text-sm font-medium">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-300 mb-2 text-sm font-medium">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-gray-300 mb-2 text-sm font-medium">
//                 Your Phone
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             {/* Dropdown */}
//             <div>
//               <label className="block text-gray-300 mb-2 text-sm font-medium">
//                 How Can We Help You?
//               </label>
//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
//               >
//                 <option value="">Select Option</option>
//                 <option value="Website Development">Website Development</option>
//                 <option value="Digital Marketing">Digital Marketing</option>
//                 <option value="Social Media Marketing">Social Media Marketing</option>
//                 <option value="Graphic Design">Graphic Design</option>
//                 <option value="Google Ads">Google Ads</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-gray-300 mb-2 text-sm font-medium">
//                 Your Message
//               </label>
//               <textarea
//                 name="message"
//                 rows={5}
//                 placeholder="Type your message here..."
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <motion.button
//               type="submit"
//               disabled={loading}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </motion.button>

//             {success && (
//               <p className="text-green-400 text-center mt-3 text-sm sm:text-base">
//                 ✅ Message sent successfully! We’ll reach out soon.
//               </p>
//             )}
//           </form>
//         </motion.div>

//         {/* 🔹 Right Side - Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-10 text-gray-800"
//         >
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               <MapPin className="text-pink-500 w-5 h-5" /> Our Address
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               New Milind Nagar, Tanishq Residency <br />
//                C Room no 1404 Premier Gate No 6 <br />
//                 Vidyavihar West Mumbai 400070
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               <Phone className="text-pink-500 w-5 h-5" /> Contact Info
//             </h3>
//             <p className="flex items-center gap-2 text-gray-700 mb-1">
//               <Phone className="text-blue-500 w-5 h-5" />{" "}
//               <a href="tel:+918779290627" className="text-blue-600 hover:underline">
//                 +91 8779 290 627 / +91 8108 570 749
//               </a>
//             </p>
//             <p className="flex items-center gap-2 text-gray-700">
//               <Mail className="text-blue-500 w-5 h-5" />{" "}
//               <a href="mailto:info@skyinsights.in" className="text-blue-600 hover:underline">
//                 info@skyinsights.in
//               </a>
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               🌐 Follow Us
//             </h3>
//             <div className="flex gap-6">
//               <a
//                 href="https://instagram.com/sky_insights_"
//                 target="_blank"
//                 className="text-gray-500 hover:text-pink-500 transition-all"
//               >
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 className="text-gray-500 hover:text-blue-600 transition-all"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a
//                 href="https://wa.me/918779290627"
//                 target="_blank"
//                 className="text-gray-500 hover:text-green-500 transition-all"
//               >
//                 <MessageCircle className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }













"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(""); // clear status on typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message:
            `Service: ${form.service}\n\nMessage: ${form.message}`,
          page: "contact-page",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#0B1221] border border-gray-700 rounded-2xl shadow-lg p-8 sm:p-10 text-white"
    >
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* SERVICE */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">How Can We Help You?</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100"
          >
            <option value="">Select Option</option>
            <option value="Website Development">Website Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-gray-300 mb-2 text-sm font-medium">Your Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Type your message here..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-[#0F172A] border border-gray-700 rounded-md p-3 text-gray-100 placeholder-gray-500 resize-none"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON CENTERED */}
        <div className="flex justify-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 text-white font-semibold py-3 px-10 rounded-lg shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </div>

        {/* STATUS MESSAGE */}
        {status && (
          <p className="text-center text-sm mt-2">
            {status}
          </p>
        )}
      </form>
    </motion.div>
  );
}
