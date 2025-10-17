import React from 'react';
import { useTheme } from '../contexts/AppContext';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="icon">
              {isDark ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;