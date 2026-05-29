"use client";

import { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="text-xl sm:text-2xl"
              style={{ color: "var(--color-gold)" }}
            >
              ✦
            </span>
            <span
              className="text-base sm:text-xl font-serif font-semibold"
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

          {/* CTA Button - Desktop */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:block px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            Book Appointment
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: "var(--color-teal)" }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden pb-4 space-y-3">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Testimonials
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Location
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="block w-full text-center px-6 py-3 rounded-full text-white font-medium text-sm transition-all duration-300"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
