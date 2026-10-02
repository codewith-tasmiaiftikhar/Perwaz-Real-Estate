export const site = {
  name: "Perwaz Real Estate",
  shortName: "Perwaz",
  tagline: "Property for sale across Pakistan — photos, facts, and a direct WhatsApp line",
  country: "Pakistan",
  /** WhatsApp with country code. Display form is fine; links strip spaces. */
  whatsapp: "+92 336 9040860",
  email: "",
  cityLine: "Homes for sale across Pakistan",
};

export function hasWhatsApp() {
  return site.whatsapp.replace(/\D/g, "").length >= 11;
}
