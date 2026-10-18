import { useState } from "react";

const members = [
  { name: "Ilham", role: "Tampilan website", src: "/asset/image/ilham.png" },
  { name: "Mizzy", role: "Website & sistem", src: "/asset/image/mizzy.png" },
  { name: "Eka", role: "Aplikasi HP", src: "/asset/image/eka.png" },
  { name: "Kahfi", role: "Aplikasi HP", src: "/asset/image/kahfi.png" },
  { name: "Naufal", role: "Desain & tampilan", src: "/asset/image/naufal.png" },
  { name: "Hanif", role: "Desain & tampilan", src: "/asset/image/hanif.png" },
];

function wrapDiff(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function TeamFan() {
  const [active, setActive] = useState(1);
  const total = members.length;

  const shift = (step: number) => {
    setActive((current) => (current + step + total) % total);
  };

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px]">
      <button
        type="button"
        aria-label="Anggota sebelumnya"
        onClick={() => shift(-1)}
        className="cursor-pointer absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#754DFB] to-[#452E95] text-white shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Anggota berikutnya"
        onClick={() => shift(1)}
        className="cursor-pointer absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#754DFB] to-[#452E95] text-white shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute inset-y-0 left-12 right-12">
        {members.map((member, index) => {
          const diff = wrapDiff(index, active, total);
          const distance = Math.abs(diff);
          const hidden = distance > 2;

          return (
            <button
              key={member.name}
              type="button"
              aria-label={`${member.name}, ${member.role}`}
              onClick={() => setActive(index)}
              className="absolute left-1/2 top-1/2 h-[250px] w-[138px] overflow-hidden rounded-[22px] border border-white/10 bg-[#161616] shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -54%) translateX(${diff * 54}px) rotate(${diff * 12}deg) scale(${distance === 0 ? 1.08 : 0.9 - distance * 0.03})`,
                zIndex: hidden ? 0 : 20 - distance,
                filter: distance === 0 ? "none" : "grayscale(1)",
                opacity: hidden ? 0 : 1,
                pointerEvents: hidden ? "none" : "auto",
              }}
            >
              <img
                src={member.src}
                alt=""
                className="h-full w-full origin-[center_35%] scale-125 object-cover object-[center_30%]"
              />
              {distance === 0 && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-3 pb-3 pt-10 text-left">
                  <span className="block font-poppins text-sm font-bold text-white">{member.name}</span>
                  <span className="block font-poppins text-[11px] text-white/75">{member.role}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
