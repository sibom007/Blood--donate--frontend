"use client";
import { Cta } from "@/feature/landing/components/cta";
import { Feature } from "@/feature/landing/components/feature";
import { RequestForBlood } from "@/feature/blood-request/components/request-for-blood";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
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

              <button className="border border-border px-6 py-3 rounded-lg ">
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
      <Feature />

      {/* REQUEST FOR BLOOD */}
      <RequestForBlood />

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
      <Cta />

      {/* FOOTER */}
      <footer className="border-t border-border py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg text-primary">RedLink</h3>
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
