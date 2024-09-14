import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { BottomBar } from './components/BottomBar';
import ImageTextSection from './components/ImageTextSection';
import SecondBanner from './components/SecondBanner';
import MeetTheTeam from './components/MeetTheTeam';
import CalloutBanner from './components/CalloutBanner';
import logo1 from './logos/placeholder1.svg';
import logo2 from './logos/placeholder2.svg';
import logo3 from './logos/placeholder3.svg';
import logo4 from './logos/placeholder4.svg';
import logo5 from './logos/placeholder5.svg';
import logo6 from './logos/placeholder6.svg';
import '../styles/styles.css';

function App() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [themeColor, setThemeColor] = useState('#3498db');  // Default primary theme color
  const [textColor, setTextColor] = useState('#ffffff');  // Default primary text color
  const [secondaryColor, setSecondaryColor] = useState('');  // Secondary color
  const [secondaryTextColor, setSecondaryTextColor] = useState('');  // Secondary text color
  const [fontIndex, setFontIndex] = useState(0);  // Font index for toggling fonts
  const [graphicOpacity, setGraphicOpacity] = useState(1);  // Default graphic opacity
  
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

  // New functionality for graphics in Banner
  const [currentGraphicIndex, setCurrentGraphicIndex] = useState(0); // Graphics toggle

  const nextLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  const nextGraphic = () => {
    setCurrentGraphicIndex((prevIndex) => (prevIndex + 1) % 3);  // Assuming 3 graphics
  };

  const prevGraphic = () => {
    setCurrentGraphicIndex((prevIndex) => (prevIndex - 1 + 3) % 3);  // Loop through 3 graphics
  };

  const changeGraphicOpacity = (opacity) => {
    setGraphicOpacity(opacity);
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

  // Function to calculate complimentary color
  const calculateComplimentaryColor = (color) => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    h = (h + 0.5) % 1;
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = Math.round(hue2rgb(p, q, h + 1/3) * 255);
    g = Math.round(hue2rgb(p, q, h) * 255);
    b = Math.round(hue2rgb(p, q, h - 1/3) * 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  // Randomize primary color, primary text color, logo, font, and graphic
  const randomize = () => {
    const newThemeColor = getRandomColor();
    setThemeColor(newThemeColor);
    document.documentElement.style.setProperty('--primary-color', newThemeColor);

    const newTextColor = getRandomColor();
    setTextColor(newTextColor);
    document.documentElement.style.setProperty('--text-color', newTextColor);

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

    // Randomize graphic
    const randomGraphicIndex = Math.floor(Math.random() * 3);
    setCurrentGraphicIndex(randomGraphicIndex);

    // Calculate and set complimentary colors
    document.documentElement.style.setProperty('--theme-color-complimentary', calculateComplimentaryColor(newThemeColor));
    document.documentElement.style.setProperty('--text-color-complimentary', calculateComplimentaryColor(newTextColor));
  };

  // Manual update for primary theme color
  const changeThemeColor = (color) => {
    setThemeColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--theme-color-complimentary', calculateComplimentaryColor(color));
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
    document.documentElement.style.setProperty('--text-color-complimentary', calculateComplimentaryColor(color));
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
      <Navbar logo={logos[currentLogoIndex]} />
      <Banner
        graphicIndex={currentGraphicIndex}
        graphicOpacity={graphicOpacity}
      />
      <SecondBanner />
      <ImageTextSection />
      <MeetTheTeam />
      <CalloutBanner />
      <BottomBar 
        nextLogo={nextLogo} 
        prevLogo={prevLogo} 
        changeThemeColor={changeThemeColor} 
        changeSecondaryColor={changeSecondaryColor} 
        changeTextColor={changeTextColor} 
        changeSecondaryTextColor={changeSecondaryTextColor} 
        nextFont={() => changeFont((fontIndex + 1) % fonts.length)} 
        prevFont={() => changeFont((fontIndex - 1 + fonts.length) % fonts.length)} 
        nextGraphic={nextGraphic}
        prevGraphic={prevGraphic}
        changeGraphicOpacity={changeGraphicOpacity}
        graphicOpacity={graphicOpacity}
        randomize={randomize}
      />
    </div>
  );
}

export default App;
