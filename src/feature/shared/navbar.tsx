"use client";
import Image from "next/image";
import { useUser } from "../auth/hooks/useUser";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { HeartPulseIcon, LayoutDashboardIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Logout } from "../auth/lib";

const links = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Donors",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
];

export const NavBar = () => {
  const { user, loading } = useUser();
  return (
    <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex gap-2">
          <Image src={"/logo.svg"} width={30} height={20} alt="logo" />
          <h1 className="font-bold text-xl text-primary">RedLink</h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="relative pb-1 group transition-all duration-300">
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full origin-left group-hover:origin-left hover:origin-right"></span>
            </Link>
          ))}
        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : user ? (
            <div className="gap-3 flex">
              <Link href={"/dashboard"}>
                <Button variant={"secondary"}>
                  <LayoutDashboardIcon />
                  Dashboard
                </Button>
              </Link>
              <Button variant={"destructive"} onClick={Logout}>
                <LogOutIcon />
                Logout
              </Button>
            </div>
          ) : (
            <Link href={"/dashboard"}>
              <Button>
                <HeartPulseIcon />
                Become Donor
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
