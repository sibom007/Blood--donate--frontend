"use client";
import React, { useCallback, useState } from "react";
import DInput from "@/shared/DInput/DInput";
import DForm from "@/shared/DForm/DForm";
import DSelectField from "@/shared/DSelectField/DSelectField";
import { Box, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import DDatePicker from "@/shared/DDatePicker/DDatePicker";
import { dateFormatter } from "@/utils/dateFormatter";
import SendIcon from "@mui/icons-material/Send";
import { useRegisterMutation } from "@/Redux/api/Authapi";
import { toast } from "sonner";
import { userLogin } from "@/service/Action/Login";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import DemoLoginInfo from "./DemoLoginInfo";

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const AuthButton = dynamic(
    () => import("@/app/authorization/components/AuthButton"),
    { ssr: false }
  );

  const router = useRouter();
  const [photo, setphoto] = useState("");
  const [photofile, setPhotofile] = useState<File | null>(null);
  const [variant, setVariant] = useState<"LOGIN" | "REGISTER">("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Register] = useRegisterMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPhotofile(files[0]);
    }
  };

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
        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;
        const formData = new FormData();
        if (photofile) {
          formData.append("image", photofile);
        }
        const M = fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then(async (res) => {
            return {
              name: data.name,
              email: data.email,
              password: data.password,
              bloodType: data.bloodType,
              photo: await res?.data?.display_url,
              donateBlood: data.donateBlood,
              location: data.location,
              age: Number(data.age),
              bio: data.bio,
              lastDonationDate: dateFormatter(data.lastDonationDate),
            };
          })
          .catch((err) => {});
        M.then(async (item) => {
          const res = await Register(item);
          if (res?.data?.errorMessages) {
            setIsLoading(false);
            toast.error(res.data.errorMessages);
          }
          if (res?.data?.data?.id) {
            toast.success("Register Successfull");
            setIsLoading(false);
            setVariant("LOGIN");
          }
        });
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
              <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
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
              </Stack>
              <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
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
              </Stack>
              <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
                <DInput
                  name="bio"
                  label="Bio"
                  required={true}
                  type="text"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <input
                  className="border-2 w-[175px] p-1"
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                />
              </Stack>
              <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
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
              </Stack>
            </>
          )}
          <DInput
            name="email"
            label="Email"
            required={true}
            type="text"
            fullWidth
            sx={{ mb: 2 }}
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
          {/* <SocialLogin /> */}
          <DemoLoginInfo />
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
