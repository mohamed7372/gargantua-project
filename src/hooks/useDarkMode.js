import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize state based on user preference or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (!isBrowser) return false;
    
    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to update the theme when isDarkMode changes
  useEffect(() => {
    if (!isBrowser) return;
    
    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode, isBrowser]);

  // Effect to listen for system preference changes
  useEffect(() => {
    if (!isBrowser) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't set a preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
      }
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [isBrowser]);

  // Toggle function for the theme
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
