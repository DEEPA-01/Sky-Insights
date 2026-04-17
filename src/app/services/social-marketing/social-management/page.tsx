"use client";
import SMBanner from "./SMBanner";
import WhatIsSocialMediaManagement from "./WhatIsSMediaManagement";
import WhySMManagementImportant from "./WhySMManagementImportant";
import SMparagraph from "./SMparagraph";
import AdvaOfSMManagement from "./AdvaOfSMManagement";
import KeyElementsSMM from "./KeyElementsSMM";
import HowSkyInsightsHelpsYou from "./HowSkyInsightsHelpsYou";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";

export default function SocialManagementBanner() {
  return (
  <section className="bg-white overflow-hidden">
   <SMBanner />
   <WhatIsSocialMediaManagement />
    <WhySMManagementImportant />
   <SMparagraph />
    <AdvaOfSMManagement />
    <KeyElementsSMM />
    <HowSkyInsightsHelpsYou />
    <CTA />
    {/* <ReachOutSection /> */}
    </section>
  );
}
