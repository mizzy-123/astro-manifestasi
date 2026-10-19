import { useState, type FormEvent } from "react";
import { waLink } from "../../lib/whatsapp";

const jenisOptions = [
  "Website profil usaha",
  "Toko online / aplikasi web",
  "Aplikasi HP / sistem khusus",
  "Belum tahu, ingin diskusi dulu",
];

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState(jenisOptions[3]);
  const [pesan, setPesan] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Halo, saya ${nama.trim() || "calon klien"}.\nJenis proyek: ${jenis}.\n\n${pesan.trim() || "Saya ingin diskusi kebutuhan proyek saya."}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="font-poppins text-sm text-white/80">Nama</span>
        <input
          required
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="h-12 rounded-[10px] border border-white/15 bg-[#1c1e1e] px-3 font-poppins text-sm text-font-white outline-none focus:border-color-main"
          placeholder="Nama Anda"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-poppins text-sm text-white/80">Anda butuh apa?</span>
        <select
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
          className="h-12 rounded-[10px] border border-white/15 bg-[#1c1e1e] px-3 font-poppins text-sm text-font-white outline-none focus:border-color-main"
        >
          {jenisOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-poppins text-sm text-white/80">Ceritakan singkat</span>
        <textarea
          required
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          rows={4}
          className="rounded-[10px] border border-white/15 bg-[#1c1e1e] px-3 py-3 font-poppins text-sm text-font-white outline-none focus:border-color-main"
          placeholder="Contoh: saya punya toko dan ingin pembeli bisa pesan dan bayar online."
        />
      </label>
      <button
        type="submit"
        data-cta="kontak_kirim_whatsapp"
        className="h-12 rounded-[10px] bg-gradient-to-r from-[#754DFB] to-[#452E95] font-poppins text-sm font-bold text-font-white"
      >
        Kirim lewat WhatsApp
      </button>
    </form>
  );
}
