import { Inter, Newsreader } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});
