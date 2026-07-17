import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-gold-brand shadow-sm transition-[background-color] duration-300 ease-[ease]"
      style={scrolled ? undefined : { backgroundColor: "#B8960A" }}
    >

      <div className="mx-auto flex h-auto min-h-[8rem] max-w-[1480px] items-center justify-between px-6 py-3 md:min-h-[10rem] md:px-10 md:py-4">
        <a href="/" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Holy Home Tours"
            className="h-32 w-auto object-contain md:h-40"
          />
        </a>

        <div className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-navy md:flex">
          {[
            ["Tour", "/#tour"],
            ["Experts", "/#experts"],
            ["Itinerary", "/#itinerary"],
            ["FAQ", "/#faq"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="transition-colors hover:text-ink"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/972544336098"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-navy transition-colors hover:text-ink"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="/reserve"
            className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-white hover:text-foreground"
          >
            Reserve
          </a>
        </div>
      </div>
    </nav>
  );
}
