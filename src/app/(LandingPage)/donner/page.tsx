import { Box } from "@mui/material";
import SearchDonner from "./components/SearchDonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donate App | Donner Page",
  description: "About Donation",
};


const DonnerPage = () => {
  return (
    <Box>
      <SearchDonner />
    </Box>
  );
};

export default DonnerPage;
