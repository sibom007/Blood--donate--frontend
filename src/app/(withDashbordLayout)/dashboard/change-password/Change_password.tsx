"use client";
import DForm from "@/shared/DForm/DForm";
import DInput from "@/shared/DInput/DInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { useChangepasswordMutation } from "@/Redux/api/Authapi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Change_password = () => {
  const router = useRouter();
  const [Changepassword, { isLoading }] = useChangepasswordMutation();

  const handleChangePassword = async (data: FieldValues) => {
    const { oldPassword, newPassword, confirmpassword } = data;
    if (newPassword !== confirmpassword) {
      toast.error("Confirm password not Match");
      return;
    }
    const Info = {
      oldPassword,
      newPassword,
    };

    const res = await Changepassword(Info);
    if (res.data?.data?.id) {
      toast.success("Password has change");
      router.push("/dashboard/Profile");
    }
    if (res.data?.errorMessages) {
      toast.error(res.data?.errorMessages);
    }
  };

  return (
    <div className="w-9/12 mx-auto">
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
                <DInput
                  type="password"
                  name="oldPassword"
                  fullWidth
                  label="Current Password"
                />
                <DInput
                  type="password"
                  name="newPassword"
                  fullWidth
                  label="New password"
                />
                <DInput
                  type="password"
                  name="confirmpassword"
                  fullWidth
                  label="Confirm password"
                />
                <LoadingButton
                  size="small"
                  type="submit"
                  loading={isLoading}
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
    </div>
  );
};

export default Change_password;
