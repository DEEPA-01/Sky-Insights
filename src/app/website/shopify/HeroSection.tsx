// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Globe, Code2, LayoutDashboard } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl top-10 left-[-100px]" />
//         <div className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl bottom-20 right-[-100px]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//         {/* LEFT SIDE — TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left lg:w-1/2"
//         >
//           <p className="uppercase text-sm text-gray-500 tracking-wider mb-3">
//             Custom Website Development
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             Sky Insights — <br />
//             <span className="text-blue-600">Gym Website Design & Development</span>
//           </h1>

//           <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
//             We create powerful, high-performing websites tailored for gyms and fitness centers. 
//             From design to performance, our websites inspire trust, attract members, 
//             and turn online visitors into loyal fitness clients.
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start gap-4">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition">
//               Get Free Website Audit
//             </button>
//             <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
//               View Our Work
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE — CREATIVE MOCKUP IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//           className="relative lg:w-1/2 flex justify-center"
//         >
//           <div className="relative bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl p-6 hover:scale-[1.02] transition-all">
//             <Image
//               src="/images/gym-website-banner.jpg"
//               alt="Gym Website Development"
//               width={550}
//               height={400}
//               className="rounded-2xl object-cover"
//               priority
//             />

//             {/* Floating Mini Icons */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//               className="absolute top-[-20px] left-10 bg-white shadow-md rounded-full p-3"
//             >
//               <Globe className="w-6 h-6 text-blue-600" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
//               className="absolute bottom-[-20px] right-10 bg-white shadow-md rounded-full p-3"
//             >
//               <Code2 className="w-6 h-6 text-blue-600" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
//               className="absolute top-1/2 right-[-20px] bg-white shadow-md rounded-full p-3"
//             >
//               <LayoutDashboard className="w-6 h-6 text-blue-600" />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }











"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
<section className="relative overflow-hidden bg-[#060b22] text-white pt-36 sm:pt-28 md:pt-30 pb-10 sm:pb-12 md:pb-14">
      {/* Background Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-[#08112f] to-blue-600/30" />

      {/* Animated glowing orbs (Re-positioned for mobile) */}
      <div className="absolute top-[-40px] left-[-60px] sm:top-5 sm:left-[-80px] w-40 h-40 sm:w-48 sm:h-48 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] sm:bottom-0 sm:right-[-80px] w-52 h-52 sm:w-64 sm:h-64 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Decorative Mesh Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:35px_35px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          {/* Empower Your Brand with{" "} */}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Shopify Websites
          </span>
        </motion.h1>

        {/* Short Accent Line */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"
        ></motion.div> */}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-[1.05rem] sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Custom Shopify stores built to sell more and scale faster.
        </motion.p>

        {/* CTA Button Area (hidden) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
