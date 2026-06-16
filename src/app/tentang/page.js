"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Link from "next/link";
import Image from "next/image";
import { Church, Users, HeartHandshake, Flag } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Ibadah Minggu", icon: Church },
  { title: "Sekolah Minggu", icon: Users },
  { title: "Pemuda & Remaja", icon: Users },
  { title: "Persekutuan Doa", icon: Church },
  { title: "Pelayanan Sosial", icon: HeartHandshake },
  { title: "Kunjungan", icon: HeartHandshake },
  { title: "Pelayanan Misi", icon: Flag },
];

export default function TentangPage() {
  return (
    // Set container utama agar mendukung dark mode zinc-950
    <main className="space-y-24 bg-white dark:bg-zinc-950 transition-colors duration-300 min-h-screen pb-24">
      {/* SEKILAS - bg-blue-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-blue-50 dark:bg-zinc-900 transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
              Tentang GKJ Arcawinangun
            </h1>

            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed text-justify">
              GKJ Arcawinangun adalah salah satu Gereja Kristen Jawa yang ada di
              Kabupaten Banyumas. Merupakan bagian dari GKJ Klasis Banyumas
              Utara dimana GKJ sendiri merupakan sebuah sinode gereja yang
              berkantor di Salatiga. Sinode GKJ merupakan bagian dari
              Persekutuan-persekutuan Gereja di Indonesia (PGI).
            </p>
          </div>

          <Image
            src="/gereja.jpg"
            alt="Gedung GKJ Arcawinangun"
            width={500}
            height={350}
            className="w-full h-auto rounded-xl shadow-md transition duration-300 md:hover:scale-105 md:hover:brightness-95"
          />
        </motion.div>
      </section>

      {/* SEJARAH - bg-white -> dark:bg-zinc-950 */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* FOTO KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/gereja_6.jpg"
              alt="Sejarah GKJ Arcawinangun"
              width={600}
              height={500}
              className="rounded-xl shadow-md transition duration-300 hover:scale-105 hover:brightness-95"
            />
          </motion.div>

          {/* TEKS KANAN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
              Sejarah Singkat Gereja
            </h2>

            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed text-justify mb-4">
              GKJ Arcawinangun lahir dari kerinduan sederhana beberapa keluarga
              Kristen sekitar tahun{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                1960
              </span>{" "}
              yang dengan setia mengikuti kebaktian di Grendeng sebagai bagian
              dari pelayanan GKJ Purwokerto.
            </p>

            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed text-justify mb-4">
              Dalam kesederhanaan ibadah rumah tangga, iman dipelihara dan
              ditumbuhkan. Pelayanan awal ditopang oleh Pdt. Sukarso Djojosuwito
              dan GI. Susetyo Prawirosudirjo, hingga jemaat terus bertambah.
            </p>

            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed text-justify mb-4">
              Pada{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                25 Mei 1972
              </span>
              , gedung gereja permanen diresmikan dan jemaat dikenal sebagai
              Pepanthan Arcawinangun. Kemudian pada{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                1 Januari 1978
              </span>
              , pepanthan ini didewasakan menjadi GKJ Arcawinangun.
            </p>

            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed text-justify">
              Hingga kini, gereja terus bertumbuh melalui kepemimpinan para
              pendeta dan majelis, menjadi gereja yang hidup dalam kasih Kristus
              dan menjadi berkat bagi sesama.
            </p>

            {/* TOMBOL */}
            <div className="mt-6">
              <Link
                href="/sejarah"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition duration-300 hover:bg-blue-700 hover:shadow-md"
              >
                Selengkapnya
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISI MISI - bg-gray-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800/50 transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-zinc-100 mb-3">
              Visi
            </h3>
            <p className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
              Menjadi gereja yang berkenan kepada Allah, sehingga menjadi sarana
              kemuliaan bagi Allah dan mendatangkan damai sejahtera (Syalom) di
              bumi (Lukas 2:14).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-zinc-100 mb-3">
              Misi
            </h3>
            <ul className="list-disc list-outside pl-6 text-lg text-gray-700 dark:text-zinc-300 leading-relaxed space-y-2">
              <li>
                Menyelenggarakan peribadatan kepada Tuhan dengan benar dan penuh
                kasih sukacita (Mazmur 100:2; Roma 12:1).
              </li>
              <li>Mencari dan menyelamatkan yang hilang (Lukas 19:10).</li>
              <li>Melayani banyak orang (Markus 10:45).</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* PELAYANAN - bg-white -> dark:bg-zinc-950 */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-zinc-100">
          Pelayanan & Kegiatan
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: false }}
              // Penyesuaian border dan bg kartu
              className="group border border-blue-100 dark:border-zinc-800 rounded-xl p-6 text-center bg-white dark:bg-zinc-900
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 dark:hover:border-zinc-700"
            >
              <Icon
                size={32}
                className="mx-auto mb-4 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110"
              />
              <p className="font-semibold text-gray-800 dark:text-zinc-200">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STRUKTUR MAJELIS - bg-gray-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800/50 transition-colors">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
            Struktur Majelis Gereja
          </h2>

          <PhotoProvider>
            <PhotoView src="/struktur_new.png">
              <Image
                src="/struktur_new.png"
                alt="Struktur Majelis GKJ Arcawinangun"
                width={1000}
                height={500}
                className="rounded-xl shadow-md mx-auto object-contain cursor-pointer hover:scale-102 transition duration-300 bg-white dark:bg-zinc-800 p-2 border dark:border-zinc-700"
              />
            </PhotoView>
          </PhotoProvider>

          <p className="text-gray-800 dark:text-zinc-300 mt-6 max-w-2xl mx-auto">
            Pelayanan gereja didukung oleh pendeta dan majelis yang setia
            melayani jemaat.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
