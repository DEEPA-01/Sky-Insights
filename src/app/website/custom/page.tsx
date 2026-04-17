import HeroSection from "./HeroSection";
import CustomWebsiteIntro from "./CustomWebsiteIntro";
import KeyPillarsSection from "./KeyPillarsSection"
import WebsiteProcessSection from "./WebsiteProcessSection";
import CTACustomWebsite from "./CTACustomWebsite";
export default function WebsitePage() {
  return (
    <main>
      <HeroSection />
        <CustomWebsiteIntro />
         <KeyPillarsSection />
        <WebsiteProcessSection />
       <CTACustomWebsite />
    </main>
  );
}
