import React, { useState } from 'react';
import styles from './BottomBar.module.css';

export const BottomBar = ({ nextLogo, prevLogo, changeThemeColor, changeSecondaryColor, changeTextColor, changeSecondaryTextColor, nextFont, prevFont, randomize }) => {
  const [isSecondaryPickerVisible, setIsSecondaryPickerVisible] = useState(false);  // Track visibility of secondary color picker
  const [isSecondaryTextPickerVisible, setIsSecondaryTextPickerVisible] = useState(false);  // Track visibility of secondary text color picker

  const toggleSecondaryPicker = () => {
    if (isSecondaryPickerVisible) {
      // Reset secondary color to follow primary color if secondary color is hidden
      changeSecondaryColor('');
    }
    setIsSecondaryPickerVisible(!isSecondaryPickerVisible);
  };

  const toggleSecondaryTextPicker = () => {
    if (isSecondaryTextPickerVisible) {
      // Reset secondary text color to follow primary text color if secondary text color is hidden
      changeSecondaryTextColor('');
    }
    setIsSecondaryTextPickerVisible(!isSecondaryTextPickerVisible);
  };

  return (
    <div className={styles.bottomBar}>
      {/* Logo Control */}
      <div className={styles.bottomBarItem}>
        <button onClick={prevLogo} className={styles.toggleButton}>&lt;</button> 
        Logo 
        <button onClick={nextLogo} className={styles.toggleButton}>&gt;</button>
      </div>

      {/* Theme Color Control */}
      <div className={styles.bottomBarItemCombined}>
        <label>Theme Color</label>
        <input
          type="color"
          onChange={(e) => changeThemeColor(e.target.value)}
          className={styles.colorPicker}
        />
        <button onClick={toggleSecondaryPicker} className={styles.toggleButton}>
          {isSecondaryPickerVisible ? '-' : '+'}
        </button>

        {/* Conditionally render the secondary color picker */}
        {isSecondaryPickerVisible && (
          <input
            type="color"
            onChange={(e) => changeSecondaryColor(e.target.value)}
            className={styles.colorPicker}
          />
        )}
      </div>

      {/* Text Color Control */}
      <div className={styles.bottomBarItemCombined}>
        <label>Text Color</label>
        <input
          type="color"
          onChange={(e) => changeTextColor(e.target.value)}
          className={styles.colorPicker}
        />
        <button onClick={toggleSecondaryTextPicker} className={styles.toggleButton}>
          {isSecondaryTextPickerVisible ? '-' : '+'}
        </button>

        {/* Conditionally render the secondary text color picker */}
        {isSecondaryTextPickerVisible && (
          <input
            type="color"
            onChange={(e) => changeSecondaryTextColor(e.target.value)}
            className={styles.colorPicker}
          />
        )}
      </div>

      {/* Type (Font) Control */}
      <div className={styles.bottomBarItem}>
        <button onClick={prevFont} className={styles.toggleButton}>&lt;</button> 
        Type 
        <button onClick={nextFont} className={styles.toggleButton}>&gt;</button>
      </div>

      {/* Button Parameter */}
      <div className={styles.bottomBarItem}>
        <button className={styles.toggleButton}>&lt;</button> 
        Button 
        <button className={styles.toggleButton}>&gt;</button>
      </div>

      {/* Randomize Button (Separate from wider container) */}
      <div className={styles.randomizeButtonContainer}>
        <button onClick={randomize} className={styles.randomizeButton}>Randomize</button>
      </div>
    </div>
  );
};
