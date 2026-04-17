"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="bg-black/90 backdrop-blur-xl text-gray-200 p-5 sm:p-6 rounded-xl shadow-lg max-w-2xl w-full border border-gray-700">

        <h3 className="text-lg font-semibold">We use cookies 🍪</h3>
        <p className="text-sm mt-2">
          We use cookies to enhance your browsing experience, analyze traffic, 
          and personalize content. By clicking Accept, you agree to our 
          <a href="/cookies" className="text-blue-400 underline ml-1">Cookie Policy</a>.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 rounded-lg border border-gray-500 text-gray-200 hover:bg-gray-800 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
