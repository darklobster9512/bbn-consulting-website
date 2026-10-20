import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LangProvider, useLang } from "@/lib/i18n";

function Probe() {
  const { lang, setLang } = useLang();
  return <><span>{lang === "en" ? "Services" : "Leistungen"}</span><button onClick={() => setLang("en")}>en</button></>;
}

describe("language switch", () => {
  it("switches to English and remembers it", () => {
    render(<LangProvider><Probe /></LangProvider>);
    expect(screen.getByText("Leistungen")).toBeTruthy();
    fireEvent.click(screen.getByText("en"));
    expect(screen.getByText("Services")).toBeTruthy();
    expect(localStorage.getItem("bbm-lang")).toBe("en");
  });
});
