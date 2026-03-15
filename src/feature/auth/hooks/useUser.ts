import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const useUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);

  return { user, loading };
};
