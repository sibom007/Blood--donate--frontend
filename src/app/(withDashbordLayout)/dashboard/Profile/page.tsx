import { Metadata } from "next";
import Profile from "./profile";

export const metadata: Metadata = {
  title: "Blood Donate App | My Profile",
  description: "My Profile",
};

const ProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
