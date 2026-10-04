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
    title: "Sidang Majelis Pleno",
    date: new Date("2026-10-05"),
    time: "5 Oktober 2026, pukul 17.00 WIB",
    location: "GKJ Arcawinangun",
    description:
      "Bagi jemaat yang mempunyai kepentingan dapat menyampaikannya secara tertulis kepada Majelis atau melalui Kantor Gereja dengan menyertakan nama dan alamat yang jelas. Dalam persidangan ini Dkn. Yosep A. Mamanua bertugas membawakan renungan dan konsumsi disiapkan oleh Blok A.",
    showInHighlight: true,
  },
];
