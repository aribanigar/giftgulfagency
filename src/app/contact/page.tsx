import type { Metadata } from "next";
import { Container, PageHero } from "@/components/editorial";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site-config";
import { getSettings } from "@/lib/settings";
import { heroPhoto } from "@/lib/photos";

const contactTitle = "Contact Gifts Gulf Advertising | Printing in UAE & Qatar";
const contactDescription =
  "Get in touch with Gifts Gulf Advertising for printing, signages, events & exhibitions, packaging, gift items and social media across Dubai, Abu Dhabi, Sharjah and Doha.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: `${siteConfig.url}/contact`,
    images: [{ url: heroPhoto("hero-skyline", "south"), width: 1920, height: 1080, alt: contactTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: [heroPhoto("hero-skyline", "south")],
  },
};

export default async function ContactPage() {
  const settings = await getSettings();
  const telHref = `tel:${settings.contactPhone.replace(/[^\d+]/g, "")}`;

  return (
    <div>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        eyebrow="Get a quote"
        title={<>Let&apos;s talk<br /><span className="text-brand-bright">about the work.</span></>}
        intro={
          <p>
            One service or all of them, tell us what you are working on and we
            will come back with a quote. The more detail you give, the more
            accurate it will be.
          </p>
        }
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <p className="eyebrow mb-5">Reach us directly</p>
              <ul className="hairline border-t">
                <li className="hairline border-b py-6">
                  <p className="text-sm text-ink/55">Email</p>
                  <a href={`mailto:${settings.contactEmail}`} className="mt-1 block text-xl font-semibold tracking-tight hover:text-brand">
                    {settings.contactEmail}
                  </a>
                </li>
                <li className="hairline border-b py-6">
                  <p className="text-sm text-ink/55">Phone / WhatsApp</p>
                  <a href={telHref} className="mt-1 block text-xl font-semibold tracking-tight hover:text-brand">
                    {settings.contactPhone}
                  </a>
                </li>
                <li className="hairline border-b py-6">
                  <p className="text-sm text-ink/55">Offices</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{settings.address}</p>
                </li>
              </ul>
              <p className="mt-8 text-[15px] leading-relaxed text-ink/65">
                Every request gets a reference number and a confirmation email,
                and we reply with any questions or a quote.
              </p>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
