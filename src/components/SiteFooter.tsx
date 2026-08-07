import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import styles from "./SiteShell.module.css";

const footerNavigation = [
  { label: "About us", href: "/#about" },
  { label: "Our services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Service locations", href: "/#locations" },
  { label: "Make an enquiry", href: "/#contact" },
];

const regions = ["Victoria", "New South Wales", "Northern Territory", "South Australia"];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/elitehealthcareservice", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/elitehcs2024/", icon: Instagram },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerMain} container`}>
        <div className={styles.footerBrand}>
          <a href="/" aria-label="Elite HCS home">
            <Image
              className={styles.footerLogo}
              src="/images/logo-new.png"
              alt="Elite Healthcare and Community Services"
              width={900}
              height={900}
            />
          </a>
          <p>
            Personalised NDIS support that puts your goals, choices and independence first.
          </p>
          <div className={styles.socials} aria-label="Follow Elite HCS">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
                <Icon aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.footerColumn}>
          <h2>Areas we support</h2>
          <ul className={styles.regionList}>
            {regions.map((region) => (
              <li key={region}>
                <MapPin aria-hidden="true" size={16} />
                {region}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.footerColumn} ${styles.contactColumn}`}>
          <h2>Let&apos;s talk</h2>
          <p>Our friendly team is ready to help you find the right support.</p>
          <a href="tel:+61415427649">
            <Phone aria-hidden="true" size={18} />
            +61 415 427 649
          </a>
          <a href="mailto:enquiry@elitehcs.com.au">
            <Mail aria-hidden="true" size={18} />
            enquiry@elitehcs.com.au
          </a>
          <a className={styles.footerCta} href="/#contact">
            Start an enquiry
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Elite Healthcare &amp; Community Services. All rights reserved.</p>
          <div>
            <span>ABN 91 668 512 258</span>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-and-conditions">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
