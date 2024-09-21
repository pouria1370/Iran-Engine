import { Pathnames } from "next-intl/routing";

export const locales = ["en"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
