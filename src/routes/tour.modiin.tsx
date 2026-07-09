import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/modiin")({
  head: () => ({ meta: [{ title: "Day One · Beit Shemesh & Modi'in — Holy Home Tours" }] }),
  component: ModiinDay,
});

function ModiinDay() {
  return (
    <TourDayPage
      eyebrow="Day One · Monday, October 5"
      headline="The neighborhoods where Anglo families keep landing — and never leaving."
      subhead="Family Communities: Modi'in & Beit Shemesh"
      heroImage="/hero-day1.jpg"
      itineraryCity="Beit Shemesh & Modi'in"
      itineraryIntro="A full day across two of Israel's most established Anglo communities — real developments, real experts, and honest answers, with no pressure."
      itinerary={[
        { time: "9:15–10:00 AM", activity: "Optional pickup from Jerusalem (two convenient locations)" },
        { time: "10:00 AM", activity: "Welcome breakfast & Aliyah lifestyle talk — Modi'in" },
        { time: "10:45 AM", activity: "Development visit #1 — Modi'in" },
        { time: "11:30 AM", activity: "Travel to Beit Shemesh" },
        { time: "12:00 PM", activity: "Development visit #2 — Ramat Beit Shemesh" },
        { time: "12:45 PM", activity: "Lunch + mortgage seminar with a community rabbi" },
        { time: "2:30 PM", activity: "Development visit #3 + legal seminar & Q&A" },
        { time: "4:00 PM", activity: "Networking & open Q&A" },
        { time: "5:00 PM", activity: "Optional return transportation to Jerusalem" },
      ]}
    />
  );
}
