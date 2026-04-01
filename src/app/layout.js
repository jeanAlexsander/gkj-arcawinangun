import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GKJ Arcawinangun",
  description:
    "Website resmi Gereja Kristen Jawa (GKJ) Arcawinangun. Berisi jadwal ibadah, pengumuman gereja, dan informasi pelayanan.",
  keywords: [
    "GKJ Arcawinangun",
    "Gereja Kristen Jawa Arcawinangun",
    "Jadwal Ibadah GKJ Arcawinangun",
    "Gereja di Purwokerto",
  ],
  authors: [{ name: "GKJ Arcawinangun" }],
  openGraph: {
    title: "GKJ Arcawinangun",
    description:
      "Website resmi Gereja Kristen Jawa Arcawinangun berisi jadwal ibadah dan informasi pelayanan gereja.",
    url: "https://gkj-arcawinangun.vercel.app",
    siteName: "GKJ Arcawinangun",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
