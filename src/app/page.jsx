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
            <div className={styles.heroText}>
              <h1 className={styles.mainTitle}>
                discover and collect rare NFTs
              </h1>
              <p className={styles.description}>
                The most secure marketplace for buying and selling unique crypto
                assets.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>buy nfts</button>
                <button className={styles.secondaryButton}>sell nfts</button>
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

      <h2 className={styles.featuredSection}>Featured on</h2>
      <div className={styles.featuredLogos}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82a06da5142afa6f9411c2c43da92442a6822a816bef757288fc43ead5e9176?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411"
          alt="Featured logo 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/770228c93b03b3f12b3b067773e725615e3110273458976429de349f8ce11ec5?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411"
          alt="Featured logo 2"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/403caa2592c98588f12b10e0f3332a24ee4967ff046d7b9ce2be0bc7e93288da?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411"
          alt="Featured logo 3"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94d71f5854ddc7189b646137a0bb9e37a36a12313c43f2578439a07047bc3919?placeholderIfAbsent=true&apiKey=2c27ab9a724c4541b8d28f0165c68411"
          alt="Featured logo 4"
        />
      </div>

      <section className={styles.testimonialSection}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialColumn}>
              <TestimonialCard imageSrc={testimonial.imageSrc} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
