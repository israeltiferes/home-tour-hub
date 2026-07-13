import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/jerusalem")({
  head: () => ({ meta: [{ title: "Day Two · Jerusalem & Givat Ze'ev — Holy Home Tours" }] }),
  component: JerusalemDay,
});

function JerusalemDay() {
  return (
    <TourDayPage
      eyebrow="Day Two · Tuesday, October 6"
      headline="In Jerusalem, buying a home is never just buying a home."
      subhead="Jerusalem & Givat Ze'ev"
      heroImage="/hero-day2.jpg"
      reserveDay="day2"
      itineraryCity="Jerusalem"
      itineraryIntro="A day that moves from Jerusalem's newest communities to its oldest streets — with a lawyer, a mortgage specialist, and a rabbi on hand for every question."
      itinerary={[
        { time: "10:00 AM", activity: "Welcome breakfast & icebreaker with Nefesh B'Nefesh" },
        { time: "10:30 AM", activity: "Bus departure" },
        { time: "10:40 AM", activity: "Development visit #1" },
        { time: "11:40 AM", activity: "Development visit #2" },
        { time: "12:30 PM", activity: "Travel to lunch" },
        { time: "12:45 PM", activity: "Lunch + legal & mortgage seminar" },
        { time: "2:15 PM", activity: "Development visit #3" },
        { time: "3:00 PM", activity: "Community discussion with a rabbi" },
        { time: "3:30 PM", activity: "Open Q&A" },
        { time: "4:00 PM", activity: "Return to Jerusalem city center" },
      ]}
    />
  );
}
