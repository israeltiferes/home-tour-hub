import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/jerusalem")({
  head: () => ({
    meta: [
      { title: "Day One · Jerusalem & Givat Ze'ev — Holy Home Tours" },
      {
        name: "description",
        content:
          "A guided day through Jerusalem and Givat Ze'ev for serious buyers — legal seminars, mortgage clarity, and developments seen from the inside.",
      },
    ],
  }),
  component: JerusalemDay,
});

function JerusalemDay() {
  return (
    <TourDayPage
      eyebrow="Day One · October 4"
      headline="Where Every Street Has Always Known Your Name"
      subhead="A guided day through Jerusalem and Givat Ze'ev — for those who feel the pull of this city and want to understand what it means to actually live here."
      heroImage="https://images.unsplash.com/photo-1544948503-1ccb09ae26d7?w=1600&auto=format&fit=crop&q=80"
      itineraryCity="Jerusalem and Givat Ze'ev"
      itineraryIntro="Jerusalem isn't just a city — it's a decision. This day is built for buyers who want to walk the neighborhoods, meet the experts, and leave with real clarity. Not brochures. Answers."
      itinerary={[
        { time: "8:30 AM", activity: "Legal seminar: Israeli real estate attorney covers the full purchase process for foreign buyers." },
        { time: "10:00 AM", activity: "Two development tours: Walk through featured projects in Jerusalem and Givat Ze'ev side by side." },
        { time: "12:30 PM", activity: "Lunch in the Shuk: Experience Jerusalem's daily rhythm — this is what Tuesday looks like." },
        { time: "2:00 PM", activity: "Mortgage workshop: An Israeli mortgage specialist breaks down financing options from abroad." },
        { time: "4:00 PM", activity: "Givat Ze'ev community tour: More space, lower prices, and still in the Jerusalem orbit." },
        { time: "5:30 PM", activity: "Community conversation: A local rabbi on what building a life in Jerusalem actually feels like." },
      ]}
    />
  );
}
