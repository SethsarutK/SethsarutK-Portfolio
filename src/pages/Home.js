import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import '../styles/Home.css';

function Home() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

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
              <Link to="/portfolio" className="btn btn-primary">
                {t('viewPortfolio')}
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('aboutMe')}
              </Link>
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
              <p>Math Gifted Program - ร.ร.สวนกุหลาบวิทยาลัย</p>
              <p>เตรียมสมัคร KMUTT วิศวกรรมคอมพิวเตอร์</p>
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

      <section className="call-to-action">
        <div className="container">
          <div className="cta-content card glass">
            <h2>{t('readyToStart')}</h2>
            <p>{t('readyDescription')}</p>
            <button 
              onClick={() => document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              {t('contactMe')}
            </button>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}

export default Home;