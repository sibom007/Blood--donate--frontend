"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DForm from "@/shared/DForm/DForm";
import DSelectField from "@/shared/DSelectField/DSelectField";
import { FieldValues } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography } from "@mui/material";
import { useUpadtestatusMutation } from "@/Redux/api/BloodDonnerapi";
import { toast } from "sonner";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function StatusModal({ RequestId }: { RequestId: string }) {
  const [Upadtestatus] = useUpadtestatusMutation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleStatus = async (data: FieldValues) => {
    const info = {
      id: RequestId,
      data,
    };
    const res = await Upadtestatus(info);
    if (res?.data?.data.id) {
      toast.success("The Status is Changed");
      setOpen(false);
    }
  };

  return (
    <div>
      <button onClick={handleOpen}>Update status</button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography sx={{ mt: 1, mb: 1, fontSize: "20px" }}>
            Change Status
          </Typography>
          <DForm onSubmit={handleStatus}>
            <DSelectField
              fullWidth
              required={true}
              name="status"
              items={["PENDING", "APPROVED", "REJECTED"]}
              label="Change Status"
            />
            <LoadingButton
              size="small"
              type="submit"
              endIcon={<SendIcon />}
              //   loading={isLoading}
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
          </DForm>
        </Box>
      </Modal>
    </div>
  );
}
