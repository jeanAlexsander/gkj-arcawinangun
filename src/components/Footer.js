"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
} from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const norek = "1978666222";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(norek);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    // 1. Tambahkan dark:bg-zinc-950, border, dan transisi warna
    <footer className="bg-blue-900 dark:bg-zinc-950 text-gray-300 dark:text-zinc-400 border-t border-transparent dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Info Gereja */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-zinc-100 mb-2">
            GKJ Arcawinangun
          </h3>
          <p className="text-sm leading-relaxed text-blue-100/80 dark:text-zinc-400">
            Melayani dengan kasih, bertumbuh dalam iman, dan membangun
            kebersamaan di dalam Kristus.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-zinc-100 mb-3">
            Kontak
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-blue-300 dark:text-zinc-500 shrink-0 mt-0.5"
              />
              <p className="text-blue-100/90 dark:text-zinc-400">
                Jl. Balai Kelurahan No. 351, Arcawinangun,
                <br />
                Purwokerto Timur, Kabupaten Banyumas,
                <br />
                Jawa Tengah 53113
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-blue-300 dark:text-zinc-500 shrink-0"
              />
              <p className="text-blue-100/90 dark:text-zinc-400">0281638764</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-blue-300 dark:text-zinc-500 shrink-0"
              />
              <p className="text-blue-100/90 dark:text-zinc-400 truncate">
                arcawinangun.gkj@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-zinc-100 mb-2">
            Ikuti Kami
          </h3>
          <div className="flex flex-col gap-3 mt-3">
            <a
              href="https://www.instagram.com/gkj_arcawinangun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-pink-400 dark:hover:text-pink-400 text-blue-100/90 dark:text-zinc-400"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-blue-400 dark:hover:text-blue-400 text-blue-100/90 dark:text-zinc-400"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCdA3hMtd5ZjskM8uo5dc70Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-red-400 dark:hover:text-red-400 text-blue-100/90 dark:text-zinc-400"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* QR Persembahan & Rekening */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white dark:text-zinc-100 mb-3">
            Persembahan
          </h3>

          {/* Container QR disesuaikan agar tidak terlalu mencolok di mode gelap */}
          <div className="bg-white dark:bg-zinc-200 p-3 rounded-xl inline-block shadow-md transition-colors">
            <Image
              src="/qr-persembahan.png"
              alt="QR Persembahan GKJ Arcawinangun"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          <p className="text-xs mt-2 text-blue-200 dark:text-zinc-500">
            Scan QR untuk memberikan persembahan
          </p>

          {/* Bagian Rekening */}
          <div className="mt-4 pt-4 border-t border-blue-800/60 dark:border-zinc-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 dark:text-zinc-500 mb-2">
              Transfer Bank
            </p>

            {/* Kotak Info Rekening diubah menjadi abu-abu gelap di mode gelap */}
            <div className="bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-3 rounded-xl flex flex-col gap-2 text-left shadow-md transition-colors">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-orange-400 text-white font-bold text-[10px] rounded tracking-wide">
                  BNI
                </span>
                <span className="text-xs text-gray-600 dark:text-zinc-400 font-medium">
                  a.n. GKJ Arcawinangun
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-xl font-bold text-gray-900 dark:text-zinc-100 tracking-wide">
                  1978 6662 22
                </span>
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-all active:scale-95 shrink-0 ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-blue-300/75 dark:text-zinc-600 pb-6 border-t border-blue-800/30 dark:border-zinc-900/60 pt-4 max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} GKJ Arcawinangun. All rights reserved.
      </div>
    </footer>
  );
}
