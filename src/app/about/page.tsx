import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import AboutCards from "./AboutCards"; // ✅ import your card component
import AboutVisionSlider from "./AboutVisionSlider";
import MapSection from "./MapSection"; // ✅ import your map section component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sky Insights – Professional Digital Marketing Agency",
  description:
    "Learn about Sky Insights, a data-driven marketing and web solutions company focused on helping brands grow through powerful digital strategies.",
  alternates: { canonical: "https://skyinsights.in/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* 🟣 Hero Section Below */}
      <HeroSection />
      
      {/* 🩵 About Us Section Below */}
      <AboutUs />

      {/* 🟠 Cards Section Below */}
      <AboutCards />

      {/* 🔵 Vision Slider Section Below */}
      <AboutVisionSlider/>

     <MapSection />


    </>
  );
}
