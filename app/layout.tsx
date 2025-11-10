import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Silent Vigil",
  description:
    "A cinematic tableau of a lone samurai resting beneath a storm-laden sky, rendered in atmospheric depth."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
