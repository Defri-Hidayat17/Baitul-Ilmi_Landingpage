// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer
import AOSInitializer from "@/components/AOSInitializer"; // <--- TAMBAHKAN INI

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baitul Ilmi",
  description: "Platform Pembelajaran Pendidikan Agama Islam Interaktif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInitializer /> {/* <--- TAMBAHKAN INI */}
        <Header /> {/* Render Header di sini */}
        <main>{children}</main>{" "}
        {/* Konten halaman akan dirender di dalam main */}
        <Footer /> {/* Render Footer di sini */}
      </body>
    </html>
  );
}
