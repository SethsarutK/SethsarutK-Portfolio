import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import '../styles/LanguageToggle.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle-container">
      <button 
        className="language-toggle single-flag"
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'th' ? 'English' : 'Thai'}`}
      >
        <div className="current-flag">
          {language === 'th' ? (
            <div key="thai" className="flag-option active thai-option">
              <div className="flag thai-flag">
                <div className="stripe red"></div>
                <div className="stripe white"></div>
                <div className="stripe blue"></div>
                <div className="stripe white"></div>
                <div className="stripe red"></div>
              </div>
              <span className="flag-text">TH</span>
            </div>
          ) : (
            <div key="english" className="flag-option active english-option">
              <div className="flag us-flag">
                <div className="stars-section">
                  <div className="star">★</div>
                  <div className="star">★</div>
                  <div className="star">★</div>
                  <div className="star">★</div>
                  <div className="star">★</div>
                </div>
                <div className="stripes-section">
                  <div className="stripe red"></div>
                  <div className="stripe white"></div>
                  <div className="stripe red"></div>
                  <div className="stripe white"></div>
                  <div className="stripe red"></div>
                </div>
              </div>
              <span className="flag-text">EN</span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
}

export default LanguageToggle;