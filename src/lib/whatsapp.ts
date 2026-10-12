export const WA_PHONE = "6282241746968";

export function waLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(message)}`;
}

export const WA_CONSULT = waLink(
  "Halo, saya ingin konsultasi gratis untuk proyek website atau aplikasi saya."
);
