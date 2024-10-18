import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chelsea = "Chelsea Market, cursive";
const nixie = "Nixie One, cursive";
export const metadata: Metadata = {
  title: "Jsndz",
  description: "Jsndz's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nixie+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
