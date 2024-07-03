import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAvatarFallback(username: string | undefined) {
  if (!username) return "";

  // Split the username by spaces to get individual words
  const nameParts = username.trim().split(/\s+/);

  // Extract the first letter of the first and last words
  let initials = nameParts[0][0].toUpperCase(); // First letter of the first name
  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1][0].toUpperCase(); // First letter of the last name
  } else if (nameParts[0].length > 1) {
    initials += nameParts[0][1].toUpperCase(); // Second letter of the first name if only one name part
  }

  return initials;
}
