import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import '../styles/About.css';

function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // คำนวณอายุอัตโนมัติจากวันเกิด
  const calculateAge = () => {
    const birthDate = new Date('2008-01-016'); // วันเกิดจริง
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // ถ้ายังไม่ถึงวันเกิดในปีนี้ ให้ลบ 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageTransition>
      <div className={`about ${isVisible ? 'fade-in' : ''}`}>
      <div className="container">
        <section className="about-intro">
          <h1>{t('aboutTitle')}</h1>
          <div className="about-content">
            <div className="about-image">
              <div className="about-photo-frame">
                <img 
                  src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                  alt="เศรษฐ์ศรุต กตคุณไพศาล" 
                  className="about-profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about-fallback" style={{display: 'none'}}>
                  <span className="profile-initial">SK</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h2>{t('greeting')}</h2>
              <p>
                {t('introduction')}
              </p>
              <p>
                {t('goals')}
              </p>
            </div>
          </div>
        </section>

        <section className="personal-info">
          <h2>{t('personalInfo')}</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>{t('fullName')}:</strong>
              <span>{t('myName')}</span>
            </div>
            <div className="info-item">
              <strong>{t('nickname')}:</strong>
              <span>{t('myNickname')}</span>
            </div>
            <div className="info-item">
              <strong>{t('age')}:</strong>
              <span>{calculateAge()} {t('years')}</span>
              <span>{t('myBirthDay')}</span>
            </div>
            <div className="info-item full-width">
              <strong>{t('address')}:</strong>
              <span>{t('myAddress')}</span>
            </div>
            <div className="info-item">
              <strong>{t('school')}:</strong>
              <span>{t('mySchool')}</span>
            </div>
            <div className="info-item">
              <strong>{t('program')}:</strong>
              <span>Math Gifted Program</span>
            </div>
            <div className="info-item">
              <strong>GPAX:</strong>
              <span>3.78</span>
            </div>
            <div className="info-item">
              <strong>{t('hobbies')}:</strong>
              <span>{t('myHobbies')}</span>
            </div>
            
          </div>
        </section>

        <section className="education-path">
          <h2>{t('educationHistory')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021-2023</div>
              <div className="timeline-content">
                <h3>{t('juniorHigh')}</h3>
                <p>{t('juniorHighDetail')}</p>
                <p>{t('mathGiftedDetail')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023-2025</div>
              <div className="timeline-content">
                <h3>{t('seniorHigh')}</h3>
                <p>{t('seniorHighDesc')}</p>
                <p>{t('seniorHighFocus')}</p>
                <p><strong>{t('programmingStart')}</strong></p>
              </div>
            </div>
            <div className="timeline-item future">
              <div className="timeline-year">2026+</div>
              <div className="timeline-content">
                <h3>{t('future')}</h3>
                <p>{t('futureGoal')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </PageTransition>
  );
}

export default About;
