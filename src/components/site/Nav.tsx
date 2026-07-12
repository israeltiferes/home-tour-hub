import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center">
          <img
            src="/logo.png"
            alt="Holy Homes Tours"
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.18em]">
          {[
            ["Tour", "#tour"],
            ["Experts", "#experts"],
            ["Itinerary", "#itinerary"],
            ["FAQ", "#faq"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className={`transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-bone/80"
              }`}
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
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
              scrolled
                ? "text-foreground hover:text-gold"
                : "text-bone hover:text-gold-light"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-foreground transition-colors"
          >
            Reserve
          </a>
        </div>
      </div>
    </nav>
  );
}
