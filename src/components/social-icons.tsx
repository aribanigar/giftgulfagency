import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10v1.5H8V14h2v7h2.5v-7H15l.5-2.5h-3V10c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="3.5" y="9" width="3" height="11.5" />
      <circle cx="5" cy="5" r="2" />
      <path d="M10.5 9h3v1.8c.7-1.2 2-2 3.6-2 3 0 4.4 1.9 4.4 5.4v6.3h-3v-5.6c0-1.7-.6-2.9-2.1-2.9-1.2 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1v5.9h-3z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth={1.6} />
      <path d="M10.5 9.5v5l4.5-2.5z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4l7 8.6L4.4 20h2l5.8-6.3L16.5 20H20l-7.3-9L19.8 4h-2l-5.3 5.8L8 4z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3h-2.7v11.6a2.6 2.6 0 1 1-1.9-2.5V8.9a5.3 5.3 0 1 0 4.6 5.3v-6c1 .7 2.2 1.1 3.5 1.1V6.6c-1.9 0-3.5-1.6-3.5-3.6z" />
    </svg>
  );
}
