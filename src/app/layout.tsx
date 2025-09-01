import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HORAMA - Vision par Ordinateur souveraine et performante",
  description: "Spécialistes en Computer Vision on-prem et edge AI. Solutions souveraines pour l'inspection qualité, détection d'objets, OCR et MLOps industriel.",
  keywords: "computer vision, IA souveraine, on-prem, edge AI, MLOps, inspection qualité, OCR, détection objets",
  authors: [{ name: "HORAMA" }],
  openGraph: {
    title: "HORAMA - Vision par Ordinateur souveraine",
    description: "Solutions de Computer Vision on-prem pour une maîtrise totale de vos données",
    url: "https://horama.ai",
    siteName: "HORAMA",
    images: [
      {
        url: "/Logo-1.svg",
        width: 1200,
        height: 630,
        alt: "HORAMA - Computer Vision souveraine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HORAMA - Vision par Ordinateur souveraine",
    description: "Solutions de Computer Vision on-prem pour une maîtrise totale de vos données",
    images: ["/Logo-1.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
