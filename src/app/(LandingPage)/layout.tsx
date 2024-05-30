import NavBar from "@/shared/NavBar/NavBar";
import { Box, Container } from "@mui/material";
import FooterPage from "@/shared/Footer/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <>
        <NavBar />
        <Box sx={{ minHeight: "100vh" }}>{children}</Box>
        <FooterPage />
      </>
    </Box>
  );
}
