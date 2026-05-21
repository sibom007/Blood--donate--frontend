import { Metadata } from "next";
import { WhyDonate } from "@/feature/landing/components/why-donate";
import { ImpactSection } from "@/feature/landing/components/impact-section";
import { RequestBlood } from "@/feature/landing/components/request-blood";
import { Testimonials } from "@/feature/landing/components/testimonials";
import { HeroSection } from "@/feature/landing/components/hero-section";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

const HomePage = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <WhyDonate />
      <ImpactSection />
      <RequestBlood />
      <Testimonials />
    </main>
  );
};

export default HomePage;
