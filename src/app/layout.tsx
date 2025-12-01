import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/provider/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAS",
  description: "Fresh Fish Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${rubik.className} antialiased`}>
        <Providers>
          <Toaster richColors position="top-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
