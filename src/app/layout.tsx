import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";
import { getSettings } from "@/lib/settings";
import { siteConfig } from "@/lib/site-config";
import { featurePhotos } from "@/lib/photos";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <JsonLd data={organizationSchema(settings)} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
