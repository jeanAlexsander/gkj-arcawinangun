export interface Kegiatan {
  id: string;
  title: string;
  date: Date;
  time?: string;
  location?: string;
  description?: string;
  showInHighlight?: boolean;
}

export const kegiatan: Kegiatan[] = [
  {
    id: "1",
    title: "Tukar Pelayanan Firman GKJ Klasis Banyumas Utara",
    date: new Date("2026-09-20"),
    time: "06.00 WIB (Induk) dan 08.00 WIB (Kr.nanas)",
    location: "GKJ Arcawinangun",
    description:
      "Diberitahukan bahwa akan diadakan Tukar Pelayanan Firman GKJ se-Klasis Banyumas Utara, pada Ibadah Minggu, 20 September 2026 pukul 06.00 WIB (Induk) dan 08.00 WIB (Kr.nanas). Gereja kita menerima pelayanan dari GKJ Purbalingga (Pdt. Rudiarto Budi Prasetyo, S.Th.) sedangkan Pdt. Amos Renoardi, S.Th., M.Si. melayani di GKJ Purwokerto Barat pada ibadah pukul 06.00 WIB dan 08.00 WIB.",
    showInHighlight: true,
  },
  {
    id: "2",
    title: "Informasi Izin Cuti Tenaga Kerja",
    date: new Date("2026-09-17"),
    time: "14-17 September 2026",
    location: "GKJ Arcawinangun",
    description:
      "Majelis menginformasikan bahwa: Bp. Agus Supriyanto akan Cuti dari hari Senin – Kamis, 14-17 September 2026. Demikian informasi ini kami sampaikan, mohon perhatian dan dukungan jemaat. ",
    showInHighlight: true,
  },
  {
    id: "3",
    title: "PA Adiyuswa",
    date: new Date("2026-09-22"),
    time: "17.00 WIB",
    location: "GKJ Arcawinangun",
    description:
      "PA Adiyuswa akan dilaksanakan pada hari Selasa, 22 September 2026 pukul 17.00 WIB di Gereja dipimpin oleh Bp. Dr. Rianto, M.M., M.Pd.K. Dengan tema : “Melekat kepada Allah” (Filipi 3:10-14). Mohon kehadiran para Adiyuswa.",
    showInHighlight: true,
  },
];
