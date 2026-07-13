import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Check, Minus, Plus, MessageCircle, ArrowLeft, Lock } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { PRICE_PER_DAY, TOUR_DAY_LABELS, type Participant, type Reservation, type TourDayKey } from "@/lib/types";
import { initiateUpayCheckout, postReservationToSheets } from "@/lib/upay";

const NAVY = "#1F3552";
const GOLD = "#B8960A";
const GOLD_LIGHT = "#C8A15A";
const STONE = "#DDD0B8";
const CREAM = "#FBF9F4";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve Your Spot — Holy Home Tours" },
      { name: "description", content: "Reserve your place on the Sukkot 2026 Holy Home Tours. $99 per person, per day." },
    ],
  }),
  component: ReservePage,
});

const STEPS = ["Tour Days", "Guests", "Details", "Review"];

function ReservePage() {
  const [step, setStep] = useState(0);
  const [selectedDays, setSelectedDays] = useState<TourDayKey[]>([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [participants, setParticipants] = useState<Participant[]>([
    { type: "adult", first_name: "", last_name: "", email: "", phone: "" },
  ]);

  // Preselect from ?day= URL param
  useEffect(() => {
    if (typeof window === "undefined") return;
    const param = new URLSearchParams(window.location.search).get("day");
    if (!param) return;
    if (param === "all") setSelectedDays(["day1", "day2", "day3"]);
    else if (["day1", "day2", "day3"].includes(param)) setSelectedDays([param as TourDayKey]);
  }, []);

  // Keep participants array synced with counts
  useEffect(() => {
    setParticipants((prev) => {
      const nextAdults: Participant[] = [];
      for (let i = 0; i < adults; i++) {
        const existing = prev.filter((p) => p.type === "adult")[i];
        nextAdults.push(existing ?? { type: "adult", first_name: "", last_name: "", email: "", phone: "" });
      }
      const nextChildren: Participant[] = [];
      for (let i = 0; i < children; i++) {
        const existing = prev.filter((p) => p.type === "child")[i];
        nextChildren.push(existing ?? { type: "child", first_name: "", last_name: "" });
      }
      return [...nextAdults, ...nextChildren];
    });
  }, [adults, children]);

  const totalDue = selectedDays.length * PRICE_PER_DAY * adults;

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, fontFamily: "'DM Sans', system-ui, sans-serif", color: NAVY }}>
      <ReserveHeader />
      <ProgressBar step={step} />
      <main className="mx-auto w-full px-5 py-10 md:py-14" style={{ maxWidth: 680 }}>
        {step === 0 && (
          <Step1Days
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            onNext={() => setStep(1)}
          />
        )}
        {step === 1 && (
          <Step2Counts
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            days={selectedDays.length}
            onBack={() => setStep(0)}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Step3Details
            participants={participants}
            setParticipants={setParticipants}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Step4Review
            selectedDays={selectedDays}
            adults={adults}
            children={children}
            totalDue={totalDue}
            participants={participants}
            onBack={() => setStep(2)}
          />
        )}
      </main>
    </div>
  );
}

/* ─────────────────────────── Header + progress ─────────────────────────── */

function ReserveHeader() {
  return (
    <header
      className="flex items-center justify-between px-5 py-4 md:px-8"
      style={{ backgroundColor: CREAM, borderBottom: `1px solid ${STONE}` }}
    >
      <Link to="/" className="flex items-center">
        <img src={logoAsset.url} alt="Holy Home Tours" className="h-12 w-auto object-contain" />
      </Link>
      <a
        href="https://wa.me/972544336098"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-[12px] font-medium hover:opacity-80"
        style={{ color: NAVY }}
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Questions? Chat on WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </header>
  );
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mx-auto w-full px-5 pt-6 md:px-8" style={{ maxWidth: 680 }}>
      <div className="flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className="h-1 w-full transition-colors"
              style={{ backgroundColor: i <= step ? GOLD : STONE }}
            />
            <div className="mt-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: i <= step ? NAVY : `${NAVY}80` }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Shared UI ─────────────────────────── */

function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="text-balance"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, color: NAVY, fontSize: "clamp(1.9rem, 4vw, 2.6rem)", lineHeight: 1.1 }}
    >
      {children}
    </h1>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[0.95rem]" style={{ color: `${NAVY}CC` }}>{children}</p>;
}

function PrimaryButton({ children, onClick, disabled, type = "button" }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      style={{ backgroundColor: GOLD, color: NAVY }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] hover:opacity-80"
      style={{ backgroundColor: "transparent", color: NAVY, border: `1px solid ${NAVY}` }}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────── Step 1 ─────────────────────────── */

function Step1Days({
  selectedDays,
  setSelectedDays,
  onNext,
}: {
  selectedDays: TourDayKey[];
  setSelectedDays: (d: TourDayKey[]) => void;
  onNext: () => void;
}) {
  const toggle = (day: TourDayKey) => {
    if (selectedDays.includes(day)) setSelectedDays(selectedDays.filter((d) => d !== day));
    else setSelectedDays([...selectedDays, day]);
  };
  const orderedKeys: TourDayKey[] = ["day1", "day2", "day3"];
  return (
    <div>
      <Headline>Select your tour day(s)</Headline>
      <Subhead>$99 per person, per day.</Subhead>

      <div className="mt-8 grid gap-3">
        {orderedKeys.map((key) => {
          const selected = selectedDays.includes(key);
          const info = TOUR_DAY_LABELS[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className="flex items-center justify-between text-left transition-colors"
              style={{
                padding: 20,
                borderRadius: 10,
                border: selected ? `1px solid ${NAVY}` : `1px solid ${STONE}`,
                backgroundColor: selected ? NAVY : CREAM,
                color: selected ? "#FFFFFF" : NAVY,
              }}
            >
              <div>
                <div className="text-[0.95rem] font-semibold">{info.title}</div>
                <div className="mt-1 text-[0.85rem]" style={{ color: selected ? "rgba(255,255,255,0.75)" : `${NAVY}99` }}>
                  {info.sub}
                </div>
              </div>
              <div
                className="flex h-6 w-6 items-center justify-center"
                style={{
                  border: `1.5px solid ${selected ? GOLD : STONE}`,
                  backgroundColor: selected ? GOLD : "transparent",
                  borderRadius: 4,
                }}
              >
                {selected && <Check className="h-4 w-4" style={{ color: NAVY }} strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-[0.9rem]" style={{ color: `${NAVY}CC` }}>
        Days selected: <strong>{selectedDays.length}</strong> · Price per person:{" "}
        <strong>${selectedDays.length * PRICE_PER_DAY}</strong>
      </div>

      <div className="mt-10 flex justify-end">
        <PrimaryButton onClick={onNext} disabled={selectedDays.length === 0}>
          Continue →
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 2 ─────────────────────────── */

function Stepper({ label, value, setValue, min = 0 }: { label: string; value: number; setValue: (n: number) => void; min?: number }) {
  return (
    <div className="flex flex-col items-center gap-3 py-6" style={{ border: `1px solid ${STONE}`, borderRadius: 10, backgroundColor: CREAM }}>
      <div className="text-[0.85rem] uppercase tracking-[0.18em]" style={{ color: `${NAVY}99` }}>
        {label}
      </div>
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setValue(Math.max(min, value - 1))}
          className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
          style={{ border: `1px solid ${NAVY}`, borderRadius: 999, color: NAVY }}
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="w-10 text-center text-[1.6rem] font-semibold" style={{ color: NAVY }}>
          {value}
        </div>
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
          style={{ backgroundColor: GOLD, borderRadius: 999, color: NAVY }}
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Step2Counts({
  adults,
  setAdults,
  children,
  setChildren,
  days,
  onBack,
  onNext,
}: {
  adults: number;
  setAdults: (n: number) => void;
  children: number;
  setChildren: (n: number) => void;
  days: number;
  onBack: () => void;
  onNext: () => void;
}) {
  const total = adults * days * PRICE_PER_DAY;
  return (
    <div>
      <Headline>How many are joining?</Headline>
      <Subhead>Children don't need a phone or email — just a first and last name.</Subhead>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Stepper label="Adults" value={adults} setValue={(n) => setAdults(Math.max(1, n))} min={1} />
        <Stepper label="Children" value={children} setValue={setChildren} min={0} />
      </div>

      <div className="mt-6 text-center text-[0.95rem]" style={{ color: `${NAVY}CC` }}>
        {adults} adult{adults === 1 ? "" : "s"} × {days} day{days === 1 ? "" : "s"} × $99 ={" "}
        <strong>${total}</strong>
      </div>

      <div className="mt-10 flex items-center justify-between gap-3">
        <SecondaryButton onClick={onBack}><ArrowLeft className="h-3.5 w-3.5" /> Back</SecondaryButton>
        <PrimaryButton onClick={onNext} disabled={adults < 1}>Continue →</PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 3 ─────────────────────────── */

function Field({
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.78rem] uppercase tracking-[0.16em]" style={{ color: `${NAVY}99` }}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className="text-[0.95rem] outline-none focus:border-[color:var(--gold-brand)]"
        style={{
          border: `1px solid ${error ? "#B00020" : STONE}`,
          borderRadius: 6,
          padding: "10px 12px",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          backgroundColor: "#FFFFFF",
          color: NAVY,
        }}
      />
      {error && <span className="text-[0.75rem]" style={{ color: "#B00020" }}>{error}</span>}
    </label>
  );
}

function validateParticipant(p: Participant) {
  const errs: Record<string, string> = {};
  if (!p.first_name.trim()) errs.first_name = "Required";
  if (!p.last_name.trim()) errs.last_name = "Required";
  if (p.type === "adult") {
    if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) errs.email = "Enter a valid email";
    if (!p.phone || !/^[+\d\s]{7,}$/.test(p.phone)) errs.phone = "Enter a valid phone";
  }
  return errs;
}

function Step3Details({
  participants,
  setParticipants,
  onBack,
  onNext,
}: {
  participants: Participant[];
  setParticipants: (p: Participant[]) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const [touched, setTouched] = useState<Record<number, Record<string, boolean>>>({});

  const updateParticipant = (idx: number, patch: Partial<Participant>) => {
    setParticipants(participants.map((p, i) => (i === idx ? { ...p, ...patch } : p)));
  };

  const markTouched = (idx: number, field: string) => {
    setTouched((prev) => ({ ...prev, [idx]: { ...(prev[idx] ?? {}), [field]: true } }));
  };

  const allErrors = participants.map(validateParticipant);
  const isValid = allErrors.every((e) => Object.keys(e).length === 0);

  return (
    <div>
      <Headline>Participant details</Headline>
      <Subhead>One card per person. Children only need a name.</Subhead>

      <div className="mt-8 grid gap-5">
        {participants.map((p, i) => {
          const errs = allErrors[i];
          const t = touched[i] ?? {};
          const num = participants.slice(0, i + 1).filter((x) => x.type === p.type).length;
          return (
            <div key={i} style={{ border: `1px solid ${STONE}`, borderRadius: 10, padding: 20, backgroundColor: CREAM }}>
              <div className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                {p.type === "adult" ? "Adult" : "Child"} #{num}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  label="First name"
                  value={p.first_name}
                  onChange={(v) => updateParticipant(i, { first_name: v })}
                  onBlur={() => markTouched(i, "first_name")}
                  error={t.first_name ? errs.first_name : undefined}
                />
                <Field
                  label="Last name"
                  value={p.last_name}
                  onChange={(v) => updateParticipant(i, { last_name: v })}
                  onBlur={() => markTouched(i, "last_name")}
                  error={t.last_name ? errs.last_name : undefined}
                />
                {p.type === "adult" && (
                  <>
                    <Field
                      label="Email address"
                      type="email"
                      value={p.email ?? ""}
                      onChange={(v) => updateParticipant(i, { email: v })}
                      onBlur={() => markTouched(i, "email")}
                      error={t.email ? errs.email : undefined}
                    />
                    <Field
                      label="Phone number"
                      type="tel"
                      value={p.phone ?? ""}
                      onChange={(v) => updateParticipant(i, { phone: v })}
                      onBlur={() => markTouched(i, "phone")}
                      error={t.phone ? errs.phone : undefined}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between gap-3">
        <SecondaryButton onClick={onBack}><ArrowLeft className="h-3.5 w-3.5" /> Back</SecondaryButton>
        <PrimaryButton
          onClick={() => {
            if (!isValid) {
              // touch all fields to surface errors
              const all: Record<number, Record<string, boolean>> = {};
              participants.forEach((p, i) => {
                all[i] = { first_name: true, last_name: true, email: true, phone: true };
              });
              setTouched(all);
              return;
            }
            onNext();
          }}
        >
          Continue →
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ─────────────────────────── Step 4 ─────────────────────────── */

function Step4Review({
  selectedDays,
  adults,
  children,
  totalDue,
  participants,
  onBack,
}: {
  selectedDays: TourDayKey[];
  adults: number;
  children: number;
  totalDue: number;
  participants: Participant[];
  onBack: () => void;
}) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    const reservation: Reservation = {
      id: (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `res_${Date.now()}`),
      created_at: new Date().toISOString(),
      tour_days: selectedDays,
      adults_count: adults,
      children_count: children,
      total_due: totalDue,
      payment_status: "pending",
      source: "web",
      participants,
    };

    // Write to Google Sheets (non-blocking on failure)
    await postReservationToSheets(reservation);

    // Persist for confirmation page
    try {
      sessionStorage.setItem("hht:last_reservation", JSON.stringify(reservation));
    } catch {
      /* no-op */
    }

    try {
      await initiateUpayCheckout(reservation);
      navigate({ to: "/reserve/confirmed" });
    } catch (err) {
      // Placeholder: pretend success so the UX can be reviewed end-to-end.
      console.warn("Upay not configured — proceeding to confirmation page for now.");
      navigate({ to: "/reserve/confirmed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Headline>Review and pay</Headline>
      <Subhead>Confirm your details before proceeding to secure checkout.</Subhead>

      <div className="mt-8 p-6" style={{ backgroundColor: NAVY, color: "#FFFFFF", borderRadius: 10 }}>
        <div className="text-[0.78rem] uppercase tracking-[0.2em]" style={{ color: GOLD_LIGHT }}>
          Selected days
        </div>
        <ul className="mt-2 space-y-1 text-[0.95rem]">
          {selectedDays.map((k) => (
            <li key={k}>· {TOUR_DAY_LABELS[k].title} — {TOUR_DAY_LABELS[k].sub}</li>
          ))}
        </ul>

        <div className="mt-6 text-[0.78rem] uppercase tracking-[0.2em]" style={{ color: GOLD_LIGHT }}>
          Party
        </div>
        <div className="mt-1 text-[0.95rem]">
          {adults} adult{adults === 1 ? "" : "s"}, {children} child{children === 1 ? "" : "ren"}
        </div>

        <div className="mt-6 flex items-end justify-between border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <div className="text-[0.78rem] uppercase tracking-[0.2em]" style={{ color: GOLD_LIGHT }}>Total due</div>
          <div className="font-semibold" style={{ fontSize: "1.6rem" }}>${totalDue}</div>
        </div>
      </div>

      {error && <div className="mt-4 text-[0.85rem]" style={{ color: "#B00020" }}>{error}</div>}

      <div className="mt-8 flex flex-col items-center gap-2">
        <PrimaryButton onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Processing…" : (<><Lock className="h-3.5 w-3.5" /> Continue to secure payment</>)}
        </PrimaryButton>
        <p className="text-[0.78rem]" style={{ color: `${NAVY}99` }}>
          You'll be redirected to a secure checkout page.
        </p>
      </div>

      <div className="mt-8 flex justify-start">
        <SecondaryButton onClick={onBack}><ArrowLeft className="h-3.5 w-3.5" /> Back</SecondaryButton>
      </div>
    </div>
  );
}
