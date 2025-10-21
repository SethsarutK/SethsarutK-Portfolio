import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';
import '../styles/Competitions.css';

function Competitions() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (competition) => {
    setSelectedCompetition(competition);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCompetition(null);
  };

  const competitions = {
    computer: [
      {
        title: t('posnComputer'),
        award: t('posnComputerAward'),
        year: '2024',
        description: t('posnComputerDesc'),
        image: 'http://localhost:5806/SethsarutK-Portfolio/images/posn-computer-award.jpg'
      },
      {
        title: 'League of Code AI Hackathon',
        award: t('aiHackathonAward'),
        year: '2024',
        description: t('aiHackathonDesc'),
        image: 'http://localhost:5806/SethsarutK-Portfolio/images/ai-hackathon-award.jpg'
      }
    ],
    academic: [
      {
        title: t('acrpTitle'),
        award: t('acrpAward'),
        year: '2023',
        description: t('acrpDesc'),
        image: 'http://localhost:5806/SethsarutK-Portfolio/images/acrp-award.jpg'
      },
      {
        title: t('scienceCompTitle'),
        award: t('scienceCompAward'),
        year: '2023',
        description: t('scienceCompDesc'),
        image: 'http://localhost:5806/SethsarutK-Portfolio/images/science-comp-award.jpg'
      }
    ],
    other: [
      {
        title: t('outstandingAwardTitle'),
        award: t('outstandingAward'),
        year: '2024',
        description: t('outstandingAwardDesc'),
        image: 'http://localhost:5806/SethsarutK-Portfolio/images/outstanding-award.jpg'
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
                  className="competition-card card clickable"
                  onClick={() => openModal(comp)}
                >
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
                  <div className="click-hint">
                    📸 {t('clickToViewImage') || 'คลิกเพื่อดูรูปภาพ'}
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
                  className="competition-card card clickable"
                  onClick={() => openModal(comp)}
                >
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
                  <div className="click-hint">
                    📸 {t('clickToViewImage') || 'คลิกเพื่อดูรูปภาพ'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* อื่น ๆ */}
          <section className="competition-section">
            <h2 className="section-title">
              🌟 {t('others')}
            </h2>
            <div className="competition-grid">
              {competitions.other.map((comp, index) => (
                <div 
                  key={index} 
                  className="competition-card card clickable"
                  onClick={() => openModal(comp)}
                >
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
                  <div className="click-hint">
                    📸 {t('clickToViewImage') || 'คลิกเพื่อดูรูปภาพ'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="competition-cta">
            <div className="cta-content card glass">
              <h2>
                {t('futureSuccess')}
              </h2>
              <p>
                {t('futureSuccessDesc')}
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={selectedCompetition?.image}
        title={selectedCompetition?.title}
      />
    </PageTransition>
  );
}

export default Competitions;