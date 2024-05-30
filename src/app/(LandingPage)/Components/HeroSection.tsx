import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import png from "../../../../public/doctors.png";

const HeroSection = () => {
  return (
    <>
      <Stack
        sx={{ mt: 5 }}
        direction={"row"}
        spacing={{ xs: 3, sm: 6, md: 8, lg: 15 }}>
        <Box>
          <h1 className=" text-[20px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-bold">
            Donate Blood, Save <br />
            Lives 😊
          </h1>
          <p>
            Your blood can give someone a second chance at life. Join us today.
            😄
          </p>
          <button className="">
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
              Become a Donner
            </Typography>
          </button>
          <p className="mt-4 text-gray-500">
            Every drop counts. Your donation can make a difference. 🩸
          </p>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Image src={png} width={400} height={400} alt="doner" />
        </Box>
      </Stack>
    </>
  );
};

export default HeroSection;
