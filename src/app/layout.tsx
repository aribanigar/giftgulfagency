import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { getSettings } from "@/lib/settings";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos } from "@/lib/photos";
import "./globals.css";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Browser toolbar colour on phones, matching the dark hero every page opens with.
export const viewport: Viewport = {
  themeColor: "#111312",
};

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    title: "Gifts Gulf",
  },
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gifts Gulf Advertising | Signage & Printing in UAE & Qatar",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [
    "advertising agency UAE",
    "advertising agency Qatar",
    "printing company Dubai",
    "signage company Dubai",
    "signboards Abu Dhabi",
    "exhibition stand builder Qatar",
    "packaging company UAE",
    "corporate gift items UAE",
    "social media agency Qatar",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Gifts Gulf Advertising | Signage & Printing in UAE & Qatar",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: featurePhotos.heroSkyline,
        width: 1920,
        height: 1080,
        alt: "Dubai skyline at dusk, representing Gifts Gulf Advertising's UAE and Qatar coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gifts Gulf Advertising | Signage & Printing in UAE & Qatar",
    description: siteConfig.description,
    images: [featurePhotos.heroSkyline],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="0qOwcB159YH5QwCwk7F5rg"
          strategy="afterInteractive"
        />
        <JsonLd data={organizationSchema(settings)} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar telHref={`tel:${settings.contactPhone.replace(/[^\d+]/g, "")}`} />
      </body>
    </html>
  );
}
