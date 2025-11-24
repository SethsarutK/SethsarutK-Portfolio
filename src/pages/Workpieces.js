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

  const workpieces = {
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
      
    ],
    games: [
      {
        id: 3,
        title: language === 'th' ? 'เกมปลาใหญ่กินปลาเล็ก' : 'Fish Eats Fish',
        description: language === 'th' ?
          'เกมฝึกทักษะการควบคุมตัวละครและหลบหลีกศัตรู' :
          'An arcade game about controlling a fish and avoiding bigger fish',
        tech: ['Scratch'],
        image: process.env.PUBLIC_URL + '/images/fishgamepic.png',
        link: 'https://sethsarut-fishgame.netlify.app',
        category: 'game'
      },
      {
        id: 7,
        title: language === 'th' ? 'เกมใครไม่สอนแต่ลูกศร' : "Arrow Game (No Teacher, Just Arrows)",
        description: language === 'th' ?
          'เกมแนวแพลตฟอร์มที่ควบคุมด้วยลูกศร ช่วยตัวละครผ่านด่าน' :
          'A platformer controlled only by arrow keys to guide the character through levels',
        tech: ['Scratch'],
        image: process.env.PUBLIC_URL + '/images/arrowgamepic.png',
        link: 'https://sethsarut-arrowgame.netlify.app',
        category: 'game'
      }
    ],
    projects: [
      {
        id: 4,
        title: language === 'th' ? 'โครงงานพีทาโกรัสโฉมใหม่' : 'Pythagoras New Theory Project',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์เกี่ยวกับทฤษฎีบทพีทาโกรัสโฉมใหม่ ของตอนมัธยมศึกษาปีที่ 4' : 
          'Mathematics Project about New Pythagoras Theorem from my M.4 year',
        tech: ['Mathematics', 'Research', 'Analysis'],
        image: process.env.PUBLIC_URL + '/images/รูปโครงงานพีธาโกรัส.png',
        pdfUrl: process.env.PUBLIC_URL + '/Pythagoras-New-Project.pdf',
        category: 'project'
      },
      {
        id: 5,
        title: language === 'th' ? 'โครงงานการหาจำนวนวิธีการเดินทางในรูปสามเหลี่ยมหัวกลับ' : 'Triangle Path Counting Project',
        description: language === 'th' ? 
          'โครงงานคณิตศาสตร์เกี่ยวกับการหาจำนวนวิธีการเดินทางในรูปสามเหลี่ยมหัวกลับ ของตอนมัธยมศึกษาปีที่ 5' : 
          'Mathematics Project about Counting Travel Methods in Inverted Triangle from my M.5 year',
        tech: ['Mathematics', 'Research', 'Analysis'],
        image: process.env.PUBLIC_URL + '/images/รูปโครงงานสามเหลี่ยม.png',
        pdfUrl: process.env.PUBLIC_URL + '/Triangle-Path-Counting-Project.pdf',
        category: 'project'
      },
      {
        id: 6,
        title: language === 'th' ? 'การแข่งขันโครงงาน ACRP ครั้งที่ 4' : '4th ACRP Project Competition',
        description: language === 'th' ? 
          'การแข่งขันประกวดโครงงานคณิตศาสตร์ประเภทนำเสนอบนเวที ได้รับเหรียญทอง' : 
          'Mathematics Project Competition, Stage Presentation Category - Gold Medal Winner',
        tech: ['Mathematics', 'Research', 'Presentation'],
        image: process.env.PUBLIC_URL + '/images/acrpPIC.jpg',
        pdfUrl: process.env.PUBLIC_URL + '/ACRP-Project.pdf',
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

  const handleWorkpieceClick = (work) => {
    // เปิด PDF ถ้ามี pdfUrl
    if (work.pdfUrl) {
      window.open(work.pdfUrl, '_blank');
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              <div 
                key={work.id} 
                className={`workpiece-card card ${work.pdfUrl ? 'clickable' : ''}`}
                onClick={() => handleWorkpieceClick(work)}
                style={work.pdfUrl ? { cursor: 'pointer' } : {}}
              >
                <div className="workpiece-image">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback" style={{display: 'none'}}>
                    <span>📁</span>
                  </div>
                  {work.pdfUrl ? (
                    <div className="workpiece-overlay">
                      <span className="view-btn">
                        📄 {language === 'th' ? 'คลิกเพื่อดูโครงงาน' : 'Click to view project'}
                      </span>
                    </div>
                  ) : work.link === '#' ? (
                    <div className="workpiece-overlay">
                      <span className="view-btn disabled">
                        {t('viewDetails')}
                      </span>
                    </div>
                  ) : (
                    <div className="workpiece-overlay">
                      {typeof work.link === 'string' && work.link.startsWith('http') ? (
                        <a href={work.link} className="view-btn" target="_blank" rel="noreferrer">
                          {t('viewDetails')}
                        </a>
                      ) : (
                        <Link to={work.link} className="view-btn">
                          {t('viewDetails')}
                        </Link>
                      )}
                    </div>
                  )}
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
        </div>
      </div>
    </PageTransition>
  );
}

export default Workpieces;