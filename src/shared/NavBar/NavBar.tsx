"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GetUserinfo, logOut } from "@/service/Action/Login";
import { motion } from "framer-motion";
import Image from "next/image";
import NoPhoto from "@/assets/img.png";
import { useGetMyProfileBYIdQuery } from "@/Redux/api/Authapi";
import { TUser } from "@/types";
import { toast } from "sonner";

const pages = ["Home", "About", "Donner List", "Contact us"];
const settings = ["Profile", "Account", "Dashboard", "L"];

function NavBar() {
  const [userId, setUser] = React.useState<TUser | null>(null);
  const { data } = useGetMyProfileBYIdQuery(userId?.id);
  const user = data?.data;

  const router = useRouter();

  React.useEffect(() => {
    GetUserinfo()
      .then((user1) => {
        if (user1) {
          setUser(user1);
        }
      })
      .catch((error) => {});
  }, []);

  const handlelogout = async () => {
    await logOut();
    router.push("/authorization");
  };

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
    <Container
      maxWidth="lg"
      component="div"
      sx={{ backgroundColor: "", mt: 3 }}>
      {/* Responsive navbar */}
      <Toolbar disableGutters>
        {/* <BloodtypeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
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
                <Typography textAlign="center">
                  {page === "Home" ? (
                    <a href="/">
                      <Typography component="span" sx={{ cursor: "pointer" }}>
                        Home
                      </Typography>
                    </a>
                  ) : page === "Donner List" ? (
                    <a href="/donner">
                      <Typography component="span" sx={{ cursor: "pointer" }}>
                        Donner List
                      </Typography>
                    </a>
                  ) : page === "About" ? (
                    <a href="/aboutUs">
                      <Typography component="span" sx={{ cursor: "pointer" }}>
                        About us
                      </Typography>
                    </a>
                  ) : page === "Contact us" ? (
                    <a href="/">
                      <Typography component="span" sx={{ cursor: "pointer" }}>
                        Contact us
                      </Typography>
                    </a>
                  ) : (
                    page
                  )}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* main NavBar */}
        {/* <BloodtypeIcon sx={{ display: { xs: "flex", md: "none" } }} /> */}
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
            justifyContent: "end",
            justifyItems: "end",
            gap: 8,
            fontWeight: 500,
          }}>
          <motion.div
            initial={{ opacity: 0, y: -7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "backIn",
            }}>
            <Link href="/" className="hover-link">
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "backIn",
            }}>
            <Link className="hover-link" href="/donner">
              Donner List
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "backIn",
            }}>
            <Link className="hover-link" href="/aboutUs">
              About Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              ease: "backIn",
            }}>
            {" "}
            <Link className="hover-link" href="/">
              Contact us
            </Link>
          </motion.div>
        </Box>
        <Box sx={{ flexGrow: 0, ml: 4 }}>
          {user ? (
            <Box sx={{ display: "flex", justifyItems: "center" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Typography sx={{ p: 1, color: "white", fontSize: "20px" }}>
                    <Image
                      className="rounded-full"
                      src={user?.photo || NoPhoto}
                      alt="no photo"
                      width={40}
                      height={40}
                    />
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
                        <a href="/dashboard/donation-request">
                          <Typography
                            component="span"
                            sx={{ cursor: "pointer" }}>
                            Dashboard
                          </Typography>
                        </a>
                      ) : setting === "Profile" ? (
                        <a href="/dashboard/Profile">
                          <Typography
                            component="span"
                            sx={{ cursor: "pointer" }}>
                            Profile
                          </Typography>
                        </a>
                      ) : setting === "Account" ? (
                        <a href="/dashboard/change-password">
                          <Typography
                            component="span"
                            sx={{ cursor: "pointer" }}>
                            Account
                          </Typography>
                        </a>
                      ) : (
                        setting
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Link href="/authorization">
              <Typography
                className="hover-link "
                sx={{
                  py: 1,
                  px: 4,
                  backgroundColor: "",
                  color: "#1e40af",
                  border: "3px solid #1e40af",
                  borderRadius: "6px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}>
                Login
              </Typography>
            </Link>
          )}
        </Box>
      </Toolbar>
    </Container>
  );
}
export default NavBar;
