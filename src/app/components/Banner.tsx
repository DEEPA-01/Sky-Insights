"use client";
import { Globe2, Zap, Sparkles } from "lucide-react";

export default function WebsiteExpertiseBanner() {
  return (
    <section
      className="
        relative 
        flex justify-center items-center 
        py-6 sm:py-8 md:py-10 
        px-4 sm:px-6 md:px-10 lg:px-12 
        -mt-16 sm:-mt-20 md:-mt-24
      "
    >
      {/* 🔹 Outer Box with Strong Permanent Glow */}
      <div
        className="
          relative w-full max-w-6xl mx-auto 
          bg-gradient-to-r from-[#001020] via-[#001E3C] to-[#002B52]
          rounded-3xl overflow-hidden border border-[#0088CC]/50 
          shadow-[0_0_40px_10px_rgba(0,174,239,0.25),inset_0_0_60px_10px_rgba(0,100,200,0.3)]
          before:absolute before:inset-0 before:rounded-3xl
          before:bg-gradient-to-r before:from-[#00AEEF]/20 before:via-[#0088CC]/25 before:to-[#003C7A]/15
          before:blur-xl before:opacity-30
          after:absolute after:inset-0 after:rounded-3xl
          after:shadow-[0_0_80px_20px_rgba(0,174,239,0.3)]
        "
      >
        {/* 🌊 Inner Card */}
        <div
          className="relative z-20
            w-full max-w-5xl mx-auto 
            bg-gradient-to-r from-[#001C3A] to-[#00305A]
            rounded-2xl border border-[#00AEEF]/40 
            shadow-[0_0_50px_rgba(0,174,239,0.3),inset_0_0_25px_rgba(0,174,239,0.2)]
            flex flex-col md:flex-row justify-between items-center
            px-5 sm:px-8 md:px-12 lg:px-14 
            py-6 sm:py-8 md:py-10 
            gap-6 sm:gap-8 my-3 sm:my-4 md:my-6"
        >
          {/* 🟦 Left Text with Glow */}
          <div className="flex-1 text-center md:text-left">
            <h2
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]
                font-extrabold text-white leading-snug 
                drop-shadow-[0_0_15px_rgba(0,174,239,0.8)]
              "
            >
              <span className="text-[#00AEEF] drop-shadow-[0_0_12px_rgba(0,174,239,0.9)]">
                Your Website,
              </span>{" "}
              Our Expertise
            </h2>
            <p
              className="
                text-gray-300 text-[0.99rem] sm:text-base md:text-lg 
                mt-3 sm:mt-4 
                max-w-md mx-auto md:mx-0
                drop-shadow-[0_0_10px_rgba(0,174,239,0.4)]
              "
            >
              We blend creativity, performance, and cutting-edge technology to
              craft websites that engage, convert, and stand out.
            </p>
          </div>

          {/* 🟦 Right Icons with Constant Glow */}
          <div
            className="
              flex items-center justify-center 
              gap-3 sm:gap-5 md:gap-6 lg:gap-8
              mt-4 md:mt-0
            "
          >
            {[Globe2, Zap, Sparkles].map((Icon, i) => (
              <div
                key={i}
                className="
                  w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 
                  flex items-center justify-center 
                  rounded-full 
                  bg-linear-to-br from-[#00AEEF] to-[#005F99] 
                  text-white 
                  shadow-[0_0_30px_rgba(0,174,239,0.9),0_0_60px_rgba(0,174,239,0.4)]
                  ring-1 ring-[#00AEEF]/40
                  transition-all duration-300 ease-in-out
                "
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </div>
            ))}
          </div>
        </div>

        {/* 💫 Bottom Accent Line with Glow */}
        <div
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2 
            w-[80%] sm:w-[70%] md:w-[60%] 
            h-1 
            bg-gradient-to-r from-[#00C6FF] via-[#00AEEF] to-[#007FFF] 
            rounded-full opacity-95
            shadow-[0_0_25px_rgba(0,174,239,0.9),0_0_50px_rgba(0,174,239,0.5)]
          "
        />
      </div>
    </section>
  );
}
