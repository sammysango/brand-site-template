import React from 'react';
import styles from './CalloutBanner.module.css';

const CalloutBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <p className={styles.bannerText}>
          Here is a button. It serves no purpose other than to provide a dummy element. It does nothing, but you'll only know that <i>for sure</i> if you click it.
        </p>
        <button className={styles.bannerButton}>Learn More</button>
      </div>
    </div>
  );
};

export default CalloutBanner;
