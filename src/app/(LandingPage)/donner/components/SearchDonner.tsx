"use client";

import { useGetDonnerListQuery } from "@/Redux/api/BloodDonnerapi";
import { useDebounced } from "@/Redux/hooks";
import "./Style.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const SearchDonner = () => {
  const query: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState<string>("");

  const debounced = useDebounced({
    searchQuery: searchTerm,
    delay: 3000,
  });
  if (!!debounced) {
    query["searchTerm"] = searchTerm;
  }
  const {
    data: DonnerList,
    isLoading,
    isFetching,
  } = useGetDonnerListQuery({ ...query });
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "25px",
          mt: 3,
        }}>
        Search Blood Donor
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello You can Search Blood Donor here
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Blood Donor"
          sx={{ width: "700px" }}
        />
      </Box>

      <Stack sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isFetching && isLoading === true ? (
            <div className="md:ml-[350px]  lg:ml-[500px] mt-20">
              <div className="cssload-thecube ">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
              </div>
            </div>
          ) : (
            DonnerList?.data?.data?.map((item: any) => {
              return (
                <Card
                  key={item.id}
                  sx={{ minWidth: 275, backgroundColor: "#b0d5c8" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom>
                      {item.bloodType}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"></Typography>
                    <Typography variant="body2">
                      {item.profile.bio}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <p className=" bg-orange-200/70 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 ml-2">
                      {item.availability ? "Available" : "Not Available"}
                      <br />
                    </p>
                    <Button size="small">
                      <Link
                        href={`/donner/${item.id}`}
                        className=" bg-orange-200/70 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 ml-2">
                        View Details
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          )}
        </div>
      </Stack>
    </Box>
  );
};

export default SearchDonner;
