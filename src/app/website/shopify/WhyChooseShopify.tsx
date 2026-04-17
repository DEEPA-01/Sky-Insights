"use client";

import {
  Rocket,
  Globe2,
  ShieldCheck,
  Link2,
  Sparkles,
  Clock,
  CreditCard,
} from "lucide-react";

export default function WhyChooseShopifySection() {
  const reasons = [
    {
      icon: Rocket,
      title: "Launch Your Business Instantly",
      highlight: "Set up with ease — no coding required",
      desc: "Shopify makes starting an online business effortless. Upload your products, add descriptions, and start selling — all within minutes. Sky Insights ensures your store looks sleek and performs flawlessly.",
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Impact",
      highlight: "Expand beyond borders, sell everywhere",
      desc: "Reach millions of potential buyers across countries. With global visibility and digital trust, we help your Shopify store attract audiences and convert them into loyal customers.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      highlight: "Shopify means security — for you and your customers",
      desc: "End-to-end encrypted transactions and secure data handling make Shopify one of the safest platforms. Sky Insights builds your store to the highest privacy and reliability standards.",
    },
    {
      icon: Link2,
      title: "Seamless Integrations",
      highlight: "Connect with tools that grow your brand",
      desc: "Integrate Google Ads, Meta campaigns, Mailchimp, and analytics — all within your Shopify dashboard. We help automate marketing and simplify your business flow.",
    },
    {
      icon: Sparkles,
      title: "Beautiful & Customisable Design",
      highlight: "Your brand, your identity, your story",
      desc: "Shopify offers hundreds of modern templates — and Sky Insights customizes them uniquely for your business, blending functionality with a visually engaging experience.",
    },
    {
      icon: Clock,
      title: "Always Available",
      highlight: "Your business runs 24/7, even while you sleep",
      desc: "Shopify’s 24/7 accessibility ensures your customers can shop anytime. We maintain performance monitoring and updates — so your store never stops working.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Systems",
      highlight: "Smooth transactions, global gateways",
      desc: "Shopify supports all major payment methods — UPI, cards, PayPal, and more. With Sky Insights, setup is instant, secure, and globally ready.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white 
      py-16 md:py-24 px-6 md:px-12">
      {/* ⬆ Reduced mobile top/bottom padding (from py-24 to py-16) */}

      {/* Background Glow */}
      <div className="absolute top-[-100px] md:top-[-120px] left-[-80px] w-[300px] h-[300px] bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] md:bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-bold 
          text-[1.35rem] sm:text-4xl md:text-5xl 
          text-gray-900 mb-10 md:mb-16 leading-snug">
          {/* ⬆ Reduced mobile bottom margin (from mb-16 to mb-10) */}
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Shopify for Your Business
          </span>
        </h2>

        {/* Reasons List */}
        <div className="divide-y divide-gray-200">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
            >
              {/* ⬆ Reduced mobile vertical padding from py-10 to py-8 */}

              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Text Block */}
              <div className="flex-1 text-center md:text-left">

                <h3 className="font-semibold 
                  text-[1.2rem] sm:text-2xl md:text-3xl text-gray-900">
                  {reason.title}
                </h3>

                <p className="text-cyan-700 font-medium mt-1 
                  text-[1.15rem] sm:text-lg md:text-xl">
                  {reason.highlight}
                </p>

                <p className="text-gray-900 mt-2 md:mt-3 leading-relaxed 
                  text-[1.15rem] sm:text-[1.1rem] md:text-[1.2rem]">
                  {reason.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
