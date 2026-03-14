import { Metadata } from "next";
import Change_password from "./Change_password";

export const metadata: Metadata = {
  title: "Blood Donate App | Change Password",
  description: "Change Password",
};
const ChangePassword = () => {
  return (
    <div>
      <Change_password />
    </div>
  );
};

export default ChangePassword;
