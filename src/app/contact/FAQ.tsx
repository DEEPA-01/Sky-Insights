"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        {
            q: "What services does your digital marketing agency provide?",
            a: "We offer a comprehensive range of digital marketing services including social media marketing, SEO, PPC advertising, content creation, email marketing, and more.",
        },
        {
            q: "How do your digital marketing strategies align with our business goals?",
            a: "We craft customized strategies after understanding your goals, audience, and industry, ensuring every campaign delivers measurable results.",
        },
        {
            q: "What is your agency’s approach to measuring and reporting on campaign performance?",
            a: "We provide transparent reporting with KPIs, analytics, monthly insights, and optimization strategies.",
        },
        {
            q: "Do you have experience working with businesses in our industry?",
            a: "Yes! We work across multiple industries including real estate, healthcare, education, travel, hospitality, and more.",
        },
        {
            q: "How do you determine the budget and pricing for your digital marketing services?",
            a: "Pricing depends on project scope, deliverables, platform requirements, and monthly goals. Our solutions are always scalable.",
        },
    ];

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="relative w-full bg-[#fafafa] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">

            {/* 🟣 DOT SHAPE (Floating graphic) */}
            <div className="absolute left-6 bottom-6 opacity-60">
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
                    <circle cx="20" cy="20" r="4" fill="#888" />
                    <circle cx="40" cy="40" r="4" fill="#888" />
                    <circle cx="60" cy="55" r="4" fill="#888" />
                    <circle cx="30" cy="60" r="4" fill="#888" />
                    <circle cx="50" cy="20" r="4" fill="#888" />
                    <path
                        d="M20 20 C40 40, 50 20, 60 55"
                        stroke="#999"
                        strokeWidth="2"
                        fill="transparent"
                    />
                </svg>
            </div>

            {/* 🔵 TOP RIGHT CIRCLE */}
            <div className="absolute top-12 right-12 w-32 h-32 bg-purple-600 rounded-full opacity-80 blur-sm"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10">

                {/* LEFT TEXT */}
                <div>
                    <p className="text-sm text-yellow-600 font-semibold tracking-widest mb-2">
                        F A Q
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Have a question in mind?
                    </h2>

                    <p className="text-gray-600 mb-10 max-w-sm">
                        Can’t find your answers here? Send us a message.
                    </p>

                    <a
                        href="tel:+918779290627"
                        className="px-6 py-3 border border-yellow-600 text-yellow-700 rounded-md font-medium hover:bg-yellow-50 transition inline-block"
                    >
                        Contact Us
                    </a>


                </div>

                {/* RIGHT ACCORDION */}
                <div className="flex flex-col gap-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="bg-white shadow rounded-xl p-5">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-900"
                            >
                                {item.q}
                                <ChevronDown
                                    className={`w-6 h-6 transform transition ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {open === i && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-600 mt-3"
                                    >
                                        {item.a}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
