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
    title: "Perjamuan Kudus Manunggil",
    date: new Date("2026-10-04"),
    time: "07.00 WIB (Induk) dan 09.30 WIB (Kr.nanas)",
    location: "GKJ Arcawinangun & Pephantan Karangnanas",
    description:
      "Diberitahukan bahwa Sakramen Perjamuan Kudus akan dilaksanakan pada hari Minggu, 04 Oktober 2026 di Gereja Induk (Manunggil) pukul 07.00 WIB dan  Pepanthan Karangnanas pukul 09.30 WIB, akan dilayani oleh Pdt. Amos Renoardi, S.Th., M.Si. Pendadaran diselenggarakan lewat PA Blok dan Komisi. Mohon perhatian dan kesiapan warga jemaat.",
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
];
