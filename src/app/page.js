"use client";
import Image from "next/image";
import Link from "next/link";
import TentangSlider from "@/components/TentangSlider";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

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
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Highlight Minggu Ini
          </h2>

          {/* Kembali menggunakan grid 3 kolom karena kartu sudah ringkas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                id: "1",
                title: "Senam Komisi Adiyuswa",
                date: "20 Juni 2026",
                time: "07:00 WIB - Selesai",
                location: "Pantai Sagara & Jetis",
                description:
                  "Senam Komisi Adiyuswa akan dilaksanakan pada 20 Juni 2026 Pukul 07.00 WIB di Pantai Sagara & Jetis. Dimohon keikutsertaan para adiyuswa.",
              },
              {
                id: "2", // Tambahkan ID untuk routing nanti
                title: "Sekolah Alkitab Liburan (SAL)",
                date: "19 - 20 Juni 2026",
                time: "Jumat 15:00 WIB - Sabtu 09.00 WIB",
                location: "Gedung GKJ Arcawinangun",
                description: `Kegiatan Sekolah Alkitab Liburan (SAL) untuk putra-putri kita.

Perlengkapan yang wajib dibawa:
• Alkitab dan Alat Tulis
• Alat mandi dan pakaian ganti
• Selimut / Pakaian hangat
• Tempat minum (tumbler)
• Kasur lantai / kasur lipat dan bantal (opsional)

Keterangan & Ketentuan:
• Peserta yang boleh menginap di gereja adalah kelas 1 SD s.d. 3 SMP.
• Panitia hanya menyediakan kasur cadangan (peserta disarankan membawa sendiri).
• Akan ada edaran persembahan (1 kantong).

Mohon dukungan doa dari Bapak/Ibu sekalian supaya putra dan putri Bapak/Ibu dapat mengikuti kegiatan SAL ini dengan baik dan lancar.`,
              },
            ].map((item, index) => {
              // Logika memotong teks: Jika lebih dari 120 karakter, potong dan tambahkan "..."
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
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[3.5rem]">
                      {item.title}
                    </h3>

                    {/* Information */}
                    <div className="mt-3 space-y-1.5 text-xs text-gray-600 border-b border-gray-200/60 pb-3">
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 shrink-0">
                          Tanggal
                        </span>
                        <span className="truncate">: {item.date}</span>
                      </div>
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 shrink-0">
                          Waktu
                        </span>
                        <span className="truncate">: {item.time}</span>
                      </div>
                      <div className="flex">
                        <span className="w-14 font-semibold text-gray-500 shrink-0">
                          Lokasi
                        </span>
                        <span className="truncate">: {item.location}</span>
                      </div>
                    </div>

                    {/* Description Singkat */}
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed text-left">
                      {shortDescription}
                    </p>
                  </div>

                  {/* Tombol aksi internal kartu jika teksnya panjang */}
                  {isLongText && (
                    <div className="mt-4 pt-2">
                      <Link
                        href="/pengumuman#highlight-minggu-ini" // Otomatis scroll ke event spesifik di halaman pengumuman
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Tombol Utama */}
          <div className="text-center mt-12">
            <Link
              href="/pengumuman"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-sm font-medium"
            >
              Lihat Semua Pengumuman
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
              Persekutuan-persekutuan Gereja di Indonesia (PGI).
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
