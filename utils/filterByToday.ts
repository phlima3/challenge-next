import { TodayEvent } from "@/interfaces/events-today";
//addd all the events that are happening today
let date = new Date(Date.now());
export function filterByTodayDate(event: TodayEvent) {
  let eventDate = event.startTime.toString().split("T")[0].split("-");

  if (
    parseInt(eventDate[0]) === date.getFullYear() &&
    parseInt(eventDate[1]) === date.getUTCMonth() + 1 &&
    parseInt(eventDate[2]) === date.getDate()
  ) {
    if (event.match === undefined) return false;
    if (event.match.id === undefined) return false;

    return true;
  } else {
    return false;
  }
}
