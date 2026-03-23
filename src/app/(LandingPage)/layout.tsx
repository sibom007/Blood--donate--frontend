import { NavBar } from "@/feature/shared/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
