"use client";

import { SERVICES, type Service } from "@/lib/constants";

type IconKey = Service["icon"];

const iconMap: Record<IconKey, string> = {
  tooth: "🦷",
  sparkle: "✨",
  star: "⭐",
  shield: "🛡️",
  cross: "🔧",
  heart: "❤️",
  align: "📐",
  smile: "😊",
};

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-20"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-serif font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Our Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-teal-light)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-teal-light)";
                e.currentTarget.style.borderColor = "var(--color-teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
                e.currentTarget.style.borderColor = "var(--color-teal-light)";
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{iconMap[service.icon]}</div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-teal)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
