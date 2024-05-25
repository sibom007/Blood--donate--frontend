"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import "../../../../(LandingPage)/donner/components/Style.css";
import { useGetMyBloodDonnerRequestQuery } from "@/Redux/api/BloodDonnerapi";

export default function MyBloodReqTable() {
  const { data, isLoading, isFetching } = useGetMyBloodDonnerRequestQuery({});
  if (isFetching && isLoading) {
    return (
      <div className="md:ml-[350px]  lg:ml-[400px] mt-32">
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
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "25px",
          mt: 3,
        }}>
        My Blood Request
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello Welcome Here, You can Your Blood Request
      </Typography>

      <Table sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hospital Name</TableCell>
            <TableCell align="center">Hospital Address</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Request Status</TableCell>
            <TableCell align="center">DateOfDonation </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.length === 0 ? (
            <Typography
              sx={{
                px: 10,
                py: 10,
                alignContent: "center",
                alignItems: "center",
              }}>
              NO DATA Available
            </Typography>
          ) : (
            data?.data.map((item: any, index: number) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {index + 1}. {item.hospitalName}
                </TableCell>
                <TableCell align="center">{item.hospitalAddress}</TableCell>
                <TableCell align="center">{item.phoneNumber}</TableCell>
                <TableCell align="center">{item.requestStatus}</TableCell>
                <TableCell align="center">{item.dateOfDonation}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
