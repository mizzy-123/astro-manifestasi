import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqContent() {
  const [openIndexFaq, setOpenIndexFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa lama proses pembuatannya?",
      answer:
        "Company profile atau landing page biasanya 2–4 minggu. Web app dan e-commerce sekitar 6–12 minggu, tergantung jumlah modul. Aplikasi mobile enterprise mengikuti kompleksitas setelah functional specification disepakati.",
    },
    {
      question: "Apakah ada biaya maintenance server tahunan?",
      answer:
        "Ada, dan terpisah dari biaya pembuatan. Domain, server, backup, serta perbaikan di luar masa garansi dibicarakan sebagai maintenance tahunan setelah sistem live.",
    },
    {
      question: "Apakah source code sepenuhnya menjadi milik klien?",
      answer:
        "Ya. Setelah pelunasan dan serah terima, repositori source code menjadi milik Anda. Sistem tidak dikunci di akun kami.",
    },
    {
      question: "Bagaimana cara memulai?",
      answer:
        "Isi form di bagian bawah atau klik Konsultasi Gratis. Kami bahas alur bisnis dulu, baru menyusun spesifikasi dan penawaran.",
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
