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
      label="Day Three · October 6"
      heroHeadline="This Is What Raising a Family"
      heroHeadlineItalic="in Israel Actually Looks Like"
      heroSubheadline="A day in Modiin and Beit Shemesh — for families who know Israel is home and want to understand which community is theirs."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&auto=format&fit=crop&q=80"
      intro="The question isn't whether — it's where. This day takes you inside two of Israel's most established Anglo family communities so you can see, compare, and decide with real confidence."
      highlights={[
        { title: "Aliyah & Lifestyle Talk", body: "Taxes, schools, and practical family life in Israel — over breakfast in Modiin." },
        { title: "Mortgage Workshop", body: "An Israeli mortgage specialist on financing a purchase from abroad." },
        { title: "Modiin Development Tour", body: "Walk a featured project in one of Israel's most thoughtfully planned cities." },
        { title: "Lunch in Ramat Beit Shemesh Bet", body: "A local rabbi shares what community life actually feels like from the inside." },
        { title: "Ramat Beit Shemesh Bet Tour", body: "See the newer, fast-growing side of Beit Shemesh — vibrant and evolving." },
        { title: "Ramat Aleph + Legal Seminar", body: "Tour the established community and close the day with a full attorney Q&A." },
      ]}
      photos={[
        { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80", alt: "Israeli family neighborhood" },
        { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=80", alt: "Modern Israeli home" },
        { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80", alt: "Israel community" },
      ]}
    />
  );
}
