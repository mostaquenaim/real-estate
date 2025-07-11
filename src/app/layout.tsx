import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banglar Choya Model City Ltd.",
  description: "Trusted real estate company for land, plots, and flats in Dhaka.",
  icons: {
    icon: "/favicon.ico",
  },
  // themeColor: "#1ab31a",
  openGraph: {
    title: "Banglar Choya Model City Ltd.",
    description: "Buy land and plots with confidence in Dhaka. Explore Nawabganj & Dhamrai projects.",
    type: "website",
    locale: "en_BD",
    siteName: "Banglar Choya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white text-gray-900 items-center`}
      >
        <ParticleBackground />
        {/* <ParticlesBackground></ParticlesBackground> */}

        {/* Shared container for spacing */}
        <div className="w-full mx-auto">
          <Header />
        </div>

        <main className="flex-1 w-full mx-auto">
          {/* <FloatingShapes /> */}
          {children}
        </main>

        <div className="w-full mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
