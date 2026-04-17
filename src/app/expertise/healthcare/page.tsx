import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Healthcare Marketing – Sky Insights",
  description:
    "Sky Insights provides digital marketing solutions for healthcare, gyms, hospitals, and clinics using targeted online strategies.",
  alternates: { canonical: "https://skyinsights.in/expertise/healthcare" },
};

export default function HealthcarePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
      <h1 className="text-4xl font-bold text-[#0284C7] mb-4">
        Healthcare Digital Marketing
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl">
        Welcome to the Healthcare Marketing section of Sky Insights.
        Content coming soon...
      </p>
    </section>
  );
}
