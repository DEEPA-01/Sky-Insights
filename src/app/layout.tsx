import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientProvider from "./providers/ClientProvider";
import CookieConsent from "./components/CookieConsent";
import type { Metadata } from "next";
import Script from "next/script";



export const metadata: Metadata = {
  title: "Sky Insights – Data-Driven Digital Marketing & Web Solutions",
  description:
    "Sky Insights helps businesses grow through data-driven marketing. Our services include digital marketing, social media management, SEO services, website development, and email marketing.",
  keywords: [
    "digital marketing",
    "social media management",
    "SEO services",
    "email marketing",
    "website development",
    "marketing agency",
    "Sky Insights",
  ],
  authors: [{ name: "Sky Insights" }],
  metadataBase: new URL("https://skyinsights.in"),
  alternates: {
    canonical: "https://skyinsights.in",
  },
  openGraph: {
    title: "Sky Insights – We Help Businesses Grow Through Data-Driven Marketing",
    description:
      "Sky Insights is a professional marketing and web solutions agency specializing in data-driven growth strategies. Digital marketing, SEO, social media & web development.",
    url: "https://skyinsights.in",
    siteName: "Sky Insights",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sky Insights Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sky Insights – Data-Driven Marketing & Web Development Agency",
    description:
      "We help businesses grow through digital marketing, SEO, website development and social media strategies.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#050a14]">
      <body className="flex flex-col min-h-screen bg-[#050a14] text-white">
        <ClientProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow bg-[#050a14]">
            {children}
          </main>

          {/* Footer */}
          <Footer />
          {/* COOKIE POPUP SHOWS ON EVERY PAGE */}
          <CookieConsent />
        </ClientProvider>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TG57FL6E0F"
        />

        <Script id="ga4-init">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TG57FL6E0F');
`}
        </Script>


      </body>
    </html>
  );
}
