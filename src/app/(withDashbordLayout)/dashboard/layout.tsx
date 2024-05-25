"use client";

import DashboardNavbar from "../components/DashbordNavber";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardNavbar>{children}</DashboardNavbar>;
};

export default DashboardLayout;
