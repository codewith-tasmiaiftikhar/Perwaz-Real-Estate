import { contacts, phoneDigits } from "@/data/site";

export function whatsappUrl(message?: string, phone = contacts[0].phone) {
  const number = phoneDigits(phone);
  if (!number) return "";
  const text = encodeURIComponent(
    message ??
      "Assalamualaikum, I would like to know about homes listed with Perwaz Real Estate.",
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function propertyEnquireMessage(title: string, city: string) {
  return `Assalamualaikum, I am interested in "${title}" in ${city}, listed on Perwaz Real Estate. Please share the price and details.`;
}
