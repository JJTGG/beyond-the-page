import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Beyond the Page",
  description: "My Youth Power in Action Journey.",
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