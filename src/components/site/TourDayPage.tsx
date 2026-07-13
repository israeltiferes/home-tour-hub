import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Nav } from "@/components/site/Nav";

export type TourItineraryRow = { time: string; activity: string };

export type TourDayPageProps = {
  eyebrow: string;
  headline: string;
  subhead: string;
  heroImage: string;
  itineraryCity: string;
  itineraryIntro: string;
  itinerary: TourItineraryRow[];
  reserveDay: "day1" | "day2" | "day3";
};

const RESERVE_COPY = "Each tour is limited to twenty participants, with four experts alongside you all day — an Israeli real-estate attorney, a mortgage specialist, a Nefesh B'Nefesh advisor, and a licensed guide. Places are held first come, first served.";

export function TourDayPage({ eyebrow, headline, subhead, heroImage, itineraryCity, itineraryIntro, itinerary, reserveDay }: TourDayPageProps) {
  const reserveSearch = { day: reserveDay } as const;
  return (
    <div className="min-h-screen antialiased" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Nav />
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1F3552 0%, rgba(31,53,82,0.80) 35%, rgba(31,53,82,0.45) 60%, transparent 100%)" }} />
        <Link to="/" className="absolute left-6 top-24 z-20 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] hover:opacity-80" style={{ color: "rgba(245,239,224,0.60)" }}>
          <ArrowLeft className="h-3 w-3" /> All Tour Days
        </Link>
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.30em]" style={{ color: "#B8960A" }}>{eyebrow}</p>
          <h1 className="mt-5 text-balance font-semibold leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#F5EFE0", fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}>{headline}</h1>
          <p className="mx-auto mt-5 max-w-lg text-[1rem] leading-relaxed" style={{ color: "rgba(245,239,224,0.70)" }}>{subhead}</p>
          <Link to="/reserve" search={reserveSearch} className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] hover:opacity-90" style={{ background: "#B8960A", color: "#1F3552" }}>Reserve Your Spot</Link>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "#DDD0B8" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-semibold leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#1F3552", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>Your Day in {itineraryCity}</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "#1F3552" }}>{itineraryIntro}</p>
          <div className="mt-10">
            {itinerary.map((row, i) => (
              <div key={i}>
                <div style={{ height: "1px", background: "rgba(184,150,10,0.35)" }} />
                <div className="grid items-start py-4 sm:py-5" style={{ gridTemplateColumns: "9rem 1fr", gap: "0 2rem" }}>
                  <span className="whitespace-nowrap text-[0.8rem] font-semibold tracking-wide" style={{ color: "#B8960A" }}>{row.time}</span>
                  <span className="text-[0.92rem] leading-snug" style={{ color: "#1F3552" }}>{row.activity}</span>
                </div>
              </div>
            ))}
            <div style={{ height: "1px", background: "rgba(184,150,10,0.35)" }} />
          </div>
        </div>
      </section>

      <section id="reserve" className="px-6 py-16 md:py-24" style={{ backgroundColor: "#1F3552" }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#F5EFE0", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>Reserve Your Place on the Tour</h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.92rem] leading-relaxed" style={{ color: "rgba(245,239,224,0.65)" }}>{RESERVE_COPY}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/reserve" search={reserveSearch} className="inline-flex items-center gap-2.5 px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] hover:opacity-90" style={{ background: "#B8960A", color: "#1F3552" }}>Reserve Your Spot</Link>
            <a href="https://wa.me/972544336098" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.22em] hover:opacity-90" style={{ border: "1px solid rgba(245,239,224,0.30)", color: "#F5EFE0" }}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" style={{ color: "rgba(245,239,224,0.40)" }} />
            <span className="text-[0.82rem] tracking-wide" style={{ color: "rgba(245,239,224,0.40)" }}>WhatsApp: +972 54 433 6098</span>
          </div>
        </div>
      </section>
    </div>
  );
}
