"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="bg-gradient-to-b from-[#152538] via-[#050a14] to-black text-gray-300 py-16 px-6 sm:px-12 lg:px-20">

      {/* GRID */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16 text-center sm:text-left"> */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-x-6 lg:gap-x-10 xl:gap-x-12 gap-y-12 text-center sm:text-left">


          {/* BRAND + LOGO */}
          <div className="flex flex-col items-center sm:items-start mt-[-70px]">

            <div>
              <Image
                src="/footerr.png"
                alt="Sky Insights Logo"
                width={190}
                height={210}
                className="object-contain mb-4"
              />
            </div>

            <div className="mt-[-72px]">
              <p className="text-sm leading-relaxed text-center sm:text-left max-w-xs">
                Transforming ideas into impactful digital experiences.
                We craft websites that inspire, engage, and perform.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start gap-4 text-xl mt-5">
              <Link
                href="https://wa.me/918779290627"
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <FaWhatsapp />
              </Link>

              <Link
                href="https://instagram.com/sky_insights_"
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://linkedin.com/company/yourid"
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 mt-3">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 inline-block pb-1">
              Our Services
            </h3>
            <ul className="space-y-2 mt-3">
              <li><Link href="/services/seo-optimization" className="hover:text-blue-400">SEO Optimization</Link></li>
              <li><Link href="/website/custom" className="hover:text-blue-400">Website Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-blue-400">Digital Marketing</Link></li>
              <li><Link href="/services/social-marketing/social-media" className="hover:text-blue-400">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="space-y-2">

            <h2 className="text-xl font-semibold text-white">Subscribe</h2>
            <div className="w-12 border-b border-gray-400"></div>

            <p className="text-white/80 max-w-sm">
              Don’t miss our future updates! Get subscribed now!
            </p>

            {/* FORM (FIXED RESPONSIVE) */}
            <form
              className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 mt-3 w-full"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem("email") as HTMLInputElement;
                const email = emailInput.value;

                await fetch(
                  "https://script.google.com/macros/s/AKfycbzPT9BFO9I5mYXH_MP2PXdO_iguWbWn4ErqDDnDOL50Ac2OR4MeGOBPpgT-OKq5Ev5n/exec",
                  {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                  }
                );

                form.reset();
                alert("Subscribed Successfully!");
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 py-3 w-full rounded-md 
              bg-white text-gray-800 border border-gray-600 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              hover:opacity-90 px-6 py-3 rounded-md text-white font-semibold whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* HR LINE (Moved Lower) */}
        <div className="border-t border-gray-700 w-full max-w-7xl mx-auto mt-24"></div>

        {/* BOTTOM BAR */}
        <div className="text-center text-sm text-gray-400 mt-6">
          © {year ?? new Date().getFullYear()} Sky Insights. All rights reserved.
        </div>

        <div className="flex justify-center gap-4 mt-2 text-sm">
          <Link href="/termscondition" className="hover:text-blue-400">Terms & Conditions</Link>

          <span className="border-l border-gray-500 h-4"></span>

          <Link href="/privacypolicy" className="hover:text-blue-400">Privacy Policy</Link>

          {/* <span className="border-l border-gray-500 h-4"></span> */}

          {/* <Link href="/cookies" className="hover:text-blue-400">Cookie Policy</Link> */}
        </div>
    </footer>
  );
}
