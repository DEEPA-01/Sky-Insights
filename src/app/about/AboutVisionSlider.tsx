"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function AboutVisionSlider() {
  const slides = [
    {
      title: "Our Goal",
      desc: `We aim to help every business grow its digital presence with real, measurable results.
      Our goal is to connect brands with people through innovative marketing ideas.
      We want to make digital growth simple, affordable, and sustainable.
      We focus on turning creativity into impactful digital strategies.
      Our goal is to build trust, deliver results, and exceed client expectations.
      We aim to become the go-to partner for small and large businesses alike.
      We work every day to bring creativity and clarity together for your digital success.`,
      img: "/goal.png",
    },
    {
      title: "Our Vision",
      desc: `Our vision is to transform businesses into strong digital identities.  
      We envision a world where every brand can shine online without limits.  
      We see creativity as the key to lasting influence in the digital world.  
      We want to inspire global connections through innovative marketing approaches.  
      Our vision is to make digital marketing smarter, faster, and more human.  
      We dream of building networks that connect ideas with audiences worldwide.  
      We want to lead the future of marketing by setting new standards of digital excellence.`,
      img: "/vision.png",
    },
    {
      title: "Our Mission",
      desc: `is to empower brands to grow through digital innovation.  
      We aim to create strategies that build meaningful audience relationships.  
      We work to deliver clear communication, impactful advertising, and real growth.  
      Our mission is to simplify digital marketing for every business need.  
      We seek to help startups and enterprises scale with purpose and presence.  
      Our focus is on delivering creative ideas that convert into measurable success.  
      We believe in continuous learning, transparency, and client satisfaction in all we do.`,
      img: "/mission.png",
    },
    {
      title: "Our Objectives",
      desc: `To design digital experiences that attract, engage, and convert customers.  
      To deliver consistent online growth through data-driven strategies.  
      To provide tailor-made marketing solutions for every business type.  
      To help clients achieve long-term digital visibility and reputation.  
      To use technology and creativity to drive smarter brand outcomes.  
      To ensure every project reflects innovation, value, and measurable success.  
      To build lasting client relationships built on trust and performance.`,
      img: "/objectivee.png",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#001F3F] via-[#003F7F] to-[#00AEEF] text-white py-5 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      {/* 🌟 Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Our Goal, Vision & Mission
        </h2>
        <p className="text-[#DDEEFF] max-w-2xl mx-auto text-[0.95rem] sm:text-base md:text-lg leading-relaxed">
          At Sky Insights, we aim to create sustainable digital success through innovation and measurable impact.
        </p>

        {/* ✨ Animated Marquee Underline */}
        <div className="relative w-24 h-[3px] mx-auto rounded-full mt-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] via-[#004C97] to-[#00AEEF] animate-marquee"></div>
        </div>
      </div>

      {/* 🔹 Swiper Slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12">
              
              {/* 🖼️ Image */}
              <div className="flex justify-center md:w-1/2">
                <div className="relative group">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={480}
                    height={480}
                    className="rounded-2xl shadow-2xl object-contain border border-[#00AEEF]/20 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00AEEF]/10 via-transparent to-[#004C97]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
                </div>
              </div>

              {/* 📝 Text Content */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#FFFFFF]">
                  {slide.title}
                </h3>

                {/* ✨ Animated Marquee Underline (Under Each Title) */}
                <div className="relative w-20 h-[3px] mx-auto md:mx-0 rounded-full mb-5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] via-[#004C97] to-[#00AEEF] animate-marquee"></div>
                </div>

                {/* ✅ Slightly larger text for mobile */}
                <p className="text-[#E9F4FF] text-[1rem] sm:text-base md:text-lg leading-relaxed tracking-wide">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✨ Gradient Overlays */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>

      {/* 🌀 Custom animation keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-marquee {
          animation: marquee 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
}
