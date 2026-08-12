import styles from "./Acknowledgement.module.css";

function FlagSymbols() {
  return (
    <div className={styles.flags} aria-hidden="true">
      <svg viewBox="0 0 72 48"><path fill="#000" d="M0 0h72v24H0z"/><path fill="#d9272e" d="M0 24h72v24H0z"/><circle cx="36" cy="24" r="11" fill="#ffd928"/></svg>
      <svg viewBox="0 0 72 48"><path fill="#249447" d="M0 0h72v12H0zM0 36h72v12H0z"/><path fill="#1472bd" d="M0 12h72v24H0z"/><path fill="#111" d="M0 20h72v8H0z"/><path fill="#fff" d="M36 16l7 8-7 8-7-8z"/></svg>
      <svg viewBox="0 0 72 48"><path fill="#e40303" d="M0 0h72v8H0z"/><path fill="#ff8c00" d="M0 8h72v8H0z"/><path fill="#ffed00" d="M0 16h72v8H0z"/><path fill="#008026" d="M0 24h72v8H0z"/><path fill="#004dff" d="M0 32h72v8H0z"/><path fill="#750787" d="M0 40h72v8H0z"/><path fill="#fff" d="M0 0l28 24L0 48z"/><path fill="#f5a9b8" d="M0 5l22 19L0 43z"/><path fill="#5bcefa" d="M0 10l16 14L0 38z"/><path fill="#613915" d="M0 15l10 9L0 33z"/><path fill="#000" d="M0 19l6 5-6 5z"/></svg>
    </div>
  );
}

export default function Acknowledgement() {
  return (
    <section className={styles.acknowledgement} aria-label="Acknowledgement of Country and inclusion statement">
      <div className={`container ${styles.inner}`}>
        <FlagSymbols />
        <p>
          Elite Healthcare &amp; Community Services acknowledges the Traditional Custodians of the lands and waters where we live, work and provide support. We recognise their continuing connection to Country, culture and community, and pay our respects to Elders past and present. We welcome and celebrate people of every culture, identity, ability and background.
        </p>
      </div>
    </section>
  );
}
