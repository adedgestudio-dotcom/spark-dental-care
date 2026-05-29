import { CLINIC_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--color-teal)",
        borderColor: "var(--color-teal)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" style={{ color: "var(--color-gold)" }}>
                ✦
              </span>
              <span className="text-xl font-serif font-semibold text-white">
                {CLINIC_INFO.name}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted dental care partner in Madhavaram, Chennai. Where
              clinical excellence meets warm hospitality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📍 {CLINIC_INFO.address.full}</p>
              <p>
                📞{" "}
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
              <p>⭐ {CLINIC_INFO.rating} Rating</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>
                <span className="font-semibold text-white">Mon - Sat:</span>{" "}
                {CLINIC_INFO.hours.weekdays}
              </p>
              <p>
                <span className="font-semibold text-white">Sunday:</span>{" "}
                {CLINIC_INFO.hours.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-white/20">
          <a
            href="#services"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#location"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Location
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p className="mb-3">
            © {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <a
            href="https://zorivo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/80 hover:text-white text-xs font-medium"
          >
            <span>✨</span>
            <span>Created by Zorivo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
