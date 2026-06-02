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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
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
