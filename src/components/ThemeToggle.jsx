import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme', !darkMode);
  };

  useEffect(() => {
    // Load theme based on previous preference
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div
      className={`${styles.themeSwitch} ${darkMode ? styles.darkMode : ''}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
{/*       <div className={styles.icon}>
        {darkMode ? '🌙' : '☀️'}
      </div> */}
      <div className={styles.themeSwitchCircle}></div>
    </div>
  );
};

export default ThemeToggle;
