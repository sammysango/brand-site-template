import React, { useState } from 'react';
import styles from './BottomBar.module.css';

export const BottomBar = ({
  nextLogo,
  prevLogo,
  changeThemeColor,
  changeSecondaryColor,
  changeTextColor,
  changeSecondaryTextColor,
  nextFont,
  prevFont,
  nextGraphic,
  prevGraphic,
  changeGraphicOpacity,
  graphicOpacity,
  randomize
}) => {
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

  // Function to increase opacity by 0.1
  const increaseOpacity = () => {
    if (graphicOpacity < 1) {
      changeGraphicOpacity(Math.min(graphicOpacity + 0.1, 1));
    }
  };

  // Function to decrease opacity by 0.1
  const decreaseOpacity = () => {
    if (graphicOpacity > 0) {
      changeGraphicOpacity(Math.max(graphicOpacity - 0.1, 0));
    }
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
        {isSecondaryTextPickerVisible && (
          <input
            type="color"
            onChange={(e) => changeSecondaryTextColor(e.target.value)}
            className={styles.colorPicker}
          />
        )}
      </div>

      {/* Font Control */}
      <div className={styles.bottomBarItem}>
        <button onClick={prevFont} className={styles.toggleButton}>&lt;</button>
        Type
        <button onClick={nextFont} className={styles.toggleButton}>&gt;</button>
      </div>

      {/* Graphic and Opacity Control */}
      <div className={styles.bottomBarItemCombined}>
        <button onClick={prevGraphic} className={styles.toggleButton}>&lt;</button>
        Graphic
        <button onClick={nextGraphic} className={styles.toggleButton}>&gt;</button>
        <button onClick={decreaseOpacity} className={styles.toggleButton}>&lt;</button>
        Opacity
        <button onClick={increaseOpacity} className={styles.toggleButton}>&gt;</button>
      </div>

      {/* Randomize Button */}
      <div className={styles.randomizeButtonContainer}>
        <button onClick={randomize} className={styles.randomizeButton}>Randomize</button>
      </div>
    </div>
  );
};
