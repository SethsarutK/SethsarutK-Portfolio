import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import useSnapScroll from '../hooks/useSnapScroll';
import '../styles/About.css';

function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // คำนวณอายุอัตโนมัติจากวันเกิด
  const calculateAge = () => {
    const birthDate = new Date('2008-01-016');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ใช้ snap scroll hook
  useSnapScroll();

  return (
    <PageTransition>
      <div className={`about ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <section className="about-intro snap-section">
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
                <p>{t('introduction')}</p>
                <p>{t('goals')}</p>
              </div>
            </div>
          </section>

          <section className="personal-info snap-section">
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

          <section className="computer-skills snap-section">
            <h2>{t('computerSkills')}</h2>
            <div className="skills-content">
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                  </div>
                  <span>C</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  </div>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  </div>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  </div>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  </div>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  </div>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  </div>
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                  </div>
                  <span>SQL</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  </div>
                  <span>Git</span>
                </div>
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
