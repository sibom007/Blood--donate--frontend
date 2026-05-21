import { createAvatar } from "@dicebear/core";
import { thumbs } from "@dicebear/collection";

/**
 * Generate an SVG avatar from a name
 * @param {string} name
 * @returns {string} SVG string
 */
export function generateAvatar(name: string) {
  const avatar = createAvatar(thumbs, {
    seed: name,
  });

  return avatar.toString();
}
