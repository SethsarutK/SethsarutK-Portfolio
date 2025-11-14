import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Activities.css';

function Activities() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedCards(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getShortDescription = (description) => {
    const paragraphs = description.split('\n\n');
    return paragraphs[0];
  };

  const openModal = (activity) => {
    if (activity.images && activity.images.length > 1) {
      setSelectedActivity(activity);
      setCarouselOpen(true);
    } else {
      setSelectedActivity(activity);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCarouselOpen(false);
    setSelectedActivity(null);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = {
    camps: [
      {
        title: t('laodinsorthCampTitle'),
        period: '2024',
        description: t('laodinsorthCampDesc'),
        skills: [currentLanguage === 'th' ? 'วิศวกรรม' : 'Engineering', 
                currentLanguage === 'th' ? 'เทคโนโลยี' : 'Technology', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: process.env.PUBLIC_URL + '/Certificate/Laodinsor.jpg'
      },
      {
        title: t('cuScienceCampTitle'),
        period: '2024',
        description: t('cuScienceCampDesc'),
        skills: [currentLanguage === 'th' ? 'วิทยาศาสตร์' : 'Science', 
                currentLanguage === 'th' ? 'การทดลอง' : 'Experiments', 
                currentLanguage === 'th' ? 'การวิเคราะห์' : 'Analysis'],
        image: process.env.PUBLIC_URL + '/Certificate/CU_camp.jpg'
      },
      {
        title: t('orientationCampTitle'),
        period: '2024',
        description: t('orientationCampDesc'),
        skills: [currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership', 
                currentLanguage === 'th' ? 'การดูแล' : 'Mentoring', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility'],
        image: process.env.PUBLIC_URL + '/Certificate/FirstCamp.jpg'
      }
    ],
    volunteer: [
      {
        title: t('environmentVolunteerTitle'),
        period: '2024',
        description: t('environmentVolunteerDesc'),
        skills: [currentLanguage === 'th' ? 'การวิเคราะห์' : 'Analysis', 
                currentLanguage === 'th' ? 'สิ่งแวดล้อม' : 'Environment', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteer.jpg'
      },
      {
        title: t('schoolDevVolunteerTitle'),
        period: '2023-2024',
        description: t('schoolDevVolunteerDesc'),
        skills: [currentLanguage === 'th' ? 'การซ่อมบำรุง' : 'Maintenance', 
                currentLanguage === 'th' ? 'การทำงานร่วมกัน' : 'Teamwork', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteercamp1_67.jpg'
      },
      {
        title: t('mathCampVolunteerTitle'),
        period: '2023',
        description: t('mathCampVolunteerDesc'),
        skills: [currentLanguage === 'th' ? 'การสอน' : 'Teaching', 
                currentLanguage === 'th' ? 'คณิตศาสตร์' : 'Mathematics', 
                currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteercamp2_67.jpg'
      }
    ],
    selflearning: [
      {
        title: t('grokLearningTitle'),
        period: '2023-2024',
        description: t('grokLearningDesc'),
        skills: [currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving', 
                currentLanguage === 'th' ? 'ตรรกศาสตร์' : 'Logic'],
        image: process.env.PUBLIC_URL + '/Certificate/grok1.jpg',
        images: [
          process.env.PUBLIC_URL + '/Certificate/grok1.jpg',
          process.env.PUBLIC_URL + '/Certificate/grok2.jpg'
        ]
      },
      {
        title: t('samsungLearningTitle'),
        period: '2024',
        description: t('samsungLearningDesc'),
        skills: [currentLanguage === 'th' ? 'การพัฒนาแอป' : 'App Development', 
                currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'นวัตกรรม' : 'Innovation'],
        image: process.env.PUBLIC_URL + '/Certificate/Sumsung01.png',
        images: [
          process.env.PUBLIC_URL + '/Certificate/Sumsung01.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung02.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung03.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung04.png'
        ]
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title={t('activitiesPageTitle')}
        description={t('activitiesPageSubtitle')}
      />
      
      <div className={`activities-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {t('activitiesPageTitle')}
            </h1>
            <p className="page-subtitle">
              {t('activitiesPageSubtitle')}
            </p>
          </header>

          {/* กิจกรรมค่าย */}
          <section className="activity-section">
            <h2 className="section-title">
              🏕️ {t('campActivities')}
            </h2>
            <div className="activity-timeline">
              {activities.camps.map((activity, index) => {
                const isExpanded = expandedCards[`camps-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('camps', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* งานอาสา */}
          <section className="activity-section">
            <h2 className="section-title">
              🤝 {t('volunteerWork')}
            </h2>
            <div className="activity-timeline">
              {activities.volunteer.map((activity, index) => {
                const isExpanded = expandedCards[`volunteer-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('volunteer', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* เรียนรู้ด้วยตนเอง */}
          <section className="activity-section">
            <h2 className="section-title">
              📚 {t('selfLearning')}
            </h2>
            <div className="activity-timeline">
              {activities.selflearning.map((activity, index) => {
                const isExpanded = expandedCards[`selflearning-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('selflearning', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal for single images */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={selectedActivity?.image}
        title={selectedActivity?.title}
      />

      {/* Image Carousel for multiple images */}
      <ImageCarousel
        isOpen={carouselOpen}
        onClose={closeModal}
        images={selectedActivity?.images}
      />
    </PageTransition>
  );
}

export default Activities;