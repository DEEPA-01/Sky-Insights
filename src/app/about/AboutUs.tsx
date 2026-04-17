"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* 🩵 About Us Section */}
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-20 lg:px-28 pt-10 sm:pt-16 md:pt-16 pb-16 overflow-hidden">
        {/* Left Side Text */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left space-y-6 md:pr-10 md:-mt-4 lg:-mt-6"
        >
          {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-[#004C97] mb-6">
            {/* About <span className="text-[#00AEEF]">Sky Insights</span> 
          </h1> */}

          <p className="text-gray-900 text-[1.09rem] sm:text-lg leading-relaxed">
            Sky Insights is excited to begin a new chapter from Mumbai, delivering dynamic
            digital marketing solutions tailored for brands that want to establish a powerful
            online presence. Our mission is to help businesses maximize their visibility
            across leading search engines like Google and Bing, ensuring clients stand out in
            a competitive digital landscape with measurable growth and impact.
          </p>

          <p className="text-gray-900 text-[1.09rem] sm:text-lg leading-relaxed">
            Inspired by a results-driven approach, we offer 360-degree digital marketing
            services expertly adapted to each client’s specific goals. Our team at Sky Insights
            combines technology with creative strategies, focusing on rapid ROI while optimizing
            every step of the digital journey for long-term success.
          </p>

          <p className="text-gray-900 text-[1.09rem] sm:text-lg leading-relaxed">
            Businesses looking to boost sales, attract prospects, and gain recognition will find
            Sky Insights the perfect partner. We help brands unlock new opportunities and handle
            complex marketing challenges so they can focus on growing their business.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
        >
          <Image
            src="/About.png"
            alt="About Sky Insights"
            width={520}
            height={520}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* 💫 Middle Continuation Section */}
      <section className="bg-white px-8 sm:px-12 md:px-24 lg:px-32 pb-14 sm:pb-16 md:pb-20 -mt-8 sm:-mt-10 md:-mt-12 text-center md:text-left">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-gray-900 text-[1.09rem] sm:text-lg leading-relaxed">
            Choosing Sky Insights means collaborating with digital experts who understand
            Mumbai’s fast-evolving marketplace. We simplify the process for our clients,
            empowering them with innovative tools and personalized support that ensures
            marketing runs seamlessly and delivers consistent results.
          </p>

          <p className="text-gray-900 text-[1.09rem] sm:text-lg leading-relaxed">
            At Sky Insights, we provide specialized digital marketing services across industries
            such as healthcare, real estate, B2B, and professional services. With our dedicated
            team and advanced tools, we’re ready to take your brand to new heights in Mumbai —
            building lasting growth and long-term success together.
          </p>
        </div>
      </section>
    </>
  );
}
