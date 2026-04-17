import React from "react";
import { Search, BarChart3, TrendingUp } from "lucide-react"; // ✅ Lightweight Lucide icons

export default function WhySEOImportant() {
  return (
    <section
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-10 flex flex-col justify-center items-center text-center overflow-hidden -mt-22"
      id="why-seo-important"
      aria-labelledby="seo-importance-heading"
    >
      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FF] via-[#E8F9FF] to-[#EDE9FE] -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* 🖤 Heading */}
        <h2
          id="seo-importance-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight"
        >
          Why SEO Optimization is So Important for Your Business?
        </h2>

        {/* 💜 Accent Line */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mb-8 mx-auto rounded-full"></div>

        {/* 📈 Content with Icons */}
        <div className="space-y-6 text-left sm:text-center lg:text-left">
          {/* 🔍 Paragraph 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 max-w-3xl mx-auto">
            <div className="bg-[#E0F2FE] p-3 rounded-full shadow-sm">
              <Search className="text-[#2563EB]" size={30} />
            </div>
            <p className="text-slate-700 text-[1.15rem] sm:text-lg lg:text-[1.3rem] leading-relaxed">
              In today’s competitive digital landscape, visibility is everything.
              <span className="font-semibold text-[#2563EB]"> SEO Optimization </span>
              helps your business appear at the top of search results, attracting
              customers who are already looking for your products or services.
            </p>
          </div>

          {/* 📊 Paragraph 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 max-w-3xl mx-auto">
            <div className="bg-[#DBEAFE] p-3 rounded-full shadow-sm">
              <BarChart3 className="text-[#2563EB]" size={30} />
            </div>
            <p className="text-slate-700 text-[1.15rem] sm:text-lg lg:text-[1.3rem] leading-relaxed">
              At <span className="font-semibold text-[#2563EB]">Sky Insights</span>, we
              implement powerful <span className="font-semibold">SEO strategies</span> —
              from keyword research and on-page optimization to technical SEO and
              backlinks — ensuring your brand ranks higher, drives organic traffic,
              and converts visitors into loyal customers.
            </p>
          </div>

          {/* 📈 Paragraph 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 max-w-3xl mx-auto">
            <div className="bg-[#E0E7FF] p-3 rounded-full shadow-sm">
              <TrendingUp className="text-[#2563EB]" size={30} />
            </div>
            <p className="text-slate-700 text-[1.15rem] sm:text-lg lg:text-[1.3rem] leading-relaxed">
              Whether you’re a <span className="font-semibold">new business</span> aiming
              to grow or an <span className="font-semibold">established brand</span>{" "}
              expanding your reach, SEO helps you stay visible, trusted, and one step
              ahead of the competition in search rankings.
            </p>
          </div>
        </div>
      </div>

      {/* ✨ Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-gradient-to-t from-[#60A5FA]/30 to-transparent blur-3xl opacity-50 -z-10"></div>
    </section>
  );
}
