import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    projects: [
      {
        id: 0,
        title: language === 'th' ? 'โครงงาน ACRP ครั้งที่ 4' : '4th ACRP Project Competition',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์ประเภทนำเสนอบนเวที ได้รับเหรียญทองแดง' : 
          'Mathematics Project Competition, Stage Presentation Category - Gold Medal Winner',
        tech: ['Research', 'Mathematics', 'Presentation'],
        image: process.env.PUBLIC_URL + '/images/acrp-award.jpg',
        link: '/coming-soon',
        category: 'project'
      }
    ],
    websites: [
      {
        id: 1,
        title: language === 'th' ? 'เว็บไซต์พอร์ตโฟลิโอ' : 'Portfolio Website',
        description: language === 'th' ? 
          'เว็บไซต์แสดงผลงานส่วนตัว สร้างด้วย React และ GitHub Pages' : 
          'Personal portfolio website built with React and deployed on GitHub Pages',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        image: process.env.PUBLIC_URL + '/images/profile.jpg',
        link: '#',
        category: 'website'
      },
      {
        id: 2,
        title: language === 'th' ? 'กำลังดำเนินการ' : 'Loading',
        description: language === 'th' ? 
          'กำลังสร้าง มองข้ามไปก่อน' : 
          'Please overlook, still in progress',
        tech: ['HTML5', 'CSS3'],
        image: '.',
        link: '/coming-soon',
        category: 'website'
      }
    ],
    games: [
      {
        id: 3,
        title: language === 'th' ? 'กำลังดำเนินการ' : 'Loading',
        description: language === 'th' ? 
          'กำลังสร้าง มองข้ามไปก่อน' : 
          'Please overlook, still in progress',
        tech: ['Python', 'Pygame', 'Game Design'],
        image: '.',
        link: '/coming-soon',
        category: 'game'
      }
    ],
    projects: [
      {
        id: 4,
        title: language === 'th' ? 'โครงงานคณิต ม.4' : 'Project for M.4 Math',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์ของตอนมัธยมศึกษาปีที่ 4' : 
          'Math Project from my M.4 year',
        tech: ['Mathematics', 'Research', 'Analysis'],
        image: '.',
        link: '/coming-soon',
        category: 'project'
      },
      {
        id: 5,
        title: language === 'th' ? 'โครงงานคณิต ม.5' : 'Project for M.5 Math',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์ของตอนมัธยมศึกษาปีที่ 5' : 
          'Math Project from my M.5 year',
        tech: ['Mathematics', 'Statistics', 'Data Analysis'],
        image: '.',
        link: '/coming-soon',
        category: 'project'
      },
      {
        id: 6,
        title: language === 'th' ? 'โครงงานคณิตเหรียญทอง' : 'Gold Medal Math Project',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์ที่ได้เหรียญทอง' : 
          'Math Project that won a gold medal',
        tech: ['Mathematics', 'Research', 'Presentation'],
        image: '.',
        link: '/coming-soon',
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
    return [...workpieces.projects, ...workpieces.websites, ...workpieces.games];
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
                    {work.link === '#' ? (
                      <span className="view-btn disabled">
                        {t('viewDetails')}
                      </span>
                    ) : (
                      <Link to={work.link} className="view-btn">
                        {t('viewDetails')}
                      </Link>
                    )}
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