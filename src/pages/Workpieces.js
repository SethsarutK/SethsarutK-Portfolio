import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Workpieces.css';

function Workpieces() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workpieces = {
    websites: [
      {
        id: 1,
        title: language === 'th' ? 'เว็บไซต์โรงเรียน' : 'School Website',
        description: language === 'th' ? 
          'เว็บไซต์แนะนำโรงเรียนและกิจกรรม พร้อมระบบจัดการเนื้อหา' : 
          'School introduction website with content management system',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg',
        link: '#',
        category: 'website'
      },
      {
        id: 2,
        title: language === 'th' ? 'เว็บไซต์ Portfolio' : 'Portfolio Website',
        description: language === 'th' ? 
          'เว็บไซต์แสดงผลงานส่วนตัว สร้างด้วย React และ GitHub Pages' : 
          'Personal portfolio website built with React and deployed on GitHub Pages',
        tech: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe2.jpg',
        link: '#',
        category: 'website'
      }
    ],
    games: [
      {
        id: 3,
        title: language === 'th' ? 'เกมผจญภัย' : 'Adventure Game',
        description: language === 'th' ? 
          'เกมผจญภัยแนว RPG สร้างด้วย Python และ Pygame' : 
          'RPG-style adventure game created with Python and Pygame',
        tech: ['Python', 'Pygame', 'Game Design'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe3.jpg',
        link: '#',
        category: 'game'
      },
      {
        id: 4,
        title: language === 'th' ? 'เกมปริศนา' : 'Puzzle Game',
        description: language === 'th' ? 
          'เกมปริศนาเว็บที่สร้างด้วย JavaScript และ HTML5 Canvas' : 
          'Web-based puzzle game created with JavaScript and HTML5 Canvas',
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe4.jpg',
        link: '#',
        category: 'game'
      }
    ],
    projects: [
      {
        id: 5,
        title: language === 'th' ? 'ระบบฟาร์มอัจฉริยะ' : 'Smart Farm System',
        description: language === 'th' ? 
          'โครงงานพัฒนาระบบ IoT สำหรับตรวจวัดสภาพแวดล้อมในฟาร์ม' : 
          'Project developing IoT system for farm environment monitoring',
        tech: ['Arduino', 'IoT', 'Sensors', 'C++'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe5.jpg',
        link: '#',
        category: 'project'
      },
      {
        id: 6,
        title: language === 'th' ? 'ระบบรักษาความปลอดภัย' : 'Security System',
        description: language === 'th' ? 
          'โครงงานระบบแจ้งเตือนและตรวจจับการเคลื่อนไหวด้วย AI' : 
          'Project for AI-powered motion detection and alert system',
        tech: ['Raspberry Pi', 'Python', 'OpenCV', 'AI'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe6.jpg',
        link: '#',
        category: 'project'
      }
    ]
  };

  const categories = [
    { id: 'all', label: language === 'th' ? 'ทั้งหมด' : 'All' },
    { id: 'website', label: language === 'th' ? 'เว็บไซต์' : 'Websites' },
    { id: 'game', label: language === 'th' ? 'เกม' : 'Games' },
    { id: 'project', label: language === 'th' ? 'โครงงาน' : 'Projects' }
  ];

  const getAllWorkpieces = () => {
    return [...workpieces.websites, ...workpieces.games, ...workpieces.projects];
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