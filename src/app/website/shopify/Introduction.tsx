"use client";

import {
  ShoppingCart,
  Rocket,
  Settings,
  Smartphone,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function ShopifyDevelopmentSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Quick & Easy Setup",
      desc: "Launch your store in days — no complex code, just seamless setup with guided support.",
      color: "from-indigo-700 to-indigo-500",
      glow: "shadow-[0_0_25px_rgba(79,70,229,0.35)]",
    },
    {
      icon: Settings,
      title: "Customisable to the Core",
      desc: "Personalize every page, layout, and detail — we ensure your store feels uniquely yours.",
      color: "from-slate-900 to-gray-800",
      glow: "shadow-[0_0_25px_rgba(30,41,59,0.35)]",
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized Experience",
      desc: "Responsive, fast, and intuitive across all devices for smooth user experiences.",
      color: "from-blue-700 to-cyan-600",
      glow: "shadow-[0_0_25px_rgba(56,189,248,0.35)]",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "Trusted payment systems, SSL, and end-to-end protection for customer confidence.",
      color: "from-slate-800 to-gray-900",
      glow: "shadow-[0_0_25px_rgba(51,65,85,0.35)]",
    },
    {
      icon: Rocket,
      title: "Lightning Fast Performance",
      desc: "Optimized speed ensures instant page loads and higher engagement across all touchpoints.",
      color: "from-purple-700 to-pink-600",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    },
    {
      icon: TrendingUp,
      title: "Built for Growth",
      desc: "Scalable, data-driven, and future-ready — perfect for evolving businesses.",
      color: "from-emerald-600 to-teal-500",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-white 
      py-14 md:py-20 px-6 md:px-12 overflow-hidden -mt-10">

      {/* Floating animation CSS */}
      <style>{`
        @keyframes floatSoft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .float-mobile {
          animation: floatSoft 3s ease-in-out infinite;
        }
        @media (min-width: 768px) {
          .float-mobile {
            animation: none;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="text-[1.35rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Shopify Development
            </span>{" "}
            with Sky Insights?
          </h2>

          <p className="text-gray-600 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            Transform your Shopify vision into a high-performing, secure, and
            beautifully designed online store that drives results.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${item.color}
                text-white border border-white/10 ${item.glow} transition-all duration-300
                float-mobile hover:scale-105`}
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl"></div>

              {/* Icon */}
              <div className="relative flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-white/10 backdrop-blur-md shadow-inner">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="relative text-[1.2rem] sm:text-xl md:text-[1.35rem] font-semibold mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-[1.15rem] sm:text-[1rem] md:text-[1.15rem] opacity-90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
