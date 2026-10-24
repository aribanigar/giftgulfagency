"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

const HIDDEN_ON = ["/admin", "/quote"];

/**
 * Phone-only bar pinned to the bottom of the screen. On long pages the
 * page's own enquiry form sits several screens down (the sidebar stacks
 * below the content), so "Get a quote" scrolls straight to it, or opens
 * /contact on pages without one. Hides while that form is on screen.
 */
export function MobileActionBar({ telHref }: { telHref: string }) {
  const pathname = usePathname();
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;
  // Keyed by path so the in-view state starts fresh on every page.
  return <Bar key={pathname} telHref={telHref} />;
}

function Bar({ telHref }: { telHref: string }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    // Also check once after mount, for pages restored mid-scroll (back button).
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const form = document.querySelector("[data-enquiry-form]");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), {
      rootMargin: "0px 0px -15% 0px",
    });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !formInView;

  function goToForm() {
    const form = document.querySelector<HTMLFormElement>("[data-enquiry-form]");
    if (!form) {
      router.push("/contact");
      return;
    }
    const target = form.closest("[data-enquiry-anchor]") ?? form;
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const quoteClass =
    "flex h-12 flex-1 items-center justify-center gap-2 bg-brand text-[15px] font-semibold text-white active:bg-brand-dark";

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgb(15_15_15/0.08)] transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <a
          href={telHref}
          tabIndex={visible ? 0 : -1}
          className="flex h-12 w-28 items-center justify-center gap-2 border border-ink/20 text-[15px] font-semibold text-ink active:bg-ink/5"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <button type="button" onClick={goToForm} tabIndex={visible ? 0 : -1} className={quoteClass}>
          Get a quote <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
