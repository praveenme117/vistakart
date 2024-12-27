import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "VistaKart",
  description: "Fashion & Trending Product Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-base">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
