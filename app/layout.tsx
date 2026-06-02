import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiba Jassousti | Architect, Designer & Architectural Researcher",
  description: "Explore the architectural portfolio of Hiba Jassousti, architect and designer from Tunisia. Discover innovative architecture, heritage restoration projects, 3D visualizations, research, and design thinking.",
  keywords: [
    "Hiba Jassousti", "Architect Tunisia", "Architectural Portfolio", "Architecture Student", "Architectural Designer",
    "Heritage Restoration", "Architectural Research", "ENAU Architect", "Tunis Architect", "Djerba Architecture",
    "Architectural Visualization", "Revit Designer", "SketchUp Architect", "Lumion Rendering", "D5 Render",
    "Urban Design", "Architecture Projects", "Architect Portfolio Website", "Architecture Research", "Contemporary Architecture"
  ],
  authors: [{ name: "Hiba Jassousti" }],
  creator: "Hiba Jassousti",
  openGraph: {
    title: "Hiba Jassousti | Architect & Designer",
    description: "Architecture portfolio showcasing design projects, heritage preservation, visualization, research and architectural innovation by Hiba Jassousti.",
    type: "website",
    siteName: "Hiba Jassousti Architecture Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiba Jassousti | Architecture Portfolio",
    description: "Architectural design, heritage restoration, visualization and research portfolio from Tunisia.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hiba Jassousti Architecture",
  "description": "Architectural portfolio and research platform showcasing architecture projects, heritage preservation, design exploration and visualization work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BN05JP2E3Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BN05JP2E3Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
