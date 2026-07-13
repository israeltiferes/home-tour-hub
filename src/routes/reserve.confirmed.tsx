import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { TOUR_DAY_LABELS, type Reservation } from "@/lib/types";

const NAVY = "#1F3552";
const GOLD = "#B8960A";
const STONE = "#DDD0B8";
const CREAM = "#FBF9F4";

export const Route = createFileRoute("/reserve/confirmed")({
  head: () => ({
    meta: [
      { title: "You're in — Holy Home Tours" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ConfirmedPage,
});

// TODO: On Upay webhook payment confirmation, trigger:
//   1. WhatsApp message to each adult phone number with itinerary details
//   2. Confirmation email to each adult email address
// Both to be wired once Upay webhook and messaging credentials are provided.

function ConfirmedPage() {
  const [reservation, setReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("hht:last_reservation");
      if (raw) setReservation(JSON.parse(raw));
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, fontFamily: "'DM Sans', system-ui, sans-serif", color: NAVY }}>
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

      <main className="mx-auto w-full px-5 py-16 md:py-24 text-center" style={{ maxWidth: 680 }}>
        <h1
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, color: NAVY, fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1 }}
        >
          You're in.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[1rem]" style={{ color: `${NAVY}CC` }}>
          Your spot is reserved for the Sukkot 2026 Holy Home Tours.
        </p>

        {reservation && (
          <div className="mx-auto mt-10 p-6 text-left" style={{ backgroundColor: NAVY, color: "#FFFFFF", borderRadius: 10, maxWidth: 480 }}>
            <div className="text-[0.78rem] uppercase tracking-[0.2em]" style={{ color: "#C8A15A" }}>Tour days</div>
            <ul className="mt-2 space-y-1 text-[0.95rem]">
              {reservation.tour_days.map((k) => (
                <li key={k}>· {TOUR_DAY_LABELS[k].title}</li>
              ))}
            </ul>
            <div className="mt-5 text-[0.78rem] uppercase tracking-[0.2em]" style={{ color: "#C8A15A" }}>Party</div>
            <div className="mt-1 text-[0.95rem]">
              {reservation.adults_count} adult{reservation.adults_count === 1 ? "" : "s"}, {reservation.children_count} child{reservation.children_count === 1 ? "" : "ren"}
            </div>
          </div>
        )}

        <p className="mx-auto mt-10 max-w-md text-[0.95rem]" style={{ color: `${NAVY}CC` }}>
          We'll be in touch via WhatsApp with your itinerary details.
        </p>

        <a
          href="https://wa.me/972544336098"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] hover:opacity-90"
          style={{ backgroundColor: GOLD, color: NAVY }}
        >
          <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
        </a>
      </main>
    </div>
  );
}
