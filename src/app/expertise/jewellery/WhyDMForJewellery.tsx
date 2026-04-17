"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyDigitalMarketingForJewellery() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-[1.8rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Why Digital Marketing for Jewellery Brands?
          </h2>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-4">
            In today’s luxury market, visibility defines success. With the rise of online
            shopping and social media influence, digital marketing has become the ultimate
            sparkle for jewellery brands looking to shine brighter than their competitors.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-4">
            At <span className="font-semibold text-yellow-600">Sky Insights</span>, we help
            jewellery businesses create a powerful online presence that reflects elegance and trust. 
            Our strategies ensure your brand reaches the right audience, turning admiration into sales.
          </p>

          <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
            With our targeted campaigns, creative visuals, and data-backed insights, you gain
            a **huge return on investment** by connecting directly with customers who are actively
            seeking luxury pieces — all without the limits of a physical store.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/jewlleryy.png"
            alt="Jewellery Digital Marketing"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-contain h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
