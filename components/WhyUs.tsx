import { FEATURES, type Feature } from "@/lib/constants";

type IconKey = Feature["icon"];

const iconMap: Record<IconKey, string> = {
  doctor: "👨‍⚕️",
  tech: "🔬",
  price: "💰",
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-serif font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Your trusted partner for exceptional dental care
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="text-6xl mb-6">{iconMap[feature.icon]}</div>

              {/* Title */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "var(--color-teal)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
