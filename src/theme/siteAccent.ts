import { accentKeys, accentThemes } from "./accents";

const randomKey = accentKeys[Math.floor(Math.random() * accentKeys.length)];

export const siteAccentKey = randomKey;
export const siteAccentTheme = accentThemes[randomKey];
