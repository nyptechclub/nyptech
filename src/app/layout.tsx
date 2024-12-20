import AppShell from "@/components/app-shell";
import { inter } from "@/fonts";
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
    <html lang="en" data-theme="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <AppShell>{props.children}</AppShell>
        </ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}