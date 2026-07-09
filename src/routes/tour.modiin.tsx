import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";

export const Route = createFileRoute("/tour/modiin")({
  head: () => ({
    meta: [
      { title: "Day Three · Modiin & Beit Shemesh — Holy Home Tours" },
      {
        name: "description",
        content:
          "A day in Modiin and Beit Shemesh — for families who know Israel is home and want to understand which community is theirs.",
      },
    ],
  }),
  component: ModiinDay,
});

function ModiinDay() {
  return (
    <TourDayPage
      eyebrow="Day Three · October 6"
      headline="This Is What Raising a Family in Israel Actually Looks Like"
      subhead="A day in Modiin and Beit Shemesh — for families who know Israel is home and want to understand which community is theirs."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&auto=format&fit=crop&q=80"
      itineraryCity="Modiin and Beit Shemesh"
      itineraryIntro="The question isn't whether — it's where. This day takes you inside two of Israel's most established Anglo family communities so you can see, compare, and decide with real confidence."
      itinerary={[
        { time: "8:30 AM", activity: "Aliyah & lifestyle talk: Taxes, schools, and practical family life in Israel — over breakfast in Modiin." },
        { time: "10:00 AM", activity: "Mortgage workshop: An Israeli mortgage specialist on financing a purchase from abroad." },
        { time: "12:30 PM", activity: "Lunch in Ramat Beit Shemesh Bet: A local rabbi shares what community life actually feels like from the inside." },
        { time: "2:00 PM", activity: "Modiin development tour: Walk a featured project in one of Israel's most thoughtfully planned cities." },
        { time: "4:00 PM", activity: "Ramat Beit Shemesh Bet tour: See the newer, fast-growing side of Beit Shemesh — vibrant and evolving." },
        { time: "5:30 PM", activity: "Ramat Aleph + legal seminar: Tour the established community and close the day with a full attorney Q&A." },
      ]}
    />
  );
}
