"use client";
import HeroSection from "./HeroSection";
import WhatIsHospital from "./whatIsHospital";
import HospitalDigitalMarketing from "./HospitalDigitalMarketing";
import Benefits from "./Benefits";
import ServicesOffered from "./ServicesOffered";
import CTA from "./CTA";
// import CallToAction from "@/app/expertise/jewellery/CallToAction";
// import ReachOutSection from "@/app/components/ReachOutSection";

export default function HospitalsEstatePage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
        <WhatIsHospital />
        <HospitalDigitalMarketing />
        <Benefits />
        <ServicesOffered />
        <CTA />
        {/* <CallToAction /> */}
       {/* <ReachOutSection /> */}
    </section>
  );
}
