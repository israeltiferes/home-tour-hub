import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  MessageCircle,
  Scale,
  Landmark,
  Map,
  Building2,
  ShieldCheck,
  Compass,
  Sparkles,
  Check,
  Plus,
  Minus,
  Sun,
  Mountain,
  Waves,
} from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import telAviv from "@/assets/tel-aviv.jpg";
import jerusalemStreet from "@/assets/jerusalem-street.jpg";
import beitShemesh from "@/assets/beit-shemesh.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holy Home Tours — Sukkot 2026 Israel Real Estate Tour" },
      {
        name: "description",
        content:
          "A private guided tour of Israel's most sought-after Anglo communities. Real experts. Real clarity. Zero pressure. Sukkot 2026.",
      },
      { property: "og:title", content: "Holy Home Tours — Sukkot 2026 Israel" },
      {
        property: "og:description",
        content:
          "Three days through Jerusalem, Netanya, Modi'in and Beit Shemesh with a lawyer, mortgage broker and Aliyah advisor in your corner.",
      },
    ],
  }),
  component: LandingPage,
});

/* ─────────────────────────────── Hero ────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0">
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3DNKnAOZ5NxyPJ7VuKsiqOOpurN/hf_20260527_151332_8c82a0ff-74d9-4af6-9cab-587c108c938d.png"
          alt="Israel landscape"
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-between px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-bone/70">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">
                Sukkot 2026 · Israel · A Private Tour
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-balance">
              Explore Israel <span className="text-gold italic font-normal">Before You Decide.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-bone/95 text-pretty">
              A private small-group experience for anyone seriously considering buying a home in Israel. Tour the communities, explore new developments, and spend real time with lawyers, mortgage brokers, and aliyah advisors — so when the time is right, you already have the right people in your corner.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#register"
                className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-light"
              >
                Reserve your spot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/972544336098"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-bone/30 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone backdrop-blur-sm transition-colors hover:bg-bone/10"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom strip */}
        <Reveal delay={0.5} className="mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-bone/15 bg-bone/10 md:grid-cols-4">
            {[
              { icon: Scale, label: "Real Estate Lawyer" },
              { icon: Landmark, label: "Mortgage Broker" },
              { icon: Compass, label: "Nefesh B'Nefesh" },
              { icon: Map, label: "Local Tour Guide" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-ink/70 px-5 py-5 backdrop-blur-md"
              >
                <Icon className="h-4 w-4 text-gold" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-bone/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Section primitives ─────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="h-px w-10 bg-gold" />
      <span className="text-[11px] uppercase tracking-[0.32em]">{children}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  italicTail,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  sub?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col gap-5 ${alignClass}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
        {title}
        {italicTail && (
          <>
            <br />
            <em className="italic font-normal text-clay">{italicTail}</em>
          </>
        )}
      </h2>
      {sub && (
        <p className={`max-w-2xl text-[15px] leading-relaxed text-muted-foreground text-pretty ${align === "center" ? "mx-auto" : ""}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────── Tours ───────────────────────────── */

const tours = [
  {
    n: "10/4",
    day: "Sunday · October 4",
    city: "Tel Aviv",
    accent: "+ Netanya",
    img: telAviv,
    desc: "Coastal living, Mediterranean communities and the newest Anglo developments. Morning networking breakfast with local olim.",
    tags: [
      { icon: Waves, label: "Coastal" },
      { icon: Sun, label: "Breakfast" },
      { icon: Building2, label: "New Builds" },
    ],
  },
  {
    n: "10/5",
    day: "Monday · October 5",
    city: "Jerusalem",
    accent: "",
    img: jerusalemStreet,
    desc: "Katamon, Baka, Givat Mordechai. Walk the Anglo neighborhoods, visit schools, attend an evening legal Q&A session.",
    tags: [
      { icon: Landmark, label: "Old City" },
      { icon: Scale, label: "Legal Q&A" },
      { icon: Sparkles, label: "Shuls" },
    ],
  },
  {
    n: "10/6",
    day: "Tuesday · October 6",
    city: "Modi'in",
    accent: "+ Beit Shemesh",
    img: beitShemesh,
    desc: "Family-oriented Anglo communities. Aliyah planning session and a personalized roadmap with your Nefesh B'Nefesh advisor.",
    tags: [
      { icon: Mountain, label: "Hills" },
      { icon: Compass, label: "Aliyah Plan" },
      { icon: Building2, label: "New Builds" },
    ],
  },
];

function Tours() {
  return (
    <section id="tour" className="bg-sand py-28 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="October 2026 · Israel"
            title="Sukkot Tours"
            italicTail="2026."
            sub="For most of us, buying in Israel isn't a question of if — it's when. Holy Home Tours gives you the tools, the knowledge, and the right people so that when it's the time to buy, you're ready."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tours.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden bg-background shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.city} preview`}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-6 pt-24">
                    <div className="font-display text-[88px] font-light leading-none text-bone/95">
                      {t.n}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-7">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {t.day}
                    </div>
                    <h3 className="mt-2 font-display text-3xl font-light tracking-tight">
                      {t.city}{" "}
                      {t.accent && (
                        <em className="italic font-normal text-clay">{t.accent}</em>
                      )}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {t.tags.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 border border-border bg-muted/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-foreground/80"
                      >
                        <Icon className="h-3 w-3 text-gold" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── What you'll gain ────────────────────── */

const gains = [
  {
    icon: Scale,
    title: "Trusted legal & financial counsel",
    text: "Sit with an Israeli real estate lawyer and mortgage broker in an intimate group. Ask the questions you've been afraid to ask — get honest answers with zero sales pressure.",
  },
  {
    icon: Building2,
    title: "Inside Israel's Anglo communities",
    text: "Walk the streets. Feel the neighborhoods. Understand the lifestyle differences between Jerusalem, Netanya, Modi'in and Beit Shemesh from the inside.",
  },
  {
    icon: ShieldCheck,
    title: "The buying process — in English",
    text: "From contract law to financing for American buyers — the entire Israeli property purchase process explained clearly, specifically for Anglo families.",
  },
  {
    icon: Compass,
    title: "A personalized Aliyah roadmap",
    text: "Leave with a concrete plan. Your Nefesh B'Nefesh advisor maps your specific aliyah timeline, next steps, and resources based on your family's situation.",
  },
];

function Gains() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="What you'll gain"
                title="Everything you need"
                italicTail="for a confident decision."
                sub="Four outcomes that change everything about how you approach buying in Israel."
              />
            </div>
          </Reveal>

          <div className="divide-y divide-border border-t border-border">
            {gains.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="group grid grid-cols-[auto_1fr] gap-8 py-10 transition-colors hover:bg-muted/30">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-colors group-hover:border-gold group-hover:bg-gold/5">
                    <Icon className="h-5 w-5 text-foreground transition-colors group-hover:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-normal tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Experts ─────────────────────────── */

const experts = [
  {
    role: "Real Estate Lawyer",
    name: "Israeli Attorney",
    desc: "Specializes in Anglo buyers. Hundreds of transactions for American families. Speaks your language — literally and figuratively.",
    initials: "RE",
  },
  {
    role: "Mortgage Broker",
    name: "Financing Specialist",
    desc: "Expert in Israeli mortgages for foreign nationals and new olim. Tells you what you actually qualify for — honestly.",
    initials: "MB",
  },
  {
    role: "Nefesh B'Nefesh",
    name: "Aliyah Advisor",
    desc: "Guides hundreds of Anglo families through the process. Clear, honest, specific to your family's situation.",
    initials: "AA",
  },
  {
    role: "Tour Guide",
    name: "Jerusalem Specialist",
    desc: "Deep knowledge of every Anglo neighborhood. Every school, every shul, every street. Made aliyah herself.",
    initials: "TG",
  },
];

function Experts() {
  return (
    <section id="experts" className="relative overflow-hidden bg-ink py-28 text-bone md:py-36">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 text-bone/60">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">Your Advisory Team</span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Four experts.
              <br />
              <em className="italic font-normal text-gold-light">All in your corner.</em>
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-bone/70 text-pretty">
              On every single tour — not speakers, not presenters. People who sit
              with you, answer your questions, and genuinely help you figure this out.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="group h-full bg-ink p-8 transition-colors hover:bg-bone/[0.04]">
                <div className="flex h-14 w-14 items-center justify-center border border-bone/20 font-display text-lg italic text-gold">
                  {e.initials}
                </div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.24em] text-gold">
                  {e.role}
                </div>
                <h3 className="mt-2 font-display text-2xl font-light text-bone">
                  {e.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/65">
                  {e.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────── Itinerary ───────────────────────── */

const itinerary = [
  {
    n: "01",
    label: "Sunday · October 4",
    city: "Tel Aviv",
    accent: "+ Netanya",
    desc:
      "Start on the Mediterranean coast. Walk two of Israel's most popular Anglo communities. Morning networking breakfast with local olim sharing the honest perspective — the good and the challenging.",
    tags: ["Coastal Communities", "Networking Breakfast", "New Developments", "Meet Local Olim", "Mortgage Session"],
  },
  {
    n: "02",
    label: "Monday · October 5",
    city: "Jerusalem",
    accent: "",
    desc:
      "The heart of Jewish life in Israel. Katamon, Baka, Givat Mordechai — we walk you through the Anglo neighborhoods. Visit schools, feel Friday afternoon. Evening legal session covering contracts and protections.",
    tags: ["Old City Views", "Legal Q&A", "Community Shuls", "School Visits", "Development Tours"],
  },
  {
    n: "03",
    label: "Tuesday · October 6",
    city: "Modi'in",
    accent: "+ Beit Shemesh",
    desc:
      "The communities most American families never consider — and end up loving most. Newer, deeply Anglo, family-oriented. Closing session to map out your specific aliyah timeline and what happens next.",
    tags: ["Family Focus", "Aliyah Roadmap", "New Developments", "Developer Meetings"],
  },
];

function Itinerary() {
  return (
    <section id="itinerary" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="See it. Feel it. Own it."
            title="Three days designed"
            italicTail="to give you clarity."
            sub="Every day is structured around a specific set of communities, expert sessions, and real conversations with people living the life you're considering."
          />
        </Reveal>

        <div className="mt-20 space-y-px">
          {itinerary.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.06}>
              <div className="group relative grid grid-cols-[80px_1fr] gap-6 border-t border-border py-10 last:border-b md:grid-cols-[140px_240px_1fr] md:gap-12 md:py-14">
                <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light italic text-gold">
                  {d.n}
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {d.label}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">
                    {d.city}
                    {d.accent && (
                      <>
                        <br className="hidden md:block" />
                        <em className="italic font-normal text-clay"> {d.accent}</em>
                      </>
                    )}
                  </h3>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-[15px] leading-relaxed text-foreground/80 text-pretty">
                    {d.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-border bg-background px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Register / Form ─────────────────────── */

const included = [
  "Guided community tours through Israel's top Anglo neighborhoods",
  "New development visits with project representatives",
  "Honest meetings with developers about construction timelines",
  "Legal guidance and Q&A with an Israeli real estate attorney",
  "Mortgage and financing education for American buyers",
  "School and community comparisons across all neighborhoods",
  "Aliyah guidance, resources, and a personalized roadmap",
  "Expert access in a small, intimate group setting",
];

function Register() {
  return (
    <section id="register" className="relative bg-ink py-28 text-bone md:py-36">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <div className="flex items-center gap-3 text-bone/60">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">What's Included</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Stop guessing.
              <br />
              <em className="italic font-normal text-gold-light">Start exploring.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/70 text-pretty">
              In just a few days, you'll gain the clarity, connections, and
              confidence to make informed decisions about buying a home in
              Israel.
            </p>

            <ul className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-4 py-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-gold/50 text-gold">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-[14px] leading-relaxed text-bone/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 border border-gold/40 bg-gold/5 px-5 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold-light">
                Limited to 15 participants per tour
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <RegistrationForm />
        </Reveal>
      </div>
    </section>
  );
}

function RegistrationForm() {
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
      className="bg-bone p-8 text-foreground md:p-12"
    >
      <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
        Ready to find your<br />
        <em className="italic font-normal text-clay">future home?</em>
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
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
          <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Your biggest question
          </label>
          <textarea
            name="question"
            rows={3}
            placeholder="What do you most need clarity on?"
            className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-bone transition-colors hover:bg-gold hover:text-ink"
      >
        Reserve my spot
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href="https://wa.me/972544336098"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-border px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
      >
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp instead
      </a>
      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Reply within 24 hours · No spam · No pressure
      </p>
    </form>
  );
}

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
      <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
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
      <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-foreground"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

/* ─────────────────────────────── FAQ ────────────────────────────── */

const faqs = [
  {
    q: "Who is this tour designed for?",
    a: "Anglo families seriously considering buying a home in Israel — whether you're planning aliyah in the next year, a few years out, or purchasing as an investment. We work best with families ready to learn and ask hard questions.",
  },
  {
    q: "Is there a cost to attend?",
    a: "Reach out via the form or WhatsApp and we'll send the full tour package details, what's covered, and what's not. We keep it transparent — no hidden fees.",
  },
  {
    q: "What's the group size?",
    a: "Strictly capped at 15 participants per tour. This is non-negotiable. Intimate access to experts is the entire point.",
  },
  {
    q: "Do I have to commit to buying or making aliyah?",
    a: "No. Genuinely no. The tour is built for clarity, not closing. Most participants leave with a clear next step — for some, that's full speed ahead; for others, it's deciding the timing isn't right yet. Both are valid outcomes.",
  },
  {
    q: "What if I can't make Sukkot 2026?",
    a: "Get in touch. We run tours through the year — we'll let you know upcoming dates that fit your timeline.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-muted/40 py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] tracking-[-0.02em]">
              The things people<br />
              <em className="italic font-normal text-clay">always ask.</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold"
                >
                  <span className="font-display text-xl font-normal tracking-tight md:text-2xl">
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-12 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Footer ────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1480px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-light tracking-[0.22em] uppercase">
              Holy <span className="italic font-medium text-gold">Home</span> Tours
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/65">
              Private, expert-led real estate tours through Israel's most
              sought-after Anglo communities. Built for families ready for clarity.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Explore
            </div>
            <ul className="mt-5 space-y-3 text-sm text-bone/75">
              {[
                ["Tours", "#tour"],
                ["Experts", "#experts"],
                ["Itinerary", "#itinerary"],
                ["FAQ", "#faq"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="transition-colors hover:text-gold-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Talk to us
            </div>
            <ul className="mt-5 space-y-3 text-sm text-bone/75">
              <li>
                <a
                  href="https://wa.me/972544336098"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>+972 54 433 6098</li>
              <li>Sukkot · October 2026 · Israel</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-bone/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Holy Home Tours</span>
          <span>Built with care · Jerusalem</span>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────── Sticky WhatsApp ────────────────────── */

function StickyWA() {
  return (
    <a
      href="https://wa.me/972544336098"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* ─────────────────────────────── Page ───────────────────────────── */

function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tours />
        <Gains />
        <Experts />
        {/* <Itinerary /> */}{/* Saved for later use — "Three days designed to give you clarity" */}
        <Register />
        <FAQ />
      </main>
      <Footer />
      <StickyWA />
    </>
  );
}
