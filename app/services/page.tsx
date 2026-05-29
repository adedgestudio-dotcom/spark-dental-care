import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { SERVICES, CLINIC_INFO, type Service } from "@/lib/constants";

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

interface FAQ {
  q: string;
  a: string;
}

type ServiceFAQs = Record<string, FAQ[]>;

const serviceFAQs: ServiceFAQs = {
  "general-dentistry": [
    {
      q: "How often should I visit the dentist?",
      a: "We recommend visiting every 6 months for routine checkups and cleanings.",
    },
    {
      q: "What does a general checkup include?",
      a: "A comprehensive examination, cleaning, X-rays if needed, and oral health assessment.",
    },
  ],
  "teeth-cleaning": [
    {
      q: "Is teeth cleaning painful?",
      a: "No, professional cleaning is generally painless. You may feel slight sensitivity.",
    },
    {
      q: "How long does cleaning take?",
      a: "Typically 30-60 minutes depending on the condition of your teeth.",
    },
  ],
  whitening: [
    {
      q: "How long do results last?",
      a: "With proper care, whitening results can last 1-3 years.",
    },
    {
      q: "Is whitening safe?",
      a: "Yes, professional whitening is safe and effective when done by trained dentists.",
    },
  ],
  fillings: [
    {
      q: "What materials do you use?",
      a: "We use tooth-colored composite materials that blend naturally with your teeth.",
    },
    {
      q: "How long do fillings last?",
      a: "With proper care, fillings can last 5-15 years or more.",
    },
  ],
  extractions: [
    {
      q: "Will extraction hurt?",
      a: "We use local anesthesia to ensure you're comfortable throughout the procedure.",
    },
    {
      q: "What's the recovery time?",
      a: "Most patients recover within 3-7 days with proper aftercare.",
    },
  ],
  "root-canal": [
    {
      q: "Is root canal treatment painful?",
      a: "Modern techniques make root canals no more uncomfortable than getting a filling.",
    },
    {
      q: "How many visits are required?",
      a: "Most root canals can be completed in 1-2 visits.",
    },
  ],
  orthodontics: [
    {
      q: "What age is best for braces?",
      a: "While common in teens, orthodontic treatment can be effective at any age.",
    },
    {
      q: "How long does treatment take?",
      a: "Treatment typically ranges from 12-24 months depending on the case.",
    },
  ],
  pediatric: [
    {
      q: "When should my child first visit?",
      a: "We recommend the first visit by age 1 or when the first tooth appears.",
    },
    {
      q: "Do you handle anxious children?",
      a: "Yes, our team is specially trained to make children feel comfortable and safe.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl sm:text-6xl font-serif font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Our Services
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Comprehensive dental care with state-of-the-art technology and
            compassionate service
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "2px solid var(--color-teal-light)",
                }}
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{iconMap[service.icon]}</div>
                  <div>
                    <h2
                      className="text-3xl font-serif font-bold mb-2"
                      style={{ color: "var(--color-teal)" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-lg"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* FAQs */}
                {serviceFAQs[service.id] && (
                  <div className="mt-6 space-y-4">
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: "var(--color-text)" }}
                    >
                      Frequently Asked Questions
                    </h3>
                    {serviceFAQs[service.id].map((faq, index) => (
                      <div
                        key={index}
                        className="pl-4 border-l-4"
                        style={{ borderColor: "var(--color-gold)" }}
                      >
                        <p
                          className="font-semibold mb-2"
                          style={{ color: "var(--color-text)" }}
                        >
                          {faq.q}
                        </p>
                        <p style={{ color: "var(--color-muted)" }}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-teal-light)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-serif font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--color-muted)" }}>
            Our friendly team is here to help you achieve your best smile
          </p>
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="inline-block px-10 py-5 rounded-full text-white font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            📞 Call: {CLINIC_INFO.phoneDisplay}
          </a>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
