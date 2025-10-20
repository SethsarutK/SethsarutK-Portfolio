import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import '../styles/Loading.css';

const Loading = () => {
  const { t } = useLanguage();

  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loading-spinner"></div>
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <p className="loading-text">{t('loading')}</p>
    </div>
  );
};

export default Loading;