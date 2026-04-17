"use client";
import Image from "next/image";

export default function IndustriesSection() {
  return (
    <>
      {/* ✅ Industries We Have Served Section */}
      <section className="bg-[#F8FAFC] py-16 px-6 sm:px-12 lg:px-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002E6E]">
            Industries We Served
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            At <strong>Sky Insights Digital Marketing Agency</strong>, our
            expertise spans across a wide range of industries — from sports, healthcare
            and education to real estate and Fitness. We craft data-driven
            digital strategies that deliver measurable success for every sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {[
            { name: "Sports", img: "/sport.png" },
            { name: "Healthcare", img: "/hospital.png" },
            { name: "Education", img: "/education.png" },
            { name: "Beauty", img: "/beauty.png" },
            { name: "Real Estate", img: "/realestatee.png" },
            { name: "Fitness", img: "/fitness.png" },
            { name: "E-commerce", img: "/ecommerce.png" },
            { name: "Hospitality & Food", img: "/food.png" },
            { name: "Jewellery & Fashion", img: "/jewellery.png" },
            { name: "Travel", img: "/travel.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
              />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#011430]/80 to-transparent text-[#0F172A] text-center py-3 shadow-[0_6px_12px_rgba(20,30,60,0.2)]">
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Divider Line Below Section */}
      {/* <div className="w-full flex justify-center mt-6">
        <hr className="border-t-2 border-gray-200 w-4/5 md:w-3/4 lg:w-2/3" />
      </div> */}
    </>
  );
}
