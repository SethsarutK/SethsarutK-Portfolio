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
          'เว็บไซต์แสดงผลงานส่วนตัว สร้างด้วย React และ CSS' : 
          'Personal portfolio website built with React and deployed on GitHub Pages',
        tech: ['React', 'CSS3'],
        image: process.env.PUBLIC_URL + '/images/profile.jpg',
        link: '#',
        category: 'website'
      },
      
    ],
    games: [
      {
        id: 3,
        title: language === 'th' ? 'เกมปลาใหญ่กินปลาเล็ก' : 'Big eats small game',
        description: language === 'th' ?
          'เกมปลานีโม่ผจญภัย ซึ่งผู้เล่นจะได้ควบคุมปลานีโม่ ให้ว่ายเก็บแต้มด้วยการกินปลาขนาดเล็กกว่า พร้อมหลบหลีกฉลามที่คอยว่ายวนไปมา' :
          'Nemo Adventure Game where players control Nemo the fish to collect points by eating smaller fish and avoiding sharks that swim around.',
        tech: ['Scratch'],
        image: process.env.PUBLIC_URL + '/images/fishgamepic.png',
        link: 'https://sethsarut-fishgame.netlify.app',
        category: 'game'
      },
      {
        id: 7,
        title: language === 'th' ? 'เกมใครไม่สอนแต่ลูกศร' : "Arrow Game",
        description: language === 'th' ?
          'เกมกดลูกศรตามจังหวะ ที่ผู้เล่นต้องกดลูกศรบนแป้มพิมพ์ให้ตรงกับเวลาที่ลูกศรหล่นลงมา และห้ามพลาดเกิน 5 ครั้ง' :
          'A rhythm-based arrow-clicking game where players must press the arrows on the keyboard at the exact time they drop, and must not miss more than 5 times.',
        tech: ['Scratch'],
        image: process.env.PUBLIC_URL + '/images/arrowgamepic.png',
        link: 'https://sethsarut-arrowgame.netlify.app',
        category: 'game'
      }
    ],
    projects: [
      {
        id: 4,
        title: language === 'th' ? 'โครงงานพีทาโกรัสโฉมใหม่' : 'New Pythagoras Project',
        description: language === 'th' ? 
          'โครงงานนี้เป็นการศึกษาสามเหลี่ยมมุมฉากของพีทาโกรัสเพื่อค้นหารูปแบบความสัมพันธ์ใหม่ที่สามารถหาความยาวของด้านอื่น ๆ ได้เมื่อทราบความยาวของด้านที่สั้นที่สุด' : 
          'This project is a study of Pythagorean right triangles to find a new relationship pattern that can find the length of other sides when the length of the shortest side is known.',
        tech: ['Mathematics', 'Research', 'Analysis'],
        image: process.env.PUBLIC_URL + '/images/รูปโครงงานพีธาโกรัส.png',
        pdfUrl: process.env.PUBLIC_URL + '/Pythagoras-New-Project.pdf',
        category: 'project'
      },
      {
        id: 5,
        title: language === 'th' ? 'โครงงานการหาจำนวนวิธีการเดินทางในรูปสามเหลี่ยมหัวกลับ' : 'Triangle Path Counting Project',
        description: language === 'th' ? 
          'โครงงานนี้เป็นการนำความรู้เกี่ยวกับคอมบินาทอริกส์และทวินามที่ได้เรียนในห้องเรียนมาต่อยอด ผมได้ศึกษาหาความสัมพันธ์ระหว่างจำนวนวิธีการเดินทางบนสามเหลี่ยมหัวกลับกับจำนวนชั้นของสามเหลี่ยม' : 
          'This project is an extension of the knowledge I learned about combinatorics and binomials in the classroom. I studied the relationship between the number of ways to travel on an inverted triangle and the number of levels in the triangle.',
        tech: ['Mathematics', 'Research', 'Analysis'],
        image: process.env.PUBLIC_URL + '/images/รูปโครงงานสามเหลี่ยม.png',
        pdfUrl: process.env.PUBLIC_URL + '/Triangle-Path-Counting-Project.pdf',
        category: 'project'
      },
      {
        id: 6,
        title: language === 'th' ? 'โครงงานคณิตศาสตร์ เรื่อง ความสัมพันธ์ระหว่างระดับความเข้มเสียงที่จุดโฟกัส ตำแหน่งของแหล่งกำเนิดเสียง และความยาวจากจุดยอดไปยังจุดโฟกัสของพาราโบลา' : 'The Relationship Between the Sound Intensity Level at the Focus, the Position of the Sound Source and the Distance from the Vertex to the Focus of a Parabola',
        description: language === 'th' ? 
          'โครงงานเกี่ยวกับการนำความรู้เรื่องพาราโบลาและคลื่นเสียงมาศึกษาหาความสัมพันธ์' : 
          'This project is a study of parabolas and sound waves to find relationships.',
        tech: ['Mathematics','Sciences', 'Research', 'Presentation'],
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