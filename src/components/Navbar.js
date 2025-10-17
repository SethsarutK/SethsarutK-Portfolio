import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import { NAVIGATION } from '../constants';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';

const NavLink = ({ to, children, isActive, onClick }) => (
  <Link
    to={to}
    className={`navbar-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">
            Portfolio
          </span>
          <span className="logo-accent">
            .
          </span>
        </Link>

        <div className="navbar-right">
          <div className="navbar-links">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                isActive={location.pathname === item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label.toLowerCase()) || item.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar-controls">
            <ThemeToggle />
            <LanguageToggle />
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                isActive={location.pathname === item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label.toLowerCase()) || item.label}
              </NavLink>
            ))}
            <div className="mobile-controls">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;