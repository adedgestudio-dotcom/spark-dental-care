"use client";

import { TRUST_POINTS } from "@/lib/constants";

export default function TrustBar() {
  const icons = ["⭐", "📍", "🕐", "❤️"];

  return (
    <div
      className="py-8 border-y relative overflow-hidden trust-bar"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-teal-light)",
      }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5 trust-bar-shimmer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-default transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-teal-light)",
                  border: "2px solid var(--color-teal)",
                }}
              >
                <span className="text-2xl">{icons[index]}</span>
              </div>

              {/* Text */}
              <span
                className="text-sm sm:text-base font-semibold transition-colors duration-300"
                style={{ color: "var(--color-text)" }}
              >
                {point}
              </span>

              {/* Decorative underline on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-300 mt-2"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
