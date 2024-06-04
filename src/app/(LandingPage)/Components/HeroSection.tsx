"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import png from "@/assets/doctors.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Container maxWidth="lg" component="div">
      <Stack
        sx={{ mt: 5 }}
        direction={"row"}
        spacing={{ xs: 3, sm: 6, md: 8, lg: 15 }}>
        <Box>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 1 }}
            className=" text-[20px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-bold">
            Donate Blood, Save <br />
            Lives
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 1 }}>
            Your blood can give someone a second chance at life. Join us today.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, ease: "circInOut" }}
            viewport={{ once: false, amount: 0.4 }}>
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
                Become a Donor
              </Typography>
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, ease: "circInOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="mt-4 text-gray-500">
            Every drop counts. Your donation can make a difference.
          </motion.p>
        </Box>
        <motion.div
          initial={{ opacity: 0, x: -72 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, ease: [0.25, 0.25, 0.25, 0.5] }}
          viewport={{ once: false, amount: 0.4 }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Image src={png} width={400} height={400} alt="donor" />
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );
};

export default HeroSection;
