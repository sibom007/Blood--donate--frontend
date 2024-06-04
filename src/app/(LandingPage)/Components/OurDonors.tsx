"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Slider from "./Slider";
import PersonIcon from "@mui/icons-material/Person";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";

const OurDonors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}>
      <Box sx={{ backgroundColor: "#f6f6f6", mt: 7 }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 7 }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: 600,
              }}>
              Our Donors
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#6b7280",
                fontWeight: 400,
              }}>
              Meet some of our amazing blood donors.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={5}
              className="md:mt-5"
              sx={{
                ml: 2,
                justifyContent: "center",
                justifyItems: "center",
              }}>
              <Box>
                <Stack direction={"row"} spacing={2} sx={{ mt: 9 }}>
                  <PersonIcon sx={{ color: "#1e40af", fontSize: "30px" }} />
                  <Typography>JOHN DOE</Typography>
                </Stack>
                <Typography sx={{ ml: 7 }}>
                  A regular donor who has saved numerous lives.
                </Typography>
                <button className="mt-3 hover-link text-blue-800 font-medium ml-14">
                  Learn More
                  <span>
                    <EastIcon />
                  </span>
                </button>
              </Box>
              <Slider />
            </Stack>
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
                  Join our Heros
                </Typography>
              </button>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default OurDonors;
