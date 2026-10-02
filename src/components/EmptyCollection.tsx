import { contacts } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function EmptyCollection() {
  return (
    <div className="flex flex-col items-center py-20 text-center md:py-28">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-white">
        <span className="text-gold">+</span>
      </div>
      <h2 className="font-heading text-2xl font-light text-ink md:text-3xl">
        Listings will show here
      </h2>
      <p className="mt-2 max-w-xs font-body text-sm text-mute">
        Photos and details are added as each property is ready. WhatsApp us in
        the meantime.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3">
        {contacts.map((person) => (
          <WhatsAppButton
            key={person.phone}
            href={whatsappUrl(undefined, person.phone)}
            label={person.name}
          />
        ))}
      </div>
    </div>
  );
}
