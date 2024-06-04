import HeroSection from "./Components/HeroSection";
import WhyDonateBlood from "./Components/Why-Donate-Blood";
import OurDonors from "./Components/OurDonors";
import BecomeADonor from "./Components/BecomeADonor";
import OurDonnerSay from "./Components/OurDonnerSay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donate App | Home",
  description: "Home",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyDonateBlood />
      <OurDonors />
      <BecomeADonor />
      <OurDonnerSay />
    </>
  );
};

export default HomePage;
