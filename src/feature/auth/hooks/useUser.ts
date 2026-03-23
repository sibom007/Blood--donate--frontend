import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const useUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (user) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [user]);

  return { user, loading };
};
