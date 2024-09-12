import React, { useState } from 'react';
import styles from './BottomBar.module.css';

export const BottomBar = ({ nextLogo, prevLogo, changeThemeColor, changeSecondaryColor, changeTextColor, changeSecondaryTextColor, nextFont, prevFont, randomize }) => {
  const [isSecondaryPickerVisible, setIsSecondaryPickerVisible] = useState(false);
  const [isSecondaryTextPickerVisible, setIsSecondaryTextPickerVisible] = useState(false);

  const toggleSecondaryPicker = () => {
    if (isSecondaryPickerVisible) {
      changeSecondaryColor('');
    }
    setIsSecondaryPickerVisible(!isSecondaryPickerVisible);
  };

  const toggleSecondaryTextPicker = () => {
    if (isSecondaryTextPickerVisible) {
      changeSecondaryTextColor('');
    }
    setIsSecondaryTextPickerVisible(!isSecondaryTextPickerVisible);
  };

  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBarItem}>
        <button onClick={prevLogo} className={styles.toggleButton}>&lt;</button> 
        Logo 
        <button onClick={nextLogo} className={styles.toggleButton}>&gt;</button>
      </div>
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
        {isSecondaryPickerVisible && (
          <input
            type="color"
            onChange={(e) => changeSecondaryColor(e.target.value)}
            className={styles.colorPicker}
          />
        )}
      </div>

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
        {isSecondaryTextPickerVisible && (
          <input
            type="color"
            onChange={(e) => changeSecondaryTextColor(e.target.value)}
            className={styles.colorPicker}
          />
        )}
      </div>
      <div className={styles.bottomBarItem}>
        <button onClick={prevFont} className={styles.toggleButton}>&lt;</button> 
        Type 
        <button onClick={nextFont} className={styles.toggleButton}>&gt;</button>
      </div>
      <div className={styles.bottomBarItem}>
        <button className={styles.toggleButton}>&lt;</button> 
        Button 
        <button className={styles.toggleButton}>&gt;</button>
      </div>
      <div className={styles.randomizeButtonContainer}>
        <button onClick={randomize} className={styles.randomizeButton}>Randomize</button>
      </div>
    </div>
  );
};
