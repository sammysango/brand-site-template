import React from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';

export const Navbar = ({ logo }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoNavLinksContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <ThemeToggle />
    </nav>
  );
};
