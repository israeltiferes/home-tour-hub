import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { RegistrationForm } from "@/components/site/RegistrationForm";

export type TourHighlight = {
  title: string;
  body: string;
};

export type TourDayPageProps = {
  label: string;
  heroHeadline: string;
  heroHeadlineItalic?: string;
  heroSubheadline: string;
  heroImage: string;
  intro: string;
  highlights: TourHighlight[];
  photos: { src: string; alt: string }[];
};

export function TourDayPage({
  label,
  heroHeadline,
  heroHeadlineItalic,
  heroSubheadline,
  heroImage,
  intro,
  highlights,
  photos,
}: TourDayPageProps) {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">
            {label}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-bone text-balance">
            {heroHeadline}
            {heroHeadlineItalic && (
              <>
                <br />
                <em className="italic font-normal text-gold-light">
                  {heroHeadlineItalic}
                </em>
              </>
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-bone/75">
            {heroSubheadline}
          </p>
          <a
            href="#register"
            className="mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-light"
          >
            Reserve Your Spot
          </a>
        </div>
        {/* Back link */}
        <Link
          to="/"
          className="absolute left-6 top-24 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-bone/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-3 w-3" />
          All Tour Days
        </Link>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:py-20">
        <p className="text-[1.1rem] leading-relaxed text-ink/80">{intro}</p>
      </section>

      {/* ── HIGHLIGHTS GRID ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-16 md:pb-20">
        <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="bg-cream px-8 py-7">
              <p className="font-display text-[1rem] font-medium tracking-tight text-ink">
                {h.title}
              </p>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink/60">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────── */}
      {photos.length > 0 && (
        <section className="grid grid-cols-3 gap-1 px-4 pb-16 md:px-8 md:pb-20">
          {photos.map((p) => (
            <div key={p.src} className="aspect-[4/3] overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </section>
      )}

      {/* ── REGISTRATION FORM ────────────────────────────────────── */}
      <section id="register" className="bg-sand px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light tracking-tight text-ink">
            Secure your spot.
          </p>
          <p className="mt-2 text-[0.95rem] uppercase tracking-[0.18em] text-ink/50">
            October 4–6, 2026 &nbsp;·&nbsp; Limited seats
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}
