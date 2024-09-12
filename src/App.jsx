import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { BottomBar } from './components/BottomBar';
import logo1 from './logos/placeholder1.svg';
import logo2 from './logos/placeholder2.svg';
import logo3 from './logos/placeholder3.svg';
import '../styles/styles.css';

function App() {
  const logos = [logo1, logo2, logo3];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [themeColor, setThemeColor] = useState('#3498db');  // Default primary theme color
  const [textColor, setTextColor] = useState('#ffffff');  // Default primary text color
  const [secondaryColor, setSecondaryColor] = useState('');  // Secondary color
  const [secondaryTextColor, setSecondaryTextColor] = useState('');  // Secondary text color
  const [fontIndex, setFontIndex] = useState(0);  // Font index for toggling fonts

  // Expanded Array of fonts to toggle through
  const fonts = [
    'Roboto, sans-serif',
    'Open Sans, sans-serif',
    'Lora, serif',
    'Montserrat, sans-serif',
    'Poppins, sans-serif',
    'Raleway, sans-serif',
    'Source Code Pro, monospace',  // Monospace / Developer Style
    'Dancing Script, cursive',  // Stylized
    'Lobster, cursive',  // Stylized
    'Amatic SC, cursive',  // Stylized
    'Lato, sans-serif',  // Versatile
    'Merriweather, serif',  // Versatile
    'Nunito, sans-serif',  // Versatile
    'IBM Plex Sans, sans-serif',  // Versatile
    'Fira Sans, sans-serif',  // Versatile
    'Playfair Display, serif',  // Versatile
    'Oswald, sans-serif',  // Condensed Sans-serif
    'Pacifico, cursive',  // Handwritten Script
    'Bebas Neue, sans-serif',  // Bold Display
    'Anton, sans-serif',  // Bold Sans-serif
    'Indie Flower, cursive',  // Handwriting Script
    'Zilla Slab, serif',  // Slab Serif
    'Great Vibes, cursive',  // Elegant Cursive
    'Abril Fatface, serif'  // Display Serif
  ];

  const nextLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  // Random color generator
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Randomize primary color, primary text color, logo, and font
  const randomize = () => {
    // Randomize primary color
    const newThemeColor = getRandomColor();
    setThemeColor(newThemeColor);
    document.documentElement.style.setProperty('--primary-color', newThemeColor);

    // Randomize text color
    const newTextColor = getRandomColor();
    setTextColor(newTextColor);
    document.documentElement.style.setProperty('--text-color', newTextColor);

    // Reset secondary colors to match the primary colors
    setSecondaryColor(newThemeColor);
    document.documentElement.style.setProperty('--secondary-color', newThemeColor);

    setSecondaryTextColor(newTextColor);
    document.documentElement.style.setProperty('--secondary-text-color', newTextColor);

    // Randomize logo
    const randomLogoIndex = Math.floor(Math.random() * logos.length);
    setCurrentLogoIndex(randomLogoIndex);

    // Randomize font
    const randomFontIndex = Math.floor(Math.random() * fonts.length);
    setFontIndex(randomFontIndex);
    document.documentElement.style.setProperty('--font-family', fonts[randomFontIndex]);
  };

  // Manual update for primary theme color
  const changeThemeColor = (color) => {
    setThemeColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  // Manual update for secondary theme color
  const changeSecondaryColor = (color) => {
    setSecondaryColor(color);
    document.documentElement.style.setProperty('--secondary-color', color);
  };

  // Manual update for primary text color
  const changeTextColor = (color) => {
    setTextColor(color);
    document.documentElement.style.setProperty('--text-color', color);
  };

  // Manual update for secondary text color
  const changeSecondaryTextColor = (color) => {
    setSecondaryTextColor(color);
    document.documentElement.style.setProperty('--secondary-text-color', color);
  };

  // Manual update for font
  const changeFont = (index) => {
    setFontIndex(index);
    document.documentElement.style.setProperty('--font-family', fonts[index]);
  };

  return (
    <div className="App">
      {/* Navbar with the current logo */}
      <Navbar logo={logos[currentLogoIndex]} />

      {/* Banner component */}
      <Banner />

      {/* BottomBar that controls the logo, theme colors, text colors, fonts, and randomization */}
      <BottomBar 
        nextLogo={nextLogo} 
        prevLogo={prevLogo} 
        changeThemeColor={changeThemeColor}  // Update primary color manually
        changeSecondaryColor={changeSecondaryColor}  // Update secondary color manually
        changeTextColor={changeTextColor}  // Update primary text color manually
        changeSecondaryTextColor={changeSecondaryTextColor}  // Update secondary text color manually
        nextFont={() => changeFont((fontIndex + 1) % fonts.length)}  // Update font manually
        prevFont={() => changeFont((fontIndex - 1 + fonts.length) % fonts.length)}  // Update font manually
        randomize={randomize}  // Pass the randomize function
      />
    </div>
  );
}

export default App;
