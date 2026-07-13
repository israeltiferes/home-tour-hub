export type TourDayKey = "day1" | "day2" | "day3";

export type Participant = {
  type: "adult" | "child";
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
};

export type Reservation = {
  id: string;
  created_at: string;
  tour_days: TourDayKey[];
  adults_count: number;
  children_count: number;
  total_due: number;
  payment_status: "pending" | "paid" | "failed";
  source?: string;
  participants: Participant[];
};

export const TOUR_DAY_LABELS: Record<TourDayKey, { title: string; sub: string; date: string }> = {
  day1: { title: "Day One · Mon, Oct 5", sub: "Beit Shemesh & Modi'in", date: "Monday, October 5" },
  day2: { title: "Day Two · Tue, Oct 6", sub: "Jerusalem & Givat Ze'ev", date: "Tuesday, October 6" },
  day3: { title: "Day Three · Wed, Oct 7", sub: "Netanya & Tel Aviv", date: "Wednesday, October 7" },
};

export const PRICE_PER_DAY = 99;
