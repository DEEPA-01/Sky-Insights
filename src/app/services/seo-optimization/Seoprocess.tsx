"use client";
import React from "react";
import Image from "next/image";

export default function CenterImageSection() {
  return (
    <section
      id="center-image"
      aria-labelledby="center-image-heading"
      className="relative w-full flex items-center justify-center bg-gradient-to-b from-white via-[#ECFDF5] to-[#f9fcfa] py-16 md:py-24 px-6 overflow-hidden"
    >
      {/* 🌟 Section Heading */}
      <h2
        id="center-image-heading"
        className="absolute top-6 sm:top-8 text-3xl sm:text-4xl font-extrabold text-[#1c1d1d]"
      >
        Our Digital Growth Strategy
      </h2>

      {/* 🖼️ Center Image */}
      <div className="flex justify-center items-center w-full">
        <Image
          src="/seoprocess.png" // 🔹 You can replace this with your actual image path
          alt="Digital Growth Strategy"
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl h-auto rounded-2xl shadow-2xl object-cover"
          width={1200}
          height={800}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
