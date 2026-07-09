"use client";
import Image from "next/image";
import Link from "next/link";
import TentangSlider from "@/components/TentangSlider";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // 1. Tambahkan transisi warna global pada main tag
    <main className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center text-white">
        <Image
          src="/gereja_3.jpg"
          alt="GKJ Arcawinangun"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay disesuaikan agar tetap kontras di kedua mode */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 to-blue-900/50 dark:from-zinc-950/80 dark:to-zinc-950/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Selamat Datang di GKJ Arcawinangun
          </h1>

          <p className="text-lg text-blue-100 dark:text-zinc-200 mb-6 drop-shadow">
            “Datanglah kepada-Ku, semua yang letih lesu dan berbeban berat…”
          </p>

          <Link
            href="/jadwal-ibadah"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition"
          >
            Lihat Jadwal Ibadah
          </Link>
        </motion.div>
      </section>

      {/* HIGHLIGHT MINGGU INI */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 text-center mb-10">
            Highlight Minggu Ini
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                id: "1",
                title: "Posyandu Lansia",
                date: "12 Juli 2026",
                time: "09:30 WIB (Setelah Ibadah Siang)",
                location: "GKJ Arcawinangun",
                description:
                  "Diinformasikan bahwa posyandu lansia akan diadakan hari Minggu tanggal 12 Juli 2026 pukul 09.30 wib (setelah ibadah siang), mohon kehadiran para Adiyuswa.",
              },
            ].map((item, index) => {
              const isLongText = item.description.length > 120;
              const shortDescription = isLongText
                ? item.description.slice(0, 120) + "..."
                : item.description;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800 hover:shadow-md hover:border-blue-200 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 dark:text-zinc-100 line-clamp-2 min-h-14">
                      {item.title}
                    </h3>

                    {/* Information Border */}
                    <div className="mt-3 space-y-1.5 text-xs text-gray-600 dark:text-zinc-400 border-b border-gray-200/60 dark:border-zinc-800 pb-3">
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 dark:text-zinc-500 shrink-0">
                          Tanggal
                        </span>
                        <span className="truncate">: {item.date}</span>
                      </div>
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 dark:text-zinc-500 shrink-0">
                          Waktu
                        </span>
                        <span className="truncate">: {item.time}</span>
                      </div>
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 dark:text-zinc-500 shrink-0">
                          Lokasi
                        </span>
                        <span className="truncate">: {item.location}</span>
                      </div>
                    </div>

                    {/* Deskripsi */}
                    <p className="text-gray-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed text-left">
                      {shortDescription}
                    </p>
                  </div>

                  {isLongText && (
                    <div className="mt-4 pt-2">
                      <Link
                        href="/pengumuman#highlight-minggu-ini"
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pengumuman"
              className="inline-block bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-sm font-medium"
            >
              Lihat Semua Pengumuman
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TENTANG */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/50 border-y border-transparent dark:border-zinc-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-zinc-100 mb-4">
              Tentang GKJ Arcawinangun
            </h2>

            <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-6 text-justify">
              GKJ Arcawinangun adalah salah satu Gereja Kristen Jawa yang ada di
              Kabupaten Banyumas. Merupakan bagian dari GKJ Klasis Banyumas
              Utara dimana GKJ sendiri merupakan sebuah sinode gereja yang
              berkantor di Salatiga. Sinode GKJ merupakan bagian dari
              Persekutuan-persekutuan Gereja di Indonesia (PGI).
            </p>

            <Link
              href="/tentang"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 dark:bg-blue-600 transition"
            >
              Selengkapnya
            </Link>
          </div>

          <TentangSlider />
        </motion.div>
      </section>

      {/* JADWAL */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 text-center">
            Jadwal Ibadah Minggu
          </h2>

          {/* GKJ ARCAWINANGUN */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-300 mb-10 text-center">
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
                  // 6. Atur card jadwal di mode gelap
                  className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center hover:shadow-lg dark:hover:border-zinc-700 transition"
                >
                  <Clock
                    className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-zinc-300 text-lg">
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
            <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-300 text-center mb-10">
              Pepanthan Karangnanas
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-md mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 text-center hover:shadow-lg dark:hover:border-zinc-700 transition"
            >
              <Clock
                className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                size={28}
              />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-zinc-100 mb-2">
                Ibadah Pagi
              </h4>
              <p className="text-gray-700 dark:text-zinc-300 text-lg">
                08.00 WIB
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-blue-50 dark:bg-zinc-900/30 text-center transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 mb-4">
            Mari Bertumbuh Bersama
          </h2>

          <p className="text-gray-700 dark:text-zinc-400 mb-8">
            Bergabunglah dalam pelayanan dan kegiatan GKJ Arcawinangun.
          </p>

          <Link
            href="/kontak"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition inline-block"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
