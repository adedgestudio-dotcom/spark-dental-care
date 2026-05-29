"use client";

import { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl" style={{ color: "var(--color-gold)" }}>
              ✦
            </span>
            <span
              className="text-xl font-serif font-semibold"
              style={{ color: "var(--color-teal)" }}
            >
              {CLINIC_INFO.name}
            </span>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text)" }}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text)" }}
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text)" }}
            >
              Testimonials
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text)" }}
            >
              Location
            </a>
          </div>

          {/* CTA Button */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="px-6 py-3 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}
