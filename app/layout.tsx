import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Beyond the Page — Sofiyah Bakare",
  description:
    "A personal story of six weeks of learning, literacy, teaching, advocacy and action through the World Literacy Foundation Youth Power in Action programme.",
  keywords: [
    "Sofiyah Bakare",
    "Beyond the Page",
    "Youth Power in Action",
    "World Literacy Foundation",
    "literacy",
    "literacy advocacy",
  ],
  openGraph: {
    title: "Beyond the Page — Sofiyah Bakare",
    description:
      "A personal story of six weeks of learning, literacy, teaching, advocacy and action through the World Literacy Foundation Youth Power in Action programme.",
    type: "website",
    url: "https://beyond-the-page-two.vercel.app",
    siteName: "Beyond the Page",
  },
  twitter: {
    card: "summary",
    title: "Beyond the Page — Sofiyah Bakare",
    description:
      "A personal story of six weeks of learning, literacy, teaching, advocacy and action through the World Literacy Foundation Youth Power in Action programme.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}