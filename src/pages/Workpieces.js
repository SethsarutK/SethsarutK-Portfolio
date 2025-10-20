import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Workpieces.css';

function Workpieces() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workpieces = {
    websites: [
      {
        id: 1,
        title: 'Portfolio Website',
        description: t('portfolioDesc'),
        tech: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg',
        link: '#',
        category: 'website'
      },
      {
        id: 2,
        title: t('schoolWebsiteTitle'),
        description: t('schoolWebsiteDesc'),
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe2.jpg',
        link: '#',
        category: 'website'
      }
    ],
    games: [
      {
        id: 3,
        title: t('adventureGameTitle'),
        description: t('adventureGameDesc'),
        tech: ['Python', 'Pygame', 'Game Design'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe3.jpg',
        link: '#',
        category: 'game'
      },
      {
        id: 4,
        title: t('puzzleGameTitle'),
        description: t('puzzleGameDesc'),
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe4.jpg',
        link: '#',
        category: 'game'
      }
    ],
    hardware: [
      {
        id: 5,
        title: 'Smart Farm IoT',
        description: t('smartFarmDesc'),
        tech: ['Arduino', 'IoT', 'Sensors', 'C++'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe5.jpg',
        link: '#',
        category: 'hardware'
      },
      {
        id: 6,
        title: t('securitySystemTitle'),
        description: t('securitySystemDesc'),
        tech: ['Raspberry Pi', 'Python', 'OpenCV', 'IoT'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe6.jpg',
        link: '#',
        category: 'hardware'
      }
    ]
  };

  const categories = [
    { id: 'all', label: t('allCategory') },
    { id: 'website', label: t('websitesCategory') },
    { id: 'game', label: t('gamesCategory') },
    { id: 'hardware', label: t('hardwareCategory') }
  ];

  const getAllWorkpieces = () => {
    return [...workpieces.websites, ...workpieces.games, ...workpieces.hardware];
  };

  const getFilteredWorkpieces = () => {
    if (activeCategory === 'all') {
      return getAllWorkpieces();
    }
    return getAllWorkpieces().filter(work => work.category === activeCategory);
  };

  return (
    <PageTransition>
      <SEO 
        title={t('workpiecesTitle')}
        description={t('workpiecesDescription')}
      />
      
      <div className={`workpieces-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {t('workpiecesTitle')}
            </h1>
            <p className="page-subtitle">
              {t('workpiecesSubtitle')}
            </p>
          </header>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Workpieces Grid */}
          <div className="workpieces-grid">
            {getFilteredWorkpieces().map((work) => (
              <div key={work.id} className="workpiece-card card">
                <div className="workpiece-image">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback" style={{display: 'none'}}>
                    <span>📁</span>
                  </div>
                  <div className="workpiece-overlay">
                    <a href={work.link} className="view-btn">
                      {t('viewDetails')}
                    </a>
                  </div>
                </div>
                <div className="workpiece-content">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="tech-tags">
                    {work.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredWorkpieces().length === 0 && (
            <div className="empty-state">
              <p>{t('noWorkpieces')}</p>
            </div>
          )}

          <section className="workpiece-cta">
            <div className="cta-content card glass">
              <h2>
                {t('readyToCreate')}
              </h2>
              <p>
                {t('futureWorks')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Workpieces;