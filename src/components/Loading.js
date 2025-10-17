import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import '../styles/Loading.css';

const Loading = () => {
  const { language } = useLanguage();
  
  const loadingText = {
    th: 'กำลังโหลด...',
    en: 'Loading...'
  };

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
      <p className="loading-text">{loadingText[language]}</p>
    </div>
  );
};

export default Loading;