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
      eyebrow="Day Two · October 5"
      headline="The Mediterranean Has Always Been Part of the Plan"
      subhead="A day along Israel's coastline — from Netanya's rising communities to the pulse of Tel Aviv — for those drawn to modern living and lasting investment."
      heroImage="https://images.unsplash.com/photo-1544948503-1ccb09ae26d7?w=1600&auto=format&fit=crop&q=80"
      itineraryCity="Tel Aviv and Netanya"
      itineraryIntro="Tel Aviv moves fast. Netanya is growing. This day puts you inside both — walking developments, sitting with a private expert panel, and seeing Israel's coastal market the way insiders see it."
      itinerary={[
        { time: "8:30 AM", activity: "Legal seminar: Full foreign-buyer briefing before you tour a single property." },
        { time: "10:00 AM", activity: "Two Netanya developments: Compare two of Israel's fastest-growing coastal communities side by side." },
        { time: "12:30 PM", activity: "Lunch with guest rabbi: An honest conversation about Jewish life and community in Tel Aviv." },
        { time: "2:00 PM", activity: "Tel Aviv landmark project: Exclusive access inside one of Tel Aviv's most significant new builds." },
        { time: "4:00 PM", activity: "Private expert panel: Mortgage specialist, Nefesh B'Nefesh rep, and project team — all in one room." },
        { time: "5:30 PM", activity: "Developer market talk: Candid insights on where the market is heading from the people building it." },
      ]}
    />
  );
}
