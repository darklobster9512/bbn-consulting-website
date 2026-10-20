export interface StelleText {
  titel: string;
  standort: string;
  modell: string;
  arbeitszeit?: string;
  kurz: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  benefits: string[];
}

export interface Stelle {
  slug: string;
  stundenlohn?: string;
  de: StelleText;
  en: StelleText;
}

export const stellen: Stelle[] = [
  {
    slug: "onlineprozess-tester",
    stundenlohn: "29 €",
    de: {
      titel: "Mitarbeiter (m/w/d) für Onlineprozess-Tests",
      standort: "Hamburg / Remote",
      modell: "Remote / Minijob / Teilzeit",
      arbeitszeit: "Flexibel (ca. 5–30 Std./Woche)",
      kurz: "Prüfen Sie digitale Abläufe und Anwendungen remote und halten Sie Ihre Eindrücke strukturiert fest – flexibel und ohne Vorkenntnisse.",
      beschreibung: "Sie sind regelmäßig online unterwegs und achten darauf, ob Webseiten oder Anwendungen sauber funktionieren? Dann passt diese Tätigkeit gut zu Ihnen. Für die Begleitung unserer Beratungsprojekte suchen wir Personen, die digitale Prozesse testen und ihre Beobachtungen strukturiert dokumentieren. Die Aufgaben sind klar beschrieben und werden verständlich erklärt – Vorkenntnisse sind nicht erforderlich.",
      aufgaben: ["Testen von Webseiten, Portalen und mobilen Anwendungen", "Prüfen von Abläufen aus Sicht eines Nutzers", "Dokumentation von Auffälligkeiten und Rückmeldungen", "Erkennen von einfachen Bedienungsproblemen", "Weitergabe von Verbesserungsvorschlägen an das Projektteam"],
      voraussetzungen: ["Zuverlässige und sorgfältige Arbeitsweise", "Grundlegendes Verständnis für Internetanwendungen", "Ein internetfähiges Gerät (Smartphone, Tablet oder PC)", "Eigenständiges Arbeiten und Motivation", "Keine spezielle Ausbildung notwendig"],
      benefits: ["Flexible Zeiteinteilung (auch abends oder am Wochenende möglich)", "Arbeiten von zu Hause aus", "Einfache Einarbeitung mit klaren Anleitungen", "Unkomplizierte Zusammenarbeit mit festen Ansprechpartnern", "Vergütung auf Stundenbasis"],
    },
    en: {
      titel: "Online Process Tester (m/f/d)",
      standort: "Hamburg / Remote",
      modell: "Remote / mini-job / part-time",
      arbeitszeit: "Flexible (approx. 5–30 hrs/week)",
      kurz: "Test digital processes and applications remotely and record your impressions in a structured way – flexible, no prior experience needed.",
      beschreibung: "You spend a lot of time online and notice whether websites or apps work properly? Then this role could suit you well. To support our consulting projects, we are looking for people who test digital processes and document their observations in a structured way. Tasks are clearly described and explained – no prior knowledge is required.",
      aufgaben: ["Testing websites, portals and mobile apps", "Checking processes from a user's point of view", "Documenting issues and feedback", "Spotting simple usability problems", "Passing improvement suggestions on to the project team"],
      voraussetzungen: ["Reliable and careful way of working", "Basic understanding of web applications", "An internet-enabled device (smartphone, tablet or PC)", "Independent working and motivation", "No special training required"],
      benefits: ["Flexible hours (evenings or weekends possible)", "Work from home", "Easy onboarding with clear instructions", "Straightforward cooperation with fixed contacts", "Hourly pay"],
    },
  },
  {
    slug: "berater-unternehmensberatung",
    de: {
      titel: "Berater (m/w/d) Unternehmensberatung",
      standort: "Hamburg",
      modell: "Vollzeit / hybrid",
      kurz: "Begleiten Sie mittelständische Unternehmen bei Strategie, Organisation und der Umsetzung konkreter Veränderungsvorhaben.",
      beschreibung: "In dieser Rolle arbeiten Sie direkt mit Geschäftsführungen und Fachbereichen zusammen. Sie analysieren Strukturen und Abläufe, erarbeiten Entscheidungsgrundlagen und begleiten die Umsetzung bis zum messbaren Ergebnis.",
      aufgaben: ["Analyse von Organisationsstrukturen und Geschäftsprozessen", "Erarbeitung von Entscheidungsgrundlagen für die Geschäftsführung", "Konzeption und Begleitung von Veränderungsvorhaben", "Vorbereitung und Moderation von Workshops", "Dokumentation von Ergebnissen und Handlungsempfehlungen"],
      voraussetzungen: ["Abgeschlossenes Studium, idealerweise mit wirtschaftlichem Schwerpunkt", "Erste Berufserfahrung in Beratung, Projektarbeit oder einer Fachfunktion", "Strukturierte, analytische Arbeitsweise", "Sicheres Auftreten im Austausch mit Entscheidern", "Sehr gute Deutschkenntnisse in Wort und Schrift"],
      benefits: ["Direkte Zusammenarbeit mit der Geschäftsführung", "Vielfältige Projekte im Mittelstand", "Hybrides Arbeiten mit Büro in Hamburg", "Individuelle Weiterbildung", "Kurze Entscheidungswege"],
    },
    en: {
      titel: "Management Consultant (m/f/d)",
      standort: "Hamburg",
      modell: "Full-time / hybrid",
      kurz: "Support mid-sized companies with strategy, organisation and the implementation of concrete change projects.",
      beschreibung: "In this role you work directly with management and departments. You analyse structures and processes, prepare decision papers and support implementation through to measurable results.",
      aufgaben: ["Analysing organisational structures and business processes", "Preparing decision papers for management", "Designing and supporting change projects", "Preparing and moderating workshops", "Documenting results and recommendations"],
      voraussetzungen: ["University degree, ideally in business", "First professional experience in consulting, projects or a specialist role", "Structured, analytical way of working", "Confident manner with decision-makers", "Very good German, written and spoken"],
      benefits: ["Direct cooperation with management", "Varied projects in mid-sized companies", "Hybrid working with an office in Hamburg", "Individual training", "Short decision paths"],
    },
  },
  {
    slug: "berater-it-beratung",
    de: {
      titel: "Berater (m/w/d) IT-Beratung",
      standort: "Hamburg / Remote",
      modell: "Vollzeit",
      kurz: "Übersetzen Sie fachliche Anforderungen in tragfähige IT-Lösungen und begleiten Sie Digitalisierungsvorhaben von der Analyse bis zum Betrieb.",
      beschreibung: "Sie arbeiten an der Schnittstelle zwischen Fachbereich und Technik. Sie erheben Anforderungen, bewerten Systeme und Prozesse und begleiten die Einführung von Lösungen in enger Abstimmung mit unseren Kunden.",
      aufgaben: ["Aufnahme und Bewertung fachlicher Anforderungen", "Analyse bestehender Systemlandschaften und Prozesse", "Erarbeitung von Digitalisierungs- und Umsetzungskonzepten", "Begleitung von Auswahl- und Einführungsprojekten", "Abstimmung mit Dienstleistern und internen Teams"],
      voraussetzungen: ["Studium oder Ausbildung mit IT-Bezug", "Erfahrung in IT-Projekten, Anforderungsanalyse oder Prozessberatung", "Verständnis für Schnittstellen, Datenflüsse und Systemarchitekturen", "Klare Kommunikation zwischen Fach- und Technikseite", "Sehr gute Deutschkenntnisse in Wort und Schrift"],
      benefits: ["Projekte mit echter Gestaltungsmöglichkeit", "Flexible Arbeitsorte, remote möglich", "Moderne Arbeitsausstattung", "Fachliche Weiterentwicklung", "Kollegiales, kleines Team"],
    },
    en: {
      titel: "IT Consultant (m/f/d)",
      standort: "Hamburg / Remote",
      modell: "Full-time",
      kurz: "Translate business requirements into sound IT solutions and support digitalisation projects from analysis to operation.",
      beschreibung: "You work at the interface between business and technology. You gather requirements, evaluate systems and processes and support the roll-out of solutions in close coordination with our clients.",
      aufgaben: ["Gathering and evaluating business requirements", "Analysing existing system landscapes and processes", "Developing digitalisation and implementation concepts", "Supporting selection and roll-out projects", "Coordinating with service providers and internal teams"],
      voraussetzungen: ["Degree or training with an IT focus", "Experience in IT projects, requirements analysis or process consulting", "Understanding of interfaces, data flows and system architectures", "Clear communication between business and IT", "Very good German, written and spoken"],
      benefits: ["Projects with real room to shape", "Flexible locations, remote possible", "Modern equipment", "Professional development", "Small, collegial team"],
    },
  },
  {
    slug: "architekt-hochbau",
    de: {
      titel: "Architekt / Bauzeichner (m/w/d) Hochbau",
      standort: "Hamburg",
      modell: "Vollzeit / Teilzeit",
      kurz: "Arbeiten Sie an Hochbauprojekten mit – von der Planung über die Koordination bis zur wirtschaftlichen Projektbetrachtung.",
      beschreibung: "Sie unterstützen unsere Hochbauprojekte planerisch und organisatorisch. Dabei verbinden Sie gestalterische Qualität mit einer wirtschaftlichen Perspektive und sorgen für klare Abläufe zwischen allen Beteiligten.",
      aufgaben: ["Erstellung und Pflege von Planunterlagen im Hochbau", "Mitwirkung in den Leistungsphasen der Planung", "Koordination von Schnittstellen zwischen Beteiligten", "Unterstützung bei Terminen, Kosten und Qualitäten", "Vorbereitung von Unterlagen für Abstimmungen und Genehmigungen"],
      voraussetzungen: ["Studium der Architektur oder Ausbildung als Bauzeichner (m/w/d)", "Sicherer Umgang mit gängiger CAD-Software", "Kenntnisse relevanter Normen und Vorschriften im Hochbau", "Sorgfältige und strukturierte Arbeitsweise", "Sehr gute Deutschkenntnisse in Wort und Schrift"],
      benefits: ["Projekte mit gestalterischem Anspruch", "Enge Zusammenarbeit mit Beratung und Technologie", "Büro in Hamburg mit guter Anbindung", "Teilzeitmodelle möglich", "Fachliche Weiterbildung"],
    },
    en: {
      titel: "Architect / Draughtsperson (m/f/d) Building Construction",
      standort: "Hamburg",
      modell: "Full-time / part-time",
      kurz: "Work on building projects – from planning and coordination to economic project assessment.",
      beschreibung: "You support our building projects in planning and organisation, combining design quality with an economic perspective and ensuring clear processes between all parties.",
      aufgaben: ["Preparing and maintaining building plans", "Contributing to the planning work stages", "Coordinating interfaces between parties", "Supporting schedules, costs and quality", "Preparing documents for reviews and permits"],
      voraussetzungen: ["Degree in architecture or training as a draughtsperson (m/f/d)", "Confident use of common CAD software", "Knowledge of relevant building standards and regulations", "Careful and structured way of working", "Very good German, written and spoken"],
      benefits: ["Projects with design ambition", "Close cooperation with consulting and technology", "Well-connected office in Hamburg", "Part-time models possible", "Professional training"],
    },
  },
  {
    slug: "recruiter",
    de: {
      titel: "Recruiter (m/w/d)",
      standort: "Hamburg",
      modell: "Vollzeit / hybrid",
      kurz: "Gewinnen Sie Fachkräfte für unsere Beratungs-, IT- und Architekturprojekte und begleiten Sie Bewerbende durch den gesamten Prozess.",
      beschreibung: "Sie verantworten die Besetzung offener Positionen – von der Stellenausschreibung über die Ansprache bis zum Vertragsangebot. Dabei arbeiten Sie eng mit der Geschäftsführung und den Projektleitungen zusammen.",
      aufgaben: ["Erstellung und Veröffentlichung von Stellenausschreibungen", "Aktive Ansprache und Vorauswahl von Kandidatinnen und Kandidaten", "Durchführung von Erst- und Fachgesprächen", "Begleitung des gesamten Bewerbungsprozesses", "Aufbau und Pflege eines Kandidatennetzwerks"],
      voraussetzungen: ["Erfahrung im Recruiting oder in der Personalarbeit", "Freude am Kontakt mit Menschen und klare Kommunikation", "Strukturierte, eigenverantwortliche Arbeitsweise", "Sicherer Umgang mit digitalen Recruiting-Werkzeugen", "Sehr gute Deutschkenntnisse in Wort und Schrift"],
      benefits: ["Eigenverantwortlicher Aufgabenbereich", "Kurze Abstimmungswege zur Geschäftsführung", "Hybrides Arbeiten mit Büro in Hamburg", "Weiterbildung im Recruiting", "Kollegiales Team"],
    },
    en: {
      titel: "Recruiter (m/f/d)",
      standort: "Hamburg",
      modell: "Full-time / hybrid",
      kurz: "Attract specialists for our consulting, IT and architecture projects and guide applicants through the entire process.",
      beschreibung: "You are responsible for filling open positions – from the job ad and outreach to the contract offer – working closely with management and project leads.",
      aufgaben: ["Writing and publishing job ads", "Actively approaching and pre-selecting candidates", "Conducting first and technical interviews", "Guiding the entire application process", "Building and maintaining a candidate network"],
      voraussetzungen: ["Experience in recruiting or HR", "Enjoy working with people and communicate clearly", "Structured, self-reliant way of working", "Confident use of digital recruiting tools", "Very good German, written and spoken"],
      benefits: ["Area of responsibility of your own", "Short paths to management", "Hybrid working with an office in Hamburg", "Training in recruiting", "Collegial team"],
    },
  },
];

export function findStelle(slug: string) {
  return stellen.find((s) => s.slug === slug);
}

export type ApplyForm = {
  vorname: string; nachname: string; email: string; telefon: string; staatsangehoerigkeit: string;
  anstellungsart: string; startdatum: string; plz: string; stadt: string;
};

/** Returns true when all required fields of the given step are filled. */
export function stepValid(step: 1 | 2, f: ApplyForm) {
  if (step === 1) return [f.vorname, f.nachname, f.email, f.telefon, f.staatsangehoerigkeit].every((v) => v.trim() !== "") && /^\S+@\S+\.\S+$/.test(f.email.trim());
  return [f.anstellungsart, f.startdatum, f.plz, f.stadt].every((v) => v.trim() !== "");
}
