"use client";   
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyRealEstateNeedsDigitalMarketing() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
         <div className="relative w-full max-w-[520px] h-auto">
  <Image
    src="/estate.png"
    alt="Why Real Estate Needs Digital Marketing"
    width={600}
    height={600}
    className="rounded-2xl object-contain w-full h-auto"
  />
</div>


          {/* </div> */}
        </motion.div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why Does <span className="text-blue-600">Real Estate Business</span> Need Digital Marketing?
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            The real estate industry has grown rapidly over the years, but it transformed completely 
            with the rise of digital marketing. Traditional marketing methods like flyers, hoardings, 
            and word-of-mouth have now evolved into smarter, faster, and data-driven strategies.
          </p>

          <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            In the 21st century, people spend most of their time online — exploring new properties, 
            checking neighborhood details, comparing prices, and even taking virtual tours before they visit in person.
            This shift to digital platforms has made it crucial for real estate businesses to establish 
            a powerful presence on the internet.
          </p>

          <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
            Digital marketing not only increases visibility but also builds trust, credibility, 
            and engagement with potential buyers and investors. With tools like{" "}
            <span className="font-semibold text-blue-600">social media, SEO, paid campaigns,</span> 
            and <span className="font-semibold text-blue-600">content marketing</span>,
            real estate brands can reach the right audience faster, generate quality leads, 
            and close deals with precision.
          </p>

          <p className="text-gray-900 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed indent-8">
            At <span className="font-semibold text-blue-600">Sky Insights</span>, 
            we help real estate developers, brokers, and agencies grow digitally — 
            combining creativity with analytics to turn every click into a potential client.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
