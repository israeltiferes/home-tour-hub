import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/tel-aviv")({
  head: () => ({
    meta: [
      { title: "Day Two · Tel Aviv & Netanya — Holy Home Tours" },
      {
        name: "description",
        content:
          "A day along Israel's coastline — Netanya's rising communities and the pulse of Tel Aviv. Legal, financial, and developer access for serious buyers.",
      },
    ],
  }),
  component: TelAvivDay,
});

function TelAvivDay() {
  return (
    <TourDayPage
      label="Day Two · October 5"
      heroHeadline="The Mediterranean Has Always"
      heroHeadlineItalic="Been Part of the Plan"
      heroSubheadline="A day along Israel's coastline — from Netanya's rising communities to the pulse of Tel Aviv — for those drawn to modern living and lasting investment."
      heroImage="https://images.unsplash.com/photo-1544948503-1ccb09ae26d7?w=1600&auto=format&fit=crop&q=80"
      intro="Tel Aviv moves fast. Netanya is growing. This day puts you inside both — walking developments, sitting with a private expert panel, and seeing Israel's coastal market the way insiders see it."
      highlights={[
        { title: "Legal Seminar", body: "Full foreign-buyer briefing before you tour a single property." },
        { title: "Two Netanya Developments", body: "Compare two of Israel's fastest-growing coastal communities side by side." },
        { title: "Tel Aviv Landmark Project", body: "Exclusive access inside one of Tel Aviv's most significant new builds." },
        { title: "Private Expert Panel", body: "Mortgage specialist, Nefesh B'Nefesh rep, and project team — all in one room." },
        { title: "Lunch with Guest Rabbi", body: "An honest conversation about Jewish life and community in Tel Aviv." },
        { title: "Developer Market Talk", body: "Candid insights on where the market is heading from the people building it." },
      ]}
      photos={[
        { src: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop&q=80", alt: "Tel Aviv coastline" },
        { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&auto=format&fit=crop&q=80", alt: "Tel Aviv architecture" },
        { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80", alt: "Israeli coast" },
      ]}
    />
  );
}
