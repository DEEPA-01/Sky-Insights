import HeroSection from "./HeroSection";
import Why from "./why";
import FeatureSection from "./FeatureSection";
import EcommerceEmailServices from "./EcommerceEmailServices";
import EmailMarketingStrategies from "./EmailMarketingStrategies";
import OutboundEmailMarketing from "./OutboundEmailMarketing";
import CTA from "./CTA";
import { Metadata } from "next";
// import ReachOutSection from "@/app/components/ReachOutSection";
export const metadata: Metadata = {
  title: "Email Marketing Services – Sky Insights",
  description:
    "Boost conversions with Sky Insights' data-driven email marketing campaigns. Automations, newsletters, and lead nurturing for all industries.",
  alternates: { canonical: "https://skyinsights.in/services/email-marketing" },
};


export default function EmailMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
      <HeroSection />
      <Why />
      <FeatureSection />
      <EcommerceEmailServices />
      <EmailMarketingStrategies />
      <OutboundEmailMarketing />
      <CTA />
      {/* <ReachOutSection /> */}
    </section>
  );
}