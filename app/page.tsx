import Catalogue from '@/components/Catalogue';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import PartnersSection from '@/components/PartnersSection';
import SectorsSection from '@/components/SectorsSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseSection from '@/components/WhyChooseSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Nav is fixed (handles its own positioning) */}
      <Nav />

      <main className="w-full pt-20 lg:pt-32">
        <div className="mx-auto px-4 lg:px-2">
          <Hero />
          <Catalogue />
          <PartnersSection />
          <SectorsSection />
          <TestimonialSection />
          <WhyChooseSection />
          <TeamSection />
          <ContactSection />
          <section className="py-10" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
