"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, BedDouble, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";
import styles from "./HomeVacancies.module.css";

const gallery = [
  { src: "/images/clyde-north-exterior-enhanced.png", alt: "The landscaped frontage and entrance of the Clyde North SIL home", label: "House frontage" },
  { src: "/images/clyde-north-bedroom-enhanced.png", alt: "A bright, furnished bedroom in the Clyde North SIL home", label: "Bedroom" },
  { src: "/images/clyde-north-living-one-enhanced.png", alt: "A welcoming shared living and dining area in the Clyde North SIL home", label: "Living and dining" },
  { src: "/images/clyde-north-living-two-enhanced.png", alt: "A spacious second living area in the Clyde North SIL home", label: "Second living area" },
];

const details = [
  { icon: BedDouble, label: "Availability", value: "3 bedrooms available" },
  { icon: Users, label: "Staffing ratios", value: "1:3 and 1:2 support" },
  { icon: ShieldCheck, label: "Support team", value: "Skilled, experienced staff" },
];

export default function HomeVacancies() {
  const [activeImage, setActiveImage] = useState(0);

  const showPrevious = () => setActiveImage((current) => (current - 1 + gallery.length) % gallery.length);
  const showNext = () => setActiveImage((current) => (current + 1) % gallery.length);

  return (
    <section className={styles.vacancies} id="vacancies" aria-labelledby="vacancies-title">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow">Current SIL vacancy</span>
          <h2 id="vacancies-title">A welcoming home in Clyde North.</h2>
          <p>A comfortable Supported Independent Living opportunity with personalised support, thoughtfully matched to each participant’s needs and goals.</p>
        </div>

        <article className={styles.vacancyCard}>
          <div className={styles.gallery} onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}>
            <div className={styles.mainPhoto} aria-live="polite">
              <Image key={gallery[activeImage].src} className={styles.animatedImage} src={gallery[activeImage].src} alt={gallery[activeImage].alt} fill priority={activeImage === 0} sizes="(max-width: 900px) 100vw, 52vw" />
              <span className={styles.counter}>{activeImage + 1} / {gallery.length}</span>
              <button className={`${styles.galleryArrow} ${styles.previous}`} type="button" onClick={showPrevious} aria-label="Show previous property photo"><ArrowLeft aria-hidden="true" /></button>
              <button className={`${styles.galleryArrow} ${styles.next}`} type="button" onClick={showNext} aria-label="Show next property photo"><ArrowRight aria-hidden="true" /></button>
            </div>
            <div className={styles.thumbnails} aria-label="Choose a property photo">
              {gallery.map((photo, index) => (
                <button className={index === activeImage ? styles.activeThumbnail : ""} type="button" key={photo.src} onClick={() => setActiveImage(index)} aria-label={`Show ${photo.label}`} aria-current={index === activeImage ? "true" : undefined}>
                  <Image src={photo.src} alt="" fill sizes="120px" />
                  <span>{photo.label}</span>
                </button>
              ))}
            </div>
            <span className={styles.availableBadge}><CheckCircle2 aria-hidden="true" /> Available now</span>
          </div>

          <div className={styles.content}>
            <div className={styles.location}><MapPin aria-hidden="true" /> Clyde North, VIC</div>
            <h3>Supported Independent Living</h3>
            <p className={styles.intro}>A warm, well-presented home offering shared spaces, private bedrooms and a supportive environment where residents can build confidence and independence.</p>

            <div className={styles.details}>
              {details.map(({ icon: Icon, label, value }) => (
                <div className={styles.detail} key={label}>
                  <span className={styles.detailIcon}><Icon aria-hidden="true" /></span>
                  <div><small>{label}</small><strong>{value}</strong></div>
                </div>
              ))}
            </div>

            <div className={styles.contactBox}>
              <div>
                <strong>Interested or know someone who may be a great fit?</strong>
                <p>Speak with our Operations team to learn more and discuss support needs.</p>
              </div>
              <div className={styles.contactLinks}>
                <a href="tel:+61415427649"><Phone aria-hidden="true" /> 0415 427 649</a>
                <a href="mailto:operations@elitehcs.com.au"><Mail aria-hidden="true" /> Email Operations</a>
              </div>
            </div>

            <a className={styles.enquireButton} href="mailto:operations@elitehcs.com.au?subject=Clyde%20North%20SIL%20vacancy%20enquiry">
              Enquire about this vacancy <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
