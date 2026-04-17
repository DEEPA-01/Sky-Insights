"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "1. What services does Sky Insights Digital Marketing Agency provide?",
      answer:
        "At Sky Insights, we offer comprehensive digital marketing solutions designed to elevate your brand. Our services include SEO, Social Media Marketing (SMM), Pay-Per-Click (PPC) Campaigns, Content Marketing, Website Design & Development, and Email Marketing — all customized to align with your unique business objectives.",
    },
    {
      question: "2. How can digital marketing help my business?",
      answer:
        "Digital marketing empowers your business to grow by enhancing online visibility, reaching the right audience, and driving higher conversions. At Sky Insights, we focus on building strong brand awareness, engaging your customers effectively, and increasing your revenue through strategic and data-driven online marketing efforts.",
    },
    {
      question: "3. Can you manage social media for my business?",
      answer:
        "Absolutely! Sky Insights provides complete social media management services — from strategy development and content creation to posting, community engagement, and performance analytics — across platforms like Facebook, Instagram, LinkedIn, and more.",
    },
    {
      question: "4. How long does it take to see results from digital marketing?",
      answer: `The results depend on your specific goals and the strategies implemented. For instance:
      SEO: Noticeable improvements usually appear within 3–6 months.
      PPC: Delivers instant visibility and results as soon as campaigns go live.
      Social Media: Engagement and reach often begin increasing within a few weeks.`,
    },
    {
      question: "5. Do you work with businesses of all sizes?",
      answer:
        "Yes, Sky Insights partners with businesses of all sizes — from startups and small enterprises to large corporations. Our digital marketing strategies are fully customizable and scalable to suit your specific goals, requirements, and budget.",
    },
    {
      question: "6. Why should I choose Sky Insights over other digital marketing agencies?",
      answer:
        "At Sky Insights, we prioritize data-driven strategies, transparent communication, and measurable outcomes. Our expert team takes the time to understand your unique business goals and crafts personalized marketing solutions that drive real, sustainable growth.",
    },
    {
      question: "7. What industries do you specialize in?",
      answer:
        "Sky Insights has extensive experience working with clients across diverse industries, including sports, e-commerce, healthcare, fitness, hospitality, education, and more. Our expertise enables us to design tailored digital marketing strategies that deliver impactful results for every sector.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#F9FBFF] to-[#EAF4FF] py-16 px-5 sm:px-10 md:px-20 transition-all duration-500">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#002E6E]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Have questions about Sky Insights? We’ve got you covered.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left px-5 sm:px-8 py-5 sm:py-6 rounded-2xl group"
            >
              <span className="text-base sm:text-lg font-semibold text-[#004C97] group-hover:text-[#00AEEF] transition-colors duration-300">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#004C97] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#00AEEF]" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 px-5 sm:px-8 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
