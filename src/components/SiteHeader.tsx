"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./SiteShell.module.css";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <a className={styles.logoLink} href="/" aria-label="Elite HCS home" onClick={closeMenu}>
          <Image
            className={styles.logo}
            src="/images/logo.png"
            alt="Elite Healthcare and Community Services"
            width={400}
            height={80}
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a className={styles.phoneLink} href="tel:+61415427649" aria-label="Call Elite HCS on 0415 427 649">
            <Phone aria-hidden="true" size={17} strokeWidth={2.2} />
            <span>0415 427 649</span>
          </a>
          <a className={styles.headerCta} href="/#contact">
            Make an enquiry
          </a>
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="container">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {item.label}
            </a>
          ))}
          <a className={styles.mobilePhone} href="tel:+61415427649" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <Phone aria-hidden="true" size={18} />
            0415 427 649
          </a>
        </div>
      </nav>
    </header>
  );
}
