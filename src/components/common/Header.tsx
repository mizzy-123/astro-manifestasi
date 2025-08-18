import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isStickyNav, setStickyNav] = useState<boolean>(false);

  const [activeIndexNav, setActiveIndexNav] = useState<number | null>(null);
  const navA = useRef<HTMLAnchorElement[]>([]);

  const navigationItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#" },
    { name: "Layanan", href: "#service" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FaQ", href: "#faq" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Hubungi Kami", href: "#kontak" },
  ];

  const toogleActiveNav = (index: number) => {
    setActiveIndexNav((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offSet = section.offsetTop - 100; // offset untuk header
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offSet && top < offSet + height) {
          navA.current.forEach((a: HTMLAnchorElement) => {
            a.classList.remove("active-link");

            if (a.getAttribute("href") === `#${id}`) {
              a.classList.add("active-link");
            }
          });
        }
      });

      if (headerRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setStickyNav(scrollTop > headerRef.current.offsetHeight);
        console.log("scrollTop:", scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cek posisi awal saat mount
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
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 z-[100] ${
          isStickyNav ? "bg-[#1C1E1E]" : "bg-transparent"
        } h-[100px] flex items-center justify-between px-[3%] ${
          isStickyNav ? "shadow-[0px_4px_4px_0_rgba(117,77,251,0.20)]" : ""
        }`}
      >
        <img width={230} src="/asset/image/logo.png" alt="" />
        <ul
          ref={navRef}
          className={`lg:w-fit mobile:w-[176px] lg:bg-transparent mobile:bg-background2 lg:h-full mobile:h-screen flex lg:flex-row mobile:flex-col items-center gap-9 lg:static mobile:absolute ${
            isOpen ? "right-0" : "right-[-100%]"
          } top-0 lg:rounded-none lg:shadow-none mobile:shadow-[-2px_4px_4px_0_rgba(117,77,251,0.20)] lg:pt-0 mobile:pt-[57px] transition-all duration-500`}
        >
          {navigationItems.map((item, index) => (
            <li className="relative" key={index}>
              <a
                ref={(el) => {
                  if (el) {
                    navA.current[index] = el;
                  }
                }}
                className="font-poppins text-[16px] text-center text-font-white hover:text-color-main hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-color-main"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
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
