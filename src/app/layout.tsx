import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giszter.dev — Frontend Developer",
  description:
    "Portfolio junior frontend developera specjalizującego się w Next.js, TypeScript i React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
