import React from "react";
import styles from "./Header.module.css";

const navItems = ["about", "pricing", "contact", "buy nfts"];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>krypto</div>
      <nav className={styles.navigation}>
        {navItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </nav>
    </header>
  );
}
