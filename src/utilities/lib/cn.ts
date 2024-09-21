import { extendTailwindMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

type AdditionalClassGroupIDs = "font-size";

const customTwMerge = extendTailwindMerge<AdditionalClassGroupIDs>({
  extend: {
    classGroups: {
      "font-size": [
        {
          "text-display": [
            "2xs",
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "4xl",
            "5xl",
            "6xl",
            "7xl",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
