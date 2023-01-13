import { round } from "./utils.mjs";

export function farenheitToCelcius(f) {
  // °C = °F - 32.00 / 1.8000
  if (f < -459.67) console.error(`${f}°F is too cold`);
  return round((f - 32.0) / 1.8);
}

export function celciusToFarenheit(c) {
  // °F = °C * 1.8000 + 32.00
  if (c < -273.15) console.error(`${c}°C is too cold`);
  return round(c * 1.8 + 32);
}
