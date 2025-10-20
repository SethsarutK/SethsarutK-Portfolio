import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import '../styles/NotFound.css';

const NotFound = () => {
  const { t } = useLanguage();
  
  return (
    <div className="not-found">
      <div className="not-found-animation">
        <div className="floating-404">4🔍4</div>
      </div>
      
      <h1 className="error-title">
        {t('pageNotFound')}
      </h1>
      
      <p className="error-description">
        {t('notFoundDesc')}
      </p>
      
      <p className="suggestion">
        {t('notFoundSuggestion')}
      </p>
      
      <div className="action-buttons">
        <Link to="/" className="home-button primary">
          {t('goHome')}
        </Link>
        <Link to="/workpieces" className="home-button secondary">
          {t('viewWorkpieces')}
        </Link>
        <Link to="/about" className="home-button secondary">
          {t('aboutMeLink')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;