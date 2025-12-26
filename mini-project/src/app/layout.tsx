import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Retro Bean Cafe",
  description: "Great Time and Good Coffee since 1990",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Ribeye&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Young+Serif&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="bg-green min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
