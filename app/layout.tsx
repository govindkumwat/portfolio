import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Govind Kumawat | Senior Software Engineer",
  description: "Portfolio of Govind Kumawat, a Senior Software Engineer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030014] text-slate-300 antialiased overflow-y-scroll overflow-x-hidden`}>
        <MouseFollower />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
