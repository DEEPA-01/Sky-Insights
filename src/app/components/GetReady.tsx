"use client";
import {
  ArrowRight,
  Smartphone,
  Monitor,
  Search,
  MessageCircle,
} from "lucide-react";

export default function BenefitsSection() {
  return (
    <>
      {/* ✅ Horizontal Flow Section with Vertical Items */}
      <section className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 py-10 px-6 bg-white text-center">

        {/* 🌟 Get Ready For */}
        <div className="flex items-center justify-center gap-2 text-white font-semibold text-[1.05rem] sm:text-lg tracking-wide mb-6 sm:mb-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#8B0000] via-[#660000] to-[#1A0000] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
          <span>Get Ready For</span>
          <ArrowRight className="w-5 h-5 text-white" />
        </div>

        {/* 🔹 Benefit Icons + Text with Arrows */}
        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 w-full sm:w-auto">
          {[
            { icon: Smartphone, title: "More Audience Engagement" },
            { icon: Monitor, title: "Stronger Online Reputation" },
            { icon: Search, title: "Higher Search Rankings" },
            { icon: MessageCircle, title: "Increased Conversions" },
          ].map((item, index, array) => (
            <div key={index} className="flex items-center gap-4 justify-center">
              {/* Each Icon + Text Pair */}
              <div className="flex flex-col items-center group">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#990000] via-[#660000] to-[#1A0000] text-white shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Text Below */}
                <p className="mt-3 text-[#2B0000] font-medium text-[1rem] sm:text-base max-w-[140px] group-hover:text-[#E60023] transition-colors duration-300">
                  {item.title}
                </p>
              </div>

              {/* Arrow Between Each Item (Visible on Desktop Only) */}
              {index < array.length - 1 && (
                <ArrowRight className="hidden sm:block w-6 h-6 sm:w-7 sm:h-7 text-[#E60023] mx-1 sm:mx-2 transition-transform duration-300" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Divider Line (Reduced Width) */}
      <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
        <hr className="border-t-[1.5px] border-[#a3a2a2] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] rounded-full" />
      </div>
    </>
  );
}
