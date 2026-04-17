"use client";
import React from "react";

export default function WhyChooseSkyInsights() {
  const topics = [
    {
      title: "Affordable Rates",
      desc: `At Sky Insights, we believe that great marketing shouldn’t come with a heavy price tag. 
      Our services are designed to deliver exceptional quality at competitive rates, ensuring 
      every business — from startups to enterprises — gets measurable growth and real value.`,
    },
    {
      title: "Expertise",
      desc: `With years of experience across industries like real estate, healthcare, education, and 
      hospitality, our team understands what drives results. From SEO and social media to 
      paid campaigns and branding, every strategy is backed by data, creativity, and experience.`,
    },
    {
      title: "Transparency",
      desc: `We believe trust is built on transparency. Our clients receive detailed progress 
      reports, analytics, and insights — so you always know where your marketing investments 
      are going and how they’re performing.`,
    },
    {
      title: "Originality",
      desc: `Every strategy at Sky Insights starts with fresh thinking. We don’t replicate trends — 
      we create them. Our creative team designs marketing ideas that make your brand unique, 
      authentic, and unforgettable.`,
    },
    {
      title: "Understanding",
      desc: `We take time to understand your brand, goals, and audience before building a 
      marketing strategy. This ensures every campaign connects meaningfully and 
      drives sustainable long-term growth.`,
    },
  ];

  return (
    <section className="bg-white text-[#0B2545] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004C8C]">
            Why Choose <span className="text-[#00AEEF]">Sky Insights</span>
          </h2>

          {/* ✅ Marquee Underline Animation */}
          <div className="relative w-28 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#004C8C] mx-auto my-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[marquee_2s_linear_infinite]" />
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>

          <p className="text-slate-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At Sky Insights, we don’t just offer marketing services — we create strategies that
            drive real results, meaningful engagement, and measurable business growth.
          </p>
        </div>

        {/* Topics List */}
        <div className="space-y-10 sm:space-y-12">
          {topics.map(({ title, desc }) => (
            <div
              key={title}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004C8C] mb-2">
                {title}
              </h3>
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#004C8C] mb-3 rounded-full"></div>
              <p className="text-slate-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-4xl">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
