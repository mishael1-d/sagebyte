import styles from "../../styles/Hero.module.css";
import Image from "next/image";
import Buttons from "../Buttons";
function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Build a Unified Brand, from a <span>Sustainable</span> Marketing
          Platform
        </h1>
        <p className={styles.subtitle}>
          Safely manage company & user generated videos (UGC). Schedule &
          Broadcast as helpful micro-tv programmes, across targeted workday
          channels & segments
        </p>
        <div className={styles.callToAction}>
          <Buttons variant="big" text="START FREE" />
          <div className={styles.subCTA}>
            <Image src="/assets/play-btn.png" alt="" width="13" height="13" />
            <p>
              Watch this <span>Micro-Hero</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image src="/assets/hero-image.png" alt="" width="424" height="432" />
      </div>
    </section>
  );
}

export default HeroSection;
