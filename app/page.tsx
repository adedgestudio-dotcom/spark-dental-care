import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <LocationCTA />
      <Footer />
      <Chatbot />
    </div>
  );
}
