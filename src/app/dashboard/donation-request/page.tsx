import { Metadata } from "next";
import MyBloodReqTable from "./components/MyBloodReqTable";
export const metadata: Metadata = {
  title: "Blood Donate App | My Blood Request",
  description: "My Blood Request",
};
const DonationRequest = () => {
  return (
    <div>
      <MyBloodReqTable />
    </div>
  );
};

export default DonationRequest;
