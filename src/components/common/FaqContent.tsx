import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqContent() {
  const [openIndexFaq, setOpenIndexFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa lama proses pembuatannya?",
      answer:
        "Website profil usaha biasanya 2–4 minggu. Toko online atau aplikasi web sekitar 6–12 minggu, tergantung banyaknya fitur. Aplikasi HP dan sistem khusus dihitung setelah daftar kebutuhan kita sepakati.",
    },
    {
      question: "Apakah ada biaya maintenance server tahunan?",
      answer:
        "Ada, dan terpisah dari biaya pembuatan. Biaya ini untuk nama website (domain), server, cadangan data, dan perbaikan setelah masa garansi. Besarnya kami jelaskan sebelum Anda memutuskan.",
    },
    {
      question: "Apakah source code sepenuhnya menjadi milik klien?",
      answer:
        "Ya. Setelah pembayaran lunas, file kode program diserahkan dan menjadi milik Anda sepenuhnya. Anda tidak terikat pada kami untuk memakainya.",
    },
    {
      question: "Bagaimana cara memulai?",
      answer:
        "Klik Konsultasi Gratis atau isi formulir di bawah. Kita ngobrol dulu soal kebutuhan Anda, baru kami kirim daftar fitur dan penawaran harga.",
    },
  ];

  const toogleFaq = (index: number) => {
    setOpenIndexFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full grid sm:grid-cols-2 mobile:grid-cols-1 gap-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="w-full h-fit bg-[#353333] rounded-[10px] overflow-hidden"
        >
          <button
            onClick={() => toogleFaq(index)}
            className="flex items-center justify-between w-full h-[63px] px-6"
          >
            <p className="font-poppins text-font-white text-[16px]">
              {faq.question}
            </p>
            <IoIosArrowDown
              size={27}
              className={`text-font-white ${
                openIndexFaq === index ? "rotate-180" : ""
              } transition-all duration-300 ease-in-out`}
            />
          </button>
          <div
            className={`${
              openIndexFaq === index ? "max-h-60 pb-7" : "max-h-0"
            } overflow-hidden px-6 transition-all duration-300 ease-in-out`}
          >
            <p className="text-font-white text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
