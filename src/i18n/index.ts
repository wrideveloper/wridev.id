import { en } from "./en";
import { id } from "./id";

export const language = {
  en: "English",
  id: "Indonesia",
}

const locales = {
  en: en,
  id: id,
};

export function t(locale: keyof typeof locales) {
  return locales[locale];
}
