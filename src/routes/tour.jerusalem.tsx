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
      label="Day One · October 4"
      heroHeadline="Where Every Street Has Always"
      heroHeadlineItalic="Known Your Name"
      heroSubheadline="A guided day through Jerusalem and Givat Ze'ev — for those who feel the pull of this city and want to understand what it means to actually live here."
      heroImage="https://images.unsplash.com/photo-1544948503-1ccb09ae26d7?w=1600&auto=format&fit=crop&q=80"
      intro="Jerusalem isn't just a city — it's a decision. This day is built for buyers who want to walk the neighborhoods, meet the experts, and leave with real clarity. Not brochures. Answers."
      highlights={[
        { title: "Legal Seminar", body: "Israeli real estate attorney covers the full purchase process for foreign buyers." },
        { title: "Two Development Tours", body: "Walk through featured projects in Jerusalem and Givat Ze'ev side by side." },
        { title: "Mortgage Workshop", body: "An Israeli mortgage specialist breaks down financing options from abroad." },
        { title: "Lunch in the Shuk", body: "Experience Jerusalem's daily rhythm — this is what Tuesday looks like." },
        { title: "Givat Ze'ev Community Tour", body: "More space, lower prices, and still in the Jerusalem orbit." },
        { title: "Community Conversation", body: "A local rabbi on what building a life in Jerusalem actually feels like." },
      ]}
      photos={[
        { src: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&auto=format&fit=crop&q=80", alt: "Jerusalem Old City" },
        { src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&auto=format&fit=crop&q=80", alt: "Jerusalem neighborhood" },
        { src: "https://images.unsplash.com/photo-1552413580-eb6e9af42f56?w=800&auto=format&fit=crop&q=80", alt: "Jerusalem architecture" },
      ]}
    />
  );
}
