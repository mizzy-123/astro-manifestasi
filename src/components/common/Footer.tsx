import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#161616] px-[4%] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-poppins text-sm text-font-white">
          Copyright © 2026 by Manifestasi
        </p>
        <a
          href="https://www.instagram.com/manifestasi_tech"
          aria-label="Instagram Manifestasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill size={28} className="text-font-white" />
        </a>
      </div>
    </footer>
  );
}
