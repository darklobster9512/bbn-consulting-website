import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en";
const KEY = "bbm-lang";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "de", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");
  useEffect(() => {
    if (localStorage.getItem(KEY) === "en") setLangState("en");
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem(KEY, l); };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Pick the dictionary for the current language and keep the tab title in sync. */
export function useT<T extends { title?: string }>(dict: { de: T; en: T }): T {
  const { lang } = useLang();
  const t = dict[lang];
  useEffect(() => { if (t.title && lang === "en") document.title = t.title; else if (t.title) document.title = dict.de.title ?? document.title; }, [lang, t.title, dict.de.title]);
  return t;
}
