import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoryPods | Own Your Podcasts",
  description: "Creators enjoy IP registered ownership for your content. Listen to endless podcasts for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " dark"}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
