"use client";

import { useEffect, useState } from "react";

export default function Disclaimer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return (
    <div className="min-h-screen py-16 px-6 sm:px-16 lg:px-40 bg-[#050a14] text-gray-200">

      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r 
      from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center mb-10">
        Disclaimer
      </h1>

      <div className="bg-black/30 backdrop-blur-xl p-8 sm:p-12 rounded-2xl shadow-xl space-y-6 leading-relaxed">

        <p><strong>Last Updated:</strong> {year}</p>

        <p>Information on this website is for general purposes and may change.</p>

        <h2 className="text-xl font-semibold text-white">1. No Guarantees</h2>
        <p>Marketing/SEO results vary per client.</p>

        <h2 className="text-xl font-semibold text-white">2. External Links</h2>
        <p>We are not responsible for third-party content.</p>

        <h2 className="text-xl font-semibold text-white">3. Technical Risks</h2>
        <p>We are not liable for hosting or server issues.</p>

      </div>
    </div>
  );
}
