"use client";

import { motion } from "framer-motion";

export default function PPCSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#060b18] to-[#0f1629] py-16 md:py-20 px-6 md:px-12 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.15rem] sm:text-3xl md:text-4xl font-bold text-white mb-6"
        >
          How Pay-Per-Click (PPC) Advertising Helps IVF Clinics Grow Faster
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto text-justify md:text-center"
        >
          Pay-Per-Click advertising is one of the most result-oriented marketing tools for IVF clinics.
          It helps you reach the right patients — those actively searching for fertility treatments —
          while ensuring every rupee you spend brings measurable returns. You pay only when someone clicks on your ad,
          making it an efficient and transparent way to grow your clinic’s visibility and bookings.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {[
            {
              title: "🎯 Targeted Keyword Strategy",
              desc: "We identify and bid on the most relevant fertility-related search terms — like IVF, egg freezing, IUI, and fertility consultation — so your clinic appears when patients are actively seeking help. This ensures high-quality leads and relevant website traffic.",
            },
            {
              title: "💡 Smart Ad Campaigns",
              desc: "Each PPC campaign is designed to send users to dedicated landing pages that match their search intent. This improves relevance, increases Google Quality Score, and reduces overall cost per click.",
            },
            {
              title: "📊 Performance Tracking",
              desc: "We monitor campaigns in real time using Google Ads and SEMrush to optimize keywords, improve ad performance, and boost ROI through data-driven insights.",
            },
            {
              title: "🚀 Fast & Measurable Growth",
              desc: "PPC delivers instant visibility — no long wait times like SEO. With targeted campaigns, your IVF clinic can see increased patient inquiries and higher conversions within days.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-xl border border-blue-400/30 
                         shadow-[0_0_25px_rgba(0,150,255,0.5),0_0_50px_rgba(0,150,255,0.4)] 
                         p-8 rounded-2xl text-left transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-transparent pointer-events-none"></div>
              <h3 className="text-[1.15rem] sm:text-xl font-semibold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-[1.15rem] sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[1.15rem] sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mt-12 leading-relaxed text-justify md:text-center"
        >
          At <span className="text-blue-400 font-semibold">Sky Insights</span>, 
          we craft PPC campaigns that combine empathy with analytics — 
          helping IVF clinics connect with couples seeking fertility solutions. 
          Our always-on strategies ensure you achieve sustained visibility, 
          meaningful engagement, and measurable growth.
        </motion.p>
      </div>

      {/* Decorative Glow Circles */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/25 blur-[160px] rounded-full"></div>
    </section>
  );
}
