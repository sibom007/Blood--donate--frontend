"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import "@/app/(LandingPage)/donner/components/Style.css";
import { useGetAllUserQuery } from "@/Redux/api/UpdateUserApi";
import UpdateUserStatusModal from "./UpdateUserStatus";
import UpdateUserRoleModal from "./UpdateUserRole";
import { useAuth } from "@/lib/AuthProviders/AuthProviders";

export default function UserTable() {
  const user = useAuth();

  const { data, isLoading, isFetching } = useGetAllUserQuery({});

  const filteredData = data?.data.filter(
    (item: any) => item.id !== user?.user?.id
  );

  if (isLoading) {
    <div className="md:ml-[350px]  lg:ml-[400px] mt-32">
      <div className="cssload-thecube ">
        <div className="cssload-cube cssload-c1"></div>
        <div className="cssload-cube cssload-c2"></div>
        <div className="cssload-cube cssload-c4"></div>
        <div className="cssload-cube cssload-c3"></div>
      </div>
    </div>;
  }

  return (
    <div className="lg:ml-[100px]">
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "gray",
            fontSize: "25px",
            mt: 3,
          }}>
          Users
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "gray",
            fontSize: "15px",
          }}>
          Hello Welcome Here, You can All user
        </Typography>

        <Table sx={{ minWidth: 950 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">location</TableCell>
              <TableCell align="center"> Update Status</TableCell>
              <TableCell align="center"> Update Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.length === 0 ? (
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
              filteredData?.map((item: any, index: number) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}. {item.name}
                  </TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.status}</TableCell>
                  <TableCell align="center">{item.role}</TableCell>
                  <TableCell align="center">{item.location}</TableCell>
                  <TableCell align="center" sx={{ mr: 5 }}>
                    <div className=" py-3 bg-slate-200 hover:bg-slate-400/80 hover:text-slate-100 duration-500 rounded-lg ho">
                      <UpdateUserStatusModal userId={item.id} />
                    </div>
                  </TableCell>
                  <TableCell align="center" sx={{ mr: 5 }}>
                    <div className=" py-3 bg-slate-200 hover:bg-slate-400/80 hover:text-slate-100 duration-500 rounded-lg ho">
                      <UpdateUserRoleModal userId={item.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
