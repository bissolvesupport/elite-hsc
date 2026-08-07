import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitehcs.com.au"),
  title: { default: "Elite Healthcare & Community Services | Registered NDIS Provider", template: "%s | Elite HCS" },
  description: "Participant-centred NDIS support across Victoria, New South Wales, Northern Territory and South Australia. Explore daily living, SIL, community nursing and social participation supports.",
  keywords: ["NDIS provider", "disability support services", "Supported Independent Living", "community nursing", "NDIS Melbourne", "NDIS Sydney", "NDIS Adelaide", "NDIS Alice Springs"],
  alternates: { canonical: "/" },
  openGraph: { title: "Elite Healthcare & Community Services", description: "Personalised NDIS support designed around your goals, choices and independence.", url: "/", siteName: "Elite HCS", locale: "en_AU", type: "website", images: [{ url: "/images/hero-care.jpg", width: 1800, height: 1800, alt: "A support worker welcoming an NDIS participant at home" }] },
  twitter: { card: "summary_large_image", title: "Elite Healthcare & Community Services", description: "Participant-centred NDIS supports across four Australian states and territories.", images: ["/images/hero-care.jpg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
