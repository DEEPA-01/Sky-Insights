import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Sky Insights Marketing & Web Development",
  description:
    "Explore Sky Insights' core services: digital marketing, social media management, SEO services, email marketing, and website development.",
  alternates: { canonical: "https://skyinsights.in/services" },
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B1221] text-white p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Services Page</h1>
        <p className="text-gray-300 text-lg">
          The Services page is working correctly 🎉
        </p>
      </div>
    </section>
  );
}
