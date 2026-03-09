"use client";

import { Mic, BookOpen, CalendarDays, Gift, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PengumumanPage() {
  const [selectedLentera, setSelectedLentera] = useState(null);
  useEffect(() => {
    if (selectedLentera) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedLentera]);
  const lenteraData = [
    {
      title: "Februari 2 2026",
      file: "/lentera-februari-2-2026.pdf",
      image: "/lentera-februari.jpg",
    },
    {
      title: "Januari 2026",
      file: "/lentera-januari-2026.pdf",
      image: "/lentera-januari.jpg",
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
            Highlight – Minggu, 17 Februari 2026
          </h2>

          <ul className="list-disc list-outside pl-6 text-lg text-gray-700 leading-relaxed space-y-2">
            <li>Ibadah Minggu dimulai pukul 06.00, 08.30, dan 17.00 WIB.</li>
            <li>Persekutuan Doa diadakan hari Rabu pukul 19.00 WIB.</li>
            <li>Retret Pemuda akan dilaksanakan tanggal 25 Maret 2026.</li>
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
            Jadwal Pengkhotbah – Februari 2026
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
                    tanggal: "2 Februari 2026",
                    pendeta: [
                      "Pdt. Yohanes Fernando",
                      "Pdt. Maria",
                      "Pdt. Daniel",
                      "Pdt. Samuel",
                    ],
                  },
                  {
                    tanggal: "9 Februari 2026",
                    pendeta: [
                      "Pdt. Maria",
                      "Pdt. Yohanes",
                      "Pdt. Samuel",
                      "Pdt. Daniel",
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

      {/* LENTERA */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Lentera (Buletin Gereja)
          </h2>

          {/* DATA LENTERA */}
          {lenteraData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false }}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-4"
            >
              <span>Lentera {item.title}</span>

              <button
                onClick={() => setSelectedLentera(item)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
              >
                <Download className="w-4 h-4" />
                Lihat
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MODAL LENTERA DENGAN ANIMASI */}
      <AnimatePresence>
        {selectedLentera && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
            onClick={() => setSelectedLentera(null)} // klik overlay tutup modal
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="bg-white rounded-2xl p-6 max-w-md w-full relative my-auto"
              onClick={(e) => e.stopPropagation()} // klik modal tidak menutup
            >
              {/* tombol close */}
              <button
                onClick={() => setSelectedLentera(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-4 text-center">
                Lentera {selectedLentera.title}
              </h3>

              {/* preview gambar */}
              <img
                src={selectedLentera.image}
                alt="Preview Lentera"
                className="rounded-lg mb-4"
              />

              {/* download */}
              <a
                href={selectedLentera.file}
                download
                className="flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            {[
              { title: "Retret Pemuda", date: "25 Maret 2026" },
              { title: "Perayaan Paskah", date: "31 Maret 2026" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="border border-blue-100 p-6 rounded-2xl"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
