import CompanyIntroduction from "@/components/landing/company-introduction/CompanyIntroduction";
import ContactInformation from "@/components/landing/contact-us/ContactInformation";
import TestimonialsSection from "@/components/landing/customer-reviews/TestimonialsSection";
import FAQSection from "@/components/landing/faq/FAQSection";
import FeaturedProducts from "@/components/landing/featured-product/FeaturedProducts";
import Hero from "@/components/landing/hero/Hero";
import WhyChooseUsSection from "@/components/landing/why-choose-us/WhyChooseUsSection";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyIntroduction />
      <div className="space-y-20 bg-background py-20 md:space-y-32 md:py-32">
        <FeaturedProducts />
        <WhyChooseUsSection />
        <TestimonialsSection />
        {/* <FAQSection /> */}
        <ContactInformation />
      </div>

    </div>
  );
}
