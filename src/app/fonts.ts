import { Red_Hat_Display } from "next/font/google";

export const fontPrimary_init = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "900"],
  variable: "--font-primary",
});

export const fontPrimary = fontPrimary_init.variable;
