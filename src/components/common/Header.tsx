import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleScroll() {
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }
  }, [isOpen]);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-[100] bg-transparent h-[100px] flex items-center justify-between px-[3%]">
        <img width={230} src="/asset/image/logo.png" alt="" />
        <ul
          ref={navRef}
          className={`lg:w-fit mobile:w-[176px] lg:bg-transparent mobile:bg-background2 lg:h-full mobile:h-screen flex lg:flex-row mobile:flex-col items-center gap-9 lg:static mobile:absolute ${
            isOpen ? "right-0" : "right-[-100%]"
          } top-0 lg:rounded-none lg:shadow-none mobile:shadow-[-2px_4px_4px_0_rgba(117,77,251,0.20)] lg:pt-0 mobile:pt-[57px] transition-all duration-500`}
        >
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Beranda
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Tentang Kami
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Layanan
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              FaQ
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Testimoni
            </a>
          </li>
          <li className="relative">
            <a
              className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
              href="#"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>
        <GiHamburgerMenu
          className="lg:hidden mobile:block"
          size={30}
          color="#F9F8F8"
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
    </>
  );
}
