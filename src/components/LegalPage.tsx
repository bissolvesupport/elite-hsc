import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import styles from "./LegalPage.module.css";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

export default function LegalPage({ eyebrow, title, intro, effectiveDate, sections }: { eyebrow: string; title: string; intro: string; effectiveDate: string; sections: LegalSection[] }) {
  return <>
    <SiteHeader />
    <main id="main-content">
      <header className={styles.hero}>
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className={styles.updated}>Effective Date: {effectiveDate}</span>
        </div>
      </header>
      <div className={`${styles.layout} container`}>
        <nav className={styles.toc} aria-label={`${title} contents`}>
          <strong>On this page</strong>
          {sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </nav>
        <article className={styles.content}>
          {sections.map(section => <section className={styles.section} id={section.id} key={section.id}><h2>{section.title}</h2>{section.content}</section>)}
        </article>
      </div>
    </main>
    <SiteFooter />
  </>;
}
