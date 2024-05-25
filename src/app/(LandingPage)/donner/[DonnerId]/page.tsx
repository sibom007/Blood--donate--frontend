"use client";
import { useGetSingleDonnerQuery } from "@/Redux/api/BloodDonnerapi";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "../components/Style.css";
import ContactWithBloodDonner from "../components/ContactWithBloodDonner";

type Tprops = {
  params: {
    DonnerId: string;
  };
  searchParams: {};
};

const DonnerDetailsPage = (params: Tprops) => {
  const id = params.params.DonnerId;
  const { data, isFetching, isLoading } = useGetSingleDonnerQuery(id);

  if (isFetching && isLoading === true) {
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
            src={
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="photo"
            width={500}
            height={500}
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
                location : {data?.data.location}
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
    </Stack>
  );
};

export default DonnerDetailsPage;
