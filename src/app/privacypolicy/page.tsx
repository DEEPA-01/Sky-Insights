export const metadata = {
  title: "Privacy Policy | Sky Insights",
  description:
    "Sky Insights privacy policy explains how we collect, store, and protect your personal information. Learn how your data is used and your rights as a user.",
  keywords: [
    "Sky Insights Privacy Policy",
    "Privacy Policy",
    "Digital Marketing Privacy",
    "User Data Protection",
    "GDPR Compliance",
  ],
  openGraph: {
    title: "Privacy Policy | Sky Insights",
    description:
      "Read how Sky Insights collects and protects your personal data, including how information is used within our digital marketing and web development services.",
    url: "https://your-domain.com/privacy",
    siteName: "Sky Insights",
    type: "website",
  },
  alternates: {
    canonical: "https://your-domain.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto pt-36 sm:pt-32 md:pt-28 pb-16 px-6 text-gray-200 leading-relaxed">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how Sky Insights
        collects, uses, and protects your information when you interact with our website
        and services.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Name, email address, phone number, or business details when you submit a form.</li>
        {/* <li>Website analytics data such as IP address, browser type, location, and device.</li> */}
        <li>Any files, messages, or information voluntarily shared with us.</li>
      </ul>

      {/* SECTION 2 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>To respond to your inquiries and deliver requested services.</li>
        <li>To improve our website performance and user experience.</li>
        <li>To send updates, promotions, and marketing communications.</li>
        <li>To analyze traffic and understand audience behavior.</li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        3. Cookies & Tracking Technologies
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          We use cookies to improve site functionality and personalize user experience.
        </li>
        <li>
          Tools like Google Analytics or Meta Pixel may track user behavior for analysis.
        </li>
        <li>You may disable cookies through your browser settings.</li>
      </ul>

      {/* SECTION 4 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        4. Sharing of Information
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          We do not sell, rent, or trade your personal information with third parties.
        </li>
        <li>
          We may share data with trusted partners for services like hosting, email delivery,
          CRM tools, analytics, and marketing automation.
        </li>
        <li>All partners are required to maintain confidentiality.</li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        5. Data Security
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>We implement reasonable security measures to protect your data.</li>
        <li>No online platform can guarantee 100% security against threats.</li>
        <li>
          Users are encouraged to avoid sharing sensitive data through unsecured channels.
        </li>
      </ul>

      {/* SECTION 6 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        6. Your Rights
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>You may request access to the personal data we hold about you.</li>
        <li>You can ask for correction or deletion of your information.</li>
        <li>
          You may opt out of marketing emails anytime by contacting us or using
          &quot;unsubscribe&quot; options.
        </li>
      </ul>

      {/* SECTION 7 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        7. Links to External Sites
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>
          Our website may contain links to external websites not operated by Sky Insights.
        </li>
        <li>We are not responsible for the content or privacy practices of those sites.</li>
      </ul>

      {/* SECTION 8 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        8. Updates to This Privacy Policy
      </h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>This policy may be updated periodically.</li>
        <li>Changes will be published on this page.</li>
      </ul>

      {/* SECTION 9 */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-2">
        9. Contact Us
      </h2>
      <p>
        If you have any questions about this Privacy Policy, you may contact us at:
        <br />
        <span className="text-blue-400 font-medium">info@skyinsights.in</span>
      </p>
    </div>
  );
}
