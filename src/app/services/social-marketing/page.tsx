import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management – Sky Insights",
  description:
    "Grow your brand online with professional social media management, content creation, strategy planning, and result-driven campaigns.",
  alternates: {
    canonical: "https://skyinsights.in/services/social-marketing",
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B1221] text-white p-10">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Social Media Marketing</h1>
        <p className="text-gray-300">
          This page is working 🎉 Your route is now active.
        </p>
      </div>
    </section>
  );
}
