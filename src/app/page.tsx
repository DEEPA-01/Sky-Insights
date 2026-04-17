import Hero from "../app/components/Hero";
import Banner from "./components/Banner";
 import FeaturesSection from "./components/FeaturesSection";
 import SolutionsSection from "./components/SolutionsCards";
 import IndustriesServed from "./components/IndustriesServed";
 import GetReady from "./components/GetReady";
 import WhoWeAreSection from "./components/WhoWeAreSection";
import ReachOutSection from "./components/ReachOutSection";
import Faq from "./components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sky Insights – We Help Businesses Grow Through Data-Driven Marketing",
  description:
    "Sky Insights is a professional digital marketing and web solutions agency helping businesses grow through SEO, social media, email marketing, and website development.",
  alternates: { canonical: "https://skyinsights.in" },
};


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 🟦 Hero Section */}
      <Hero />

    {/* 🟦 Banner Section */}
      <Banner />

      {/* 🟦 Features Section */}
      <FeaturesSection />

    {/* 🟦 Solutions Section */}
      <SolutionsSection />

      {/* 🟦 INdustries Served */}
      <IndustriesServed />


    {/* 🟦 Get Ready */}
      <GetReady />

      {/* 🟦 Reach Out Section */}
      <WhoWeAreSection />

      {/* 🟦 Reach Out Section */}
      <ReachOutSection />

      {/* 🟦 FAQ Section */}
      <Faq />

    </main>
  );
}
