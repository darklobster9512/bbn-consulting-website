import { describe, expect, it } from "vitest";
import { stepValid, stellen, findStelle, type ApplyForm } from "@/data/stellen";

const full: ApplyForm = { vorname: "A", nachname: "B", email: "a@b.de", telefon: "1", staatsangehoerigkeit: "ja", anstellungsart: "vollzeit", startdatum: "2026-11-01", plz: "22761", stadt: "Hamburg" };

describe("Bewerbung", () => {
  it("has the 5 reference positions", () => expect(stellen).toHaveLength(5));
  it("finds a position by slug", () => expect(findStelle("recruiter")?.de.titel).toBe("Recruiter (m/w/d)"));
  it("step 1 requires contact fields", () => {
    expect(stepValid(1, full)).toBe(true);
    expect(stepValid(1, { ...full, telefon: "" })).toBe(false);
    expect(stepValid(1, { ...full, email: "kein-mail" })).toBe(false);
  });
  it("step 2 requires details", () => {
    expect(stepValid(2, full)).toBe(true);
    expect(stepValid(2, { ...full, stadt: " " })).toBe(false);
  });
});
