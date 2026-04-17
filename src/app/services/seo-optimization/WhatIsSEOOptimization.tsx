"use client";
import React from "react";
import Image from "next/image";

export default function WhatIsSEOOptimization() {
  return (
    <section
      className="w-full bg-white py-16 md:py-20"
      id="what-is-seo-optimization"
      aria-labelledby="seo-optimization-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 🟦 Text Column */}
          <div className="order-1 lg:order-1">
            <h2
              id="seo-optimization-heading"
              className="text-3xl sm:text-4xl lg:text-[2rem] font-extrabold text-[#0072BC] leading-tight"
            >
              What is SEO Optimization?
            </h2>

            {/* 🔹 Animated Gradient Underline */}
            <div className="relative w-40 sm:w-52 h-1 mt-3 mb-6 overflow-hidden rounded">
              <div className="absolute inset-0 gradient-bar"></div>
            </div>

            <p className="text-black text-[1.15rem] sm:text-lg lg:text-[1.25rem] leading-relaxed mb-6 max-w-2xl">
              SEO Optimization (Search Engine Optimization) is the practice of
              enhancing your website’s structure, content, and performance to
              achieve higher visibility on search engines like Google. It helps
              your business reach the right audience organically — without paid
              ads — by making your site more discoverable, faster, and
              user-friendly.
            </p>

            <ul className="text-slate-900 list-disc pl-5 space-y-2 max-w-xl text-[1.15rem] sm:text-base lg:text-[1.2rem]">
              <li>
                <strong>Keyword Research:</strong> Identifying the most relevant
                and high-performing search terms your audience uses.
              </li>
              <li>
                <strong>On-Page Optimization:</strong> Enhancing titles, meta
                tags, headings, and website content for better search relevance.
              </li>
              <li>
                <strong>Technical SEO:</strong> Improving site speed, mobile
                performance, and crawlability for better indexation.
              </li>
              <li>
                <strong>Off-Page SEO:</strong> Building backlinks and authority
                through quality content and trusted sources.
              </li>
              <li>
                <strong>Analytics & Monitoring:</strong> Tracking keyword
                rankings, traffic, and conversions to measure success.
              </li>
            </ul>
          </div>

          {/* 🟩 Image Column */}
          <div className="order-2 lg:order-2">
            <Image
              src="/seo.png"
              alt="Illustration explaining SEO Optimization process"
              width={700}
              height={475}
              className="max-w-[90%] sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* ✅ Gradient Animation Keyframes */}
      <style jsx>{`
        .gradient-bar {
          background: linear-gradient(90deg, #00aeef, #0072bc, #00aeef);
          background-size: 200% 100%;
          animation: gradientMove 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(0, 114, 188, 0.4);
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
