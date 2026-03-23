import React from "react";
import { Metadata } from "next";
import RequestForm from "@/feature/blood-request/components/request-form";

export const metadata: Metadata = { title: "Request for blood" };

const RequestBloodPage = () => {
  return <RequestForm />;
};

export default RequestBloodPage;
