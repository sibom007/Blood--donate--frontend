"use client";
import { Box, Container, Typography } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const BecomeADonor = () => {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["#A0DEFF", "#615EFC"]
  );
  return (
    <motion.div style={{ background }}>
      <Container maxWidth="lg" component="div">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 10,
          }}>
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                color: "white",
                mt: 10,
              }}>
              Ready to make a difference?
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                justifyContent: "center",
                color: "rgb(244 244 245 / 0.9)",
                textAlign: "center",
                mt: 1,
              }}>
              Join us today and start saving lives.
            </Typography>

            <Box sx={{ p: 2, bgcolor: "white", borderRadius: "20px", mb: 10 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}>
                <Box
                  className="bg-blue-600/20"
                  sx={{
                    borderRadius: "50%",
                    p: 1,
                  }}>
                  <KeyboardDoubleArrowUpIcon sx={{ fontSize: "30px" }} />
                </Box>
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  mt: 1,
                  fontSize: "20px",
                  fontWeight: 700,
                }}>
                Become a Donor
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: 500,
                }}>
                Join our community of life-savers.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                  mt: 3,
                  mb: 3,
                }}>
                <Link
                  href="/authorization"
                  className="mt-3 hover-link text-blue-800 font-medium">
                  Sign Up
                  <span>
                    <EastIcon />
                  </span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default BecomeADonor;
