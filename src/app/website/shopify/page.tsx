import HeroSection from "./HeroSection";
import WhyChooseShopify from "./WhyChooseShopify";
import Introduction from "./Introduction";
import ShopifyServices from "./ShopifyServices";
import ShopifyProcessSection from "./ShopifyProcessSection";
import CTA from "./CTA"
export default function ShopifyWebsitePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseShopify />
      <Introduction />
      <ShopifyServices />
      <ShopifyProcessSection />
      <CTA />
    </main>
  );
}
