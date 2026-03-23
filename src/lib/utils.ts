import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(seed: string): string {
  const avatar = createAvatar(initials, {
    seed: seed || "default",
    size: 10,
  });

  return avatar.toDataUri();
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
