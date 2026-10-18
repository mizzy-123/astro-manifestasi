import { useState, type PointerEvent } from "react";

const members = [
  {
    name: "Alif",
    role: "Tampilan website",
    src: "/asset/image/Alif.png",
    frame: { left: "0%", top: "0%", width: "38%", height: "62%" },
    crop: { objectPosition: "center 18%", transform: "scale(1.45)" },
  },
  {
    name: "Mizzy",
    role: "Website, Aplikasi, & Sistem",
    src: "/asset/image/mizzy.png",
    frame: { left: "40.5%", top: "5%", width: "23%", height: "40%" },
    crop: { objectPosition: "center 64%", transform: "scale(1.9)" },
  },
  {
    name: "Eka",
    role: "Aplikasi HP",
    src: "/asset/image/eka.png",
    frame: { left: "66%", top: "0%", width: "34%", height: "46%" },
    crop: { objectPosition: "center 22%", transform: "scale(1.28)" },
  },
  {
    name: "Awang",
    role: "Web & Desain",
    src: "/asset/image/awang.png",
    frame: { left: "0%", top: "66%", width: "36%", height: "34%" },
    crop: { objectPosition: "center 20%", transform: "scale(1.45)" },
  },
  {
    name: "Naufal",
    role: "Admin",
    src: "/asset/image/naufal.png",
    frame: { left: "38.5%", top: "49%", width: "25%", height: "51%" },
    crop: { objectPosition: "center 18%", transform: "scale(1.32)" },
  },
  {
    name: "Hanif",
    role: "Desain & tampilan",
    src: "/asset/image/hanif.png",
    frame: { left: "66%", top: "50%", width: "34%", height: "50%" },
    crop: { objectPosition: "center 28%", transform: "scale(1.55)" },
  },
];

export default function TeamFan() {
  const [active, setActive] = useState<string | null>(null);

  const show = (name: string) => setActive(name);
  const hide = (event: PointerEvent) => {
    if (event.pointerType === "mouse") setActive(null);
  };

  return (
    <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-6">
      <div className="relative aspect-[5/4] w-full min-w-0 flex-1">
        {members.map((member) => {
          const isActive = active === member.name;

          return (
            <button
              key={member.name}
              type="button"
              aria-label={member.name}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") show(member.name);
              }}
              onPointerLeave={hide}
              onClick={() => show(member.name)}
              className={`absolute cursor-pointer overflow-hidden rounded-[18px] bg-[#141414] shadow-[0_16px_32px_rgba(0,0,0,0.38)] ${isActive ? "z-10" : "z-0"}`}
              style={member.frame}
            >
              <img
                src={member.src}
                alt=""
                className={`h-full w-full object-cover transition-[filter] duration-300 ${isActive ? "grayscale-0" : "grayscale"}`}
                style={member.crop}
              />
            </button>
          );
        })}
      </div>

      <ul className="grid shrink-0 grid-cols-2 gap-x-5 gap-y-3.5 sm:flex sm:w-[148px] sm:flex-col sm:justify-between sm:gap-3 sm:py-1">
        {members.map((member) => {
          const isActive = active === member.name;

          return (
            <li key={member.name}>
              <button
                type="button"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") show(member.name);
                }}
                onPointerLeave={hide}
                onFocus={() => show(member.name)}
                onBlur={() => setActive(null)}
                onClick={() => show(member.name)}
                className="flex cursor-pointer items-start gap-2.5 text-left"
              >
                <span
                  className={`mt-[5px] h-[7px] w-[7px] shrink-0 rounded-[1px] transition-colors duration-200 ${isActive ? "bg-color-main" : "bg-white"}`}
                  aria-hidden="true"
                />
                <span>
                  <span
                    className={`block font-poppins text-[13px] font-bold uppercase leading-tight tracking-wide transition-colors duration-200 ${isActive ? "text-color-main" : "text-font-white"}`}
                  >
                    {member.name}
                  </span>
                  <span className="mt-0.5 block font-poppins text-[11px] leading-snug text-white/55">{member.role}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
