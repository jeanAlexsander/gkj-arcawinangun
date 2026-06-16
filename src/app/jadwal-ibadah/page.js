"use client";

import { Clock, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JadwalIbadahPage() {
  return (
    // 1. Set container utama agar mendukung dark mode zinc-950
    <main className="bg-white dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* HEADER - bg-blue-50 -> dark:bg-zinc-900 */}
      <section className="bg-blue-50 dark:bg-zinc-900 py-20 text-center transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-zinc-100 mb-4">
            Jadwal Ibadah
          </h1>
          <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto">
            Informasi waktu dan jenis ibadah jemaat GKJ Arcawinangun.
          </p>
        </motion.div>
      </section>

      {/* JADWAL IBADAH MINGGU - bg-gray-50 -> dark:bg-zinc-950 */}
      <section className="bg-gray-50 dark:bg-zinc-950/40 py-20 border-b border-gray-100 dark:border-zinc-900 transition-colors">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 text-center">
            Jadwal Ibadah Minggu
          </h2>

          {/* GKJ ARCAWINANGUN */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-200 mb-10 text-center">
              GKJ Arcawinangun
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Ibadah Pagi", time: "06.00 WIB" },
                { title: "Ibadah Siang (B.Jawa)", time: "08.30 WIB" },
                { title: "Ibadah Sore", time: "17.00 WIB" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  // Kartu Ibadah Minggu
                  className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center hover:shadow-lg dark:hover:border-zinc-700 transition duration-300"
                >
                  <Clock
                    className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-zinc-400 text-lg">
                    {item.time}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-zinc-800"></div>

          {/* PEPANTHAN KARANG NANAS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-200 mb-10 text-center">
              Pepanthan Karangnanas
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-md mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center hover:shadow-lg dark:hover:border-zinc-700 transition duration-300"
            >
              <Clock
                className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                size={28}
              />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                Ibadah Pagi
              </h4>
              <p className="text-gray-700 dark:text-zinc-400 text-lg">
                08.00 WIB
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IBADAH & PERSEKUTUAN */}
      <section className="bg-gray-50 dark:bg-zinc-950/20 py-20 border-b border-gray-100 dark:border-zinc-900 transition-colors">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 text-center mb-12">
            Ibadah & Persekutuan
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sekolah Minggu",
                day: "Minggu",
                time: "08.30 WIB",
              },
              {
                title: "Doa Fajar",
                day: "Sabtu",
                time: "05.00 WIB",
              },
              {
                title: "Persekutuan Doa Pemuda & Remaja",
                day: "Sabtu",
                time: "17.30 WIB",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200/60 dark:border-zinc-800 hover:shadow-md dark:hover:border-zinc-700 transition duration-300"
              >
                <h3 className="font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 flex items-center gap-2 text-sm">
                  <CalendarDays
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />{" "}
                  {item.day}
                </p>
                <p className="text-gray-600 dark:text-zinc-400 flex items-center gap-2 text-sm mt-1">
                  <Clock
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />{" "}
                  {item.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PENDALAMAN ALKITAB */}
      <section className="bg-white dark:bg-zinc-950 py-20 transition-colors">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 text-center mb-12">
            Pendalaman Alkitab
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Blok A", day: "Selasa", time: "19.00 WIB" },
              { title: "Blok B", day: "Kamis", time: "19.00 WIB" },
              { title: "Blok C", day: "Rabu", time: "19.00 WIB" },
              { title: "Blok D", day: "Kamis", time: "17.00 WIB" },
              { title: "Blok E", day: "Kamis", time: "17.00 WIB" },
              {
                title: "Blok Sumbang Kembaran",
                day: "Jumat",
                time: "19.00 WIB",
              },
              {
                title: "Blok Pepanthan Karangnanas",
                day: "Minggu",
                time: "10:00 WIB",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200/60 dark:border-zinc-800 hover:shadow-md dark:hover:border-zinc-700 transition duration-300"
              >
                <h3 className="font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 flex items-center gap-2 text-sm">
                  <CalendarDays
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />{" "}
                  {item.day}
                </p>
                <p className="text-gray-600 dark:text-zinc-400 flex items-center gap-2 text-sm mt-1">
                  <Clock
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />{" "}
                  {item.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA - CALL TO ACTION */}
      <section className="bg-blue-50 dark:bg-zinc-900 py-20 text-center transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 mb-4">
            Mari Beribadah Bersama
          </h2>
          <p className="text-gray-700 dark:text-zinc-400 mb-8">
            Kami menantikan kehadiran Anda di GKJ Arcawinangun.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/kontak"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition inline-block shadow-sm"
            >
              Hubungi Kami
            </Link>

            <Link
              href="https://maps.app.goo.gl/Ne9HKSoowria4abN8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500/50 px-8 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-zinc-800 transition"
            >
              <MapPin size={18} /> Lihat Lokasi
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
