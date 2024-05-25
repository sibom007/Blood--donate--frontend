import DForm from "@/shared/DForm/DForm";
import DInput from "@/shared/DInput/DInput";
import { Box, Stack, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { FieldValues } from "react-hook-form";

const ContactWithBloodDonner = () => {
  const handleEmail = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Stack sx={{ mt: 2 }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "25px",
          mt: 3,
        }}>
        Contact with blood donor
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello You can send email to the Donner
      </Typography>

      <Stack>
        <div
          className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 w-6/12 mx-auto">
          <DForm onSubmit={handleEmail}>
            <Box>
              <DInput sx={{ mt: 2 }} name="name" fullWidth label="Name" />
              <DInput sx={{ mt: 2 }} name="email" fullWidth label="Email" />
              <DInput
                sx={{ mt: 2 }}
                name="mobileNo"
                fullWidth
                label="Mobile No"
              />
              <Textarea sx={{ mt: 2 }} placeholder="Message" minRows={9} />
              <LoadingButton
                size="small"
                type="submit"
                endIcon={<SendIcon />}
                loadingPosition="end"
                sx={{
                  backgroundColor: "#A5C9CA",
                  width: "100%",
                  px: 3,
                  py: 1,
                  borderRadius: "6px",
                  color: "white",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#A5C9CA",
                  },
                }}
                variant="contained">
                Send
              </LoadingButton>
            </Box>
          </DForm>
        </div>
      </Stack>
    </Stack>
  );
};

export default ContactWithBloodDonner;
