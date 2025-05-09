import type { Metadata } from "next";
import {Outfit } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Admin RentalCar",
  description: "Web page for Rental Car Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <NextTopLoader color="#000" />
        {children}
      </body>
    </html>
  );
}
