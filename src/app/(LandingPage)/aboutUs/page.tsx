import { Box, Stack, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "25px",
          mt: 3,
        }}>
        About US
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello You can see About Us
      </Typography>

      <Stack direction={"column"}>
        <div className="mt-8 sm:mx-auto w-9/12">
          <Box
            className="bg-[#E6FF94] px-4
          py-6 shadow sm:rounded-lg sm:px-10 ">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                mt: 1,
                color: "rgb(39 39 42 / 0.7);",
              }}>
              Mission Statement
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "rgb(39 39 42 / 0.7);", mt: 1 }}>
              Our website is dedicated to fostering a community of life-saving
              heroes by promoting the vital act of blood donation. We aim to
              educate the public about the critical need for blood donations,
              connect donors with recipients, and facilitate convenient and safe
              donation opportunities. Our mission is to ensure that no patient
              in need of blood ever has to face a shortage, and to inspire
              individuals to become regular donors, making a tangible difference
              in the lives of countless people.
            </Typography>
          </Box>
        </div>
        <div className="mt-8 sm:mx-auto w-9/12">
          <Box
            className="bg-[#EADBC8] px-4
          py-6 shadow sm:rounded-lg sm:px-10 ">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                mt: 1,
                color: "rgb(39 39 42 / 0.7);",
              }}>
              Team Information
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "rgb(39 39 42 / 0.7);", mt: 1 }}>
              Our website is dedicated to fostering a community of life-saving
              heroes by promoting the vital act of blood donation. We aim to
              educate the public about the critical need for blood donations,
              connect donors with recipients, and facilitate convenient and safe
              donation opportunities. Our mission is to ensure that no patient
              in need of blood ever has to face a shortage, and to inspire
              individuals to become regular donors, making a tangible difference
              in the lives of countless people.
            </Typography>
          </Box>
        </div>
        <div className="mt-8 sm:mx-auto w-9/12">
          <Box
            className="bg-[#E1AFD1] px-4
          py-6 shadow sm:rounded-lg sm:px-10 ">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                mt: 1,
                color: "rgb(39 39 42 / 0.7);",
              }}>
              Why Blood Donation Matters
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "rgb(39 39 42 / 0.7);", mt: 1 }}>
              Blood donation is a simple yet powerful act that can save lives.
              Every two seconds, someone in the world needs blood. Blood
              transfusions are crucial for surgeries, cancer treatments, chronic
              illnesses, and traumatic injuries. By donating blood, you provide
              a lifeline for those in critical need. Our website aims to
              demystify the process, alleviate concerns, and encourage more
              people to become regular donors. We provide comprehensive
              resources and support to make your donation experience positive
              and rewarding.
            </Typography>
          </Box>
        </div>
        <div className="mt-8 sm:mx-auto w-9/12">
          <Box
            className="bg-[#A3D8FF] px-4
          py-6 shadow sm:rounded-lg sm:px-10 ">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                mt: 1,
                color: "rgb(39 39 42 / 0.7);",
              }}>
              Join Our Life-Saving Community
            </Typography>
            <Typography
              sx={{ fontSize: "15px", color: "rgb(39 39 42 / 0.7);", mt: 1 }}>
              We invite you to join our community of donors and advocates. By
              registering on our website, you can receive updates on upcoming
              blood drives, track your donation milestones, and connect with
              other donors. Together, we can build a network of lifesavers who
              are ready to step up when the need arises. Your donation could be
              the difference between life and death for someone in your
              community. Become a part of our mission to ensure that safe and
              sufficient blood supplies are always available for those in need.
            </Typography>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
