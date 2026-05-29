"use client";

import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            What Our Patients Say
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Real experiences from our valued patients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-teal-light)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-xl"
                    style={{
                      color:
                        i < testimonial.rating
                          ? "var(--color-gold)"
                          : "var(--color-muted)",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--color-text)" }}
              >
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p
                className="font-semibold"
                style={{ color: "var(--color-teal)" }}
              >
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
