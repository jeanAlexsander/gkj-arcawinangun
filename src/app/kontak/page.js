"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="space-y-24 bg-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-blue-50 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontak Kami</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Kami siap melayani, mendengarkan, dan mendoakan Anda.
        </p>
      </motion.section>

      {/* INFO KONTAK + FORM */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* KIRI: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>

            <div className="flex gap-4 items-start">
              <MapPin className="text-blue-600 mt-1" />
              <p className="text-gray-700">
                Jl. Gereja No. 351, Arcawinangun
                <br />
                Purwokerto Timur, Banyumas
                <br />
                Jawa Tengah 53115
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <Phone className="text-blue-600" />
              <p className="text-gray-700">0281 638764</p>
            </div>

            <div className="flex gap-4 items-center">
              <Mail className="text-blue-600" />
              <p className="text-gray-700">gkj.arcawinangun@email.com</p>
            </div>

            <div className="flex gap-4 items-center">
              <Clock className="text-blue-600" />
              <p className="text-gray-700">Senin – Jumat, 08.00 – 15.00 WIB</p>
            </div>
          </motion.div>

          {/* KANAN: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Kirim Pesan / Permohonan Doa
            </h3>

            <form className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email / No. WhatsApp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={4}
                placeholder="Tuliskan pesan atau permohonan doa..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Lokasi GKJ Arcawinangun"
            src="https://www.google.com/maps?q=GKJ%20Arcawinangun&output=embed"
            className="w-full h-[400px] border-0 rounded-2xl"
            loading="lazy"
          />
        </div>
      </motion.section>
    </main>
  );
}
