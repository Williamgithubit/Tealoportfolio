import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  const [colorScheme, setColorScheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('colorScheme') || 'default';
    }
    return 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Remove color scheme classes
    root.classList.remove('scheme-default', 'scheme-ocean', 'scheme-forest', 'scheme-sunset', 'scheme-lavender');
    root.classList.add(`scheme-${colorScheme}`);
    
    // Apply transition class after initial load
    const timeout = setTimeout(() => {
      root.classList.add('theme-transition');
    }, 100);

    // Save preferences
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorScheme', colorScheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      clearTimeout(timeout);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme, colorScheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSetColorScheme = (scheme) => {
    setColorScheme(scheme);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        colorScheme, 
        setColorScheme: handleSetColorScheme,
        currentScheme: colorScheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
