import { Box, Container, Stack, Typography } from "@mui/material";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EastIcon from "@mui/icons-material/East";

const WhyDonateBlood = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          mt: 10,
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              justifyContent: "center",
              textAlign: "center",
            }}>
            Why Donate Blood ?
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 300,
                color: "#6b7280",
                mt: 1,
              }}>
              Your blood donation can bring a real change.
            </Typography>
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 2, sm: 3, md: 8 }}
            sx={{ mt: 5 }}>
            <Box>
              <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
                <DataSaverOnIcon fontSize="medium" sx={{ color: "#1e40af" }} />
                <Typography>SAVE LIVES</Typography>
              </Stack>
              <Typography sx={{ mt: 2, color: "#6b7280" }}>
                Every donation can save up to three <br /> lives.
              </Typography>
              <button className="mt-3 hover-link text-blue-800 font-medium">
                Learn More{" "}
                <span>
                  <EastIcon />
                </span>
              </button>
            </Box>
            <Box>
              <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
                <LocalHospitalIcon
                  fontSize="medium"
                  sx={{ color: "#1e40af" }}
                />
                <Typography> IMPROVE HEALTH</Typography>
              </Stack>
              <Typography sx={{ mt: 2, color: "#6b7280" }}>
                Regular blood donation can improve <br /> your overall health.
              </Typography>
              <Box>
                <button className="mt-3 hover-link text-blue-800 font-medium">
                  Health Benefits
                  <span>
                    <EastIcon />
                  </span>
                </button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          mt: 3,
        }}>
        {" "}
        <button>
          <Typography
            className="hover-link"
            sx={{
              py: 1,
              px: 4,
              mt: 4,
              backgroundColor: "",
              color: "#1e40af",
              border: "3px solid #1e40af",
              borderRadius: "6px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}>
            Start Donate
          </Typography>
        </button>
      </Box>
    </Box>
  );
};

export default WhyDonateBlood;
