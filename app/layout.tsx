import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}