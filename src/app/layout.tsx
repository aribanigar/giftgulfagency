import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <JsonLd data={organizationSchema(settings)} />
        <JsonLd data={localBusinessSchema(settings)} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
