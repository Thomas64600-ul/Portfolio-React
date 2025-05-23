import './Themetoggle.css'
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleTheme} className="darklight-btn">
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;