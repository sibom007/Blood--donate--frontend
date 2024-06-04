import { Metadata } from "next";
import UserTable from "./components/Usertable";

export const metadata: Metadata = {
  title: "Blood Donate App | Change User Status",
  description: "Change User Status",
};

const UserStatus = () => {
  return (
    <div>
      <UserTable />
    </div>
  );
};

export default UserStatus;
