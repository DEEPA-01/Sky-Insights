"use client";
import HeroSection from "./HeroSection";
import WhatIsIVF from "./whatIsIVF";
import IVFIntroSection from "./IVFIntroSection";
import PPCSection from "./PPCSection";
import SocialMediaSection from "./SocialMediaSection";
import DigitalMarketingVsAdvertising from "./DigitalMarketingVsAdvertising"
// import CallToAction from "@/app/expertise/jewellery/CallToAction";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";

export default function HospitalsEstatePage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
        <WhatIsIVF />
        <IVFIntroSection />
        <PPCSection />
        <SocialMediaSection />
        <DigitalMarketingVsAdvertising />
        <CTA />
        {/* <CallToAction /> */}
       {/* <ReachOutSection /> */}
    </section>
  );
}
