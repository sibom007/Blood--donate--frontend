"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ContactWithBloodDonner from "./ContactWithBloodDonner";
import Link from "next/link";
import { useGetSingleDonnerQuery } from "@/Redux/api/BloodDonnerapi";
import nop from "@/assets/img.png";

const DonnerDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleDonnerQuery(id);

  if (isLoading === true) {
    return (
      <>
        <div className="mt-[200px]">
          <div className="cssload-thecube ">
            <div className="cssload-cube cssload-c1"></div>
            <div className="cssload-cube cssload-c2"></div>
            <div className="cssload-cube cssload-c4"></div>
            <div className="cssload-cube cssload-c3"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <Container>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "25px",
          mt: 3,
        }}>
        Donner Details
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello You can see Donor Details
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ mt: 2 }}>
        <Box>
          <Image
            src={data?.data?.photo || nop}
            alt="photo"
            width={200}
            height={100}
            className="rounded-lg"
          />
        </Box>
        <Box sx={{ backgroundColor: "#D2E0FB", borderRadius: "10px" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: "2", md: 4 }}
            sx={{ p: 3 }}>
            <Box>
              <Typography>Basic information</Typography>
              <Typography noWrap sx={{ px: 2, color: "rgb(82 82 91 / 0.9);" }}>
                Name : {data?.data?.name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                Email : {data?.data?.email}
              </Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                Email : {data?.data?.profile?.bio}
              </Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                location : {data?.data?.location}
              </Typography>
            </Box>
            <div className="border-r-4 border-slate-400/20 mt-10 hidden md:block"></div>
            <Box>
              <Typography>Main information</Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                BloodType : {data?.data?.bloodType}
              </Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                {data?.data?.availability ? "Available" : "Not Available"}
              </Typography>
              <Typography
                noWrap
                sx={{
                  px: 2,
                  marginTop: "5px",
                  color: "rgb(82 82 91 / 0.9);",
                }}>
                LastDonationDate : {data?.data?.profile?.lastDonationDate}
              </Typography>
              <Button
                size="small"
                sx={{ marginLeft: "90px", marginTop: "10px" }}>
                <Link
                  href={`/blood-request/${data?.data?.id}`}
                  className=" bg-orange-200/70 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 ml-2">
                  Request Blood
                </Link>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <ContactWithBloodDonner />
    </Container>
  );
};

export default DonnerDetails;
