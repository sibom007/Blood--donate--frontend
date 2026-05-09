import React from "react";
import { RequestListPage } from "@/feature/blood-request/components/request-list-page";
import { Metadata } from "next";

export const metadata: Metadata = { title: "All-Request" };

function Page() {
  return <RequestListPage />;
}

export default Page;
