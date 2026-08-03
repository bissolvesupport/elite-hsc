import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bus,
  Check,
  ClipboardCheck,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import styles from "./page.module.css";

const services = [
  {
    icon: Home,
    title: "Supported Independent Living",
    copy: "Practical, person-centred support to help you live more independently in a home that feels like yours.",
  },
  {
    icon: Users,
    title: "Community Participation",
    copy: "Build confidence, explore your interests and take part in meaningful activities in your community.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Activities",
    copy: "Respectful assistance with everyday personal activities, shaped around your routines and preferences.",
  },
  {
    icon: Stethoscope,
    title: "Community Nursing Care",
    copy: "Individual nursing support that helps you manage your health needs safely and with confidence.",
  },
  {
    icon: Bus,
    title: "Travel & Transport",
    copy: "Support to get to appointments, activities and the places that matter to your daily life.",
  },
  {
    icon: ShieldCheck,
    title: "Specialist Disability Accommodation",
    copy: "Housing support for participants with complex needs who require a specialist living environment.",
  },
];

const values = [
  "Support plans built around your goals and preferences",
  "A respectful, compassionate and experienced team",
  "Clear communication with you, your family and support network",
  "A focus on choice, confidence and everyday independence",
  "Opportunities to connect, participate and thrive",
];

const regions = ["Melbourne, VIC", "Sydney, NSW", "Adelaide, SA", "Alice Springs, NT"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  name: "Elite Healthcare & Community Services",
  alternateName: "Elite HCS",
  url: "https://elitehcs.com.au/",
  logo: "https://elitehcs.com.au/images/logo.png",
  description:
    "A registered NDIS provider delivering participant-centred disability and community supports across Victoria, New South Wales, South Australia and the Northern Territory.",
  telephone: "+61 415 427 649",
  email: "enquiry@elitehcs.com.au",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "ABN",
    value: "91 668 512 258",
  },
  areaServed: regions.map((name) => ({ "@type": "City", name })),
  knowsAbout: services.map((service) => service.title),
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.providerLabel}>
                <BadgeCheck size={18} aria-hidden="true" /> Registered NDIS provider
              </div>
              <h1 id="hero-title">NDIS support that puts your life, goals and choices first.</h1>
              <p>
                Personalised disability support for greater confidence, connection and independence—delivered by a team that listens.
              </p>
              <div className={styles.actions}>
                <a className="button" href="#contact">
                  Talk to our team <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button secondary" href="#services">
                  Explore our supports
                </a>
              </div>
              <a className={styles.phoneLink} href="tel:+61415427649">
                <Phone size={18} aria-hidden="true" /> Call 0415 427 649
              </a>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/images/cta.png"
                alt="A support worker spending time with an NDIS participant"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 44vw"
              />
              <div className={styles.heroNote}>
                <Sparkles size={21} aria-hidden="true" />
                <span><strong>Your goals guide us.</strong> Your choices shape every step.</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustStrip} aria-label="Why participants choose Elite HCS">
          <div className={`container ${styles.trustGrid}`}>
            <div><Image src="/images/ndis.png" width={104} height={48} alt="NDIS" /></div>
            <div><MapPin aria-hidden="true" /><span><strong>Four service regions</strong><small>Across VIC, NSW, SA and NT</small></span></div>
            <div><MessageCircle aria-hidden="true" /><span><strong>Start with a conversation</strong><small>Direct, friendly support from our team</small></span></div>
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className={styles.sectionIntro}>
              <div>
                <span className="eyebrow">How we can support you</span>
                <h2 className="section-title" id="services-title">Practical support for everyday life.</h2>
              </div>
              <p className="lead">Choose the support that fits your goals today, with the flexibility to adapt as your needs change.</p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map(({ icon: Icon, title, copy }) => (
                <article className={styles.serviceCard} key={title}>
                  <div className={styles.iconBox}><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a href="#contact" aria-label={`Enquire about ${title}`}>
                    Enquire about this support <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${styles.about}`} id="about" aria-labelledby="about-title">
          <div className={`container ${styles.aboutGrid}`}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/about.jpg"
                alt="Participant and support worker sharing a positive moment"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <div className={styles.imageBadge}><HeartHandshake aria-hidden="true" /> Support with heart</div>
            </div>
            <div>
              <span className="eyebrow">About Elite HCS</span>
              <h2 className="section-title" id="about-title">A support partnership built around you.</h2>
              <p className="lead">
                We support people with disability to live with greater independence, take part in their communities and pursue what matters to them.
              </p>
              <ul className={styles.values}>
                {values.map((value) => <li key={value}><Check aria-hidden="true" />{value}</li>)}
              </ul>
              <a className="button secondary" href="#contact">Meet your support team <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section" id="process" aria-labelledby="process-title">
          <div className={`container ${styles.processWrap}`}>
            <div className={styles.processHeading}>
              <span className="eyebrow">Getting started</span>
              <h2 className="section-title" id="process-title">Your next step can be simple.</h2>
              <p className="lead">We’ll take the time to understand what you need and make the path forward clear.</p>
            </div>
            <ol className={styles.steps}>
              <li><span>01</span><div><MessageCircle aria-hidden="true" /><h3>Make an enquiry</h3><p>Call or email us and tell us a little about the support you’re looking for.</p></div></li>
              <li><span>02</span><div><Users aria-hidden="true" /><h3>Let’s talk</h3><p>We’ll listen to your goals, preferences and NDIS plan, and answer your questions.</p></div></li>
              <li><span>03</span><div><ClipboardCheck aria-hidden="true" /><h3>Shape your support</h3><p>Together, we’ll agree on a tailored support approach and help you get started.</p></div></li>
            </ol>
          </div>
        </section>

        <section className={styles.locations} id="locations" aria-labelledby="locations-title">
          <div className={`container ${styles.locationsGrid}`}>
            <div>
              <span className={styles.lightEyebrow}>Where we support</span>
              <h2 id="locations-title">Local support across four Australian regions.</h2>
              <p>Speak with our team to confirm service availability for your suburb and support needs.</p>
            </div>
            <div className={styles.regionGrid}>
              {regions.map((region) => <div key={region}><MapPin aria-hidden="true" />{region}</div>)}
            </div>
          </div>
        </section>

        <section className={`section ${styles.ctaSection}`} id="contact" aria-labelledby="cta-title">
          <div className={`container ${styles.ctaPanel}`}>
            <div>
              <span className="eyebrow">We’re ready when you are</span>
              <h2 id="cta-title">Let’s talk about the support that feels right for you.</h2>
              <p>No pressure and no confusing language—just a helpful conversation about your goals and next steps.</p>
            </div>
            <div className={styles.ctaActions}>
              <a className="button" href="tel:+61415427649"><Phone size={18} aria-hidden="true" />0415 427 649</a>
              <a className="button secondary" href="mailto:enquiry@elitehcs.com.au"><Mail size={18} aria-hidden="true" />Send an enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
