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
      "Pemandu Lagu",
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
      "Multimedia & IT",
      "Dokumentasi",
      "Perlengkapan & Kebersihan",
    ],
  },
];

export default function PelayananPage() {
  return (
    <main className="space-y-24 bg-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-blue-50 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pelayanan Gereja
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Setiap jemaat memiliki karunia yang Tuhan berikan untuk melayani dan
          menjadi berkat bagi sesama.
        </p>
      </motion.section>

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
              className="bg-white border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <Icon size={36} className="text-blue-600 mb-4" />

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {title}
              </h3>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AJAKAN MELAYANI */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Mari Terlibat Melayani
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Tuhan memanggil setiap jemaat untuk melayani sesuai dengan talenta
          yang telah diberikan. Jadilah bagian dari pelayanan GKJ Arcawinangun.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Hubungi Majelis
        </motion.button>
      </motion.section>
    </main>
  );
}
