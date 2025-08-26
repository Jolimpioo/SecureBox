import { randomInt } from "crypto";

export function secureRandomIndex(max) {
  return randomInt(0, max);
}
