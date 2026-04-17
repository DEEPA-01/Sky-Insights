"use client";
import HeroSection from "./HeroSection";
import Intro from "./Intro";
import WhyGymMarketing from "./WhyGymMarketing";
import GymServicesSection from "./GymServicesSection";
import CTA from "./CTA";
// import ReachOutSection from "@/app/components/ReachOutSection";
export default function GYMMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
        <Intro />
        <WhyGymMarketing />
        <GymServicesSection />
        <CTA />
        {/* <ReachOutSection /> */}
    </section>
  );
}

