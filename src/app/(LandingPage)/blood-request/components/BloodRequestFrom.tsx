"use client";
import DForm from "@/shared/DForm/DForm";
import DInput from "@/shared/DInput/DInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DDatePicker from "@/shared/DDatePicker/DDatePicker";
import { FieldValues } from "react-hook-form";
import { useBloodDonnerRequestMutation } from "@/Redux/api/BloodDonnerapi";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";

type TBRProps = {
  donorId: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
};

const BloodRequestFrom = ({ id }: { id: string }) => {
  const [BloodDonnerRequest] = useBloodDonnerRequestMutation();

  const handleBloodRequest = async (data: FieldValues) => {
    const payload = {
      donorId: id,
      phoneNumber: String(data.phoneNumber),
      dateOfDonation: dateFormatter(data.dateOfDonation),
      hospitalName: data.hospitalName,
      hospitalAddress: data.hospitalAddress,
      reason: data.reason,
    };
    const res = await BloodDonnerRequest(payload);
    if (res.data.data.id) {
      toast.success("Request has Done");
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
        Donner Request
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          fontSize: "15px",
        }}>
        Hello Welcome Here, You can Make Donner Request
      </Typography>

      <Stack>
        <div
          className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 w-6/12 mx-auto mt-5">
          <DForm onSubmit={handleBloodRequest}>
            <div className="space-y-4">
              <DInput name="hospitalName" fullWidth label="Hospital Name" />
              <DInput
                name="hospitalAddress"
                fullWidth
                label="Hospital Address"
              />
              <DInput name="reason" fullWidth label="Reason" />
              <DInput
                name="phoneNumber"
                type="number"
                fullWidth
                label="Phone Number"
              />
              <DDatePicker
                name="dateOfDonation"
                fullWidth
                disablePast
                label="Date Of Donation"
              />
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

export default BloodRequestFrom;
