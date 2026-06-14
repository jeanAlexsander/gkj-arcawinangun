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
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Info Gereja */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            GKJ Arcawinangun
          </h3>
          <p className="text-sm leading-relaxed text-blue-100/80">
            Melayani dengan kasih, bertumbuh dalam iman, dan membangun
            kebersamaan di dalam Kristus.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-300 shrink-0 mt-0.5" />
              <p className="text-blue-100/90">
                Jl. Balai Kelurahan No. 351, Arcawinangun,
                <br />
                Purwokerto Timur, Kabupaten Banyumas,
                <br />
                Jawa Tengah 53113
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-300 shrink-0" />
              <p className="text-blue-100/90">0281638764</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-300 shrink-0" />
              <p className="text-blue-100/90">arcawinangun.gkj@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Ikuti Kami</h3>
          <div className="flex flex-col gap-3 mt-3">
            <a
              href="https://www.instagram.com/gkj_arcawinangun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-pink-400 text-blue-100/90"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-blue-400 text-blue-100/90"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCdA3hMtd5ZjskM8uo5dc70Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-red-400 text-blue-100/90"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* QR Persembahan & Rekening */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Persembahan</h3>

          <div className="bg-white p-3 rounded-xl inline-block shadow-md">
            <Image
              src="/qr-persembahan.png"
              alt="QR Persembahan GKJ Arcawinangun"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          <p className="text-xs mt-2 text-blue-200">
            Scan QR untuk memberikan persembahan
          </p>

          {/* Bagian Rekening Baru */}
          <div className="mt-4 pt-4 border-t border-blue-800/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-2">
              Transfer Bank
            </p>

            <div className="bg-white p-3 rounded-xl flex flex-col gap-2 text-left shadow-md">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-blue-900 text-white font-bold text-[10px] rounded tracking-wide">
                  BNI
                </span>
                <span className="text-xs text-gray-600 font-medium">
                  a.n. GKJ Arcawinangun
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-xl font-bold text-gray-900 tracking-wide">
                  1978 6662 22
                </span>
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-all active:scale-95 shrink-0 ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
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
      <div className="text-center text-sm text-blue-300/75 pb-6 border-t border-blue-800/30 pt-4 max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} GKJ Arcawinangun. All rights reserved.
      </div>
    </footer>
  );
}
