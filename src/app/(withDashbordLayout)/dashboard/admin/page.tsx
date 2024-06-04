import { Metadata } from "next";
import BloodReqFormeTable from "../user/components/BloodRequestTable";
export const metadata: Metadata = {
  title: "Blood Donate App | Blood Request Me",
  description: "Blood Request Me",
};

const AdminDashbord = () => {
  return (
    <div>
      <BloodReqFormeTable />
    </div>
  );
};

export default AdminDashbord;
