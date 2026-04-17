"use client";

export default function WhoWeAreSection() {
  return (
    <>
      {/* ✅ Who We Are Section */}
      <section className="bg-white text-[#3C2A2A] py-12 sm:py-14 px-5 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-6 text-center">
            Who We Are
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Sky Insights is excited to begin a new chapter from{" "}
            <span className="text-[#004C97] font-medium">Mumbai</span>, delivering digital marketing solutions that help
            brands establish a strong online presence. Our mission is to enhance{" "}
            <span className="text-[#004C97] font-medium">visibility</span> across major platforms like Google and Bing,
            driving measurable growth and lasting impact in a competitive digital space.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Backed by a <span className="text-[#004C97] font-medium">results-driven approach</span>, we offer{" "}
            <span className="text-[#004C97] font-medium">360° marketing strategies</span> tailored to each client’s
            goals. The Sky Insights team combines technology and creative strategy to achieve{" "}
            <span className="text-[#004C97] font-medium">fast ROI</span> and long-term digital success.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Whether you aim to boost sales, attract leads, or build recognition, Sky Insights is your trusted partner. We
            handle complex marketing tasks so you can focus on{" "}
            <span className="text-[#004C97] font-medium">growing your business</span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Working with Sky Insights means collaborating with{" "}
            <span className="text-[#004C97] font-medium">digital experts</span> who understand{" "}
            <span className="text-[#004C97] font-medium">Mumbai’s market</span>. We empower clients with{" "}
            <span className="text-[#004C97] font-medium">innovative tools</span> and personalized support for consistent
            and measurable results.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Sky Insights delivers specialized services across{" "}
            <span className="text-[#004C97] font-medium">healthcare</span>,{" "}
            <span className="text-[#004C97] font-medium">real estate</span>,{" "}
            <span className="text-[#004C97] font-medium">B2B</span>, and professional sectors. With our expert team and
            advanced tools, we’re here to elevate your brand to new heights in{" "}
            <span className="text-[#004C97] font-medium">Mumbai</span>.
          </p>
        </div>
      </section>

      {/* ✅ Divider Line (Responsive & Centered) */}
      <div className="w-full flex justify-center mt-3 sm:mt-5 md:mt-8">
        <hr className="border-t-[1.5px] border-gray-400 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] rounded-full" />
      </div>
    </>
  );
}
