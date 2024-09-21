import React, { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

const ThemeToggle = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme preference from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  // Handle toggle switch change
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme(); // Call the parent function to actually change the theme
  };

  return (
    <FormControlLabel
      control={<Switch checked={isDarkMode} onChange={handleToggle} />}
      label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default ThemeToggle;
