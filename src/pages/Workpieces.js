import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Workpieces.css';

function Workpieces() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workpieces = {
    websites: [
      {
        id: 1,
        title: currentLanguage === 'th' ? 'Portfolio Website' : 'Portfolio Website',
        description: currentLanguage === 'th' ? 
          'เว็บไซต์แสดงผลงานส่วนตัวที่สร้างด้วย React และ CSS' : 
          'Personal portfolio website built with React and CSS',
        tech: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg',
        link: '#',
        category: 'website'
      },
      {
        id: 2,
        title: currentLanguage === 'th' ? 'เว็บไซต์โรงเรียน' : 'School Website',
        description: currentLanguage === 'th' ? 
          'เว็บไซต์แนะนำโรงเรียนและกิจกรรมต่าง ๆ' : 
          'School introduction and activities website',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe2.jpg',
        link: '#',
        category: 'website'
      }
    ],
    games: [
      {
        id: 3,
        title: currentLanguage === 'th' ? 'เกมผจญภัย 2D' : '2D Adventure Game',
        description: currentLanguage === 'th' ? 
          'เกมผจญภัยแบบ 2D ที่สร้างด้วย Python และ Pygame' : 
          '2D adventure game created with Python and Pygame',
        tech: ['Python', 'Pygame', 'Game Design'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe3.jpg',
        link: '#',
        category: 'game'
      },
      {
        id: 4,
        title: currentLanguage === 'th' ? 'เกมปริศนา' : 'Puzzle Game',
        description: currentLanguage === 'th' ? 
          'เกมไขปริศนาที่ฝึกทักษะการคิดเชิงตรรกะ' : 
          'Puzzle game for logical thinking skills',
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe4.jpg',
        link: '#',
        category: 'game'
      }
    ],
    hardware: [
      {
        id: 5,
        title: currentLanguage === 'th' ? 'Smart Farm IoT' : 'Smart Farm IoT',
        description: currentLanguage === 'th' ? 
          'ระบบฟาร์มอัจฉริยะด้วย Arduino และเซ็นเซอร์ต่าง ๆ' : 
          'Smart farm system with Arduino and various sensors',
        tech: ['Arduino', 'IoT', 'Sensors', 'C++'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe5.jpg',
        link: '#',
        category: 'hardware'
      },
      {
        id: 6,
        title: currentLanguage === 'th' ? 'ระบบรักษาความปลอดภัย' : 'Security System',
        description: currentLanguage === 'th' ? 
          'ระบบรักษาความปลอดภัยด้วยกล้องและเซ็นเซอร์' : 
          'Security system with camera and sensors',
        tech: ['Raspberry Pi', 'Python', 'OpenCV', 'IoT'],
        image: 'https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe6.jpg',
        link: '#',
        category: 'hardware'
      }
    ]
  };

  const categories = [
    { id: 'all', label: currentLanguage === 'th' ? 'ทั้งหมด' : 'All' },
    { id: 'website', label: currentLanguage === 'th' ? 'เว็บไซต์' : 'Websites' },
    { id: 'game', label: currentLanguage === 'th' ? 'เกม' : 'Games' },
    { id: 'hardware', label: currentLanguage === 'th' ? 'ฮาร์ดแวร์' : 'Hardware' }
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
        title={currentLanguage === 'th' ? 'ผลงานและโปรเจ็กต์' : 'Workpieces & Projects'}
        description={currentLanguage === 'th' ? 
          'แสดงผลงานและโปรเจ็กต์ต่าง ๆ ที่ได้สร้างสรรค์' : 
          'Showcase of various workpieces and projects created'}
      />
      
      <div className={`workpieces-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {currentLanguage === 'th' ? 'ผลงานและโปรเจ็กต์' : 'Workpieces & Projects'}
            </h1>
            <p className="page-subtitle">
              {currentLanguage === 'th' ? 
                'แสดงผลงานและโปรเจ็กต์ที่ได้พัฒนาในด้านต่าง ๆ' : 
                'Showcase of various workpieces and projects developed'}
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
                      {currentLanguage === 'th' ? 'ดูรายละเอียด' : 'View Details'}
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
              <p>{currentLanguage === 'th' ? 'ไม่มีผลงานในหมวดหมู่นี้' : 'No workpieces in this category'}</p>
            </div>
          )}

          <section className="workpiece-cta">
            <div className="cta-content card glass">
              <h2>
                {currentLanguage === 'th' ? 'พร้อมสร้างสรรค์ผลงานใหม่' : 'Ready to Create New Works'}
              </h2>
              <p>
                {currentLanguage === 'th' ? 
                  'ผลงานเหล่านี้เป็นเพียงจุดเริ่มต้น พร้อมที่จะเรียนรู้และพัฒนาต่อไปในอนาคต' :
                  'These works are just the beginning, ready to learn and develop further in the future'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Workpieces;