import HeroSection from "./HeroSection";
import EducationExpertise from "./EducationExpertise";
import WhyDMEducation from "./WhyDMEducation";
import DigitalMarketingForEducation from "./DigitalMarketingForEducation";
import CTA from "./CTA";
import { Metadata } from "next";
// import ReachOutSection from "@/app/components/ReachOutSection";
export const metadata: Metadata = {
  title: "Education Marketing – Sky Insights",
  description:
    "Marketing solutions for schools, colleges, and institutes to increase admissions and brand visibility.",
  alternates: { canonical: "https://skyinsights.in/expertise/education" },
};

export default function EducationMArketingPage() {
  return (
    <section className="bg-white overflow-hidden">
        <HeroSection />
        <EducationExpertise /> 
         <WhyDMEducation /> 
         <DigitalMarketingForEducation /> 
         <CTA />
         {/* <ReachOutSection />  */}
    </section>
  );
}
