"use client";

import Image from "next/image";
import Link from "next/link";
import TentangSlider from "@/components/TentangSlider";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center text-white">
        <Image
          src="/gereja_3.jpg"
          alt="GKJ Arcawinangun"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Selamat Datang di GKJ Arcawinangun
          </h1>

          <p className="text-lg text-blue-100 mb-6 drop-shadow">
            “Datanglah kepada-Ku, semua yang letih lesu dan berbeban berat…”
          </p>

          <Link
            href="/jadwal-ibadah"
            className="ml-4 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Lihat Jadwal Ibadah
          </Link>
        </motion.div>
      </section>

      {/* HIGHLIGHT MINGGU INI */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Highlight Minggu Ini
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Ibadah Minggu pukul 06.00, 08.30, dan 17.00 WIB.",
              "Persekutuan Doa hari Rabu pukul 19.00 WIB.",
              "Retret Pemuda akan dilaksanakan 25 Maret 2026.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pengumuman"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Lihat Pengumuman Lengkap
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TENTANG */}
      <section className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Tentang GKJ Arcawinangun
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
              GKJ Arcawinangun adalah salah satu Gereja Kristen Jawa yang ada di
              Kabupaten Banyumas. Merupakan bagian dari GKJ Klasis Banyumas
              Utara dimana GKJ sendiri merupakan sebuah sinode gereja yang
              berkantor di Salatiga. Sinode GKJ merupakan bagian dari
              persekutuan-persekutuan di Indonesia (PGI).
            </p>

            <Link
              href="/tentang"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Selengkapnya
            </Link>
          </div>

          <TentangSlider />
        </motion.div>
      </section>

      {/* JADWAL */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Jadwal Ibadah Minggu
          </h2>

          {/* GKJ ARCWINANGUN */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center">
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
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
                >
                  <Clock className="mx-auto mb-4 text-blue-600" size={28} />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-lg">{item.time}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* PEPANTHAN KARANG NANAS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-10">
              Pepanthan Karangnanas
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              <Clock className="mx-auto mb-4 text-blue-600" size={28} />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Ibadah Pagi
              </h4>
              <p className="text-gray-700 text-lg">08.00 WIB</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mari Bertumbuh Bersama
          </h2>

          <p className="text-gray-700 mb-8">
            Bergabunglah dalam pelayanan dan kegiatan GKJ Arcawinangun.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
            Hubungi Kami
          </button>
        </motion.div>
      </section>
    </main>
  );
}
