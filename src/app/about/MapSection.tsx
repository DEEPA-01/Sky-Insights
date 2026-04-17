"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#F8F9FA] text-black py-20 px-8 sm:px-10 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* 🔹 Left Side Text */}
        <div>
          <p className="tracking-[6px] text-sm font-medium uppercase text-gray-500 mb-3">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            For any <br /> inquiries <br /> contact us!
          </h2>

          <p className="text-lg text-[#00AEEF] font-semibold mb-2">
            +91-8779290627
          </p>
          <p className="text-lg text-[#00AEEF] font-semibold mb-6">
            info@skyinsights.in
          </p>

          {/* 🔹 Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://wa.me/918779290627"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-[#F0F0F0] p-3 rounded-md hover:bg-[#00AEEF] hover:text-white transition-all duration-300"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://www.instagram.com/skyinsights.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-[#F0F0F0] p-3 rounded-md hover:bg-[#00AEEF] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/skyinsights"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#F0F0F0] p-3 rounded-md hover:bg-[#00AEEF] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* 🔹 Right Side Map — replace src after Google verification */}
        <div className="flex justify-center md:justify-end">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.024219389512!2d72.88615557462605!3d19.075100782120904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62b5c6e1587%3A0x1bbcb81edec6c3b8!2sSky%20Insights%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1731294600000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
