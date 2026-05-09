import { AvailableBloodList } from "@/feature/blood-request/available-blood/components/available-blood-list";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Available-Bloods" };

function Page() {
  return <AvailableBloodList />;
}

export default Page;
