import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import { GetUserinfo } from "@/service/Action/Login";

type TUser = {
  id: string;
  email: string;
  role: string;
  name: string;
  int: number;
};

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    GetUserinfo().then((accessToken: TUser) => {
      setUserRole(accessToken.role);
    });
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/">
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}>
          DB BLOOD
        </Typography>
      </Stack>
      <List>
        <Divider />
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
