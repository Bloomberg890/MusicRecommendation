import React from "react";
import styles from "./TestimonialCard.module.css";

export function TestimonialCard({ imageSrc }) {
  return (
    <div className={styles.testimonialWrapper}>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Testimonial avatar"
        className={styles.avatar}
      />
      <div className={styles.card} />
    </div>
  );
}
