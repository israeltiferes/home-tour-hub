import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";
import jerusalemStreet from "@/assets/jerusalem-street.jpg";

export const Route = createFileRoute("/tour/jerusalem")({
  head: () => ({
    meta: [
      { title: "Day One · Jerusalem & Givat Ze'ev — Holy Home Tours" },
      {
        name: "description",
        content:
          "A guided day through Jerusalem and Givat Ze'ev for serious buyers — legal seminars, mortgage clarity, and developments seen from the inside.",
      },
      { property: "og:title", content: "Day One · Jerusalem & Givat Ze'ev" },
      {
        property: "og:description",
        content:
          "A guided day through Jerusalem and Givat Ze'ev for those who feel the pull of this city and want clarity, not brochures.",
      },
      { property: "og:image", content: jerusalemStreet },
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
      heroImage={jerusalemStreet}
      experience={[
        "There is a version of Jerusalem you see as a visitor — the stones, the markets, the weight of history in the air. And then there is the Jerusalem that people build their lives inside. That is what this day is about.",
        "Day One is designed for families, investors, and individuals who have felt Jerusalem calling and want to finally answer that call with clarity. You'll move through the city with a Licensed Israel Tour Guide, sit with a real estate attorney, meet a mortgage specialist, walk through active developments, and end the day in conversation with a local rabbi about what it genuinely means to plant roots in the Jerusalem region. You leave not with brochures, but with answers.",
        "This is not a tour of landmarks. It is a tour of possibility.",
      ]}
      stops={[
        {
          time: "10:00 AM",
          title: "A Morning in Jerusalem",
          subtitle: "Welcome Breakfast · Jerusalem Hotel",
          body: "The day begins over breakfast with the other participants — a small, curated group of people who, like you, are serious about Israel. The morning is unhurried. You are oriented. You are welcomed. The day is laid out before you.",
          why: "The people in the room often become your most valuable resource. These are buyers, future neighbors, and fellow travelers on the same path.",
        },
        {
          time: "10:30 AM",
          title: "Knowing the Rules Before You Play",
          subtitle: "Legal Seminar · Israeli Real Estate Attorney",
          body: "Before you fall in love with a property, you need to understand the landscape. An experienced Israeli real estate attorney walks you through the purchasing process, contract structures, tax obligations, and the specific considerations that apply to foreign buyers. No jargon. No sales pitch. Just clarity.",
          why: "Most foreign buyers make costly mistakes because they didn't ask the right questions early enough. This session exists so you won't.",
        },
        {
          time: "11:15 AM",
          title: "Your First Development",
          subtitle: "Project Visit #1 · Guided Tour",
          body: "You step off the bus and into one of the featured residential developments in the Jerusalem area. Your guide gives context as you walk — the architecture, the community profile, the pricing dynamics, the vision behind the project. You are not just looking at apartments. You are reading a neighborhood.",
          why: "Seeing a development in person changes everything. Photos lie. Your instincts, standing inside a space, do not.",
        },
        {
          time: "12:15 PM",
          title: "A Second Perspective",
          subtitle: "Project Visit #2 · Comparison Tour",
          body: "The second development asks you to compare. Different community feel, different pricing structure, different design language. Your guide facilitates the comparison in real time, helping you understand what differentiates them — not just aesthetically, but as long-term investments and places to live.",
          why: "You cannot make a confident decision with only one data point. This is where discernment begins.",
        },
        {
          time: "1:00 PM",
          title: "Lunch in the Shuk",
          subtitle: "Jerusalem Market · Midday Break",
          body: "Lunch is taken in Jerusalem's living, breathing market. The noise, the color, the smell of fresh bread and roasted coffee — this is the texture of everyday life in the city. It is intentionally unstructured. Let it wash over you.",
          why: "You are not just buying property. You are buying a life. This is what Tuesday afternoon looks like.",
        },
        {
          time: "1:20 PM",
          title: "The Numbers, Honestly",
          subtitle: "Mortgage & Financing Workshop · Israeli Mortgage Specialist",
          body: "The question that stops most foreign buyers is not \"where\" but \"how.\" A dedicated Israeli mortgage specialist sits with the group and walks through the actual mechanics: what financing looks like for international purchasers, what the lending process requires, and how to begin structuring a purchase from abroad.",
          why: "Financing in Israel has its own logic. Understanding it early turns \"maybe someday\" into a realistic timeline.",
        },
        {
          time: "2:00 PM",
          title: "The Agripas Quarter",
          subtitle: "Neighborhood Experience · Jerusalem",
          body: "One of Jerusalem's most dynamic and evolving areas. Your guide walks you through the Agripas corridor — a window into how the city develops, how communities form around new construction, and what the next generation of Jerusalem living looks like at street level.",
          why: "The best real estate decisions are made by people who understand momentum. This neighborhood has it.",
        },
        {
          time: "2:30 PM",
          title: "Beyond the City Line",
          subtitle: "Givat Ze'ev Community & Development Tour",
          body: "The bus takes you just outside Jerusalem to Givat Ze'ev — a fast-growing community that offers a different equation: more space, lower price points, strong infrastructure, and the unmistakable pull of living in the Jerusalem orbit without being in the center of it.",
          why: "For many buyers, Givat Ze'ev is the answer they didn't know they were looking for.",
        },
        {
          time: "3:00 PM",
          title: "A Conversation Worth Having",
          subtitle: "Community Discussion · Rabbi",
          body: "Inside one of the developments, you sit down with a rabbi who has built his life in the Jerusalem region. The conversation covers what community really means here — the schools, the rhythm of the week, the feeling of Shabbat in a neighborhood where everyone shares it.",
          why: "No spreadsheet captures this. And yet it is often the deciding factor.",
        },
        {
          time: "3:30 PM",
          title: "Ask Everything",
          subtitle: "Open Q&A Session",
          body: "Every question you've been gathering throughout the day — about communities, developments, financing, legal process, next steps — gets answered here, in the room, by people who know.",
          why: "You will not leave with unresolved questions. That is the point.",
        },
      ]}
      trust="Every element of this day was designed by people who have guided hundreds of families through the process of buying in Israel. Our Licensed Israel Tour Guide brings both deep local expertise and an understanding of what foreign buyers specifically need to see, hear, and understand. The attorneys and mortgage specialists we bring in work with international buyers regularly and speak the language of someone making this decision from outside Israel. You are not navigating this alone, and you are not being sold to. You are being oriented. This is a small group. Every session is intimate. Every question gets a real answer."
      conversionHeadline="You've spent enough time"
      conversionHeadlineItalic="wondering."
      conversionSub="The Jerusalem day is designed to replace uncertainty with understanding. Spots are limited. We keep the group small so every conversation is real and every question gets answered."
    />
  );
}
