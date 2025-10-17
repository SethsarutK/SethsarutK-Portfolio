import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import '../styles/NotFound.css';

const NotFound = () => {
  const { language } = useLanguage();
  
  return (
    <div className="not-found">
      <div className="not-found-animation">
        <div className="floating-404">4🔍4</div>
      </div>
      
      <h1 className="error-title">
        {language === 'th' ? 'หน้าที่ค้นหาไม่พบ' : 'Page Not Found'}
      </h1>
      
      <p className="error-description">
        {language === 'th' 
          ? 'ขออภัย หน้าที่คุณกำลังค้นหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง'
          : 'Sorry, the page you are looking for might have been moved, deleted, or never existed.'
        }
      </p>
      
      <p className="suggestion">
        {language === 'th' 
          ? 'ลองไปดู Portfolio หรือข้อมูลเกี่ยวกับฉันแทนไหม?'
          : 'Why not check out my portfolio or learn more about me?'
        }
      </p>
      
      <div className="action-buttons">
        <Link to="/" className="home-button primary">
          {language === 'th' ? '🏠 กลับหน้าแรก' : '🏠 Go Home'}
        </Link>
        <Link to="/portfolio" className="home-button secondary">
          {language === 'th' ? '💼 ดูผลงาน' : '💼 View Portfolio'}
        </Link>
        <Link to="/about" className="home-button secondary">
          {language === 'th' ? '👨‍💻 เกี่ยวกับฉัน' : '👨‍💻 About Me'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;