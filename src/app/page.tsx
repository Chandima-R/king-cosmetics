import CompanyIntroduction from "@/components/landing/company-introduction/CompanyIntroduction";
import ContactInformation from "@/components/landing/contact-us/ContactInformation";
import TestimonialsSection from "@/components/landing/customer-reviews/TestimonialsSection";
import FeaturedProducts from "@/components/landing/featured-product/FeaturedProducts";
import Hero from "@/components/landing/hero/Hero";
import WhyChooseUsSection from "@/components/landing/why-choose-us/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <FeaturedProducts />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactInformation />
    </>
  );
}
