// Type Definitions
export interface Address {
  street: string;
  area: string;
  city: string;
  state: string;
  full: string;
}

export interface Hours {
  weekdays: string;
  sunday: string;
}

export interface ClinicInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
  address: Address;
  coordinates: string;
  mapEmbed: string;
  hours: Hours;
  rating: number;
  tagline: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon:
    | "tooth"
    | "sparkle"
    | "star"
    | "shield"
    | "cross"
    | "heart"
    | "align"
    | "smile";
}

export interface Feature {
  title: string;
  description: string;
  icon: "doctor" | "tech" | "price";
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

// Clinic Information Constants
export const CLINIC_INFO: ClinicInfo = {
  name: "Sparkle Dental Care",
  phone: "+919566009206",
  phoneDisplay: "095660 09206",
  address: {
    street: "Plot 9B, KKR Nagar",
    area: "Madhavaram",
    city: "Chennai",
    state: "Tamil Nadu",
    full: "Plot 9B, KKR Nagar, Madhavaram, Chennai, Tamil Nadu",
  },
  coordinates: "46MQ+VF Chennai",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!2d80.2!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  hours: {
    weekdays: "10:30 AM - 9:00 PM",
    sunday: "10:30 AM - 2:00 PM",
  },
  rating: 4.4,
  tagline: "Your Smile, Perfected.",
};

export const SERVICES: Service[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Comprehensive oral health care for the whole family",
    icon: "tooth",
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    description: "Professional deep cleaning for a healthier smile",
    icon: "sparkle",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Brighten your smile with safe, effective treatments",
    icon: "star",
  },
  {
    id: "fillings",
    title: "Dental Fillings",
    description: "Restore damaged teeth with natural-looking materials",
    icon: "shield",
  },
  {
    id: "extractions",
    title: "Tooth Extractions",
    description: "Gentle, pain-free removal when necessary",
    icon: "cross",
  },
  {
    id: "root-canal",
    title: "Root Canal",
    description: "Save your natural teeth with expert endodontic care",
    icon: "heart",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten teeth and correct bite issues",
    icon: "align",
  },
  {
    id: "pediatric",
    title: "Paediatric Dentistry",
    description: "Gentle, friendly care for children's dental health",
    icon: "smile",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Experienced Dentists",
    description:
      "Our team brings years of expertise and gentle care to every patient",
    icon: "doctor",
  },
  {
    title: "State-of-the-Art Equipment",
    description: "Modern technology for precise, comfortable treatments",
    icon: "tech",
  },
  {
    title: "Affordable Pricing",
    description: "Quality dental care that fits your budget",
    icon: "price",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya R.",
    rating: 5,
    text: "Excellent service! The staff is very friendly and the clinic is spotlessly clean. Dr. was very gentle during my root canal treatment.",
  },
  {
    name: "Rajesh K.",
    rating: 4,
    text: "Good dental clinic in Madhavaram area. Reasonable pricing and professional service. Highly recommended for families.",
  },
  {
    name: "Lakshmi S.",
    rating: 5,
    text: "My kids love coming here! The dentist is so patient with children. Clean environment and modern equipment.",
  },
  {
    name: "Arun M.",
    rating: 4,
    text: "Very satisfied with the teeth cleaning service. The team explained everything clearly and made me feel comfortable.",
  },
];

export const TRUST_POINTS: string[] = [
  "4.4★ Rated",
  "Madhavaram, Chennai",
  "Opens 10:30 AM",
  "Friendly & Gentle Care",
];
