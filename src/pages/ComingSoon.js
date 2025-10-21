import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/ComingSoon.css';

function ComingSoon() {
  const { language } = useLanguage();

  return (
    <PageTransition>
      <SEO 
        title={language === 'th' ? 'กำลังดำเนินการ' : 'Coming Soon'}
        description={language === 'th' ? 'โปรเจคนี้กำลังอยู่ในระหว่างการพัฒนา' : 'This project is currently under development'}
      />
      
      <div className="coming-soon-page">
        <div className="container">
          <div className="coming-soon-content">
            <div className="icon-container">
              <div className="construction-icon">🚧</div>
            </div>
            
            <h1 className="main-title">
              {language === 'th' ? 'กำลังดำเนินการ' : 'Coming Soon'}
            </h1>
            
            <p className="subtitle">
              {language === 'th' ? 
                'โปรเจคนี้กำลังอยู่ในระหว่างการพัฒนา กรุณารอติดตามในเร็วๆ นี้' : 
                'This project is currently under development. Please check back soon'}
            </p>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-text">
                {language === 'th' ? 'กำลังพัฒนา...' : 'In Development...'}
              </span>
            </div>
            
            <div className="action-buttons">
              <Link to="/workpieces" className="btn btn-secondary">
                {language === 'th' ? 'กลับไปดูผลงานอื่น' : 'View Other Works'}
              </Link>
              <Link to="/" className="btn btn-secondary">
                {language === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
              </Link>
            </div>
            
            <div className="contact-suggestion">
              <p>
                {language === 'th' ? 
                  'หากต้องการติดต่อหรือสอบถาม สามารถติดต่อได้ที่' : 
                  'For inquiries or questions, feel free to contact me via'}
              </p>
              <div className="contact-links">
                <a href="mailto:sethsarutk@gmail.com" className="contact-link">
                  📧 Email
                </a>
                <a href="https://github.com/SethsarutK" target="_blank" rel="noopener noreferrer" className="contact-link">
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default ComingSoon;