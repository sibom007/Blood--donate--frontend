import { Metadata } from "next";
import BloodReqFormeTable from "./components/BloodRequestTable";
export const metadata: Metadata = {
  title: "Blood Donate App | Blood Request Me",
  description: "Blood Request Me",
};
const UserDashBord = () => {
  return (
    <div>
      {/* <BloodReqFormeTable /> */}
      user dashboard
    </div>
  );
};

export default UserDashBord;
