"use client";

import { motion } from "framer-motion";
import { Church, Users, HeartHandshake, Monitor, BookOpen } from "lucide-react";

const pelayanans = [
  {
    title: "Pelayanan Ibadah",
    icon: Church,
    items: [
      "Liturgi",
      "Pemusik & Singer",
      "Operator Multimedia",
      "Tata Ibadah",
    ],
  },
  {
    title: "Pelayanan Anak & Remaja",
    icon: Users,
    items: ["Sekolah Minggu", "Pemuda & Remaja", "Pendamping Kegiatan"],
  },
  {
    title: "Pelayanan Sosial (Diakonia)",
    icon: HeartHandshake,
    items: ["Kunjungan Jemaat", "Bantuan Sosial", "Aksi Kasih & Kepedulian"],
  },
  {
    title: "Persekutuan",
    icon: BookOpen,
    items: ["Persekutuan Doa", "Pendalaman Alkitab", "Pemuridan Modul KAMBIUM"],
  },
  {
    title: "Pelayanan Pendukung",
    icon: Monitor,
    items: [
      "Sekretariat Gereja",
      "Multimedia",
      "Dokumentasi",
      "Perlengkapan & Kebersihan",
    ],
  },
];

export default function PelayananPage() {
  return (
    // Mengubah container utama agar mendukung dark mode zinc-950
    <main className="space-y-24 bg-white dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* HERO - bg-blue-50 -> dark:bg-zinc-900 */}
      <section className="py-24 bg-blue-50 dark:bg-zinc-900 text-center transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            Pelayanan Gereja
          </h1>

          <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto px-6">
            Setiap jemaat memiliki karunia yang Tuhan berikan untuk melayani dan
            menjadi berkat bagi sesama.
          </p>
        </motion.div>
      </section>

      {/* DAFTAR PELAYANAN */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pelayanans.map(({ title, icon: Icon, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              // Mengubah border, background, dan efek shadow kartu pelayanan
              className="bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg dark:hover:border-zinc-700 transition duration-300"
            >
              <Icon
                size={36}
                className="text-blue-600 dark:text-blue-400 mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-100 mb-3">
                {title}
              </h3>

              <ul className="list-disc list-inside text-gray-700 dark:text-zinc-300 space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 bg-gray-50 dark:bg-zinc-900 text-center transition-colors border-t border-gray-100 dark:border-zinc-800/50"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
          Mari Terlibat Melayani
        </h2>

        <p className="text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto mb-8 px-6">
          Tuhan memanggil setiap jemaat untuk melayani sesuai dengan talenta
          yang telah diberikan. Jadilah bagian dari pelayanan GKJ Arcawinangun.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-sm"
        >
          Hubungi Majelis
        </motion.button>
      </motion.section>
    </main>
  );
}
