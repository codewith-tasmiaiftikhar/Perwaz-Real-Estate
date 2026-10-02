export const site = {
  name: "Perwaz Real Estate",
  shortName: "Perwaz",
  tagline: "Property for sale across Pakistan — photos, facts, and a direct WhatsApp line",
  country: "Pakistan",
  email: "",
  cityLine: "Homes for sale across Pakistan",
};

export const contacts = [
  { name: "Usama Asghar", phone: "+92 336 9040860" },
  { name: "Subidar Mehmood", phone: "+92 344 6276521" },
] as const;

export function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export function hasWhatsApp() {
  return contacts.some((person) => phoneDigits(person.phone).length >= 11);
}
