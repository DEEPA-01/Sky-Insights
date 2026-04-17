import HeroSection from "./HeroSection";
import WhyRealEstate from "./WhyRealEstate";
import HowWeDoRealEstateMarketing from "./HowWeDoRealEstateMarketing";
import CTA from "./CTA";
import { Metadata } from "next";
// import ReachOutSection from "@/app/components/ReachOutSection";
export const metadata: Metadata = {
  title: "Real Estate Marketing – Sky Insights",
  description:
    "Sky Insights drives real estate leads using SEO, Google Ads, social media marketing, and targeted campaigns.",
  alternates: { canonical: "https://skyinsights.in/expertise/real-estate" },
};

export default function RealEstatePage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
        <WhyRealEstate />
        <HowWeDoRealEstateMarketing />
        <CTA />
       {/* <ReachOutSection /> */}
    </section>
  );
}
