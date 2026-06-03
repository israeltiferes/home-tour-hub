import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";
import telAviv from "@/assets/tel-aviv.jpg";

export const Route = createFileRoute("/tour/tel-aviv")({
  head: () => ({
    meta: [
      { title: "Day Two · Tel Aviv & Netanya — Holy Home Tours" },
      {
        name: "description",
        content:
          "A day along Israel's coastline — Netanya's rising communities and the pulse of Tel Aviv. Legal, financial, and developer access for serious buyers.",
      },
      { property: "og:title", content: "Day Two · Tel Aviv & Netanya" },
      {
        property: "og:description",
        content:
          "From Netanya's growing communities to Tel Aviv's most ambitious developments — a day for buyers drawn to coastal Israel.",
      },
      { property: "og:image", content: telAviv },
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
      heroSubheadline="A day along Israel's coastline — from Netanya's rising communities to the pulse of Tel Aviv — for those drawn to the intersection of modern living and lasting investment."
      heroImage={telAviv}
      experience={[
        "Some people come to Israel and feel it most on the coast. The light is different here. The pace is different. There is a particular kind of freedom in a city that faces the sea.",
        "Day Two is built for buyers drawn to coastal Israel — to Netanya's rapidly growing communities, to the energy of Tel Aviv, to the idea of a home where the Mediterranean is part of your daily backdrop. The day moves from legal clarity in the morning to development tours, to an intimate lunch conversation with a guest rabbi, to a private expert panel inside one of Tel Aviv's most ambitious new residential projects. By the time you return to Jerusalem, you will have seen two cities, compared multiple developments, spoken with attorneys, mortgage specialists, and a Nefesh B'Nefesh representative, and left with a comprehensive picture of what coastal life in Israel actually looks like.",
        "This is not a day trip. It is a recalibration.",
      ]}
      stops={[
        {
          time: "10:30 AM",
          title: "Arrival by the Sea",
          subtitle: "Welcome Breakfast · Netanya Hotel",
          body: "The day begins at a hotel in Netanya — breakfast, introductions, and a look at the day ahead. The morning light over a coastal city has a way of making things feel possible. That is intentional.",
          why: "The setting is part of the message. You are here to understand what living on Israel's coast feels like, and it begins the moment you arrive.",
        },
        {
          time: "11:00 AM",
          title: "Before You Sign Anything",
          subtitle: "Legal Seminar · Israeli Real Estate Attorney",
          body: "The legal session comes early, by design. Before you tour a single property, you understand the framework: how transactions work in Israel for foreign buyers, what contracts protect you, what taxes apply, what ownership structures are available, and what mistakes other international buyers have made so that you don't have to make them.",
          why: "Knowledge is protection. This session gives you the confidence to evaluate everything else you see today with clear eyes.",
        },
        {
          time: "11:45 AM",
          title: "Netanya, Up Close",
          subtitle: "Development Visit #1 · Guided Tour",
          body: "Netanya is one of Israel's fastest-growing coastal cities. Your first development visit takes you inside a featured residential project — your guide walking you through community amenities, lifestyle design, market positioning, and what the next five years of growth look like for this corridor.",
          why: "Arriving early in a growth market is the whole game. This visit gives you the context to understand where Netanya is in its arc.",
        },
        {
          time: "12:30 PM",
          title: "A Second Look at Netanya",
          subtitle: "Development Visit #2 · Netanya",
          body: "The second development sits alongside the first not as competition, but as contrast. Different community character, different architectural language, different price and value proposition. Your guide walks you through both in real time, helping you understand what distinguishes one opportunity from another — not just visually, but as long-term investments and places to actually live.",
          why: "You cannot make a confident decision with only one data point. By seeing two communities back to back, you start to develop the instincts of someone who really knows this market.",
        },
        {
          time: "1:15 PM",
          title: "The Drive South",
          subtitle: "En Route to Tel Aviv · Tour Guide Commentary",
          body: "The bus moves south toward Tel Aviv and your Licensed Israel Tour Guide takes the narrative — the evolution of Israel's coastal cities, how development corridors form, where the economic energy is concentrating and why.",
          why: "Context transforms what you see. By the time you arrive in Tel Aviv, you are reading the city, not just visiting it.",
        },
        {
          time: "2:00 PM",
          title: "Lunch in Tel Aviv",
          subtitle: "Guest Rabbi · Lunch Discussion",
          body: "Over lunch in the heart of Tel Aviv, you hear from a guest rabbi who can speak to both dimensions of life here: the practical and the profound. What does Jewish life look like in Israel's most international city? What does it mean to build a future here? This conversation holds space for that.",
          why: "For most buyers, this is not purely a financial decision. This conversation acknowledges that.",
        },
        {
          time: "2:45 PM",
          title: "Inside the Development",
          subtitle: "Tel Aviv Landmark Project · Exclusive Access",
          body: "You go behind the scenes at one of Tel Aviv's most significant new residential developments. This is not a showroom visit — it is an immersion. You walk through the project, understand its vision, and begin to see what urban living in Tel Aviv looks like when it is done at the highest level.",
          why: "Tel Aviv real estate is a category unto itself. Understanding it requires seeing it, not just reading about it.",
        },
        {
          time: "3:15 PM",
          title: "The Room Where Answers Live",
          subtitle: "Private Expert Panel · Mortgage Specialist, Nefesh B'Nefesh, Project Team",
          body: "You gather inside the development for an intimate panel. The conversation covers financing realities, aliyah resources, market dynamics, and what you need to know before you make a move. This is not a presentation. It is a conversation, and you are part of it.",
          why: "Access to this quality of expertise, in this format, is rare. Most buyers spend months trying to find these conversations individually.",
        },
        {
          time: "4:00 PM",
          title: "Your Questions, Answered",
          subtitle: "Interactive Q&A",
          body: "From the moment the day began, you've been gathering questions. This session is dedicated entirely to answering them — openly, honestly, with the full panel still in the room.",
          why: "A day this full generates a lot of thinking. This session is where the thinking becomes clarity.",
        },
        {
          time: "4:30 PM",
          title: "The Market, Plainly Spoken",
          subtitle: "Developer & Market Insights Discussion",
          body: "A candid conversation with project representatives about where the Tel Aviv market is heading — neighborhood growth trajectories, future development plans, and what the next several years look like for buyers who act now versus those who wait.",
          why: "The people building the market know things that don't make it into public reports.",
        },
        {
          time: "5:15 PM",
          title: "The Drive Back",
          subtitle: "Return to Jerusalem",
          body: "The bus returns to Jerusalem. The conversation on the way back is usually the best conversation of the day.",
          why: "Days like this don't end when the schedule does. The processing happens out loud, with the people who saw what you saw.",
        },
      ]}
      trust="The coastal day was assembled with one premise: that serious buyers deserve serious access. Not a showroom with a sales script, but honest conversations with attorneys, mortgage specialists, and community builders who have guided international buyers through this process many times. Nefesh B'Nefesh's presence on this day is not incidental — it reflects our understanding that this is as much a life decision as it is a financial one. Our Licensed Israel Tour Guide has spent years understanding the nuance between Netanya's neighborhoods, the rhythm of Tel Aviv's development corridors, and what foreign buyers specifically need to see and understand to make decisions they feel confident in."
      conversionHeadline="The coast has a way of"
      conversionHeadlineItalic="settling things."
      conversionSub="People who come to Israel uncertain about where they want to be often find that a day on the coast resolves the question they didn't know they were asking. Spots are limited. The group is kept intentionally small."
    />
  );
}
