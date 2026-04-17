"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SkyInsightsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 overflow-hidden -mt-16 sm:-mt-18 md:-mt-20">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col items-center">

        {/* 🔹 Centered Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-10 leading-tight"
        >
          Sky Insights —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B8FF]">
            Transforming Digital Presence
          </span>
        </motion.h2>

        {/* 🔹 Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-7xl">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
              Sky Insights is not just about connecting brands with their audience — it’s about creating
              meaningful relationships that inspire trust and loyalty.
            </p>

            <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed mb-5">
              Our platform empowers you to showcase your expertise, your story, and your brand’s purpose —
              giving you the voice to stand out in the ever-evolving digital world.
            </p>

            <p className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed">
              The digital landscape offers countless opportunities, but navigating it requires knowledge,
              strategy, and insight. Sky Insights brings all three together — blending creativity with analytics
              to help your brand achieve measurable growth.
            </p>

            {/* Expandable Learn More Content */}
            {showMore && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl leading-relaxed pt-4"
              >
                With Sky Insights, you gain access to smart digital tools, expert-driven strategies, and
                performance-focused solutions that elevate your brand’s visibility and impact across the
                digital ecosystem.
              </motion.p>
            )}

            <div className="pt-6">
              <motion.button
                onClick={() => setShowMore(!showMore)}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#0077B6] to-[#00B8FF] text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                {showMore ? "Show Less" : "Learn More"}
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE */}
         {/* RIGHT — IMAGE */}
{/* RIGHT — IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex-1 flex justify-center"
>
  <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
  <Image
    src="/management.png"
    alt="Sky Insights"
    fill
    className="object-cover rounded-2xl"
  />
</div>

</motion.div>



        </div>
      </div>
    </section>
  );
}
