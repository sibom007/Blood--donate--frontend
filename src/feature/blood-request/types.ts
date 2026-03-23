import { z } from "zod";

export const bloodGroups = [
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
] as const;

export const bloodGroupLabels: Record<(typeof bloodGroups)[number], string> = {
  A_POSITIVE: "A+",
  A_NEGATIVE: "A-",
  B_POSITIVE: "B+",
  B_NEGATIVE: "B-",
  O_POSITIVE: "O+",
  O_NEGATIVE: "O-",
  AB_POSITIVE: "AB+",
  AB_NEGATIVE: "AB-",
};

export const RequestBloodSchema = z.object({
  bloodType: z.enum(bloodGroups),
  phoneNumber: z
    .string()
    .regex(/^8801[0-9]{9}$/, "Must be valid BD number (8801XXXXXXXXX)"),
  dateOfDonation: z.coerce.date({
    required_error: "Date & time is required",
  }),
  hospitalName: z.string().min(2).max(100),
  hospitalAddress: z.string().min(5).max(200),
  description: z.string().max(300).optional(),
  urgency: z.enum(["NORMAL", "URGENT", "CRITICAL"]),
});

export type RequestBloodInput = z.infer<typeof RequestBloodSchema>;

// queris
export type UrgencyLevel = "NORMAL" | "URGENT" | "CRITICAL";
export type RequestStatus = "PENDING" | "ACCEPTED" | "COMPLETED";
export type BloodGroup =
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE";

export interface GetRequestsQueryInput {
  bloodType?: BloodGroup;
  urgency?: UrgencyLevel;
  requestStatus?: RequestStatus;
  hospitalName?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: "urgency" | "createdAt" | "dateOfDonation";
  sortOrder?: "asc" | "desc";
  limit?: number;
  page?: number;
}

export type Request = {
  id: string;
  bloodType: BloodGroup;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalAddress: string;
  description?: string;
  urgency: UrgencyLevel;
  requestStatus: RequestStatus;
  donorId?: string | null;
  donner: { id: true; name: true; phoneNumber: true; bloodType: true };
  createdAt: string;
  updatedAt: string;
};

import { Dispatch, SetStateAction } from "react";



export type FiltersProps = {
  query: GetRequestsQueryInput;
  setQuery: Dispatch<SetStateAction<GetRequestsQueryInput>>;
};