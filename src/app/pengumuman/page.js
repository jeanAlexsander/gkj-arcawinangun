"use client";

import { Mic, BookOpen, CalendarDays, Gift, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PengumumanPage() {
  const highlight = [
    // "Donor darah akan dilaksanakan pada tanggal 19 Juli 2026 pukul 07.00-11.00 wib di Ruang Tamu dan halaman depan Pastori GKJ Arcawinangun. Bagi 50 pendonor yang berhasil akan mendapat tambahan menu berupa 800ml Minyak Goreng.",
  ];

  const kegiatanMendatang = [
    {
      id: "1",
      title: "Sidang Majelis Pleno",
      date: "3 Agustus 2026",
      time: "17.00 WIB",
      location: "GKJ Arcawinangun.",
      description:
        "Bagi jemaat yang mempunyai kepentingan dapat menyampaikannya secara tertulis kepada Majelis atau melalui Kantor Gereja dengan menyertakan nama dan alamat yang jelas. Dalam persidangan ini Pnt. Umiyati bertugas membawakan renungan, sementara konsumsi disiapkan oleh Blok Sung-Kem",
    },
  ];

  return (
    <main className="bg-white dark:bg-zinc-950 space-y-24 transition-colors duration-300 min-h-screen">
      {/* HERO - Menyesuaikan bg-blue-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-blue-50 dark:bg-zinc-900 text-center transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100">
            Pengumuman Gereja
          </h1>
          <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
            Informasi dan kegiatan terbaru GKJ Arcawinangun.
          </p>
        </motion.div>
      </section>

      {/* WARTA LISAN / HIGHLIGHT */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          // Modifikasi border & background box
          className="bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 rounded-2xl p-8 shadow-sm transition-colors"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
            <Mic className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400 shrink-0" />
            Highlight – Minggu Ini
          </h2>

          <ul className="list-disc list-outside pl-6 text-lg text-gray-700 dark:text-zinc-300 leading-relaxed space-y-2">
            {highlight.length > 0 ? (
              highlight.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li className="list-none text-center text-gray-500 dark:text-zinc-500">
                Belum ada highlight minggu ini
              </li>
            )}
          </ul>
        </motion.div>
      </section>

      {/* JADWAL PENGKHOTBAH (TABEL) */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 rounded-2xl p-8 shadow-sm transition-colors"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8">
            Jadwal Pengkhotbah
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-195">
              {/* HEADER TABEL */}
              <div className="grid grid-cols-5 gap-6 border-b border-gray-200 dark:border-zinc-800 pb-4 mb-4 text-center font-semibold text-blue-700 dark:text-blue-400 text-sm sm:text-base">
                <div className="text-left pl-7">Tanggal</div>
                <div>06.00</div>
                <div>08.30</div>
                <div>17.00</div>
                <div>08.00 (Pepanthan Karangnanas)</div>
              </div>

              {/* DATA ROW TABEL */}
              <div className="divide-y divide-gray-100 dark:divide-zinc-800/60">
                {[
                  {
                    tanggal: "28 Juni 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Dr. Sutoyo, M.Pd.K.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                    ],
                  },
                  {
                    tanggal: "5 Juli 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "-",
                      "-",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                    ],
                  },
                  {
                    tanggal: "12 Juli 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Sdri. Destalenta I.P.,S.Si. Teol.",
                    ],
                  },
                  {
                    tanggal: "19 Juli 2026",
                    pendeta: [
                      "Pdt. Yusuf Marwanto, S.Si.",
                      "Sdr. Sunarto Kriswartomo",
                      "Dr. Rianto, MM.,M.Pd.K",
                      "Pdt. Yusuf Marwanto, S.Si.",
                    ],
                  },
                  {
                    tanggal: "2 Agustus 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Dr. Rianto, MM., M.Pd.K ",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 gap-6 items-center py-4 text-center text-sm sm:text-base"
                  >
                    {/* TANGGAL */}
                    <div className="font-semibold text-gray-800 dark:text-zinc-200 text-left">
                      {item.tanggal}
                    </div>

                    {/* DAFTAR PENDETA */}
                    {item.pendeta.map((p, i) => (
                      <div
                        key={i}
                        className="text-gray-700 dark:text-zinc-400 text-xs sm:text-sm"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* KEGIATAN MENDATANG */}
      <section
        id="highlight-minggu-ini"
        className="max-w-5xl mx-auto px-6 mb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
            <CalendarDays className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Kegiatan Mendatang
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {kegiatanMendatang.length > 0 ? (
              kegiatanMendatang.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                  // Sasis Kartu Kegiatan Mendatang
                  className="border border-blue-100 dark:border-zinc-800 p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md dark:hover:border-zinc-700 transition duration-300"
                >
                  {/* Title */}
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-zinc-100 mb-3">
                    {item.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="text-gray-600 dark:text-zinc-400 text-sm space-y-1 mb-3">
                    <p>Tanggal : {item.date}</p>
                    {item.time && <p>Waktu : {item.time}</p>}
                    {item.location && <p>Lokasi : {item.location}</p>}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 dark:text-zinc-400 whitespace-pre-line border-t border-gray-100 dark:border-zinc-800/50 pt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center border border-dashed border-gray-300 dark:border-zinc-800 p-8 rounded-2xl">
                <p className="text-gray-500 dark:text-zinc-500">
                  Belum ada kegiatan mendatang
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
