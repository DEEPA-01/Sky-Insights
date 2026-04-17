"use client";

import Hero from "./hero";
import WhatIsSocialMediaMarketing from "./WhatIsSocialMediaMarketing";
import SocialMediaIntro from "./SocialMediaIntro";
import WhySocialMediaMarketing from "./WhySocialMediaMarketing";
import SocialMediaServicesSection from "./SocialMediaServicesSection";
import SocialMediaFundamentals from "./SocialMediaFundamentals";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";

export default function SocialMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      <Hero />
      <WhatIsSocialMediaMarketing />
      <SocialMediaIntro />
      <WhySocialMediaMarketing />
      <SocialMediaServicesSection />
      <SocialMediaFundamentals />
      <CTA />
      {/* <ReachOutSection /> */}
    </section>
  );
}
