"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi"; // ✅ Arrow icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);


  type InnerItem = { name: string; href: string };
  type SubItem = { name: string; href?: string; subDropdown?: InnerItem[] };
  type MenuItem = { name: string; href?: string; dropdown?: SubItem[] };

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "SEO Optimization", href: "/services/seo-optimization" },
        { name: "Video Marketing", href: "/services/video-marketing" },
        { name: "Email Marketing", href: "/services/email-marketing" },
        { name: "Club Marketing", href: "/services/club-marketing" },
        {
          name: "Social Marketing",
          subDropdown: [
            { name: "Social Media Marketing", href: "/services/social-marketing/social-media" },
            { name: "Social Media Management", href: "/services/social-marketing/social-management" },
          ],
        },
      ],
    },
    {
      name: "Website",
      dropdown: [
        { name: "Custom Website", href: "/website/custom" },
        { name: "Ecommerce Website", href: "/website/ecommerce" },
        { name: "Shopify Website", href: "/website/shopify" },
      ],
    },
    {
      name: "Expertise",
      dropdown: [
        { name: "Hotel Digital Marketing", href: "/expertise/hotel" },
        { name: "Education Digital Marketing", href: "/expertise/education" },
        { name: "Real Estate Digital Marketing", href: "/expertise/real-estate" },
        { name: "Travel Digital Marketing", href: "/expertise/travel" },
        { name: "Jewellery Digital Marketing", href: "/expertise/jewellery" },
        {
          name: "Healthcare Digital Marketing",
          subDropdown: [
            { name: "Hospital Digital Marketing", href: "/expertise/healthcare/hospitals" },
            { name: "IVF Digital Marketing", href: "/expertise/healthcare/ivf" },
            { name: "Gym & Fitness Digital Marketing", href: "/expertise/healthcare/gym" },
          ],
        },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔹 Function to handle clicks on direct links (so mobile navigation works)
  const handleNavigation = (href?: string) => {
    if (href) {
      router.push(href);
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">

      {/* ===================== PHONE MENU OVERLAY ===================== */}
      {showPhoneMenu && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[99999]">
          <div className="bg-white rounded-xl p-6 w-[270px] text-center shadow-2xl">
            <h3 className="text-lg font-semibold mb-4">Choose a number</h3>

            <a
              href="tel:+918779290627"
              className="block bg-[#004C8C] text-white py-2 rounded-lg mb-3 hover:bg-[#00AEEF] transition"
            >
              Call +91 87792 90627
            </a>

            <a
              href="tel:+918108570749"
              className="block bg-[#004C8C] text-white py-2 rounded-lg mb-3 hover:bg-[#00AEEF] transition"
            >
              Call +91 81085 70749
            </a>

            <button
              onClick={() => setShowPhoneMenu(false)}
              className="block px-6 bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition mx-auto"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* ===================== TOP BAR ===================== */}
      <div className="w-full bg-white text-black text-sm px-4 md:px-8 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">

          {/* CONTACT + LOCATION */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-1 text-center sm:text-left w-full md:w-auto">

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">

              {/* PHONE BUTTON (opens popup) */}
              <button
                onClick={() => setShowPhoneMenu(true)}
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <FaPhoneAlt />
                +91-8779290627 / +91-8108570749
              </button>

              {/* EMAIL */}
              <a
                href="mailto:info@skyinsights.in"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <FaEnvelope /> info@skyinsights.in
              </a>

              {/* DESKTOP LOCATION */}
              <span className="hidden md:flex items-center gap-2 whitespace-nowrap cursor-default">
                <FaMapMarkerAlt /> Vidyavihar, Mumbai
              </span>
            </div>

            {/* MOBILE — LOCATION + SOCIAL */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 mt-1 md:mt-0 md:hidden">
              <span className="flex items-center gap-2 whitespace-nowrap cursor-default">
                <FaMapMarkerAlt /> Vidyavihar, Mumbai
              </span>

              <div className="flex items-center justify-center gap-2">
                <span className="font-medium whitespace-nowrap">Follow us on:</span>

                <a href="https://wa.me/918779290627" target="_blank">
                  <FaWhatsapp className="text-[16px] hover:text-[#25D366] transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/sky_insights_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[16px] hover:text-[#E4405F] transition-colors" />
                </a>

                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedinIn className="text-[16px] hover:text-[#0077B5] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* DESKTOP SOCIAL ICONS */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <span className="font-medium whitespace-nowrap">Follow us on:</span>

            <a href="https://wa.me/918779290627" target="_blank">
              <FaWhatsapp className="text-[18px] hover:text-[#25D366] transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-[18px] hover:text-[#E4405F] transition-colors" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn className="text-[18px] hover:text-[#0077B5] transition-colors" />
            </a>
          </div>

        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="relative flex items-center px-4 md:px-8 bg-[#152538] h-20">
        {/* Left: Logo */}
        <div className="flex items-center h-full z-10">
          <Image src="/Logo1.png" alt="Sky Insights Logo" width={180} height={120} className="w-auto max-h-[100px]" priority />
          <div className="h-10 border-l-2 border-white mx-2"></div>
          <Image src="/skyinsights.png" alt="Sky Insights Text Logo" width={300} height={170} className="h-36 md:h-44 w-auto object-contain" priority />
        </div>

        {/* Center: Desktop Menu (NOW centered using flex-1 + justify-center) */}
        <ul className="hidden md:flex flex-1 justify-center gap-5 font-medium h-full items-center whitespace-nowrap">
          {menuItems.map((item) => {
            const isActive =
              item.href === pathname ||
              (item.dropdown &&
                item.dropdown.some(
                  (sub) =>
                    sub.href === pathname ||
                    (sub.subDropdown && sub.subDropdown.some((inner) => inner.href === pathname))
                ));
            const isDropdownOpen = activeDropdown === item.name;

            return (
              <li
                key={item.name}
                className="relative h-full flex items-center group cursor-pointer px-1"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                <div
                  onClick={() =>
                    item.dropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : handleNavigation(item.href)
                  }
                  className={`flex items-center justify-center h-full px-3 transition-all duration-300 relative ${isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#004C8C]"
                    : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00AEEF] group-hover:to-[#004C8C]"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-[#00AEEF] to-[#004C8C] transition-all duration-300 ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                  ></span>

                  {item.dropdown && (
                    <span
                      className={`ml-1 text-[10px] transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#00AEEF]" : "text-white group-hover:text-[#00AEEF]"
                        }`}
                    >
                      ▼
                    </span>
                  )}
                </div>

                {/* ✅ Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-[100%] ${isDropdownOpen ? "flex" : "hidden"
                      } flex-col min-w-[260px] bg-white/95 text-[#0B2545] shadow-lg rounded-md z-50 py-3`}
                  >
                    {item.dropdown.map((sub, index) => {
                      const isSubActive =
                        sub.href === pathname ||
                        (sub.subDropdown && sub.subDropdown.some((inner) => inner.href === pathname));

                      return (
                        <div key={index} className="relative group flex items-center justify-between px-5 py-2">
                          <Link
                            href={sub.href ?? "#"}
                            className={`transition-all duration-300 ${isSubActive ? "text-[#00AEEF] font-semibold" : "hover:text-[#00AEEF]"
                              }`}
                          >
                            {sub.name}
                          </Link>

                          {sub.subDropdown && (
                            <>
                              <FiChevronRight className="text-[#00AEEF] text-[20px] font-bold stroke-[2.5]" />
                              <div className="absolute left-full top-0 hidden group-hover:flex flex-col min-w-[220px] bg-white text-[#0B2545] shadow-lg rounded-md py-2 z-50">
                                {sub.subDropdown.map((inner, idx) => (
                                  <Link
                                    key={idx}
                                    href={inner.href ?? "#"}
                                    className={`px-4 py-2 text-sm transition-all duration-300 ${pathname === inner.href
                                      ? "text-[#00AEEF] font-semibold"
                                      : "hover:text-[#00AEEF]"
                                      }`}
                                  >
                                    {inner.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: Mobile Menu Button */}
        <button
          className={`md:hidden ml-auto text-white text-2xl p-2 rounded-md transition-colors ${isOpen ? "bg-[#00AEEF]" : "bg-[#0586ef]"
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* ✅ Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0b1a2a] text-white flex flex-col py-4 px-6 md:hidden transition-all duration-300">
            {menuItems.map((item) => {
              const hasDropdown = item.dropdown;
              return (
                <div key={item.name} className="py-2 border-b border-gray-700">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      hasDropdown
                        ? setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        : handleNavigation(item.href)
                    }
                  >
                    <span
                      className={`text-xl font-medium ${pathname === item.href ? "text-[#00AEEF] font-semibold" : "hover:text-[#00AEEF]"
                        }`}
                    >
                      {item.name}
                    </span>
                    {hasDropdown && <span>{activeDropdown === item.name ? "▲" : "▼"}</span>}
                  </div>

                  {hasDropdown && activeDropdown === item.name && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.dropdown!.map((sub, idx) => {
                        const hasSubDropdown = !!sub.subDropdown;
                        const isSubOpen = activeSubDropdown === sub.name;
                        return (
                          <div key={idx}>
                            <div className="flex justify-between items-center">
                              <span
                                onClick={() => handleNavigation(sub.href)}
                                className={`block text-base py-1 cursor-pointer ${pathname === sub.href ? "text-[#00AEEF] font-semibold" : "hover:text-[#00AEEF]"
                                  }`}
                              >
                                {sub.name}
                              </span>
                              {hasSubDropdown && (
                                <FiChevronRight
                                  onClick={() => setActiveSubDropdown(isSubOpen ? null : sub.name)}
                                  className="text-[#00AEEF] text-[20px] font-bold stroke-[2.5] cursor-pointer"
                                />
                              )}
                            </div>
                            {hasSubDropdown && isSubOpen && (
                              <div className="pl-4 space-y-1 mt-1">
                                {sub.subDropdown!.map((inner, subIdx) => (
                                  <span
                                    key={subIdx}
                                    onClick={() => handleNavigation(inner.href)}
                                    className={`block text-sm py-1 cursor-pointer ${pathname === inner.href ? "text-[#00AEEF] font-semibold" : "hover:text-[#00AEEF]"
                                      }`}
                                  >
                                    {inner.name}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
