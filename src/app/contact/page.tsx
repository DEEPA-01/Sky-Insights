"use client";

import { useState } from "react";
import ContactForm from "./form";
import FAQ from "./FAQ"; // or "./FAQ" depending on your filename
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  return (
    <section className="w-full bg-white text-gray-900 pt-20 md:pt-24">
      {/* <section className="w-full bg-white text-gray-900 pt-20 md:pt-24"> */}


      {/* PHONE SELECT POPUP (top-level so it sits over everything) */}
      {showPhoneMenu && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-[99999] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Choose phone number"
        >
          <div className="bg-white rounded-xl p-6 w-full max-w-xs text-center shadow-2xl pointer-events-auto">
            <h3 className="text-lg font-semibold mb-4">Choose a number</h3>

            <a
              href="tel:+918779290627"
              className="block bg-[#004C8C] text-white py-2 rounded-lg mb-3 hover:bg-[#00AEEF] transition"
              onTouchStart={() => setShowPhoneMenu(false)}
              onClick={() => setShowPhoneMenu(false)}
            >
              Call +91 87792 90627
            </a>

            <a
              href="tel:+918108570749"
              className="block bg-[#004C8C] text-white py-2 rounded-lg mb-3 hover:bg-[#00AEEF] transition"
              onTouchStart={() => setShowPhoneMenu(false)}
              onClick={() => setShowPhoneMenu(false)}
            >
              Call +91 81085 70749
            </a>

            <button
              onClick={() => setShowPhoneMenu(false)}
              onTouchStart={() => setShowPhoneMenu(false)}
              className="block px-6 bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition mx-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* TOP BANNER */}

      <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px] bg-gradient-to-br from-[#003459] via-[#00508a] to-[#0074b7] flex items-center justify-center overflow-hidden">
        {/* Light blobs */}
        <div className="absolute w-32 h-32 bg-white/10 rounded-full top-8 left-8 blur-xl"></div>
        <div className="absolute w-40 h-40 bg-cyan-300/10 rounded-full bottom-6 right-12 blur-2xl"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Heading */}
        <h1 className="relative text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-center">
          Contact Us
        </h1>
      </div>


      {/* CONTENT */}
      <div className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10 text-gray-800 mt-10 md:mt-16"
          >
            {/* ADDRESS */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="text-blue-600 w-7 h-7" /> Our Office
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                New Milind Nagar, Tanishq Residency <br />
                C Room no 1404 Premier Gate No 6 <br />
                Vidyavihar West, Mumbai 400070
              </p>
            </div>

            {/* PHONE — this is a BUTTON that opens the popup on mobile/desktop */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="text-blue-600 w-7 h-7" /> Contact Info
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                Reach out to us via WhatsApp, Call or Message:
                <br />
                <button
                  type="button"
                  onClick={() => setShowPhoneMenu(true)}
                  onTouchStart={() => setShowPhoneMenu(true)}
                  className="mt-2 font-bold text-[#004C97] underline cursor-pointer inline-block px-1 py-0"
                >
                  +91 87792 90627 / +91 81085 70749
                </button>
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="text-blue-600 w-7 h-7" /> Reach us via Email
              </h3>

              <p className="text-gray-700 text-lg">
                We eagerly await your thoughts.<br />
                Send us your message at:
              </p>

              <p className="mt-2 text-lg font-semibold text-[#004C97]">
                info@skyinsights.in
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ component (optional) */}
      <FAQ />


      {/* FOLLOW US SECTION */} 
      <div className="py-10 flex flex-col items-center gap-5 bg-white"> 
        <h3 className="text-2xl font-bold">Follow Us</h3> 
        <div className="flex gap-8"> <a href="https://wa.me/918779290627" target="_blank"> 
        <MessageCircle className="w-10 h-10 text-green-600 hover:scale-110 transition" />
         </a> <a href="https://instagram.com/sky_insights_" target="_blank"> 
         <Instagram className="w-10 h-10 text-pink-500 hover:scale-110 transition" /> 
         </a> <a href="https://linkedin.com/company/skyinsights" target="_blank">
          <Linkedin className="w-10 h-10 text-blue-600 hover:scale-110 transition" />
           </a> 
           </div>
           </div>
    </section>
  );
}
