"use client";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useAuth } from "@/lib/AuthProviders/AuthProviders";

const FooterPage = () => {
  const user = useAuth();
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        px: 20,
        py: 3,
        mt: 8,
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          justifyItems: "center",
        }}>
        <Typography sx={{ fontSize: "15px", color: "#7b7b7b" }}>
          Email : {user?.user?.email}
        </Typography>
        <Box>
          <FacebookIcon sx={{ color: "#7b7b7b", fontSize: "30px" }} />
          <InstagramIcon sx={{ color: "#7b7b7b", fontSize: "30px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterPage;
