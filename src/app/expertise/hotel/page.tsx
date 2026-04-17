import Banner from "./Banner";
import WhatIsHotelMarketing from "./WhatIsHotelMarketing"
import DMForHotelIndustry from "./DMForHotelIndustry";
import Hospitality from "./Hospitality";
import MarketingServices from "./MarketingServices";
import CTA from "./CTA "; 
import { Metadata } from "next";
// import ReachOutSection from "@/app/components/ReachOutSection";
export const metadata: Metadata = {
  title: "Hotel Marketing Solutions – Sky Insights",
  description:
    "Grow hotel bookings with Sky Insights' digital marketing services designed for hospitality brands.",
  alternates: { canonical: "https://skyinsights.in/expertise/hotel" },
};


export default function HotelMarketingPage() {
  return (
    <section className="bg-white overflow-hidden">
        <Banner />
        <WhatIsHotelMarketing />
        <DMForHotelIndustry />
        <Hospitality />
        <MarketingServices />
        <CTA />
        {/* <ReachOutSection /> */}
    </section>
  );
}