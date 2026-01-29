import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Kumar | Frontend Developer",
  description: "Portfolio of Aniket Kumar, a Full Stack Developer building digital experiences that matter.",
};

import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-black text-white selection:bg-blue-500/30 cursor-none`}
      >
        <Header />
        <CustomCursor />
        <Background />
        {children}
      </body>
    </html>
  );
}
