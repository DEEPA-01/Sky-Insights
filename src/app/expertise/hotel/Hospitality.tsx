"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Utensils, Home, Building2, Castle } from "lucide-react";

export default function DigitalMarketingForHospitality() {
  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      {/* Container */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[1.6rem] sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6"
        >
          Digital Marketing for{" "}
          <span className="text-black">
            Farmhouses, Restaurants, Resorts & Villas
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-[1.15rem] sm:text-lg md:text-xl max-w-4xl leading-relaxed mb-14 indent-8"
        >
          Sky Insights helps hospitality brands — from cozy farmhouses to luxury villas,
          fine-dining restaurants, and world-class resorts — build a strong digital footprint
          that attracts guests, boosts engagement, and drives direct bookings.
        </motion.p>

        {/* Four sections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          
          {/* Farmhouses */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-full max-w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/farmhouse.png"
                alt="Farmhouse Digital Marketing"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Home className="text-blue-600 w-7 h-7" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Farmhouses
              </h3>
            </div>
            <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-sm">
              We craft storytelling-led campaigns that highlight peaceful stays and unique farmhouse experiences — connecting you to travelers seeking serenity.
            </p>
          </motion.div>

          {/* Restaurants */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-full max-w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/restaurants.png"
                alt="Restaurant Digital Marketing"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Utensils className="text-blue-600 w-7 h-7" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Restaurants
              </h3>
            </div>
            <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-sm">
              From social media storytelling to Google and Instagram ads, we help restaurants build visibility and turn diners into loyal customers.
            </p>
          </motion.div>

          {/* Resorts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-full max-w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/resort.png"
                alt="Resort Digital Marketing"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Building2 className="text-blue-600 w-7 h-7" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Resorts
              </h3>
            </div>
            <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-sm">
              We design digital strategies that showcase your resort’s beauty, experiences, and hospitality — driving direct bookings effortlessly.
            </p>
          </motion.div>

          {/* Villas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-full max-w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/villas.png"
                alt="Villa Digital Marketing"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Castle className="text-blue-600 w-7 h-7" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Villas
              </h3>
            </div>
            <p className="text-gray-700 text-[1.15rem] sm:text-base md:text-lg leading-relaxed max-w-sm">
              For premium villas, we craft elegant digital campaigns that emphasize luxury, privacy, and exclusivity — turning browsers into guests.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
