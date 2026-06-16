import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GKJ Arcawinangun Purwokerto - Gereja Kristen Jawa",
  description:
    "Website resmi Gereja Kristen Jawa (GKJ) Arcawinangun. Berisi jadwal ibadah, pengumuman gereja, dan informasi pelayanan.",
  keywords: [
    "GKJ Arcawinangun",
    "Gereja Kristen Jawa Arcawinangun",
    "Jadwal Ibadah GKJ Arcawinangun",
    "Gereja di Purwokerto",
  ],
  authors: [{ name: "GKJ Arcawinangun" }],

  verification: {
    google: "1FSQX7voMn0b9YbfpHwnm6ysTxO6QHWLlctiRC7pfPs",
  },

  openGraph: {
    title: "GKJ Arcawinangun Purwokerto - Gereja Kristen Jawa",
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
    // 2. Tambahkan suppressHydrationWarning di sini agar tidak ada error di console browser
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        {/* 3. Bungkus seluruh konten aplikasi di dalam ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
