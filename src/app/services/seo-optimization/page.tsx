import HeroSection from "./HeroSection";
import WhatIsSEOOptimization from "./WhatIsSEOOptimization";
import SeoImp from "./SeoImp";
import SeoSolutions from "./SeoSolutions";
import HowWeHelp from "./HowDoWe";
import Seoprocess from "./Seoprocess";
import CTA from "./CTA";
import { Metadata } from "next";
// import Faq from "@/app/components/Faq";
// import ReachOutSection from "@/app/components/ReachOutSection";

export const metadata: Metadata = {
  title: "SEO Services – Sky Insights",
  description:
    "Improve your Google ranking with Sky Insights' SEO services including technical SEO, on-page optimization, keyword strategy, and link building.",
  alternates: {
    canonical: "https://skyinsights.in/services/seo-optimization",
  },
};

export default function SeoOptimizationPage() {
  return (
    <section className="bg-white overflow-hidden">
      <HeroSection />
      <WhatIsSEOOptimization />
       <SeoImp />
      <SeoSolutions />
      <HowWeHelp />
      <Seoprocess />
      <CTA />
      {/* <Faq /> */}
      {/* <ReachOutSection /> */}
    </section>
  );
}
