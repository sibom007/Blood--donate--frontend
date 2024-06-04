import { Box } from "@mui/material";
import BloodRequestFrom from "../components/BloodRequestFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donate App | Donner Request",
  description: "Donner Request",
};


type Tprops = {
  params: {
    donnerId: string;
  };
  searchParams: {};
};
const DonnerRequest = (params: Tprops) => {
  const id = params.params.donnerId;
  return (
    <Box>
      <BloodRequestFrom id={id} />
    </Box>
  );
};

export default DonnerRequest;
