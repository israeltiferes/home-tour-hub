import { createFileRoute } from "@tanstack/react-router";
import { TourDayPage } from "@/components/site/TourDayPage";
import beitShemesh from "@/assets/beit-shemesh.jpg";

export const Route = createFileRoute("/tour/modiin")({
  head: () => ({
    meta: [
      { title: "Day Three · Modiin & Beit Shemesh — Holy Home Tours" },
      {
        name: "description",
        content:
          "A day in Modiin and Beit Shemesh — for families who know Israel is home and want to understand which community is theirs.",
      },
      { property: "og:title", content: "Day Three · Modiin & Beit Shemesh" },
      {
        property: "og:description",
        content:
          "Two of Israel's most established Anglo family communities, seen from the inside — with the mortgage and legal clarity to act on what you find.",
      },
      { property: "og:image", content: beitShemesh },
    ],
  }),
  component: ModiinDay,
});

function ModiinDay() {
  return (
    <TourDayPage
      label="Day Three · October 6"
      heroHeadline="This Is What Raising a Family in Israel"
      heroHeadlineItalic="Actually Looks Like"
      heroSubheadline="A day in Modiin and Beit Shemesh — for families who know Israel is home and want to understand which community is theirs."
      heroImage={beitShemesh}
      experience={[
        "For many families, the question is not whether to move to Israel. The question is where to land. Where will your children go to school? Where will you find your community, your shul, your Friday afternoons? Where will the life you are imagining actually fit?",
        "Day Three is built for that question. It is a day spent inside two of Israel's most established and most sought-after Anglo family communities — Modiin and Beit Shemesh — moving through developments, sitting with community leaders, learning from mortgage specialists and real estate attorneys, and spending real time in neighborhoods that families have already chosen and built rich lives inside. The day begins in Modiin over breakfast and ends in Ramat Beit Shemesh with an open legal Q&A, and every moment in between is designed to help you see these communities not as options, but as possible homes.",
        "This is the day for families. For the ones who've been saying \"next year\" and are ready to say \"this year.\"",
      ]}
      stops={[
        {
          time: "10:30 AM",
          title: "Breakfast and Belonging",
          subtitle: "Welcome Breakfast · Modiin Café · Aliyah & Lifestyle Talk",
          body: "The day begins in Modiin over breakfast with your fellow participants. The morning opens with a talk covering what it actually means to make the move: buying property as a foreign buyer, taxes and financial planning, education and family considerations, and the practical reality of lifestyle planning in Israel. This is not a pitch for aliyah. It is an honest orientation.",
          why: "Most families are full of enthusiasm and partial information. This session fills in the gaps before you spend the day making assessments.",
        },
        {
          time: "11:15 AM",
          title: "Understanding the Numbers",
          subtitle: "Mortgage & Financing Workshop · Israeli Mortgage Specialist",
          body: "A dedicated mortgage specialist walks through the real mechanics of financing a purchase in Israel from abroad. Down payment expectations, lending requirements, structuring options, and current market conditions — all of it, plainly spoken, with time for your specific questions.",
          why: "Financing questions are the most common reason families stall. This session removes that obstacle.",
        },
        {
          time: "12:00 PM",
          title: "Modiin, From the Inside",
          subtitle: "Development Visit · Guided Community Tour",
          body: "Modiin is not a suburb. It is a city — thoughtfully planned, rapidly growing, with the infrastructure of a place that takes its residents seriously: schools, parks, transportation, employment corridors, and an Anglo community that has developed its own rich character over decades. You tour a featured development and the community it sits within.",
          why: "Modiin surprises people. Almost everyone who visits leaves understanding why so many families have chosen it.",
        },
        {
          time: "12:45 PM",
          title: "The Drive to Beit Shemesh",
          subtitle: "En Route · Tour Guide Commentary",
          body: "Your Licensed Israel Tour Guide covers the growth trajectory of Beit Shemesh, the distinct character of its different neighborhoods, the educational infrastructure, and what has made the area one of the fastest-growing Anglo communities in Israel.",
          why: "Beit Shemesh is more nuanced than most people realize from the outside. The drive gives you the context to see it clearly.",
        },
        {
          time: "1:15 PM",
          title: "Lunch and a Local Voice",
          subtitle: "Lunch · Ramat Beit Shemesh Bet · Community Conversation",
          body: "Lunch is at a local restaurant in the heart of Ramat Beit Shemesh Bet. At the table, a local rabbi or community leader joins the group for a conversation no brochure can replicate: what it is like to raise a family here, what the schools are like from the inside, what Shabbat looks like in this neighborhood, how community is built and sustained.",
          why: "You can read about a community online. You cannot read the way someone talks about their life inside it. Pay attention.",
        },
        {
          time: "2:30 PM",
          title: "Ramat Beit Shemesh Bet",
          subtitle: "Community & Development Tour",
          body: "The afternoon opens in Ramat Beit Shemesh Bet — a newer, rapidly growing part of the city with its own distinct energy and community character. Your guide walks you through the housing stock, the schools, the infrastructure, and the particular texture of life here.",
          why: "Seeing Bet before Aleph gives you the right frame — you understand the direction the city is growing before you see where it has already arrived.",
        },
        {
          time: "3:45 PM",
          title: "Ramat Beit Shemesh Aleph + Legal Clarity",
          subtitle: "Development Visit · Legal Seminar & Q&A · Real Estate Attorney",
          body: "The final development visit takes you into Ramat Beit Shemesh Aleph — one of Israel's most established Anglo neighborhoods, with a fully formed community life, deep infrastructure, and a housing market that has proven itself over decades. Inside the development, you sit down with an Israeli real estate attorney for a dedicated legal seminar and open Q&A: contracts and protections, taxes and obligations, foreign buyer considerations, and how to structure a purchase correctly. This is an open session. Ask everything.",
          why: "The day ends with legal clarity because that is what converts interest into action. By the time you leave, you know not just where you want to be — but how to get there.",
        },
        {
          time: "5:00 PM",
          title: "Closing the Day",
          subtitle: "Final Remarks",
          body: "A moment to absorb what you've seen and heard. Final questions are welcomed. The group disperses with something harder to describe than it is to feel: a clearer sense of where home might be.",
          why: "Decisions made on a single visit are rare. Clarity made on a single day is exactly what this is designed to produce.",
        },
      ]}
      trust="Modiin and Beit Shemesh are communities we know deeply. The experts we bring into this day — the mortgage specialist, the attorney, the community leaders — have guided families like yours through this exact process, and they understand the particular questions that arise when you are making this decision from abroad. The Licensed Israel Tour Guide who walks with you through these neighborhoods has spent years understanding not just the real estate, but the human geography — who lives where, why, and what that means for the families still deciding. We keep this group small intentionally. Enough people to make the conversations rich, few enough that no one falls through the cracks."
      conversionHeadline="The families happiest in Israel all have"
      conversionHeadlineItalic="one thing in common."
      conversionSub="They stopped waiting for perfect information and started building real knowledge. This day is how you build it. You will leave having seen two of Israel's most desirable family communities from the inside — and with far fewer reasons to wait. Spots are limited. Small groups only."
    />
  );
}
