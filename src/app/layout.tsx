import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/provider";
// @ts-ignore: CSS import types not available in this project setup
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "RedLink",
    template: "%s | RedLink",
  },
  description: "For help people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
