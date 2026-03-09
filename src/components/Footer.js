import { Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Info Gereja */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            GKJ Arcawinangun
          </h3>
          <p className="text-sm">
            Melayani dengan kasih, bertumbuh dalam iman, dan membangun
            kebersamaan di dalam Kristus.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>

          <div className="flex items-start gap-3 text-sm mb-2">
            <span>📍</span>
            <p>
              Jl. Gereja No. 351, Arcawinangun,
              <br />
              Purwokerto Timur, Kabupaten Banyumas,
              <br />
              Jawa Tengah 53113
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm mb-2">
            <span>📞</span>
            <p>0281638764</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span>✉️</span>
            <p>arcawinangun.gkj@gmail.com</p>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Ikuti Kami</h3>
          <div className="flex flex-col gap-3 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 transition hover:text-pink-400"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCdA3hMtd5ZjskM8uo5dc70Q"
              target="_blank"
              className="flex items-center gap-2 transition hover:text-red-400"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* QR Persembahan */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Persembahan</h3>

          <div className="bg-white p-3 rounded-xl inline-block">
            <Image
              src="/qr-persembahan.png" // pastikan file ini ada di folder public
              alt="QR Persembahan GKJ Arcawinangun"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          <p className="text-sm mt-3 text-blue-200">
            Scan QR untuk memberikan persembahan
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-blue-200 pb-6">
        © {new Date().getFullYear()} GKJ Arcawinangun. All rights reserved.
      </div>
    </footer>
  );
}
