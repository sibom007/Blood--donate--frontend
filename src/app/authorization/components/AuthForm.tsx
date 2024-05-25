"use client";
import React, { useCallback, useState } from "react";
import DInput from "@/shared/DInput/DInput";
import DForm from "@/shared/DForm/DForm";
import SocialLogin from "./SocialLogin";
import DSelectField from "@/shared/DSelectField/DSelectField";
import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import DDatePicker from "@/shared/DDatePicker/DDatePicker";
import { dateFormatter } from "@/utils/dateFormatter";
import SendIcon from "@mui/icons-material/Send";
import { useRegisterMutation } from "@/Redux/api/Authapi";
import { toast } from "sonner";
import { userLogin } from "@/service/Action/Login";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const AuthButton = dynamic(
    () => import("@/app/authorization/components/AuthButton"),
    { ssr: false }
  );

  const router = useRouter();
  const [variant, setVariant] = useState<"LOGIN" | "REGISTER">("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [Register] = useRegisterMutation();
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      try {
        const RegisterData = {
          name: data.name,
          email: data.email,
          password: data.password,
          bloodType: data.bloodType,
          donateBlood: data.donateBlood,
          location: data.location,
          age: Number(data.age),
          bio: data.bio,
          lastDonationDate: dateFormatter(data.lastDonationDate),
        };

        const res = await Register(RegisterData);

        if (res?.data?.errorMessages) {
          toast.error(res.data.errorMessages);
        }
        if (res?.data?.data?.success === true) {
          toast.success(res?.data?.data?.message);
          setIsLoading(false);
          setVariant("LOGIN");
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }

    if (variant === "LOGIN") {
      try {
        const LoginData = {
          email: data.email,
          password: data.password,
        };
        const res = await userLogin(LoginData);
        if (res?.message) {
          toast.error(res.message);
          setIsLoading(false);
        }
        if (res?.success === true) {
          toast.success(res?.message);
          setIsLoading(false);
          router.push("/");
          router.refresh();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Box
        className="bg-white px-4
        py-6 shadow sm:rounded-lg sm:px-10 ">
        <DForm onSubmit={handleSubmit}>
          {variant === "REGISTER" && (
            <>
              <DInput
                name="name"
                label="Name"
                required={true}
                type="text"
                fullWidth
              />
              <DSelectField
                fullWidth
                required={true}
                name="bloodType"
                items={[
                  "A_POSITIVE",
                  "B_POSITIVE",
                  "A_NEGATIVE",
                  "B_NEGATIVE",
                  "O_POSITIVE",
                  "O_NEGATIVE",
                  "AB_POSITIVE",
                  "AB_NEGATIVE",
                ]}
                label="Blood Donner"
                sx={{ mt: 2, mb: 2 }}
              />
              <DInput
                name="location"
                label="Location"
                required={true}
                type="text"
                fullWidth
                sx={{ mb: 2 }}
              />
              <DInput
                name="age"
                label="Age"
                required={true}
                type="text"
                fullWidth
                sx={{ mb: 2 }}
              />
              <DInput
                name="bio"
                label="Bio"
                required={true}
                type="text"
                fullWidth
              />

              <DSelectField
                fullWidth
                name="donateBlood"
                items={["YES", "NO"]}
                required={true}
                label="Blood Donner"
                sx={{ mt: 2, mb: 2 }}
              />

              <DDatePicker
                fullWidth
                disableFuture
                name="lastDonationDate"
                label="Last Donation Date"
              />
            </>
          )}
          <DInput
            name="email"
            label="Email"
            required={true}
            type="text"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <DInput
            name="password"
            label="Password"
            required={true}
            type="text"
            fullWidth
          />

          <LoadingButton
            size="small"
            type="submit"
            endIcon={<SendIcon />}
            loading={isLoading}
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
            <span>{variant === "LOGIN" ? "Sign In" : "Register"}</span>
          </LoadingButton>
        </DForm>
        <div className="border-[1px] mt-5 border-gray-500" />
        <div className="mt-3">
          <SocialLogin />
        </div>

        <div className="flex justify-center gap-2 mt-6 px-2 text-sm">
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have account "}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AuthForm;
