"use client";
import HeroSection from "./HeroSection";
import WhatIsTravelM from "./WhatIsTravelM";
import WhyChooseDM from "./WhyChooseDM";
import HowWeDo from "./HowWeDo";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";
export default function TravelMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
      <WhatIsTravelM />
      <WhyChooseDM />
      <HowWeDo />
      <CTA />
      {/* <ReachOutSection /> */}
    </section>
  );
}
