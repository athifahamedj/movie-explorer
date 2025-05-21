import React from 'react';

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeToggle;