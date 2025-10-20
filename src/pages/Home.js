import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import useSnapScroll from '../hooks/useSnapScroll';
import '../styles/Home.css';

function Home() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  // Enable snap scrolling for home page only
  useSnapScroll();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageTransition>
      <div className={`home ${isVisible ? 'fade-in' : ''}`}>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t('heroTitle')}</h1>
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <p className="hero-description">
              {t('heroDescription')}
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => document.querySelector('.highlights').scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="btn btn-primary"
              >
                เยี่ยมชมเว็บไซต์
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <div className="profile-frame">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg"
                  alt="เศรษฐ์ศรุต กตคุณไพศาล" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-fallback" style={{display: 'none', background: 'transparent'}}>
                  <span className="profile-initial">ศร</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2>{t('highlights')}</h2>
          <div className="highlights-grid">
            <div className="highlight-card card">
              <div className="highlight-icon">🎓</div>
              <h3>{t('education')}</h3>
              <p>GPA: 3.78 / 4.00</p>
              <p>Math Gifted Program - โรงเรียนสวนกุหลาบวิทยาลัย</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">🏆</div>
              <h3>{t('awards')}</h3>
              <p>🥇 รางวัลชนะเลิศ โครงงานวิทยาศาสตร์ Smart Farm</p>
              <p>🥉 เหรียญทองแดง โอลิมปิกคณิตศาสตร์</p>
              <p>⭐ รางวัลนักเรียนดีเด่น ด้านเทคโนโลยี</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">💻</div>
              <h3>{t('skills')}</h3>
              <p>💾 Programming: Python, JavaScript, React</p>
              <p>🤖 AI/ML: TensorFlow, Data Analysis</p>
              <p>🔧 IoT: Arduino, Sensor Systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">
        <div className="container">
          <h2 className="section-title">ผลงานต่างๆ</h2>
          <div className="portfolio-grid">
            <Link to="/competitions" className="portfolio-card card">
              <div className="portfolio-icon">🏆</div>
              <h3>การแข่งขัน</h3>
              <p>รางวัลและความสำเร็จจากการแข่งขันต่างๆ</p>
              <div className="portfolio-arrow">→</div>
            </Link>
            <Link to="/activities" className="portfolio-card card">
              <div className="portfolio-icon">🎯</div>
              <h3>กิจกรรม</h3>
              <p>กิจกรรมที่เข้าร่วมและผลงานที่โดดเด่น</p>
              <div className="portfolio-arrow">→</div>
            </Link>
            <Link to="/workpieces" className="portfolio-card card">
              <div className="portfolio-icon">💻</div>
              <h3>ผลงาน</h3>
              <p>โปรเจคและผลงานทางเทคโนโลยี</p>
              <div className="portfolio-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}

export default Home;