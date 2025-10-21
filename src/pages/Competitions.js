import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Competitions.css';

function Competitions() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const competitions = {
    computer: [
      {
        title: t('posnComputer'),
        award: t('posnComputerAward'),
        year: '2024',
        description: t('posnComputerDesc'),
        image: process.env.PUBLIC_URL + '/images/posn-computer-award.jpg'
      },
      {
        title: 'League of Code AI Hackathon',
        award: t('aiHackathonAward'),
        year: '2025',
        description: t('aiHackathonDesc'),
        image: process.env.PUBLIC_URL + '/images/ai-hackathon-award.jpg'
      }
    ],
    academic: [
      {
        title: t('acrpTitle'),
        award: t('acrpAward'),
        year: '2025',
        description: t('acrpDesc'),
        image: process.env.PUBLIC_URL + '/images/acrp-award.jpg'
      },
      {
        title: t('engineeringCompTitle'),
        award: t('engineeringCompAward'),
        year: '2025',
        description: t('engineeringCompDesc'),
        image: process.env.PUBLIC_URL + '/images/profile.jpg'
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title={t('competitionsTitle')}
        description={t('competitionsDescription')}
      />
      
      <div className={`competitions-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {t('competitionsTitle')}
            </h1>
            <p className="page-subtitle">
              {t('competitionsSubtitle')}
            </p>
          </header>

          {/* คอมพิวเตอร์และเทคโนโลยี */}
          <section className="competition-section">
            <h2 className="section-title">
              💻 {t('computerTech')}
            </h2>
            <div className="competition-grid">
              {competitions.computer.map((comp, index) => (
                <div 
                  key={index} 
                  className="competition-card card"
                >
                  <div className="competition-content">
                    <div className="competition-header">
                      <h3>{comp.title}</h3>
                      <span className="competition-year">{comp.year}</span>
                    </div>
                    <div className="award-badge">
                      {comp.award}
                    </div>
                    <p className="competition-description">
                      {comp.description}
                    </p>
                  </div>
                  <div className="competition-image">
                    <img 
                      src={comp.image} 
                      alt={comp.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback" style={{display: 'none'}}>
                      <span className="fallback-icon">🏆</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* วิชาการ */}
          <section className="competition-section">
            <h2 className="section-title">
              📚 {t('academic')}
            </h2>
            <div className="competition-grid">
              {competitions.academic.map((comp, index) => (
                <div 
                  key={index} 
                  className="competition-card card"
                >
                  <div className="competition-content">
                    <div className="competition-header">
                      <h3>{comp.title}</h3>
                      <span className="competition-year">{comp.year}</span>
                    </div>
                    <div className="award-badge">
                      {comp.award}
                    </div>
                    <p className="competition-description">
                      {comp.description}
                    </p>
                  </div>
                  <div className="competition-image">
                    <img 
                      src={comp.image} 
                      alt={comp.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-fallback" style={{display: 'none'}}>
                      <span className="fallback-icon">🏆</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


        </div>
      </div>
    </PageTransition>
  );
}

export default Competitions;