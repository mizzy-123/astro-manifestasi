import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface MainContextType {
  headerRef: React.RefObject<HTMLDivElement | null>;
  isStickyNav: boolean;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

// provider
export const MainProvider = ({ children }: { children: ReactNode }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isStickyNav, setStickyNav] = useState<boolean>(false);

  useEffect(() => {
    if (headerRef.current) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setStickyNav(scrollTop > headerRef.current.offsetHeight);
    }
  }, [headerRef.current]);

  return (
    <MainContext.Provider value={{ headerRef, isStickyNav }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain must be used within a MainProvider");
  }
  return context;
};
