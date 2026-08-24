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
    title: "PA Adiyuswa",
    date: new Date("2026-08-25"),
    time: "17.00 WIB",
    location: "GKJ Arcawinangun",
    description:
      "Dipimpin oleh Pdt. Amos Renoardi, S.Th.,M.Si. Dengan tema : “Kristus dan Kesepian” (Kejadian 5:21-24). Mohon kehadiran para Adiyuswa. Terimakasih. Tuhan Yesus memberkati.",
    showInHighlight: true,
  },
  {
    id: "2",
    title: "Sekolah Minggu Gabungan",
    date: new Date("2026-08-30"),
    time: "08.30 WIB",
    location: "Sondah Center GKJ Arcawinangun",
    description:
      "Mohon kehadiran anak-anak sekolah minggu serta perhatian dan dukungan orang tua anak sekolah minggu GKJ Arcawunangun.",
    showInHighlight: true,
  },
];
