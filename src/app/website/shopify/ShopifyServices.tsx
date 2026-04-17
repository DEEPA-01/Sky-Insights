"use client";

import { motion } from "framer-motion";
import {
  Layout,
  ShoppingBag,
  BarChart3,
  Search,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function ShopifyServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Custom Shopify Store Design",
      desc: "We design visually stunning Shopify stores that perfectly match your brand tone and customer experience goals.",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Store Setup",
      desc: "End-to-end Shopify setup — from product upload to payment integration, we make your store launch-ready fast.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: BarChart3,
      title: "Conversion Rate Optimization",
      desc: "We refine user journeys and checkout flow to increase engagement, reduce drop-offs, and boost sales conversion.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Search,
      title: "SEO & Organic Growth",
      desc: "Rank higher and reach more customers with on-page SEO, keyword strategy, and technical optimizations built for Shopify.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      title: "Shopify Marketing Campaigns",
      desc: "From Google to Meta, we build data-driven ad campaigns that deliver ROI with creative storytelling and smart targeting.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & Security",
      desc: "Keep your Shopify store secure, fast, and up-to-date with ongoing monitoring, bug fixes, and maintenance support.",
      color: "from-slate-500 to-gray-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#05091e] via-[#0a1030] to-[#05091e] py-24 px-6 md:px-12">
      {/* Glow Backgrounds */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-[1.35rem] sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
          Sky Insights{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Shopify Development
          </span>{" "}
          Services
        </h2>

        <p className="text-gray-400 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
          We combine creative design, smart strategy, and seamless technology to
          help brands thrive on Shopify.
        </p>
      </motion.div>

      {/* Services Showcase */}
      <div className="relative z-10 flex flex-col space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.color} shadow-[0_0_30px_rgba(56,189,248,0.4)] shrink-0`}
            >
              <service.icon className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <div className="md:w-7/12 text-center md:text-left">
              <h3 className="text-[1.2rem] sm:text-2xl md:text-3xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-[1.15rem] sm:text-lg md:text-xl">
                {service.desc}
              </p>
            </div>

            {/* Accent Divider */}
            <div
              className={`hidden md:block w-1/12 h-[2px] bg-gradient-to-r ${service.color} rounded-full`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
