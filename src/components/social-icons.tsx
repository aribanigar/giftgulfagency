import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10v1.5H8V14h2v7h2.5v-7H15l.5-2.5h-3V10c0-.6.4-1 1-1z"
      />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="ig-gradient" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="35%" stopColor="#FF543E" />
          <stop offset="70%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#5851DB" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="23" height="23" rx="6.5" fill="url(#ig-gradient)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="none" stroke="#fff" strokeWidth={1.6} />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth={1.6} />
      <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M6.5 9.5h2.7v9H6.5v-9zm1.35-4.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM11 9.5h2.6v1.23h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.15v5.02h-2.7v-4.45c0-1.06-.02-2.42-1.47-2.42-1.48 0-1.7 1.15-1.7 2.34v4.53H11v-9z"
      />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="0.5" y="4" width="23" height="16" rx="4.5" fill="#FF0000" />
      <path fill="#fff" d="M10 8.3v7.4l6.4-3.7z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="5" fill="#000" />
      <path fill="#fff" d="M6 6l5 6.4L6.3 18h1.7l4.2-4.6L15.5 18H18l-5.3-6.8L17.2 6h-1.7l-3.9 4.2L9 6z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="5" fill="#000" />
      <path fill="#25F4EE" d="M14.1 4.2h2.5c.2 1.6 1.4 2.9 3 3.2v2.5c-1.1 0-2.2-.3-3.1-.9v5.2a5.1 5.1 0 1 1-5.1-5.1c.2 0 .4 0 .6.03v2.6a2.5 2.5 0 1 0 1.9 2.44V4.2z" />
      <path fill="#FE2C55" d="M13.5 3.7h2.5c.2 1.6 1.4 2.9 3 3.2v2.5c-1.1 0-2.2-.3-3.1-.9v5.2a5.1 5.1 0 1 1-5.1-5.1c.2 0 .4 0 .6.03v2.6a2.5 2.5 0 1 0 1.9 2.44V3.7z" />
      <path fill="#fff" d="M13.8 3.95h2.5c.2 1.6 1.4 2.9 3 3.2v2.5c-1.1 0-2.2-.3-3.1-.9v5.2a5.1 5.1 0 1 1-5.1-5.1c.2 0 .4 0 .6.03v2.6a2.5 2.5 0 1 0 1.9 2.44V3.95z" />
    </svg>
  );
}
