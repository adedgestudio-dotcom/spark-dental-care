import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparkle Dental Care | Best Dentist in Madhavaram, Chennai",
  description:
    "Expert dental care in Madhavaram, Chennai. Offering teeth cleaning, whitening, root canal, orthodontics & more. Friendly staff, modern equipment, affordable pricing. Call 095660 09206",
  keywords:
    "dentist Madhavaram, dental clinic Chennai, teeth cleaning, teeth whitening, root canal, orthodontics, pediatric dentistry",
  openGraph: {
    title: "Sparkle Dental Care | Best Dentist in Madhavaram, Chennai",
    description:
      "Your trusted dental clinic in Madhavaram. Professional care, modern equipment, affordable pricing.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${bebas.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
