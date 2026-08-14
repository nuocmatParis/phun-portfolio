import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { LanguageProvider } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const yujiMai = localFont({
  src: "../../public/fonts/YujiMai-Katakana.woff2",
  variable: "--font-yuji-mai",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: {
    default: portfolioData.meta.title,
    template: `%s - ${portfolioData.profile.name}`,
  },
  description: portfolioData.meta.description,
  icons: {
    icon: [
      { url: "/seo/icon.svg", type: "image/svg+xml" },
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/seo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/seo/site.webmanifest",
  openGraph: {
    type: "website",
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
  },
  twitter: {
    card: "summary",
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${yujiMai.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
