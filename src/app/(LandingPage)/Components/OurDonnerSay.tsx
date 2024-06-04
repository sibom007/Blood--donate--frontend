import { Box, Container, Typography } from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import EastIcon from "@mui/icons-material/East";

const OurDonnerSay = () => {
  return (
    <Container maxWidth="lg" component={"div"}>
      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: 600,
            mt: 10,
          }}>
          Our Donner Say
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            color: "#6b7280",
            mt: 2,
          }}>
          Hear from our community of donors.
        </Typography>
        <Box
          className="bg-white px-4
        py-6 shadow-lg sm:rounded-lg sm:px-10
        w-6/12
        mx-auto
        mt-10
        ">
          <BloodtypeIcon
            sx={{ color: "rgb(203 213 225 / 0.9)", fontSize: "30px" }}
          />
          <Typography sx={{ mt: 3, color: "#6b7280" }}>
            Donating Blood Was life-changing experience For me
          </Typography>
          <Typography sx={{ mt: 2, color: "#6b7280" }}>
            John Doe, REGULAR DONNER
          </Typography>
          <Box>
            <button className="mt-3 hover-link text-blue-800 font-medium">
              Read More
              <span>
                <EastIcon />
              </span>
            </button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
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
              Join Our Community
            </Typography>
          </button>
        </Box>
      </Box>
    </Container>
  );
};

export default OurDonnerSay;
