import HeroSection from "./HeroSection";
import Intro from "./Intro";
import WhyEcommerceSection from "./WhyEcommerceSection";
import HowWeBuildEcommerceSection from "./HowWeBuildEcommerceSection";
import CTA from "./CTA"
export default function EcommerceWebsitePage() {
  return (
    <main>
      <HeroSection />
      <Intro />
      <WhyEcommerceSection />
      <HowWeBuildEcommerceSection />
      <CTA />
    </main>
  );
}
