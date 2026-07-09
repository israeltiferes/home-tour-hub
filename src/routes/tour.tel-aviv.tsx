import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/tel-aviv")({
  head: () => ({ meta: [{ title: "Day Three · Netanya & Tel Aviv — Holy Home Tours" }] }),
  component: TelAvivDay,
});

function TelAvivDay() {
  return (
    <TourDayPage
      eyebrow="Day Three · Wednesday, October 7"
      headline="Israel's coast is still rising. So is the window to get in."
      subhead="Coastal Living: Netanya & Tel Aviv"
      heroImage="/hero-day3.jpg"
      itineraryCity="Netanya & Tel Aviv"
      itineraryIntro="The finale, on the Mediterranean — Netanya's fastest-growing developments in the morning, lunch in Tel Aviv, and a closing panel of experts before you head home."
      itinerary={[
        { time: "9:45–10:30 AM", activity: "Optional pickup from Jerusalem (two convenient locations)" },
        { time: "10:30 AM", activity: "Welcome breakfast — Netanya" },
        { time: "11:00 AM", activity: "Development visit #1 — Netanya" },
        { time: "11:45 AM", activity: "Development visit #2 — Netanya" },
        { time: "12:45 PM", activity: "Travel to Tel Aviv" },
        { time: "1:15 PM", activity: "Lunch + legal & mortgage seminar" },
        { time: "2:45 PM", activity: "Development visit #3 — Tel Aviv" },
        { time: "3:15 PM", activity: "Expert panel — Nefesh B'Nefesh, special guest & developer" },
        { time: "4:00 PM", activity: "Final Q&A & closing" },
        { time: "4:30 PM", activity: "Optional return transportation to Jerusalem" },
      ]}
    />
  );
}
