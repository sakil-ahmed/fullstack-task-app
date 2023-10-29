import "@/styles/main.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import { ClientProvider } from "@/app/AppLayout/ClientProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
