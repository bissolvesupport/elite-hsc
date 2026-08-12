"use client";

import Image from "next/image";
import { Bath, BedDouble, MapPin, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import styles from "./HomeVacancies.module.css";

const sampleHomes = [
  { location: "Sunshine", state: "VIC", type: "Shared home", category: "High Physical Support", beds: 4, baths: 2, vacancies: 1, image: "/images/home-victoria.png" },
  { location: "Parramatta", state: "NSW", type: "Supported independent living", category: "Improved Liveability", beds: 3, baths: 2, vacancies: 1, image: "/images/home-nsw.png" },
  { location: "Adelaide", state: "SA", type: "Shared home", category: "Fully Accessible", beds: 4, baths: 2, vacancies: 2, image: "/images/home-sa.png" },
  { location: "Alice Springs", state: "NT", type: "Individual living", category: "Robust", beds: 2, baths: 1, vacancies: 1, image: "/images/home-nt.png" },
];

export default function HomeVacancies() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");

  const results = useMemo(() => sampleHomes.filter((home) => {
    const place = `${home.location} ${home.state}`.toLowerCase();
    return place.includes(query.toLowerCase()) &&
      (category === "all" || home.category === category) &&
      (type === "all" || home.type === type);
  }), [category, query, type]);

  return (
    <section className={styles.vacancies} id="vacancies" aria-labelledby="vacancies-title">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow">Explore supported accommodation</span>
          <h2 id="vacancies-title">Find a home that feels right.</h2>
          <p>Browse example accommodation options and talk with our team about your individual support needs.</p>
          <span className={styles.sampleNotice}>Demo only — these are sample listings, not current vacancies.</span>
        </div>

        <form className={styles.searchPanel} onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Location</span>
            <div className={styles.inputWrap}><MapPin aria-hidden="true" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter suburb or state" /></div>
          </label>
          <label>
            <span>Accessibility category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All accessibility types</option>
              {[...new Set(sampleHomes.map((home) => home.category))].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label>
            <span>Accommodation type</span>
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="all">All accommodation types</option>
              {[...new Set(sampleHomes.map((home) => home.type))].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <button type="submit"><Search aria-hidden="true" size={19} /> Search</button>
        </form>

        <div className={styles.homeGrid} aria-live="polite">
          {results.map((home) => (
            <article className={styles.homeCard} key={`${home.location}-${home.state}`}>
              <div className={styles.cardImage}>
                <Image src={home.image} alt={`Sample accessible home in ${home.location}, ${home.state}`} fill sizes="(max-width: 700px) 100vw, 25vw" />
                <span>{home.category}</span>
              </div>
              <div className={styles.cardBody}>
                <small>{home.type}</small>
                <h3>{home.location}</h3>
                <p><strong>{home.state}</strong> · Sample home</p>
                <div className={styles.features}>
                  <span><BedDouble aria-hidden="true" />{home.beds}</span>
                  <span><Bath aria-hidden="true" />{home.baths}</span>
                  <span><Users aria-hidden="true" />{home.vacancies} {home.vacancies === 1 ? "place" : "places"}</span>
                </div>
                <a href="#contact">Ask about accommodation</a>
              </div>
            </article>
          ))}
          {results.length === 0 && <p className={styles.noResults}>No sample homes match those filters. Try another location or accommodation type.</p>}
        </div>
      </div>
    </section>
  );
}
