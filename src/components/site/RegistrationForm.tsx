import { ArrowRight, MessageCircle } from "lucide-react";

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-bone/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-bone/20 bg-transparent py-3 text-[15px] text-bone outline-none transition-colors placeholder:text-bone/40 focus:border-gold"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-bone/60">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full border-0 border-b border-bone/20 bg-transparent py-3 text-[15px] text-bone outline-none transition-colors focus:border-gold [&>option]:text-ink"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export function RegistrationForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = e.currentTarget as HTMLFormElement;
        const fd = new FormData(f);
        const params = new URLSearchParams();
        fd.forEach((v, k) => params.append(k, String(v)));
        const msg = `Hi! I'd like to reserve a spot on the Sukkot 2026 tour.%0A%0A${[...params.entries()]
          .map(([k, v]) => `${k}: ${v}`)
          .join("%0A")}`;
        window.open(`https://wa.me/972544336098?text=${msg}`, "_blank");
      }}
      className="bg-ink p-6 text-bone shadow-luxe sm:p-8 md:p-12"
    >
      <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
        Ready to find your<br />
        <em className="italic font-normal text-gold-light">future home?</em>
      </h3>
      <p className="mt-3 text-sm text-bone/70">
        Fill in your details and we'll be in touch within 24 hours.
      </p>
      <div className="mt-6 h-px w-12 bg-gold" />

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="firstName" label="First Name" placeholder="Yosef" />
          <Field name="lastName" label="Last Name" placeholder="Cohen" />
        </div>
        <Field name="email" type="email" label="Email Address" placeholder="yosef@family.com" />
        <Field name="phone" type="tel" label="WhatsApp Number" placeholder="+1 (212) 555-0100" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="city" label="City / State" placeholder="Teaneck, NJ" />
          <SelectField
            name="groupSize"
            label="Group Size"
            options={["1 person", "2 people", "3–4 people", "5+ people"]}
          />
        </div>
        <SelectField
          name="timeline"
          label="Aliyah Timeline"
          options={[
            "Seriously considering — within 1 year",
            "Planning — 1–3 years",
            "Exploring — not sure yet",
            "Purchasing — not making aliyah",
          ]}
        />
        <div>
          <label className="text-[11px] uppercase tracking-[0.22em] text-bone/60">
            Your biggest question
          </label>
          <textarea
            name="question"
            rows={3}
            placeholder="What do you most need clarity on?"
            className="mt-2 w-full resize-none border-0 border-b border-bone/20 bg-transparent py-3 text-[15px] text-bone outline-none transition-colors placeholder:text-bone/40 focus:border-gold"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-light"
      >
        Reserve my spot
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href="https://wa.me/972544336098"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-bone/20 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:border-gold hover:text-gold"
      >
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp instead
      </a>
      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-bone/50">
        Reply within 24 hours · No spam · No pressure
      </p>
    </form>
  );
}
