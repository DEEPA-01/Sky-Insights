"use client";
import Hero from "./Hero";
import WhatIsClubMarketing from "./WhatIsClubMarketing";
import ClubMarketingSolutions from "./ClubMarketingSolutions";
import ClubMarketingProcess from "./ClubMarketingProcess";
import WhyChooseUs from "./WhyChooseUs";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";


export default function ClubMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      <Hero />
      <WhatIsClubMarketing />
    <ClubMarketingSolutions />    
    <ClubMarketingProcess />
    <WhyChooseUs />
    <CTA />
    {/* <ReachOutSection /> */}
    </section>
  );
}