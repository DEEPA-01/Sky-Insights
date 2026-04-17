export const metadata = {
  title: "Terms & Conditions | Sky Insights",
  description:
    "Read the official Terms & Conditions of Sky Insights. Understand our service usage guidelines, intellectual property rules, liability, payments, and user obligations.",
  keywords: [
    "Sky Insights Terms",
    "Terms and Conditions",
    "Digital Marketing Terms",
    "Website Development Terms",
    "SEO Service Terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Sky Insights",
    description:
      "Review the Terms & Conditions governing the use of Sky Insights' digital marketing, SEO, and web development services.",
    url: "https://your-domain.com/terms",
    siteName: "Sky Insights",
    type: "website",
  },
  alternates: {
    canonical: "https://your-domain.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto pt-36 sm:pt-32 md:pt-28 pb-16 px-6 text-gray-200 leading-relaxed">
      <h1 className="text-3xl font-bold text-white mb-6">Terms & Conditions</h1>

      {/* SECTION 1 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        1. Use of Our Services
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>You must use our website and services only for lawful purposes.</li>
        <li>You must not attempt to disrupt, damage, or impair our platform.</li>
        <li>
          Your actions should not restrict or interfere with others using our
          services.
        </li>
      </ul>

      {/* SECTION 2 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        2. Intellectual Property
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          All graphics, content, designs, logos, and media belong to Sky
          Insights.
        </li>
        <li>
          You may not copy, reproduce, or distribute our materials without written
          permission.
        </li>
        <li>
          Unauthorized use of our intellectual property may result in legal
          action.
        </li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        3. Service Deliverables
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          Service timelines may vary depending on project scope and client changes.
        </li>
        <li>
          Sky Insights is not responsible for delays caused by third-party tools or
          platforms.
        </li>
        <li>
          Revisions outside project scope may require additional cost or time.
        </li>
      </ul>

      {/* SECTION 4 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        4. Payments & Refunds
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          Payments for services (SEO, digital marketing, web development, etc.) are
          non-refundable.
        </li>
        <li>
          Advance payments confirm the project and are non-reversible unless stated
          otherwise.
        </li>
        <li>
          Late payments may delay delivery timelines.
        </li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        5. Limitation of Liability
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          Sky Insights is not responsible for financial loss, business loss, or
          damages resulting from service use.
        </li>
        <li>
          We are not liable for issues caused by third-party tools like hosting,
          advertising platforms, APIs, etc.
        </li>
      </ul>

      {/* SECTION 6 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        6. Third-Party Integrations
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Our services may rely on external APIs and automation tools.</li>
        <li>We are not responsible for downtime or issues caused by third parties.</li>
      </ul>

      {/* SECTION 7 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        7. Modifications to Terms
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Sky Insights may update or modify these Terms at any time.</li>
        <li>Changes will be published on this page.</li>
      </ul>

      {/* SECTION 8 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        8. Contact Information
      </h2>
      <p>
        For questions regarding these Terms & Conditions, contact us at:
        <br />
        <span className="text-blue-400 font-medium">
          info@skyinsights.in
        </span>
      </p>
    </div>
  );
}
