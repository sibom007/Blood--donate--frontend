"use client";

import { removeUser } from "@/feature/auth/auth.services";
import { useGetMyProfileQuery } from "@/Redux/api/auth-api";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const { data } = useGetMyProfileQuery({});
  console.log("🚀 ~ HomePage ~ data:", data);
  return (
    <div className="bg-background text-foreground">
      {/* NAVBAR */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={"/logo.svg"} width={30} height={20} alt="logo" />
            <h1 className="font-bold text-xl text-primary">BloodDonate</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              Donors
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </nav>

          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg">
            Become Donor
          </button>
          <button onClick={removeUser} className="bg-primary text-primary-foreground px-5 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl font-bold leading-tight">
              Donate Blood
              <span className="block text-primary">Save Lives</span>
            </h2>

            <p className="mt-6 text-muted-foreground max-w-lg">
              Your blood donation can give someone another chance at life. Join
              thousands of donors helping patients every day.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
                Donate Now
              </button>

              <button className="border border-border px-6 py-3 rounded-lg">
                Find Donor
              </button>
            </div>
          </motion.div>

          <img
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Why Donate Blood</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="font-semibold text-xl">Save Lives</h3>
              <p className="text-muted-foreground mt-2">
                A single donation can save multiple lives.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="font-semibold text-xl">Emergency Support</h3>
              <p className="text-muted-foreground mt-2">
                Blood is always needed during emergencies.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="font-semibold text-xl">Community Care</h3>
              <p className="text-muted-foreground mt-2">
                Support your community with life-saving donations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-card p-10 rounded-xl border border-border">
            <h3 className="text-4xl font-bold text-primary">12K+</h3>
            <p className="text-muted-foreground mt-2">Active Donors</p>
          </div>

          <div className="bg-card p-10 rounded-xl border border-border">
            <h3 className="text-4xl font-bold text-primary">30K+</h3>
            <p className="text-muted-foreground mt-2">Lives Saved</p>
          </div>

          <div className="bg-card p-10 rounded-xl border border-border">
            <h3 className="text-4xl font-bold text-primary">150+</h3>
            <p className="text-muted-foreground mt-2">Blood Camps</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl font-bold">Become a Lifesaver Today</h2>

        <p className="mt-4 opacity-90">Register now and help people in need.</p>

        <button className="mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-lg">
          Register Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg text-primary">BloodDonate</h3>
            <p className="text-muted-foreground mt-2">
              Connecting blood donors with people in need.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Home</li>
              <li>Find Donor</li>
              <li>Become Donor</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-muted-foreground">
              Email: support@blooddonate.com
            </p>
            <p className="text-muted-foreground">Phone: +880 123456789</p>
          </div>
        </div>

        <div className="text-center text-muted-foreground mt-10">
          © 2026 BloodDonate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
