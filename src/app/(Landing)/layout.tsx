import { Footer } from "@/feature/landing/components/footer";
import { Navigation } from "@/feature/landing/components/navigation";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
