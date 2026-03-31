import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import VisualEffects from "./components/VisualEffects"; // Import pembungkusnya di sini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshari | Portofolio",
  description: "Portofolio Software & Network Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth md:cursor-none">
      <body
        className={`${inter.className} bg-ocean-deep text-ocean-sand antialiased relative`}
      >
        {/* Render efek gelembung & kursor dari pembungkus Client Component */}
        <VisualEffects />

        <Navbar />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
