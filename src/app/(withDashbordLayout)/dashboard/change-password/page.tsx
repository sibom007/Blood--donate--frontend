"use client";
import DForm from "@/shared/DForm/DForm";
import DInput from "@/shared/DInput/DInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { useChangepasswordMutation } from "@/Redux/api/Authapi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const router = useRouter();
  const [Changepassword] = useChangepasswordMutation();

  const handleChangePassword = async (data: FieldValues) => {
    const res = await Changepassword(data);
    if (res.data?.id) {
      toast.success("Password has change");
      router.push("/Profile");
    }
    if (res.data?.errorMessages) {
      toast.error(res.data?.errorMessages);
    }
  };

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
        Change password
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello Welcome Here, You can Change Password
      </Typography>

      <Stack>
        <div
          className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 w-12/12 mx-auto mt-5">
          <DForm onSubmit={handleChangePassword}>
            <div className="space-y-4">
              <DInput name="oldPassword" fullWidth label="Current Password" />
              <DInput name="newPassword" fullWidth label="New password" />

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
            </div>
          </DForm>
        </div>
      </Stack>
    </Stack>
  );
};

export default ChangePassword;
