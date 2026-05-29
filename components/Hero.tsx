"use client";

import { CLINIC_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 animate-float"
          style={{
            background:
              "linear-gradient(135deg, var(--color-teal) 0%, var(--color-gold) 100%)",
            top: "10%",
            right: "-10%",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 animate-float"
          style={{
            background:
              "linear-gradient(135deg, var(--color-gold) 0%, var(--color-teal) 100%)",
            bottom: "20%",
            left: "-5%",
            animationDelay: "2s",
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(var(--color-teal) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-teal) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="fade-up text-center lg:text-left">
            {/* Small Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(212, 237, 238, 0.5)",
                border: "1px solid var(--color-teal-light)",
              }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-teal)" }}
              >
                ✨ Premium Dental Care
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Your Smile, <span className="sparkle-text">Perfected.</span>
            </h1>

            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Experience world-class dental care in the heart of Madhavaram.
              Where clinical excellence meets warm South Indian hospitality.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10">
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl font-bold font-accent"
                  style={{ color: "var(--color-teal)" }}
                >
                  {CLINIC_INFO.rating}★
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  Google Rating
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl font-bold font-accent"
                  style={{ color: "var(--color-teal)" }}
                >
                  8+
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  Services
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl font-bold font-accent"
                  style={{ color: "var(--color-teal)" }}
                >
                  100%
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  Care
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="group px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--color-teal)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
              <a
                href="#location"
                className="group px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-lg border-2 w-full sm:w-auto flex items-center justify-center gap-2"
                style={{
                  borderColor: "var(--color-teal)",
                  color: "var(--color-teal)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: Clinic Image with Modern Frame */}
          <div className="fade-up relative">
            {/* Decorative Frame Elements */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 rounded-tl-3xl"
              style={{ borderColor: "var(--color-gold)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 rounded-br-3xl"
              style={{ borderColor: "var(--color-teal)" }}
            />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Screenshot%202026-05-29%20194549.png"
                alt="Sparkle Dental Care - Modern Clinic Interior"
                className="w-full h-auto object-cover"
                style={{
                  minHeight: "400px",
                  objectPosition: "center 15%",
                  transform: "scale(1.15)",
                  marginTop: "-30px",
                }}
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    e.currentTarget.style.display = "none";
                    parent.innerHTML = `
                      <div class="flex items-center justify-center h-96 text-center p-8" style="background: linear-gradient(135deg, var(--color-teal-light) 0%, var(--color-bg) 100%)">
                        <div>
                          <div class="text-6xl mb-4">🦷</div>
                          <p class="text-lg font-semibold" style="color: var(--color-teal)">
                            Modern Dental Clinic
                          </p>
                          <p class="text-sm mt-2" style="color: var(--color-muted)">
                            State-of-the-art facilities in Madhavaram
                          </p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />

              {/* Floating Badge with Animation */}
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md z-10 animate-pulse-slow"
                style={{
                  backgroundColor: "rgba(26, 107, 114, 0.95)",
                  boxShadow: "0 8px 32px rgba(26, 107, 114, 0.3)",
                }}
              >
                <p className="text-white text-sm font-semibold flex items-center gap-2">
                  <span className="text-yellow-300">⭐</span>
                  {CLINIC_INFO.rating} Rated
                </p>
              </div>

              {/* Bottom Info Card */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-2xl backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              >
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: "var(--color-teal)" }}
                >
                  📍 {CLINIC_INFO.address.area}, Chennai
                </p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  Open: {CLINIC_INFO.hours.weekdays}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
