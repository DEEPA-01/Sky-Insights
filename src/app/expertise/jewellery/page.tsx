"use client";
import HeroSection from "./HeroSection";
import WhyDMForJewellery from "./WhyDMForJewellery";
import WhyJewlleryDigitalMArketing from "./WhyJewelleryDigitalMarketing";
import CallToAction from "./CallToAction";
export default function JewelleryMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
      <WhyDMForJewellery />
      <WhyJewlleryDigitalMArketing />
        <CallToAction />
    </section>
  );
}
