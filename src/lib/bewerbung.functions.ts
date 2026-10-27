import { createServerFn } from "@tanstack/react-start";

/** bbm's account id in the applicant-tracking system. */
const BRANDING_ID = "6b592275-ab7d-487e-9448-496f09927a89";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";

type Input = { first_name: string; last_name: string; email: string; phone: string; employment_type: string; start_date: string };
const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((d: Input): Input => ({
    first_name: s(d.first_name, 100),
    last_name: s(d.last_name, 100),
    email: s(d.email, 255),
    phone: s(d.phone, 50),
    employment_type: s(d.employment_type, 20),
    start_date: s(d.start_date, 20),
  }))
  .handler(async ({ data }): Promise<{ success: boolean; error: string | null }> => {
    try {
      const fd = new FormData();
      for (const [k, v] of Object.entries(data)) fd.append(k, v);
      fd.append("branding_id", BRANDING_ID);
      const res = await fetch(API_URL, { method: "POST", body: fd });
      const text = await res.text();
      let json: { success?: boolean; error?: string } = {};
      try { json = JSON.parse(text); } catch { /* not json */ }
      if (json.success) return { success: true, error: null };
      console.error("submit-application failed", res.status, text.slice(0, 500));
      return { success: false, error: json.error ?? `HTTP ${res.status}` };
    } catch (e) {
      console.error("submit-application unreachable", e);
      return { success: false, error: null };
    }
  });
