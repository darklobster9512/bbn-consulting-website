export const company = {
  name: "bbm-consulting GmbH",
  short: "bbm consulting",
  street: "Ruhrstr. 126",
  city: "22761 Hamburg",
  phone: "040 57307496",
  phoneHref: "tel:+494057307496",
  ceo: "Ralf Becker",
  prokura: ["Anna Magdalene Becker", "Kerstin Randolph"] as const,
  vat: "DE456415195",
  register: "HRB 174998",
  court: "Amtsgericht Hamburg",
  domain: "bbm-consult.de",
  mail: {
    kontakt: "kontakt@bbm-consult.de",
    info: "info@bbm-consult.de",
    bewerbung: "bewerbung@bbm-consult.de",
    datenschutz: "datenschutz@bbm-consult.de",
  },
};

export const meta = (title: string, description: string, path = "/") => [
  { property: "og:url", content: path },
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];
