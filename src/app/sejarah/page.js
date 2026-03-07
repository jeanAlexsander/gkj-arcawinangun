"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SejarahPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sejarah GKJ Arcawinangun
          </h1>
        </motion.div>
      </section>

      {/* KONTEN SEJARAH */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 space-y-6 text-lg leading-relaxed text-gray-800 text-justify"
        >
          <p>
            GKJ Arcawinangun hadir sebagai buah dan kesaksian tentang karya
            Tuhan yang setia menuntun umat-Nya melalui iman, ketaatan, dan
            kepemimpinan yang dibangun dalam semangat kebersamaan. Gereja ini
            lahir dari kerinduan sederhana beberapa keluarga Kristen—antara lain
            keluarga Suryadinata, T. Purwoatmodjo, Wartam Puspoatmodjo, Seno
            Karto Darsono, dan Asmawiradji—yang pada sekitar tahun 1960 dengan
            setia mengikuti kebaktian di Grendeng sebagai bagian dari pelayanan
            GKJ Purwokerto. Keterbatasan jarak dan jumlah jemaat yang menurun
            mendorong lahirnya langkah iman untuk menghadirkan peribadatan yang
            lebih dekat dan terjangkau bagi jemaat.
          </p>

          <p>
            Dengan persetujuan Majelis GKJ Purwokerto, jemaat mulai beribadah di
            rumah-rumah. Dalam kesederhanaan itulah iman dipelihara dan
            ditumbuhkan. Para pendiri—yang berasal dari kalangan terdidik
            menunjukkan kepemimpinan yang rendah hati, tertib, dan selaras
            dengan tata gereja presbiterial. Mereka tidak hanya merintis ibadah,
            tetapi juga menanamkan teladan kolegialitas, kebersamaan, dan
            kesatuan, bahkan di tengah dinamika sosial-politik yang tidak mudah.
          </p>

          <p>
            Pelayanan rohani pada masa awal ditopang oleh Pdt. Sukarso
            Djojosuwito bersama GI. Susetyo Prawirosudirjo. Melalui sarasehan,
            pendalaman Alkitab, dan persekutuan rumah tangga, jemaat bertumbuh
            baik secara rohani maupun jumlah. Firman Tuhan bekerja menjangkau
            masyarakat sekitar, melahirkan pertobatan dan baptisan. Pertumbuhan
            ini menjadi tanda bahwa pelayanan dijalankan dengan kesungguhan dan
            pemeliharaan iman yang bertanggung jawab.
          </p>

          <p>
            Ketika rumah tidak lagi mampu menampung jumlah jemaat, Tuhan membuka
            jalan melalui tersedianya sebidang tanah di wilayah Arcawinangun,
            dengan dukungan pemerintah desa. Dalam semangat gotong royong dan
            kasih persaudaraan, jemaat bergandengan tangan membangun rumah
            Tuhan. Keringat para pemuda, ketulusan para pemudi, serta kesediaan
            para sesepuh menjadi persembahan yang hidup bagi Allah.
          </p>

          <p>
            Langkah iman berikutnya terjadi pada tahun 1967 dengan membeli dan
            memindahkan rumah kayu jati dari Lumbir menjadi tempat ibadah
            sementara. Hingga akhirnya, pada 25 Mei 1972, gedung gereja permanen
            diresmikan dan jemaat yang beribadah di Arcawinangun dikenal sebagai
            Pepanthan Arcawinangun. Walau pembangunan meninggalkan hutang,
            jemaat belajar tentang tanggung jawab, kepercayaan, dan pengharapan.
            Melalui dukungan lintas gereja dan kerja keras bersama, seluruh
            hutang dapat dilunasi.
          </p>

          <p>
            Pertumbuhan jemaat mendorong kerinduan untuk menjadi gereja yang
            dewasa. Proses pendewasaan ini ditempuh dengan pembinaan, penilaian
            klasis, dan kesediaan jemaat belajar mengelola dirinya. Pada 1
            Januari 1978, Pepanthan Arcawinangun didewasakan menjadi GKJ
            Arcawinangun. Kepemimpinan majelis pertama menandai lahirnya gereja
            yang bertanggung jawab penuh atas pelayanan, keuangan, dan
            kesaksiannya.
          </p>

          <div className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Adapun Majelis Pertama GKJ Arcawinangun adalah sebagai berikut:
            </h3>

            <div>
              <p className="font-semibold">Tua-tua:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Bpk. Yokas Yosowiharjo</li>
                <li>Bpk. Suwardi Wiryodihardjo</li>
                <li>Bpk. Sumarno Ks.</li>
                <li>Bpk. Pudjo Sanyoto</li>
                <li>Bpk. Mastur Widjaja</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold">Diaken:</p>
              <ol start={6} className="list-decimal list-inside space-y-1">
                <li>Bpk. Ralim Tirtoatmodjo</li>
                <li>Ibu Sunaryatmi</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold">Pendeta Konsulen:</p>
              <ol start={8} className="list-decimal list-inside">
                <li>Pdt. Widjojo Hadipranoto, Sm.Th.</li>
              </ol>
            </div>
          </div>

          <p>
            Pentahbisan Pdt. Sudjatmoko, Sm.Th. pada 3 Januari 1981 sebagai
            pendeta pertama menjadi tonggak penting. Dengan kemajelisan yang
            lengkap, GKJ Arcawinangun mulai menata kehidupan bergereja secara
            lebih terarah. Program pemeliharaan iman, pengaderan, kesaksian
            sosial, dan perencanaan jangka panjang dikembangkan.
          </p>

          <p>
            Memasuki masa emeritus Pdt. Sudjatmoko pada tahun 1999, gereja
            kembali belajar tentang transisi kepemimpinan. Pentahbisan Pdt.
            Sukarmo, S.Th. pada 15 Oktober 2001 membawa warna kepemimpinan
            pastoral yang kuat untuk meneguhkan gereja sebagai rumah bersama.
            Buah pelayanan tampak dalam pembangunan gedung gereja baru yang
            mulai digunakan pada Natal 2018.
          </p>

          <p>
            Setelah berproses dari 2022-2026, hari ini dilaksanakan penahbisan
            atas Vikaris Amos Renoardi, S.Th. M.Si sebagai pendeta baru GKJ
            Arcawinangun. Sejarah ini bukan sekadar catatan perjalanan,
            melainkan kesaksian tentang Tuhan yang setia membentuk gereja
            melalui iman, kepemimpinan yang melayani, dan kesediaan umat-Nya
            untuk terus berjalan bersama dalam terang kasih Kristus.
          </p>
        </motion.div>
      </section>

      {/* GALERI FOTO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dokumentasi Perjalanan Iman
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Image
              src="/gereja.jpg"
              alt="Gedung Lama"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-md transition duration-300 hover:scale-105"
            />
            <Image
              src="/gereja_2.jpg"
              alt="Pentahbisan"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-md transition duration-300 hover:scale-105"
            />
            <Image
              src="/gereja_3.jpg"
              alt="Gedung Baru"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-md transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
