import { persistentAtom } from "@nanostores/persistent";
import { ui, defaultLocale } from "./ui";

export const locale = persistentAtom<keyof typeof ui>("locale", defaultLocale);
