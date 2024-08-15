"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "@/app/(LandingPage)/donner/components/Style.css";
import Bimg from "@/assets/img.png";
import { useGetMyProfileQuery } from "@/Redux/api/Authapi";

const Profile = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
    return (
      <div className="md:ml-[350px]  lg:ml-[500px] mt-20">
        <div className="cssload-thecube ">
          <div className="cssload-cube cssload-c1"></div>
          <div className="cssload-cube cssload-c2"></div>
          <div className="cssload-cube cssload-c4"></div>
          <div className="cssload-cube cssload-c3"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="lg:ml-[200px] mt-10">
      <Box
        className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 w-full">
        <Stack direction={"row"} spacing={2}>
          <Image
            className="rounded-lg"
            src={data?.data?.photo || Bimg}
            alt="Photo"
            width={50}
            height={50}
          />

          <Typography>
            Profile details
            <br />
            <span>Hello Welcome {data?.data?.profile.bio}</span>
          </Typography>
        </Stack>
        <Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ ml: 9, mt: 2 }}>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography noWrap>Name : {data?.data?.name}</Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>Email : {data?.data?.email}</Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>Location : {data?.data?.location}</Typography>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ ml: 10, mt: 2 }}>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>Status : {data?.data?.status}</Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>BloodType : {data?.data?.bloodType}</Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>Age : {data?.data?.profile.age}</Typography>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ ml: 10, mt: 2 }}>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>Name : {data?.data?.name}</Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>
                LastDonationDate : {data?.data?.profile.lastDonationDate}
              </Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 2,
                bgcolor: "#A5C9CA",
                borderRadius: "30px",
              }}>
              <Typography>
                {" "}
                {data?.data?.availability ? "Available" : "Not Available"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Profile;
