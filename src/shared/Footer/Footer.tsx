import { Box, Typography } from "@mui/material";

const FooterPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#A5C9CA",
        py: 3,
        px: 10,
        mt: 8,
      }}>
      <Box
        sx={{
          color: "white",
          display: { sx: "none", md: "flex" },
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Typography>Email : Sibomsaha@hmail.com </Typography>
        <Typography>Phone Number :01999233993</Typography>
        <Typography>Phone Number :01499233993</Typography>
      </Box>
    </Box>
  );
};

export default FooterPage;
