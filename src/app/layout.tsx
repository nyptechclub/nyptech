import { inter } from "@/fonts";
import { cn } from "@/lib/utils";
import { LayoutProps } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NYP Technopreneurship Club",
};

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn("dark", inter.className)} data-theme={"dark"}>
        <ClerkProvider appearance={{ baseTheme: dark }}>{props.children}</ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}