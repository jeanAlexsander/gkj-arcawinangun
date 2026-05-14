"use client";

import { Mic, BookOpen, CalendarDays, Gift, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PengumumanPage() {
  const highlight = [
    // "Ibadah Jumat Agung akan dilaksanakan 3 April 2026 Pukul 08:00.",
    // "Ibadah Sabtu Sunyi akan dilaksanakan 4 April 2026 Pukul 17:00.",
    // "Ibadah Paskah (Kebaktian Padang) akan dilaksanakan 5 April 2026 Pukul 05:00 di lapangan kelurahan Arcawinangun.",
    // "Ibadah Paskah Pepanthan Karangnanas akan dilaksanakan 5 April 2026 Pukul 08:00.",
  ];
  const kegiatanMendatang = [
    {
      title: "Ibadah Kenaikan Tuhan Yesus Kristus",
      date: "14 Mei 2026",
      time: "07:00 WIB",
      location: "GKJ Arcawinangun",
      description:
        "Ibadah Akan dilayani oleh Pdt. Amos Renoardi, S.TH., M.Si. (Manunggil)",
    },
  ];
  return (
    <main className="bg-white space-y-24">
      {/* HERO */}
      <section className="py-24 bg-blue-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Pengumuman Gereja
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Informasi dan kegiatan terbaru GKJ Arcawinangun.
          </p>
        </motion.div>
      </section>

      {/* WARTA LISAN */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
            <Mic className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 shrink-0" />
            Highlight – Minggu Ini
          </h2>

          <ul className="list-disc list-outside pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
            {highlight.length > 0 ? (
              highlight.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li className="list-none text-center text-gray-500">
                Belum ada highlight minggu ini
              </li>
            )}
          </ul>
        </motion.div>
      </section>

      {/* JADWAL PENGKHOTBAH */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Jadwal Pengkhotbah
          </h2>

          {/* HEADER JAM (HANYA SEKALI) */}
          <div className="overflow-x-auto">
            <div className="min-w-[780px]">
              {/* HEADER */}
              <div className="grid grid-cols-5 gap-6 border-b pb-4 mb-4 text-center font-semibold text-blue-700 text-sm sm:text-base">
                <div className="text-left pl-7 sm:pl-7">Tanggal</div>
                <div>06.00</div>
                <div>08.30</div>
                <div>17.00</div>
                <div>08.00 (Pepantan Karangnanas)</div>
              </div>

              {/* DATA */}
              <div>
                {[
                  {
                    tanggal: "26 April 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Bangun Kriyanto, M.Pd.",
                    ],
                  },
                  {
                    tanggal: "3 Mei 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Bangun Edi Sumirat, M.Si.",
                    ],
                  },
                  {
                    tanggal: "10 Mei 2026",
                    pendeta: [
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Sunarto Kriswartomo.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                      "Pdt. Amos Renoardi, S.TH., M.Si.",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 gap-6 items-center border-b py-4 last:border-none text-center text-sm sm:text-base"
                  >
                    {/* TANGGAL */}
                    <div className="font-semibold text-gray-800 text-left">
                      {item.tanggal}
                    </div>

                    {/* PENDETA */}
                    {item.pendeta.map((p, i) => (
                      <div key={i} className="text-gray-700">
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

      {/* KEGIATAN */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
            <CalendarDays className="w-6 h-6 text-blue-600" />
            Kegiatan Mendatang
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {kegiatanMendatang.length > 0 ? (
              kegiatanMendatang.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                  className="border border-blue-100 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                >
                  {/* Title */}
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>🗓 {item.date}</p>
                    {item.time && <p>⏰ {item.time}</p>}
                    {item.location && <p>📍 {item.location}</p>}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-500 text-sm mt-3">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center border border-dashed border-gray-300 p-8 rounded-2xl">
                <p className="text-gray-500">Belum ada kegiatan mendatang</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
