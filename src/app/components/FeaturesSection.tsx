"use client";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <>
      {/* ✅ Features Section */}
      <section className="max-w-7xl mx-auto mt-2 sm:mt-2 px-4 sm:px-6 lg:px-12 py-8">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-10 sm:gap-12 
            text-center md:text-left 
            ml-2 sm:ml-4 md:ml-6
          "
        >
          {/* 🟦 Cost-effectiveness */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/cost bg.png"
              alt="Cost Efficiency Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#002E6E] -mt-0.5">
              Cost-effectiveness
            </h3>
            <p className="text-gray-800 text-[0.98rem] sm:text-base max-w-xs mt-1 leading-relaxed">
              Empowering brands to grow efficiently with budget-smart marketing solutions.
            </p>
          </div>

          {/* 🟦 Innovative Technology */}
          <div
            className="
              flex flex-col items-center md:items-start space-y-4 
              md:-mt-3 lg:-mt-4
            "
          >
            <Image
              src="/innovative.png"
              alt="Innovative Technology Icon"
              width={60}
              height={60}
              className="object-contain mt-1"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#002E6E] -mt-1">
              Innovative Technology
            </h3>
            <p className="text-gray-800 text-[0.98rem] sm:text-base max-w-xs mt-1 leading-relaxed">
              We use the latest AI and automation tools to create intelligent, data-driven marketing strategies.
            </p>
          </div>

          {/* 🟦 Industry Expertise */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/expertise.png"
              alt="Industry Expertise Icon"
              width={70}
              height={70}
              className="object-contain mt-2"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#002E6E]">
              Industry Expertise
            </h3>
            <p className="text-gray-800 text-[0.98rem] sm:text-base max-w-xs mt-1 leading-relaxed">
              Our experienced team understands your market and tailors solutions for measurable results.
            </p>
          </div>

          {/* 🟦 Scalability */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/scalability.png"
              alt="Scalability Icon"
              width={70}
              height={70}
              className="object-contain mt-2"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[#002E6E]">
              Scalability
            </h3>
            <p className="text-gray-800 text-[0.98rem] sm:text-base max-w-xs mt-1 leading-relaxed">
              Our strategies evolve with your business — ensuring sustainable and long-term growth.
            </p>
          </div>
        </div>

        {/* ✅ Divider Line */}
        <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
          <hr className="border-t-[1.5px] border-[#000000] w-[96%] sm:w-[95%] md:w-[96%] lg:w-[97%] xl:w-[96%] rounded-full" />
        </div>
      </section>
    </>
  );
}
