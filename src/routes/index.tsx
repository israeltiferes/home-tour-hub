// Holy Home Tours — homepage route
import { createFileRoute, Link } from "@tanstack/react-router";
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

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-between gap-12 px-5 pt-28 pb-10 sm:px-6 md:px-10 md:pt-40 md:pb-16">
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
            <h1 className="mt-7 font-display text-[clamp(2.5rem,7.5vw,6.5rem)] font-light leading-[1] tracking-[-0.02em] text-balance">
              Discover the Israel<br /><span className="text-gold italic font-normal">you'd actually live in.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-bone/95 text-pretty">
              A private small-group experience for anyone seriously considering buying a home in Israel. Tour the communities, explore new developments, and spend real time with lawyers, mortgage brokers, and aliyah advisors — so when the time is right, you already have the right people in your corner.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="/reserve?day=all"
                className="group inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-light sm:w-auto sm:justify-start"
              >
                Reserve your spot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/972544336098"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 border border-bone/30 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-bone backdrop-blur-sm transition-colors hover:bg-bone/10 sm:w-auto sm:justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom strip */}
        <Reveal delay={0.5} className="mt-12 md:mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-bone/15 bg-bone/10 md:grid-cols-4">
            {[
              { icon: Scale, label: "Real Estate Lawyer" },
              { icon: Landmark, label: "Mortgage Broker" },
              { icon: Compass, label: "Nefesh B'Nefesh" },
              { icon: Map, label: "Local Tour Guide" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-ink/70 px-4 py-4 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-5"
              >
                <Icon className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-bone/85 sm:text-[11px] sm:tracking-[0.18em]">
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
    n: "10/5",
    day: "Monday · October 5",
    city: "Beit Shemesh",
    accent: "& Modi'in",
    img: beitShemesh,
    to: "/tour/modiin" as const,
    desc: "Two of Israel's most established Anglo family communities in one day — real developments, real experts, honest answers, no pressure.",
    tags: [
      { icon: Mountain, label: "Family" },
      { icon: Compass, label: "Aliyah Plan" },
      { icon: Building2, label: "New Builds" },
    ],
  },
  {
    n: "10/6",
    day: "Tuesday · October 6",
    city: "Jerusalem",
    accent: "& Givat Ze'ev",
    img: jerusalemStreet,
    to: "/tour/jerusalem" as const,
    desc: "Walk Jerusalem's newest Anglo neighborhoods with a lawyer, mortgage specialist, and a rabbi on hand for every question.",
    tags: [
      { icon: Landmark, label: "Old City" },
      { icon: Scale, label: "Legal Q&A" },
      { icon: Sparkles, label: "Shuls" },
    ],
  },
  {
    n: "10/7",
    day: "Wednesday · October 7",
    city: "Netanya",
    accent: "& Tel Aviv",
    img: telAviv,
    to: "/tour/tel-aviv" as const,
    desc: "Mediterranean coastal living — Netanya's fastest-growing developments, lunch in Tel Aviv, and a closing expert panel.",
    tags: [
      { icon: Waves, label: "Coastal" },
      { icon: Sun, label: "Breakfast" },
      { icon: Building2, label: "New Builds" },
    ],
  },
];


function Tours() {
  return (
    <section id="tour" className="bg-sand py-20 md:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="October 2026 · Israel"
            title="Sukkot Tours"
            italicTail="2026."
            sub="For most of us, buying in Israel isn't a question of if — it's when. Holy Home Tours gives you the tools, the knowledge, and the right people so that when it's the time to buy, you're ready."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {tours.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <Link
                to={t.to}
                className="group relative flex h-full flex-col overflow-hidden bg-background shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.city} preview`}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-5 pt-20 md:p-6 md:pt-24">
                    <div className="font-display text-[72px] font-light leading-none text-bone/95 md:text-[88px]">
                      {t.n}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
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
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold transition-colors group-hover:text-foreground">
                    View the Day
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
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
    <section className="py-20 md:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
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
                <div className="group grid grid-cols-[auto_1fr] gap-5 py-8 transition-colors hover:bg-muted/30 md:gap-8 md:py-10">
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
    name: "Licensed Israel Tour Guide",
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

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
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

        <div className="mt-12 grid gap-px bg-bone/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {experts.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="group h-full bg-ink p-6 transition-colors hover:bg-bone/[0.04] sm:p-8">
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
    label: "Monday · October 5",
    city: "Beit Shemesh",
    accent: "& Modi'in",
    desc:
      "Two of Israel's most established Anglo family communities in one day — real developments, real experts, honest answers, no pressure.",
    tags: ["Family Communities", "Development Visits", "Mortgage Seminar", "Legal Q&A", "Open Q&A"],
  },
  {
    n: "02",
    label: "Tuesday · October 6",
    city: "Jerusalem",
    accent: "& Givat Ze'ev",
    desc:
      "Walk Jerusalem's newest Anglo neighborhoods with a lawyer, mortgage specialist, and a rabbi on hand for every question.",
    tags: ["Nefesh B'Nefesh", "Legal & Mortgage", "Community Rabbi", "Development Tours", "Open Q&A"],
  },
  {
    n: "03",
    label: "Wednesday · October 7",
    city: "Netanya",
    accent: "& Tel Aviv",
    desc:
      "Mediterranean coastal living — Netanya's fastest-growing developments, lunch in Tel Aviv, and a closing expert panel.",
    tags: ["Coastal", "New Developments", "Legal & Mortgage", "Expert Panel", "Closing Q&A"],
  },
];


function Itinerary() {
  return (
    <section id="itinerary" className="py-20 md:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
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


function Register() {
  return (
    <section id="register" className="relative py-24 md:py-32" style={{ backgroundColor: "#1F3552", color: "#F5EFE0" }}>
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 md:px-10">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.05]">
          Ready to join us?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: "rgba(245,239,224,0.75)" }}>
          Reserve your spot for October 2026.
        </p>
        <a
          href="/reserve"
          className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] hover:opacity-90"
          style={{ backgroundColor: "#B8960A", color: "#1F3552" }}
        >
          Reserve Your Spot
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
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
    <section id="faq" className="bg-muted/40 py-20 md:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-10">
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
                  className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-gold sm:gap-6 sm:py-6"
                >
                  <span className="font-display text-lg font-normal tracking-tight sm:text-xl md:text-2xl">
                    {f.q}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border sm:h-8 sm:w-8">
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
                  <p className="pb-7 pr-4 text-[15px] leading-relaxed text-muted-foreground text-pretty sm:pr-12 sm:pb-8">
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
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr] md:gap-12">
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
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-105 md:bottom-6 md:right-6"
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
        <Itinerary />
        <Register />
        <FAQ />
      </main>
      <Footer />
      <StickyWA />
    </>
  );
}
