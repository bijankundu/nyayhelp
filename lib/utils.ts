import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | number | Date | Dayjs) {
  const inputDate = dayjs(date);
  const now = dayjs();

  if (now.diff(inputDate, "year") < 1) {
    return inputDate.from(now);
  } else {
    return inputDate.format("MMM D, YYYY h:mm A");
  }
}
