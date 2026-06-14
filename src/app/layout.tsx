import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Butterflies.",
  description: "A minimal streetwear drop built around nostalgia, bold type, and soft emotion.",
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
