"use client";
import { useGetMyProfileQuery } from "@/Redux/api/Authapi";
import { useAuth } from "@/lib/AuthProviders/AuthProviders";
import { GetUserinfo } from "@/service/Action/Login";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ProfilePage = () => {
  const { user } = useAuth();

  const { data, isLoading, isFetching } = useGetMyProfileQuery({});

  if (isLoading && isFetching) {
    return <>Loding</>;
  }
  console.log(data.data);

  return (
    <Stack>
      <Box
        className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 w-full">
        <Stack direction={"row"} spacing={2}>
          <Image
            className="rounded-lg"
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
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
                {data?.data.availability ? "Available" : "Not Available"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProfilePage;
