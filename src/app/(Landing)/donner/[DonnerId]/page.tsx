import { Box } from "@mui/material";
import DonnerDetails from "../components/DonnerDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donate App | Donner Details page",
  description: "Donner Details page",
};

type Tprops = {
  params: {
    DonnerId: string;
  };
  searchParams: {};
};

const DonnerDetailsPage = (params: Tprops) => {
  const id = params.params.DonnerId;

  return (
    <Box>
      <DonnerDetails id={id} />
    </Box>
  );
};

export default DonnerDetailsPage;
