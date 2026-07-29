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
    title: "Sidang Majelis Pleno",
    date: new Date("2026-08-03"),
    time: "17.00 WIB",
    location: "GKJ Arcawinangun",
    description:
      "Bagi jemaat yang mempunyai kepentingan dapat menyampaikannya secara tertulis kepada Majelis atau melalui Kantor Gereja dengan menyertakan nama dan alamat yang jelas. Dalam persidangan ini Pnt. Umiyati bertugas membawakan renungan, sementara konsumsi disiapkan oleh Blok Sung-Kem.",
    showInHighlight: true,
  },
];
