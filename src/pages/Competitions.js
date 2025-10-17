import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Competitions.css';

function Competitions() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const competitions = {
    computer: [
      {
        title: currentLanguage === 'th' ? 'โครงงานวิทยาศาสตร์ Smart Farm' : 'Smart Farm Science Project',
        award: currentLanguage === 'th' ? '🥇 รางวัลชนะเลิศ' : '🥇 1st Place',
        year: '2024',
        description: currentLanguage === 'th' ? 
          'พัฒนาระบบฟาร์มอัจฉริยะด้วย IoT และ AI เพื่อเพิ่มประสิทธิภาพการเกษตร' : 
          'Developed smart farm system using IoT and AI to improve agricultural efficiency'
      },
      {
        title: currentLanguage === 'th' ? 'การแข่งขันโปรแกรมมิ่ง' : 'Programming Competition',
        award: currentLanguage === 'th' ? '🥈 รางวัลรองชนะเลิศอันดับ 1' : '🥈 2nd Place',
        year: '2024',
        description: currentLanguage === 'th' ? 
          'แข่งขันเขียนโปรแกรมแก้ปัญหาอัลกอริทึม' : 
          'Algorithm problem solving programming competition'
      }
    ],
    academic: [
      {
        title: currentLanguage === 'th' ? 'โอลิมปิกคณิตศาสตร์' : 'Mathematics Olympiad',
        award: currentLanguage === 'th' ? '🥉 เหรียญทองแดง' : '🥉 Bronze Medal',
        year: '2023',
        description: currentLanguage === 'th' ? 
          'การแข่งขันคณิตศาสตร์ระดับประเทศ' : 
          'National mathematics competition'
      },
      {
        title: currentLanguage === 'th' ? 'การแข่งขันวิทยาศาสตร์' : 'Science Competition',
        award: currentLanguage === 'th' ? '⭐ รางวัลชมเชย' : '⭐ Honorable Mention',
        year: '2023',
        description: currentLanguage === 'th' ? 
          'นำเสนอโครงงานวิทยาศาสตร์นวัตกรรม' : 
          'Presented innovative science project'
      }
    ],
    other: [
      {
        title: currentLanguage === 'th' ? 'รางวัลนักเรียนดีเด่น' : 'Outstanding Student Award',
        award: currentLanguage === 'th' ? '🏆 นักเรียนดีเด่นด้านเทคโนโลยี' : '🏆 Outstanding in Technology',
        year: '2024',
        description: currentLanguage === 'th' ? 
          'ได้รับการยกย่องในด้านเทคโนโลยีและนวัตกรรม' : 
          'Recognized for excellence in technology and innovation'
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title={currentLanguage === 'th' ? 'การแข่งขันและรางวัล' : 'Competitions & Awards'}
        description={currentLanguage === 'th' ? 
          'รายการการแข่งขันและรางวัลต่าง ๆ ที่ได้รับ' : 
          'List of competitions and awards received'}
      />
      
      <div className={`competitions-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {currentLanguage === 'th' ? 'การแข่งขันและรางวัล' : 'Competitions & Awards'}
            </h1>
            <p className="page-subtitle">
              {currentLanguage === 'th' ? 
                'ประสบการณ์การแข่งขันและรางวัลที่ได้รับในด้านต่าง ๆ' : 
                'Competition experiences and awards received in various fields'}
            </p>
          </header>

          {/* คอมพิวเตอร์และเทคโนโลยี */}
          <section className="competition-section">
            <h2 className="section-title">
              💻 {currentLanguage === 'th' ? 'คอมพิวเตอร์และเทคโนโลยี' : 'Computer & Technology'}
            </h2>
            <div className="competition-grid">
              {competitions.computer.map((comp, index) => (
                <div key={index} className="competition-card card">
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
              ))}
            </div>
          </section>

          {/* วิชาการ */}
          <section className="competition-section">
            <h2 className="section-title">
              📚 {currentLanguage === 'th' ? 'วิชาการ' : 'Academic'}
            </h2>
            <div className="competition-grid">
              {competitions.academic.map((comp, index) => (
                <div key={index} className="competition-card card">
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
              ))}
            </div>
          </section>

          {/* อื่น ๆ */}
          <section className="competition-section">
            <h2 className="section-title">
              🌟 {currentLanguage === 'th' ? 'อื่น ๆ' : 'Others'}
            </h2>
            <div className="competition-grid">
              {competitions.other.map((comp, index) => (
                <div key={index} className="competition-card card">
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
              ))}
            </div>
          </section>

          <section className="competition-cta">
            <div className="cta-content card glass">
              <h2>
                {currentLanguage === 'th' ? 'มุ่งสู่ความสำเร็จในอนาคต' : 'Striving for Future Success'}
              </h2>
              <p>
                {currentLanguage === 'th' ? 
                  'ประสบการณ์เหล่านี้เป็นรากฐานสำคัญในการเตรียมพร้อมสู่การศึกษาต่อในระดับอุดมศึกษา' :
                  'These experiences serve as important foundations for preparing for higher education'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Competitions;