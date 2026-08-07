import type { Metadata, Viewport } from "next";
import { siteUrl, socialImageUrl } from "@/lib/site";
import "./globals.css";

const siteName = "Elite Healthcare & Community Services";
const title = `${siteName} | Registered NDIS Provider`;
const description =
  "Participant-centred NDIS support across Victoria, New South Wales, South Australia and the Northern Territory, including daily living, SIL and social participation supports.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#1678b8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Elite HCS",
  title: { default: title, template: "%s | Elite HCS" },
  description,
  keywords: [
    "registered NDIS provider",
    "disability support services",
    "Supported Independent Living",
    "community participation",
    "personal activities support",
    "NDIS transport",
    "Specialist Disability Accommodation",
    "NDIS Melbourne",
    "NDIS Sydney",
    "NDIS Adelaide",
    "NDIS Alice Springs",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Disability support services",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/", languages: { "en-AU": "/" } },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Elite HCS" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: socialImageUrl,
        secureUrl: socialImageUrl,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Elite Healthcare & Community Services participant-centred NDIS support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "content-language": "en-AU",
    "geo.region": "AU",
    "geo.placename": "Australia",
    coverage: "Victoria, New South Wales, South Australia, Northern Territory, Australia",
    distribution: "global",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
