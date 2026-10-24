import type { ReactNode } from "react";
import { Container, SectionIntro } from "@/components/editorial";
import { QuickQuoteForm } from "@/components/sidebar/quick-quote-form";

/**
 * Full-width enquiry section for pages without the quote sidebar (home,
 * about, index pages). Same quick-quote form and lead store; `source`
 * records which page the enquiry came from.
 */
export function EnquiryBand({
  source,
  title,
  intro,
  item,
}: {
  source: string;
  title: ReactNode;
  intro: ReactNode;
  item?: string;
}) {
  return (
    <section id="enquiry" className="on-dark scroll-mt-20 bg-night py-24 text-white sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro eyebrow="Send an enquiry" title={title} size="md" />
            <div className="mt-8 text-lg leading-relaxed text-white/70">{intro}</div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <QuickQuoteForm source={source} item={item} />
          </div>
        </div>
      </Container>
    </section>
  );
}
