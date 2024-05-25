import { useAuth } from "@/lib/AuthProviders/AuthProviders";
import { logOut } from "@/service/Action/Login";
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthButton = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogOut = async () => {
    await logOut();
    router.push("/authorization");
  };

  return (
    <>
      {user && user.id ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/authorization">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
