import { Box } from "@mui/material";
import BloodRequestFrom from "../components/BloodRequestFrom";

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
