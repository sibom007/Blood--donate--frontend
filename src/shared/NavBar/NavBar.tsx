"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useAuth } from "@/lib/AuthProviders/AuthProviders";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { logOut } from "@/service/Action/Login";
import clsx from "clsx";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "L"];

function NavBar() {
  const { user } = useAuth();
  const router = useRouter();

  const handlelogout = async () => {
    await logOut();
    router.push("/authorization");
  };
  const firstLetter = user?.email ? user?.email.charAt(0) : "";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#A5C9CA", borderRadius: "10px" }}>
      <Container maxWidth="xl">
        {/* Responsive navbar */}
        <Toolbar disableGutters>
          <BloodtypeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            BLOOD BD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* main NavBar */}
          <BloodtypeIcon sx={{ display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Blood BD
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              justifyItems: "center",
              gap: 4,
            }}>
            <Link className={clsx(`my-2 block items-center`)} href="/">
              Home
            </Link>
            <Link
              className={`
                my-2 block items-center
                
              `}
              href="/donner">
              Donner List
            </Link>
            <Link className="my-2 block items-center" href="/">
              About Us
            </Link>
            <Link className="my-2 block items-center" href="/">
              Contact us
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Box sx={{ display: "flex", justifyItems: "center" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Typography sx={{ p: 1, color: "white", fontSize: "20px" }}>
                      {firstLetter.toUpperCase()}
                    </Typography>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        {setting === "L" ? (
                          <>
                            {setting}
                            <Typography component="span" onClick={handlelogout}>
                              ogout
                            </Typography>
                          </>
                        ) : setting === "Dashboard" ? (
                          <Link href="/dashboard">
                            <Typography
                              component="span"
                              sx={{ cursor: "pointer" }}>
                              Dashboard
                            </Typography>
                          </Link>
                        ) : (
                          setting
                        )}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link href="/authorization">Login</Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
