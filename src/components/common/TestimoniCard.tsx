import { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 318;
const CARD_GAP = 57;
const STEP = CARD_WIDTH + CARD_GAP;
const DELAY = 2500;

export default function TestimoniCard() {
  const testimoniClient = [
    {
      testimoni: "Aaa, makasii ya kak, desainnya jadinya cepat",
      name: "Nasya",
    },
    {
      testimoni: "Bagus aman kak, sudah sesuai",
      name: "Guntur",
    },
    {
      testimoni:
        "Mantap bagus kak, semangat ya kak!!, sisanya ntar kalo udah jadi semuanya all in ya",
      name: "Gavin",
    },
    {
      testimoni:
        "Bagus banget kak, pokoknya gak bisa dijelasin pakai kata kata",
      name: "Minto",
    },
    {
      testimoni:
        "Mas ini udah oke bagus banget, maaf ya mas semalam ketiduran pas buka",
      name: "Muqaromah",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      if (isDragging.current) return;
      setCurrentIndex((prev) => (prev + 1) % testimoniClient.length);
    }, DELAY);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // ---- Drag handlers ----
  const handleDragStart = (clientX: number) => {
    stopAutoScroll();
    isDragging.current = true;
    startX.current = clientX;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current || startX.current === null) return;
    setDragOffset(clientX - startX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(dragOffset) > STEP / 3) {
      // pindah card jika drag cukup jauh
      if (dragOffset < 0) {
        setCurrentIndex((prev) => (prev + 1) % testimoniClient.length);
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? testimoniClient.length - 1 : prev - 1
        );
      }
    }

    setDragOffset(0);
    startX.current = null;
    startAutoScroll(); // lanjut auto scroll lagi
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      <div
        className={`flex gap-[57px] transition-transform ${
          isDragging.current ? "duration-0" : "duration-700 ease-in-out"
        }`}
        style={{
          transform: `translateX(calc(50% - ${
            currentIndex * STEP + CARD_WIDTH / 2
          }px + ${dragOffset}px))`,
        }}
      >
        {testimoniClient.map((v, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col w-[318px] h-[195px] rounded-xl bg-[rgba(69,66,66,0.20)] backdrop-blur-md border border-white/10 overflow-hidden px-[13px]"
          >
            <div className="my-auto w-full flex flex-col gap-6">
              <p className="text-[#E9E2E2] text-center text-[16px] font-poppins">
                {v.testimoni}
              </p>
              <p className="font-poppins text-[13px] text-[#E9E2E2] text-center">
                {v.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
