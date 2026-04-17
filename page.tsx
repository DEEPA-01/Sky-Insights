"use client";

import { useEffect, useState } from "react";

export default function CookiesPolicy() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return (
    <div className="min-h-screen py-16 px-6 sm:px-16 lg:px-40 bg-[#050a14] text-gray-200">

      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r 
      from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center mb-10">
        Cookie Policy
      </h1>

      <div className="bg-black/30 backdrop-blur-xl p-8 sm:p-12 rounded-2xl shadow-xl space-y-6 leading-relaxed">

        <p><strong>Last Updated:</strong> {year}</p>

        <p>This Cookie Policy explains how Sky Insights uses cookies.</p>

        <h2 className="text-xl font-semibold text-white">1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device.</p>

        <h2 className="text-xl font-semibold text-white">2. Types of Cookies</h2>
        <ul className="list-disc pl-6">
          <li>Essential</li>
          <li>Analytics</li>
          <li>Marketing</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">3. Managing Cookies</h2>
        <p>You may disable cookies from your browser settings.</p>

      </div>
    </div>
  );
}
