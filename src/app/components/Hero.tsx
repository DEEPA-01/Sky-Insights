"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* ✅ Main Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 lg:px-16 py-12 sm:py-16 max-w-7xl mx-auto pt-[150px] md:pt-20">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left">
            <span className="bg-gradient-to-r from-[#004C97] via-[#0072BC] to-[#00AEEF] bg-clip-text text-transparent">
              “Turning ideas into brands – your vision, our mission.”
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-900 max-w-md mx-auto md:mx-0">
            At <strong>Sky Insights Digital Marketing Agency</strong>, we blend AI intelligence
            with creative strategy to help brands grow smarter and faster. From boosting
            visibility to optimizing ad performance, we drive measurable results that turn
            your digital presence into real business growth.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start gap-3 sm:gap-4 lg:gap-8">
            {/* 🟢 Book an Appointment (WhatsApp Chat) */}
            <a
              href="https://wa.me/918779290627?text=Continue%20to%20chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#25D366] text-[#25D366] font-semibold rounded-md hover:bg-[#25D366] hover:text-white transition-all duration-300 ease-in-out text-center sm:w-auto w-[48%] flex items-center justify-center"
            >
              Book an Appointment
            </a>

            {/* ☎️ Call Now (Deep Sea Blue Gradient) */}
            <a
              href="tel:+918779290627"
              className="px-6 py-3 bg-gradient-to-r from-[#002D62] via-[#004C97] to-[#001F3F] text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out text-center sm:w-auto w-[48%] flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* ✅ Right Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end md:pt-8 lg:pt-10">
          <Image
            src="/home.png"
            alt="Digital Solutions"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full max-w-md sm:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </section>
    </>
  );
}
