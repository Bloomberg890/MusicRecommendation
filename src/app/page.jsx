import React from "react";
import { Header } from "./components/Header/Header";
import { TestimonialCard } from "./components/TestimonialCard/TestimonialCard";
import styles from "./KryptoLanding.module.css";

const testimonials = [
  {
    id: 1,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/657d5ff5e82a552201a6f509574bd2e7ed3d62be3cb75301b375ecdc86ac0f4a?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/657d5ff5e82a552201a6f509574bd2e7ed3d62be3cb75301b375ecdc86ac0f4a?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/657d5ff5e82a552201a6f509574bd2e7ed3d62be3cb75301b375ecdc86ac0f4a?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411",
  },
];
export default KryptoLanding;
export function KryptoLanding() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.column}>
            <div className={`${styles.heroText} ${styles.glow}`}>
              <h1 className={styles.mainTitle}>
                Music Recommendation System
              </h1>
              <p className={styles.description}>
                Tune In, Vibe Out!
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>Create Playlist</button>
                <button className={styles.secondaryButton}>Search Music</button>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42e8bea39ab426608f3686c47860bd0807a84b72ee6372534364f33bc28a1f4?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411"
              alt="NFT showcase"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialColumn}>
              <TestimonialCard imageSrc={testimonial.imageSrc} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.exploreMusicSection}>
        <div className={styles.exploreContainer}>
          <div className={styles.heroText}>
            <p className={styles.exploreSubtitle}>ARE YOU READY?</p>
            <h1 className={styles.exploreTitle}>To Dive Into A World Of Endless Tunes</h1>
            <button className={styles.exploreButton}>GET STARTED</button>
          </div>
        </div>
      </section>

    </div>
  );
}
