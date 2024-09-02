import type { Metadata } from "next";
import { fontPrimary } from "./fonts";
import "./globals.css";

var challengeName: string = "Meet Landing Page";

export const metadata: Metadata = {
  title: `Frontend Mentor | ${challengeName}`,
  description: `My solution to Frontend Mentor'\s ${challengeName} challenge`,
  keywords: ["HTML, CSS, JavaScript, NextJS, Sass, React"],
  creator: "Chelsea Anne Livingston Cruz",

  openGraph: {
    title: `Frontend Mentor | ${challengeName}`,
    description:
      `My solution to Frontend Mentor'\s ` + { challengeName } + ` challenge`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary} antialiased`}>{children}</body>
    </html>
  );
}
