"use client";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useAuth } from "@/lib/AuthProviders/AuthProviders";

const FooterPage = () => {
  const user = useAuth();

  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        px: 20,
        py: 5,
        mt: 8,
      }}>
      <Grid container spacing={2}>
        {/* First Row: Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ color: "#333" }}>
            Company Info
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#7b7b7b" }}>
            Address: 1234 Company St, City, Country
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#7b7b7b" }}>
            Email: info@company.com
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#7b7b7b" }}>
            Phone: +123-456-7890
          </Typography>
        </Grid>

        {/* Second Row: How Company Works */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ color: "#333" }}>
            How We Work
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#7b7b7b" }}>
            Our company is committed to delivering high-quality products and
            services that exceed our customers expectations. We focus on
            innovation, sustainability, and customer satisfaction.
          </Typography>
        </Grid>

        {/* Third Row: Social Media Icons */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ color: "#333" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <FacebookIcon sx={{ color: "#3b5998", fontSize: "30px", mr: 2 }} />{" "}
            {/* Facebook: #3b5998 */}
            <InstagramIcon
              sx={{ color: "#e1306c", fontSize: "30px", mr: 2 }}
            />{" "}
            {/* Instagram: #e1306c */}
            <TwitterIcon
              sx={{ color: "#1da1f2", fontSize: "30px", mr: 2 }}
            />{" "}
            {/* Twitter: #1da1f2 */}
            <LinkedInIcon
              sx={{ color: "#0077b5", fontSize: "30px", mr: 2 }}
            />{" "}
            {/* LinkedIn: #0077b5 */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterPage;
