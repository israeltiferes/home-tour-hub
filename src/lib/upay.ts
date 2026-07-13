import type { Reservation } from "./types";
import { TOUR_DAY_LABELS } from "./types";

// TODO: Wire to Upay once credentials and docs are provided
export async function initiateUpayCheckout(reservation: Reservation) {
  const dayLabels = reservation.tour_days.map((d) => TOUR_DAY_LABELS[d].sub).join(", ");
  const lineItem = `Holy Home Tours — ${dayLabels} — $99 × ${reservation.adults_count}`;
  const successUrl = "/reserve/confirmed";
  const cancelUrl = "/reserve";
  console.log("Upay checkout placeholder", { reservation, lineItem, successUrl, cancelUrl });
  // Replace this with actual Upay SDK/API call
  throw new Error("Upay integration pending — credentials not yet configured");
}

export async function postReservationToSheets(reservation: Reservation) {
  const url = import.meta.env.VITE_SHEETS_WEBHOOK_URL as string | undefined;
  if (!url) {
    console.warn("VITE_SHEETS_WEBHOOK_URL is not configured — skipping sheets write");
    return;
  }
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    });
  } catch (err) {
    console.error("Failed to write reservation to Google Sheets", err);
  }
}
