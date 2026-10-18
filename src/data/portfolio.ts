export type PortfolioProject = {
  name: string;
  /** Path gambar di folder public, misalnya "/asset/image/portfolio1.png". */
  image: string;
  category: string;
  /** Lebar gambar di kartu, dalam pixel. Kosongkan kalau ingin mengikuti ukuran asli. */
  imageWidth?: number;
};

/**
 * Proyek yang tampil di "Proyek yang sudah selesai kami kerjakan".
 * Tambah, hapus, atau ganti nama dan gambar dari daftar ini.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    name: "PT KSPS",
    image: "/asset/image/portfolio5.png",
    imageWidth: 280,
    category: "Website",
  },
  {
    name: "Gemilang DPMPTSP",
    image: "/asset/image/portfolio4.png",
    imageWidth: 280,
    category: "Website",
  },
  {
    name: "DKP Prov Jateng",
    image: "/asset/image/portfolio6.png",
    imageWidth: 280,
    category: "Website",
  },
];
