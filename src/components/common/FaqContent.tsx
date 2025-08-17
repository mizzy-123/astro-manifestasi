import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqContent() {
  const [openIndexFaq, setOpenIndexFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Bagaimana cara memesan project?",
      answer:
        "Kamu bisa memesan project dengan menghubungi kami melalui form kontak atau WhatsApp yang tersedia di website.",
    },
    {
      question: "Berapa lama pengerjaan project?",
      answer:
        "Waktu pengerjaan tergantung jenis project, biasanya antara 1-4 minggu.",
    },
    {
      question: "Apakah bisa revisi?",
      answer: "Ya, revisi bisa dilakukan sesuai kesepakatan awal project.",
    },
    {
      question: "Apakah ada garansi?",
      answer:
        "Kami memberikan garansi support selama 1 bulan setelah project selesai.",
    },
  ];

  const toogleFaq = (index: number) => {
    setOpenIndexFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full grid sm:grid-cols-2 mobile:grid-cols-1 gap-8">
      {faqs.map((faq, index) => (
        <div className="w-full h-fit bg-[#353333] rounded-[10px] overflow-hidden">
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
              openIndexFaq === index ? "max-h-40 pb-7" : "max-h-0"
            } overflow-hidden px-6 transition-all duration-300 ease-in-out`}
          >
            <p className="text-font-white text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
