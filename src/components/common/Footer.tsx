import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative w-full h-[326px] bg-[#6D59B3]" id="kontak">
      <div className="w-full flex justify-center absolute top-[-60%] lg:px-0 mobile:px-[3%]">
        <div className="lg:w-[964px] mobile:w-full mlg:h-[378px] mobile:h-fit bg-[linear-gradient(180deg,#6C4DD6_0%,#221356_100%)] rounded-[10px] lg:px-[60px] mobile:px-[3%] lg:py-[42px] mobile:py-[5%] flex lg:gap-6 mobile:gap-3.5">
          <img
            className="rounded-tl-[10px] rounded-br-[10px] md:w-[341px] mobile:w-[148px] object-cover"
            src="/asset/image/confident_business.png"
            alt=""
          />
          <div className="w-full">
            <p className="font-poppins md:text-4xl mobile:text-[14px] font-semibold text-font-white">
              Siap Mewujudkan Ide Anda? Mari Berdiskusi Lebih Lanjut
            </p>
            <div className="flex items-center gap-2.5 mt-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z"
                  fill="#F9F8F8"
                />
              </svg>
              <p className="font-poppins md:text-[16px] mobile:text-[12px] text-font-white">
                23+ Project Terselesaikan
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z"
                  fill="#F9F8F8"
                />
              </svg>
              <p className="font-poppins md:text-[16px] mobile:text-[12px] text-font-white">
                96% Pelanggan Puas
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z"
                  fill="#F9F8F8"
                />
              </svg>
              <p className="font-poppins md:text-[16px] mobile:text-[12px] text-font-white">
                5+ Tahun Pengalaman
              </p>
            </div>
            <a
              className="md:w-[80%] mobile:w-[90%] md:h-[55px] mobile:h-[30px] bg-font-white p-2.5 rounded-[10px] flex justify-center items-center mt-5"
              href="https://wa.link/bwpwbi"
            >
              <p className="w-full text-center font-poppins sm:text-[16px] mobile:text-[12px] font-bold bg-gradient-to-b from-[#714AF3] to-[#482F9C] bg-clip-text text-transparent">
                Konsultasikan Sekarang
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 px-[3%] pb-[3%] flex md:flex-row mobile:flex-col md:justify-between mobile:justify-start md:gap-0 mobile:gap-3">
        <p className="font-poppins text-[20px] text-font-white">
          Copyright © 2025 by Manifestasi | All Rights Reserved
        </p>
        <div className="md:w-fit mobile:w-full flex justify-between items-center gap-[15px]">
          <a href="https://www.instagram.com/manifestasi_tech?utm_source=ig_web_button_share_sheet&igsh=bG01czdrMjgxcnIx">
            <RiInstagramFill size={36} className="text-font-white" />
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect width="28" height="28" rx="5" fill="#F9F8F8" />
              <path
                d="M14 23V5.5"
                stroke="#6D59B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12L14 5L7 12"
                stroke="#6D59B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
