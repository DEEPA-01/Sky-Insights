import HeroSection from "./HeroSection";
import WhatIsVideoMarketing from "./WhatIsVideoMarketing";
import WhyChooseVideo from "./WhyChooseVideo";
import TypesOfVideoMarketing from "./TypesOfVideoMarketing";
import OurVideoProcess from "./OurVideoProcess";
import WhyChooseVideoMarketing from "./WhyChooseVideoMarketing";
import CTA from "./CTA";
export const metadata = {
  title: "Video Marketing Services – Sky Insights",
  description:
    "High-impact video marketing solutions to increase engagement, brand awareness, and conversions across social media platforms.",
  alternates: { canonical: "https://skyinsights.in/services/video-marketing" },
};

export default function VideoMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      <HeroSection />
      <WhatIsVideoMarketing />
      <WhyChooseVideo />
      <TypesOfVideoMarketing />
      <OurVideoProcess />
      <WhyChooseVideoMarketing />
      <CTA />
    </section>
  );
}
