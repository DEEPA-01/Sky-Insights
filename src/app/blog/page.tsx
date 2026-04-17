"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      date: "October 10, 2025",
      excerpt:
        "Discover how AI, automation, and personalization are reshaping the digital marketing landscape for businesses worldwide.",
      image: "/images/blog1.jpg",
      category: "Digital Marketing",
    },
    {
      id: 2,
      title: "Building High-Converting Shopify Stores",
      date: "September 22, 2025",
      excerpt:
        "Learn the best practices to create Shopify stores that attract visitors, drive sales, and deliver a seamless user experience.",
      image: "/images/blog2.jpg",
      category: "E-Commerce",
    },
    {
      id: 3,
      title: "How SEO Boosts Brand Visibility Online",
      date: "August 5, 2025",
      excerpt:
        "Understand why SEO is still the most powerful tool to drive organic traffic, enhance credibility, and dominate search results.",
      image: "/images/blog3.jpg",
      category: "SEO",
    },
    {
      id: 4,
      title: "Social Media Marketing Trends to Watch",
      date: "July 28, 2025",
      excerpt:
        "Stay ahead of your competition by learning the latest trends in social media marketing that actually deliver ROI.",
      image: "/images/blog4.jpg",
      category: "Social Media",
    },
  ];

  const categories = ["All", "Digital Marketing", "E-Commerce", "SEO", "Social Media"];

  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-24 px-6 md:px-12">
        <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/30 blur-3xl rounded-full animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Insights & Trends from{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-100 bg-clip-text text-transparent">
              Sky Insights
            </span>
          </motion.h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore expert perspectives, tips, and strategies that help brands grow, innovate, and lead in the digital world.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all"
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" /> {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Stay Ahead in Digital Marketing?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to Sky Insights and get our latest articles, trends, and tips delivered straight to your inbox.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </main>
  );
}
