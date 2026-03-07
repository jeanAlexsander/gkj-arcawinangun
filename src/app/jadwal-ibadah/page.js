"use client";

import { Clock, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function JadwalIbadahPage() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <section className="bg-blue-50 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Jadwal Ibadah
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Informasi waktu dan jenis ibadah jemaat GKJ Arcawinangun.
          </p>
        </motion.div>
      </section>

      {/* JADWAL IBADAH */}
      <section className="bg-gray-50 py-20">
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
            <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center">
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

      {/* IBADAH & PERSEKUTUAN */}
      <section className="bg-gray-50 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
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
                time: "17.30 WIB",
              },
              {
                title: "Persekutuan Doa Wanita",
                day: "Sabtu",
                time: "17.30 WIB",
              },
              {
                title: "Persekutuan Doa Pemuda & Remaja",
                day: "Sabtu",
                time: "17.30 WIB",
              },
              { title: "Persekutuan Doa", day: "Rabu", time: "19.00 WIB" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white rounded-2xl p-6 border hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <CalendarDays size={16} /> {item.day}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Clock size={16} /> {item.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pendalaman Alkitab */}
      <section className="bg-white-50 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Pendalaman Alkitab
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Blok A",
                day: "Selasa",
                time: "19.00 WIB",
              },
              {
                title: "Blok B",
                day: "Kamis",
                time: "19.00 WIB",
              },
              {
                title: "Blok C",
                day: "Rabu",
                time: "19.00 WIB",
              },
              {
                title: "Blok D",
                day: "Kamis",
                time: "17.00 WIB",
              },
              {
                title: "Blok E",
                day: "Kamis",
                time: "17.00 WIB",
              },
              {
                title: "Blok Sumbang Kembaran",
                day: "Jumat",
                time: "19.00 WIB",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white rounded-2xl p-6 border hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <CalendarDays size={16} /> {item.day}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Clock size={16} /> {item.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* INFORMASI PENTING */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Informasi Penting
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Persembahan Minggu ini ada 3 Kantong</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mari Beribadah Bersama
          </h2>
          <p className="text-gray-700 mb-8">
            Kami menantikan kehadiran Anda di GKJ Arcawinangun.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              Hubungi Kami
            </button>

            <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-100 transition">
              <MapPin size={18} /> Lihat Lokasi
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
