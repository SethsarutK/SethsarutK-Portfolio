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
                {t('visitWebsite')}
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <Link to="/about" className="profile-frame-link">
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
                    <span className="profile-initial">SK</span>
                  </div>
                </div>
              </Link>
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
              <p>Math Gifted Program</p>
              <p>{t('mySchoolName')}</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">🏆</div>
              <h3>{t('awards')}</h3>
              <p>{t('smartFarmAward')}</p>
              <p>{t('mathOlympicAward')}</p>
              <p>{t('techStudentAward')}</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">💻</div>
              <h3>{t('skills')}</h3>
              <p>💾 Programming: C, Python, HTML5, </p>
              <p> CSS3, JavaScript, React, Node.js, </p>
              <p> Figma, SQL, Postman, git </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-showcase">
        <div className="container">
          <h2 className="section-title">{t('variousWorks')}</h2>
          <div className="portfolio-grid">
            <Link to="/competitions" className="portfolio-card card">
              <div className="portfolio-icon">🏆</div>
              <h3>{t('competitionsSection')}</h3>
              <p>{t('competitionsDesc')}</p>
            </Link>
            <Link to="/activities" className="portfolio-card card">
              <div className="portfolio-icon">🎯</div>
              <h3>{t('activitiesSection')}</h3>
              <p>{t('activitiesDesc')}</p>
            </Link>
            <Link to="/workpieces" className="portfolio-card card">
              <div className="portfolio-icon">💻</div>
              <h3>{t('workpiecesSection')}</h3>
              <p>{t('workpiecesDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}

export default Home;