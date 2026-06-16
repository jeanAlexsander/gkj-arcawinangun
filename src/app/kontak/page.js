"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function KontakPage() {
  const [nama, setNama] = useState("");
  const [kontak, setKontak] = useState("");
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !kontak || !pesan) {
      toast.error("Semua field harus diisi!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, kontak, pesan }),
      });

      if (res.ok) {
        toast.success("Pesan berhasil dikirim");
        setNama("");
        setKontak("");
        setPesan("");
      } else {
        toast.error("Gagal mengirim pesan");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan, coba lagi");
    }

    setLoading(false);
  };

  return (
    // Set container utama agar mendukung dark mode zinc-950
    <main className="space-y-24 bg-white dark:bg-zinc-950 transition-colors duration-300 min-h-screen pb-24">
      {/* HERO - bg-blue-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-blue-50 dark:bg-zinc-900 text-center transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            Kontak Kami
          </h1>
          <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto px-6">
            Kami siap melayani, mendengarkan, dan mendoakan Anda.
          </p>
        </motion.div>
      </section>

      {/* INFO KONTAK + FORM */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* KIRI: INFO KONTAK TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              Informasi Kontak
            </h2>

            <div className="flex gap-4 items-start">
              <MapPin className="text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
              <p className="text-gray-700 dark:text-zinc-300">
                Jl. Gereja No. 351, Arcawinangun
                <br />
                Purwokerto Timur, Banyumas
                <br />
                Jawa Tengah 53115
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <Phone className="text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-gray-700 dark:text-zinc-300">0281 638764</p>
            </div>

            <div className="flex gap-4 items-center">
              <Mail className="text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-gray-700 dark:text-zinc-300">
                gkj.arcawinangun@email.com
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <Clock className="text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-gray-700 dark:text-zinc-300">
                Senin – Jumat, 08.00 – 15.00 WIB
              </p>
            </div>
          </motion.div>

          {/* KANAN: FORM INPUT & TEXTAREA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            // Mengubah bg box dari bg-gray-50 -> dark:bg-zinc-900
            className="bg-gray-50 dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 rounded-2xl shadow-sm transition-colors"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 mb-6">
              Kirim Pesan / Permohonan Doa
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                // Menata input field agar mendukung gelap-terang secara solid
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Email / No. WhatsApp"
                value={kontak}
                onChange={(e) => setKontak(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={4}
                placeholder="Tuliskan pesan atau permohonan doa..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        {/* Memberikan sedikit filter peredupan kontras pada peta (dark:brightness-75) */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-transparent dark:border-zinc-800 transition-colors">
          <iframe
            title="Lokasi GKJ Arcawinangun"
            src="https://www.google.com/maps?q=GKJ%20Arcawinangun&output=embed"
            // Mengubah h-[400px] menjadi h-100 sesuai rekomendasi Tailwind v4
            className="w-full h-100 border-0 rounded-2xl dark:brightness-90 transition-all"
            loading="lazy"
          />
        </div>
      </motion.section>
    </main>
  );
}
