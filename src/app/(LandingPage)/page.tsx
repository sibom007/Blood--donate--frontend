import { Container } from "@mui/material";
import HeroSection from "./Components/HeroSection";
import WhyDonateBlood from "./Components/Why-Donate-Blood";
import SearchDonner from "./donner/components/SearchDonner";

const HomePage = () => {
  return (
    <Container maxWidth="lg" component="div">
      <HeroSection />
      <WhyDonateBlood />
      <SearchDonner />
    </Container>
  );
};

export default HomePage;
