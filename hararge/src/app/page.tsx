import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";
import ServicesPage from "@/components/Service";

export default function Home() {
  return (
    <div className="bg-[#FAF7F2]">
      <Hero />
      <AboutSection />
      <ServicesPage />
      <ContactSection />
    </div>
  );
}
