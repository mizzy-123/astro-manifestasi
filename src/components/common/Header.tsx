import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { WA_CONSULT } from "../../lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isStickyNav, setStickyNav] = useState<boolean>(false);
  const navA = useRef<HTMLAnchorElement[]>([]);
  const [currentPath, setCurrentPath] = useState("/");

  const navigationItems = [
    { name: "Portofolio", href: "/#portofolio" },
    { name: "Layanan", href: "/#layanan" },
    { name: "Harga", href: "/#harga" },
  ];

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offSet = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offSet && top < offSet + height) {
          navA.current.forEach((a: HTMLAnchorElement) => {
            a.classList.remove("active-link");
            if (a.getAttribute("href") === `/#${id}`) {
              a.classList.add("active-link");
            }
          });
        }
      });

      if (headerRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setStickyNav(scrollTop > headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 z-[100] h-[76px] flex items-center justify-between px-[4%] ${
        isStickyNav
          ? "bg-[#1C1E1E]/95 backdrop-blur-md shadow-[0px_4px_16px_0_rgba(117,77,251,0.18)]"
          : "bg-transparent"
      }`}
    >
      <a href="/" className="relative z-[110] shrink-0">
        <img className="h-10 w-[132px] object-cover object-center sm:h-12 sm:w-[210px]" src="/asset/image/logo.png" alt="Manifestasi" />
      </a>

      <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-10">
          {navigationItems.map((item, index) => {
            const isActive = item.href === currentPath;
            return (
              <li className="relative" key={item.href}>
                <a
                  ref={(el) => {
                    if (el) navA.current[index] = el;
                  }}
                  className={`font-poppins text-[15px] text-font-white hover:text-color-main ${
                    isActive ? "active-link2" : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative z-[110] flex items-center gap-3">
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#754DFB] to-[#452E95] text-font-white sm:hidden"
          href={WA_CONSULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi Gratis"
        >
          <FaWhatsapp size={18} />
        </a>
        <a
          className="hidden h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#754DFB] to-[#452E95] px-5 font-poppins text-sm font-bold text-font-white sm:inline-flex"
          href={WA_CONSULT}
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi Gratis
        </a>
        <button
          type="button"
          className="lg:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoClose size={28} color="#F9F8F8" />
          ) : (
            <GiHamburgerMenu size={26} color="#F9F8F8" />
          )}
        </button>
      </div>

      <ul
        ref={navRef}
        className={`lg:hidden fixed top-0 z-[90] flex h-screen w-[280px] flex-col gap-6 bg-background2 px-6 pt-24 shadow-[-2px_4px_16px_0_rgba(117,77,251,0.25)] transition-all duration-300 ${
          isOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a
              className="font-poppins text-[16px] text-font-white"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <a
            className="inline-flex h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#754DFB] to-[#452E95] px-5 font-poppins text-sm font-bold text-font-white"
            href={WA_CONSULT}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi Gratis
          </a>
        </li>
      </ul>
    </header>
  );
}
