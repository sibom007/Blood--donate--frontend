"use client";

import {
  bloodGroupLabels,
  bloodGroups,
  RequestBloodInput,
  RequestBloodSchema,
} from "../types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTimePicker } from "@/components/date-time-picker";
import { useBloodDonateRequestMutation } from "@/Redux/api/blood-donate-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = ["Blood Info", "Contact", "Hospital", "Additional"];

export default function RequestForm() {
  const [BloodDonateRequest, { isLoading }] = useBloodDonateRequestMutation();
  const router = useRouter();
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RequestBloodInput>({
    resolver: zodResolver(RequestBloodSchema),
    mode: "onChange",
    defaultValues: {
      urgency: "NORMAL",
      phoneNumber: "880",
    },
  });

  const next = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    const fieldsPerStep: (keyof RequestBloodInput)[][] = [
      ["bloodType"],
      ["phoneNumber", "dateOfDonation"],
      ["hospitalName", "hospitalAddress"],
      ["description", "urgency"],
    ];

    const valid = await trigger(fieldsPerStep[step]);
    if (!valid) return;

    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: RequestBloodInput) => {
    const valid = await trigger();

    if (!valid) {
      const firstError = Object.keys(errors)[0];

      if (["bloodType"].includes(firstError)) setStep(0);
      else if (["phoneNumber", "dateOfDonation"].includes(firstError))
        setStep(1);
      else if (["hospitalName", "hospitalAddress"].includes(firstError))
        setStep(2);
      else setStep(3);

      return;
    }

    console.log({ data });

    try {
      const res = await BloodDonateRequest(data).unwrap();
      toast.success(res.message);
      reset();
      router.push("/dashboard/all-request");
    } catch (err: any) {
      toast.error(err.message || "something went wrong!");
    }
  };

  return (
    <div className="h-screen overflow-hidden grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div
        className="hidden md:flex relative flex-col justify-center p-12 text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-lg space-y-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight">
            Save Lives <br /> With Every Drop
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-200">
            Your blood request instantly connects with nearby donors. Provide
            accurate details to ensure help reaches faster when it matters most.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-red-500 rounded-full" />
              Fast donor matching
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-red-500 rounded-full" />
              Real-time response system
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-red-500 rounded-full" />
              Community-powered support
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 overflow-y-auto">
        <Card className="w-full max-w-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Blood Request</CardTitle>
            <div className="flex gap-2 mt-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FieldGroup>
                {step === 0 && (
                  <Field>
                    <FieldLabel>Blood Type</FieldLabel>
                    <Select
                      onValueChange={(val) =>
                        setValue(
                          "bloodType",
                          val as RequestBloodInput["bloodType"],
                          {
                            shouldValidate: true,
                          },
                        )
                      }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        {bloodGroups.map((b) => (
                          <SelectItem key={b} value={b}>
                            {bloodGroupLabels[b]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError>{errors.bloodType?.message}</FieldError>
                  </Field>
                )}

                {step === 1 && (
                  <>
                    <Field>
                      <FieldLabel>Phone Number</FieldLabel>
                      <Input
                        value={watch("phoneNumber")}
                        onChange={(e) => {
                          let val = e.target.value.replace(/[^0-9]/g, "");
                          if (!val.startsWith("880")) val = "880" + val;
                          setValue("phoneNumber", val);
                        }}
                      />
                      <FieldDescription>Format: 8801XXXXXXXXX</FieldDescription>
                      <FieldError>{errors.phoneNumber?.message}</FieldError>
                    </Field>

                    <Field>
                      <FieldLabel>Date</FieldLabel>
                      <DateTimePicker
                        value={watch("dateOfDonation")}
                        onChange={(val) =>
                          setValue("dateOfDonation", val, {
                            shouldValidate: true,
                          })
                        }
                      />
                      <FieldError>{errors.dateOfDonation?.message}</FieldError>
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field>
                      <FieldLabel>Hospital Name</FieldLabel>
                      <Input {...register("hospitalName")} />
                      <FieldError>{errors.hospitalName?.message}</FieldError>
                    </Field>

                    <Field>
                      <FieldLabel>Hospital Address</FieldLabel>
                      <Textarea {...register("hospitalAddress")} />
                      <FieldError>{errors.hospitalAddress?.message}</FieldError>
                    </Field>
                  </>
                )}

                {step === 3 && (
                  <>
                    <Field>
                      <FieldLabel>Urgency</FieldLabel>
                      <Select
                        value={watch("urgency")}
                        onValueChange={(val) =>
                          setValue(
                            "urgency",
                            val as RequestBloodInput["urgency"],
                          )
                        }>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NORMAL">Normal</SelectItem>
                          <SelectItem value="URGENT">Urgent</SelectItem>
                          <SelectItem value="CRITICAL">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel>Description</FieldLabel>
                      <Textarea {...register("description")} />
                    </Field>
                  </>
                )}
              </FieldGroup>

              <div className="flex justify-between">
                {step > 0 && (
                  <Button
                    type="button"
                    disabled={isLoading}
                    variant="secondary"
                    onClick={prev}>
                    Back
                  </Button>
                )}

                {step < steps.length - 1 ? (
                  <Button type="button" onClick={next}>
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isLoading}
                    loading={isLoading}>
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
