"use client";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import WhatWeOffer from "./WhatWeOffer";
import WhyChoose from "./WhyChoose";
import Description from "./Description";
import CTA from "./CTA";

export default function DigitalMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      <HeroSection />
      <ContentSection />
      <WhatWeOffer />
      <WhyChoose />
      <Description />
      <CTA />
    </section>
  );
}
