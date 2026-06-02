import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiba Jassousti — Architect | Designer | Researcher",
  description: "Portfolio of Hiba Jassousti, a Tunisian architect and designer specializing in heritage, culture, and contemporary architectural spaces.",
  keywords: ["architect", "Tunisia", "Djerba", "architecture portfolio", "heritage restoration", "contemporary design"],
  openGraph: {
    title: "Hiba Jassousti — Architect | Designer | Researcher",
    description: "Designing spaces that connect heritage, culture and contemporary life.",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
