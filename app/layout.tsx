import * as React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/app/_components/navigation";
import Theme2 from "./theme2";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TES",
  description: "Nanyang Polytechnic Technopreneurship Club",
};

export default function RootLayout({
  children, ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme= "cupcake">
      <body className={inter.className}>
        <main className="bg-base-100 text-base-content">

      <Navbar/>
        {children}
        <Analytics />
        </main>
        <Theme2 />

      </body>

    </html>
    </ClerkProvider>
  );
}