import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import '../styles/About.css';

function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

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
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg"
                  alt="เศรษฐ์ศรุต กตคุณไพศาล" 
                  className="about-profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about-fallback" style={{display: 'none'}}>
                  <span className="profile-initial">ศร</span>
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
              <p>
                {t('interests')}
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
              <span>{t('myAge')}</span>
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
              <strong>GPA:</strong>
              <span>3.78 / 4.00</span>
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

        <section className="interests">
          <h2>{t('interests')}</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h3>📚 {t('reading')}</h3>
              <p>{t('readingDesc')}</p>
              <ul>
                <li>{t('techBooks')}: "Clean Code", "Design Patterns"</li>
                <li>{t('sciFiBooks')}: Isaac Asimov, Philip K. Dick</li>
                <li>{t('scienceBooks')}: "A Brief History of Time"</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>💻 {t('technology')}</h3>
              <p>{t('technologyDesc')}</p>
              <ul>
                <li>Web Development: React, JavaScript, Node.js</li>
                <li>AI/ML: Python, TensorFlow, Data Science</li>
                <li>Hardware: Arduino, Raspberry Pi, IoT</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🎨 {t('digitalArt')}</h3>
              <p>{t('digitalArtDesc')}</p>
              <ul>
                <li>UI/UX Design: Figma, Adobe XD</li>
                <li>Graphic Design: Photoshop, Illustrator</li>
                <li>Web Design: Responsive & Modern Interfaces</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🌱 {t('sustainableTech')}</h3>
              <p>{t('sustainableTechDesc')}</p>
              <ul>
                <li>Smart Farm Technology</li>
                <li>Energy Management Systems</li>
                <li>Green Computing Practices</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🎮 {t('gamesMedia')}</h3>
              <p>{t('gamesMediaDesc')}</p>
              <ul>
                <li>Strategy Games: {t('strategyGames')}</li>
                <li>Programming Games: CodeCombat, HackerRank</li>
                <li>Tech News: YouTube, Tech Blogs</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🏃‍♂️ {t('activities')}</h3>
              <p>{t('activitiesDesc')}</p>
              <ul>
                <li>{t('jogging')}: 3-4 {t('timesPerWeek')}</li>
                <li>{t('music')}: {t('guitar')} ({t('beginnerLevel')})</li>
                <li>{t('photography')}: Photography {t('asHobby')}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    </PageTransition>
  );
}

export default About;
