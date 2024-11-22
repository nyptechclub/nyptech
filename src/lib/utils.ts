import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function formatDate(date: string, includeRelative: boolean = false) {
  let currentDate = new Date();
  let targetDate = currentDate;

  if (!date.includes("T")) {
    targetDate = new Date(`${date}T00:00:00`);
  }

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
  } else if (monthsAgo > 0) {
    formattedDate = monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
  } else if (daysAgo > 0) {
    formattedDate = daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}