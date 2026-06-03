import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export type JourneyStop = {
  time: string;
  title: string;
  subtitle: string;
  body: string;
  why: string;
};

export type TourDayPageProps = {
  label: string;
  heroHeadline: string;
  heroHeadlineItalic?: string;
  heroSubheadline: string;
  experience: string[];
  stops: JourneyStop[];
  trust: string;
  conversionHeadline: string;
  conversionHeadlineItalic?: string;
  conversionSub: string;
  heroImage: string;
};

const WHATSAPP_URL = "https://wa.me/972544336098";

export function TourDayPage(props: TourDayPageProps) {
  const {
    label,
    heroHeadline,
    heroHeadlineItalic,
    heroSubheadline,
    experience,
    stops,
    trust,
    conversionHeadline,
    conversionHeadlineItalic,
    conversionSub,
    heroImage,
  } = props;

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Back link */}
      <div className="fixed left-5 top-20 z-40 md:left-10 md:top-24">
        <Link
          to="/"
          hash="tours"
          className="inline-flex items-center gap-2 bg-background/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Tour Days
        </Link>
      </div>

      {/* ───────────── Hero ───────────── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover opacity-60"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/95" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1240px] flex-col justify-center px-5 pt-32 pb-20 sm:px-6 md:px-10 md:pt-40">
          <Reveal>
            <div className="flex items-center gap-3 text-bone/70">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">{label}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.25rem,6.2vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-balance">
              {heroHeadline}
              {heroHeadlineItalic && (
                <>
                  {" "}
                  <span className="italic font-normal text-gold">{heroHeadlineItalic}</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl font-display text-xl italic font-light leading-relaxed text-gold-light/90 md:text-2xl">
              {heroSubheadline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <a
                href="/#register"
                className="group inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-all hover:bg-gold-light sm:w-auto"
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/50">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ───────────── The Experience ───────────── */}
      <section className="bg-background py-20 md:py-36">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">The Experience</span>
            </div>
          </Reveal>
          <div className="mt-10 space-y-7">
            {experience.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-display text-xl font-light leading-[1.7] text-foreground/85 md:text-2xl md:leading-[1.65] text-pretty">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── The Journey ───────────── */}
      <section className="bg-sand py-20 md:py-36">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">The Journey</span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-light tracking-tight md:text-6xl">
              An hour-by-hour <em className="italic font-normal text-gold">unfolding.</em>
            </h2>
          </Reveal>

          <ol className="mt-16 md:mt-20">
            {stops.map((s, i) => (
              <li key={i} className="border-t border-border/60 last:border-b">
                <Reveal delay={Math.min(i, 6) * 0.04}>
                  <div className="grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-12 md:py-14">
                    <div className="md:pt-1">
                      <div className="font-display text-2xl font-light text-gold md:text-3xl">
                        {s.time}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-light tracking-tight text-foreground md:text-3xl">
                        {s.title}
                      </h3>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {s.subtitle}
                      </div>
                      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/80 md:text-base">
                        {s.body}
                      </p>
                      <p className="mt-5 max-w-2xl border-l-2 border-gold/60 pl-4 font-display text-[15px] italic font-light leading-relaxed text-muted-foreground md:text-base">
                        <span className="not-italic font-medium text-foreground/70">
                          Why it matters:{" "}
                        </span>
                        {s.why}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Trust Layer ───────────── */}
      <section className="bg-ink py-24 text-bone md:py-36">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 text-bone/60">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em]">Why Trust This Day</span>
            </div>
            <p className="mt-10 font-display text-xl font-light leading-[1.8] text-bone/90 md:text-[26px] md:leading-[1.65] text-pretty">
              {trust}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Conversion ───────────── */}
      <section className="relative overflow-hidden bg-sand py-24 md:py-36">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at top, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-balance md:text-6xl">
              {conversionHeadline}
              {conversionHeadlineItalic && (
                <>
                  {" "}
                  <em className="italic font-normal text-gold">{conversionHeadlineItalic}</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-foreground/75 md:text-lg text-pretty">
              {conversionSub}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/#register"
                className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-bone transition-all hover:bg-foreground"
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink shadow-luxe transition-all hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to Us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Spots are limited · Small groups only
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-luxe transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
