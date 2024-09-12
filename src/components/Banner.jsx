import React from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Your Heading Here</h1>
        <p>Your company tagline or brief description goes here.</p>

        {/* Two buttons, one next to the other */}
        <button className={styles.bannerButton}>Click Me</button>
        <button className={styles.secondBannerButton}>Learn More</button>
      </div>

      {/* Scroll Down Arrow */}
      <div className={styles.scrollArrow}>
        ▼
      </div>
    </div>
  );
};
